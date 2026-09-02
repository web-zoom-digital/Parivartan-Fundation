/**
 * adminStore.ts
 * ─────────────
 * Persistent Supabase storage for admin panel data.
 *
 * FIX: Supabase PostgreSQL stores column names in lowercase.
 * All camelCase fields are mapped to/from their lowercase DB equivalents.
 * DB columns: orderid, want80g, ordernote, sourcepage, formfilledat,
 *             paidat, paymentstatus, createdat, lastvisited
 */

import { supabase } from "./supabase"

// ─── Types ────────────────────────────────────────────────────────────────────

export type LeadStatus = "FORM_FILLED" | "PENDING_PAYMENT" | "PAID" | "FAILED"

export type FormLead = {
  id: string
  orderId?: string
  name: string
  email: string
  phone: string
  amount: number
  want80G: boolean
  pan?: string
  address?: string
  orderNote?: string
  sourcePage: string
  status: LeadStatus
  formFilledAt: number
  paidAt?: number
  paymentStatus?: string
  createdAt: number
}

export type PageVisit = {
  page: string
  visits: number
  lastVisited: number
}

// ─── DB Row Types (lowercase as stored in Supabase) ──────────────────────────

type DBLead = {
  id: string
  orderid?: string
  name: string
  email: string
  phone: string
  amount: number
  want80g: boolean
  pan?: string
  address?: string
  ordernote?: string
  sourcepage: string
  status: LeadStatus
  formfilledat: number
  paidat?: number
  paymentstatus?: string
  createdat: number
}

type DBPageVisit = {
  page: string
  visits: number
  lastvisited: number
}

// ─── Mappers (DB ↔ App) ───────────────────────────────────────────────────────

function dbLeadToApp(row: DBLead): FormLead {
  return {
    id: row.id,
    orderId: row.orderid,
    name: row.name,
    email: row.email,
    phone: row.phone,
    amount: Number(row.amount),
    want80G: Boolean(row.want80g),
    pan: row.pan,
    address: row.address,
    orderNote: row.ordernote,
    sourcePage: row.sourcepage,
    status: row.status,
    formFilledAt: Number(row.formfilledat),
    paidAt: row.paidat ? Number(row.paidat) : undefined,
    paymentStatus: row.paymentstatus,
    createdAt: Number(row.createdat),
  }
}

function appLeadToDB(lead: Omit<FormLead, "id" | "createdAt"> & { id: string; createdAt: number }): DBLead {
  return {
    id: lead.id,
    orderid: lead.orderId,
    name: lead.name,
    email: lead.email,
    phone: lead.phone,
    amount: lead.amount,
    want80g: lead.want80G,
    pan: lead.pan,
    address: lead.address,
    ordernote: lead.orderNote,
    sourcepage: lead.sourcePage,
    status: lead.status,
    formfilledat: lead.formFilledAt,
    paidat: lead.paidAt,
    paymentstatus: lead.paymentStatus,
    createdat: lead.createdAt,
  }
}

function dbPageVisitToApp(row: DBPageVisit): PageVisit {
  return {
    page: row.page,
    visits: Number(row.visits),
    lastVisited: Number(row.lastvisited),
  }
}

// ─── Form Leads ───────────────────────────────────────────────────────────────

export async function saveFormLead(lead: Omit<FormLead, "id" | "createdAt">): Promise<FormLead> {
  const newLead: FormLead = {
    ...lead,
    id: `LEAD_${Date.now()}_${Math.floor(Math.random() * 9999)}`,
    createdAt: Date.now(),
  }

  const dbRow = appLeadToDB(newLead)
  const { error } = await supabase.from("leads").insert(dbRow)
  if (error) console.error("Error saving lead:", error)
  return newLead
}

export async function updateLeadOrderId(leadId: string, orderId: string): Promise<void> {
  const { error } = await supabase
    .from("leads")
    .update({ orderid: orderId, status: "PENDING_PAYMENT" })
    .eq("id", leadId)

  if (error) console.error("Error updating lead orderId:", error)
}

export async function markLeadAsPaid(orderId: string, paymentStatus: string): Promise<FormLead | null> {
  const { data, error } = await supabase
    .from("leads")
    .update({ status: "PAID", paidat: Date.now(), paymentstatus: paymentStatus })
    .eq("orderid", orderId)
    .select()
    .single()

  if (error || !data) {
    console.error("Error marking lead as paid:", error)
    return null
  }
  return dbLeadToApp(data as DBLead)
}

export async function savePaymentRecord(data: {
  orderId: string
  name: string
  email: string
  phone: string
  amount: number
  want80G: boolean
  pan?: string
  address?: string
  orderNote?: string
  sourcePage?: string
  paymentStatus: string
}): Promise<FormLead> {
  // Check if exists
  const { data: existing } = await supabase
    .from("leads")
    .select("*")
    .eq("orderid", data.orderId)
    .single()

  if (existing) {
    const { data: updated } = await supabase
      .from("leads")
      .update({ status: "PAID", paidat: Date.now(), paymentstatus: data.paymentStatus })
      .eq("orderid", data.orderId)
      .select()
      .single()
    return dbLeadToApp(updated as DBLead)
  }

  // Create new
  const newLead: FormLead = {
    id: `LEAD_${Date.now()}_${Math.floor(Math.random() * 9999)}`,
    orderId: data.orderId,
    name: data.name,
    email: data.email,
    phone: data.phone,
    amount: data.amount,
    want80G: data.want80G,
    pan: data.pan,
    address: data.address,
    orderNote: data.orderNote,
    sourcePage: data.sourcePage || "/donate",
    status: "PAID",
    formFilledAt: Date.now(),
    paidAt: Date.now(),
    paymentStatus: data.paymentStatus,
    createdAt: Date.now(),
  }

  const dbRow = appLeadToDB(newLead)
  await supabase.from("leads").insert(dbRow)
  return newLead
}

export async function getAllLeads(): Promise<FormLead[]> {
  const { data, error } = await supabase
    .from("leads")
    .select("*")
    .order("createdat", { ascending: false })

  if (error) {
    console.error("Error fetching leads:", error)
    return []
  }
  return (data as DBLead[]).map(dbLeadToApp)
}

export async function getLeadByOrderId(orderId: string): Promise<FormLead | null> {
  const { data, error } = await supabase
    .from("leads")
    .select("*")
    .eq("orderid", orderId)
    .single()

  if (error || !data) return null
  return dbLeadToApp(data as DBLead)
}

// ─── Page Visits ──────────────────────────────────────────────────────────────

export async function recordPageVisit(page: string): Promise<void> {
  // First try to fetch
  const { data: existing } = await supabase
    .from("page_visits")
    .select("*")
    .eq("page", page)
    .single()

  if (existing) {
    await supabase
      .from("page_visits")
      .update({ visits: (existing as DBPageVisit).visits + 1, lastvisited: Date.now() })
      .eq("page", page)
  } else {
    await supabase
      .from("page_visits")
      .insert({ page, visits: 1, lastvisited: Date.now() })
  }
}

export async function getAllPageVisits(): Promise<PageVisit[]> {
  const { data, error } = await supabase
    .from("page_visits")
    .select("*")
    .order("visits", { ascending: false })

  if (error) {
    console.error("Error fetching page visits:", error)
    return []
  }
  // Filter out admin routes — only show real user page visits
  return (data as DBPageVisit[])
    .filter((row) => !row.page.startsWith("/admin"))
    .map(dbPageVisitToApp)
}

// ─── Admin Stats ──────────────────────────────────────────────────────────────

export async function getAdminStats() {
  const [leadsRes, visitsRes] = await Promise.all([
    supabase.from("leads").select("*").order("createdat", { ascending: false }),
    supabase.from("page_visits").select("*").order("visits", { ascending: false })
  ])

  const leads = ((leadsRes.data || []) as DBLead[]).map(dbLeadToApp)
  // Filter out admin routes from page visit stats
  const visits = ((visitsRes.data || []) as DBPageVisit[])
    .filter((row) => !row.page.startsWith("/admin"))
    .map(dbPageVisitToApp)

  const paid = leads.filter((l) => l.status === "PAID")
  const pending = leads.filter((l) => l.status === "PENDING_PAYMENT" || l.status === "FORM_FILLED")
  const totalRevenue = paid.reduce((sum, l) => sum + Number(l.amount), 0)
  const conversionRate = leads.length > 0 ? Math.round((paid.length / leads.length) * 100) : 0
  const totalVisits = visits.reduce((sum, v) => sum + Number(v.visits), 0)

  // Revenue by day (last 7 days)
  const now = Date.now()
  const sevenDaysAgo = now - 7 * 24 * 60 * 60 * 1000
  const recentPaid = paid.filter((l) => (l.paidAt || l.createdAt) >= sevenDaysAgo)

  // Group by date string
  const dailyMap: Record<string, number> = {}
  recentPaid.forEach((l) => {
    const d = new Date(l.paidAt || l.createdAt).toLocaleDateString("en-IN", { day: "2-digit", month: "short" })
    dailyMap[d] = (dailyMap[d] || 0) + Number(l.amount)
  })

  return {
    totalDonors: paid.length,
    totalRevenue,
    pendingLeads: pending.length,
    conversionRate,
    totalPageVisits: totalVisits,
    topPages: visits.slice(0, 5),
    recentPayments: paid.slice(0, 5),
    dailyRevenue: Object.entries(dailyMap).map(([date, amount]) => ({ date, amount })),
  }
}

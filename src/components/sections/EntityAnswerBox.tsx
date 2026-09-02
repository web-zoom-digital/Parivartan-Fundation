import Link from "next/link"
import { orgPlainSummary } from "@/data/orgEntity"

/** Answer-first entity block for AI search citation (GEO) */
export function EntityAnswerBox() {
  return (
    <section
      className="py-10 sm:py-12 bg-[#F6F2E8] border-y border-[#ddd9d0]/80"
      aria-labelledby="what-is-ncf"
    >
      <div className="container-custom max-w-4xl">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#23361D] mb-3">
          Quick facts
        </p>
        <h2 id="what-is-ncf" className="text-2xl sm:text-3xl font-extrabold text-[#273029] mb-4 tracking-tight">
          What is Parivartan Welfare Society?
        </h2>
        <div className="prose prose-slate max-w-none">
          <p className="text-[#273029] text-base sm:text-lg leading-relaxed mb-4">
            <strong>{orgPlainSummary.name}</strong> is {orgPlainSummary.what.replace(/^A /, "a ")} It
            was founded in <strong>{orgPlainSummary.founded}</strong> and operates from{" "}
            <strong>{orgPlainSummary.location}</strong>.
          </p>
          <p className="text-[#798576] text-sm sm:text-base leading-relaxed mb-4">
            <strong>How to help:</strong> {orgPlainSummary.howToHelp} {orgPlainSummary.taxNote}
          </p>
          <ul className="text-sm text-[#798576] space-y-1.5 mb-5 list-disc pl-5">
            <li>
              Phone:{" "}
              <a className="text-[#1b2916] font-semibold hover:underline" href="tel:+919315814894">
                {orgPlainSummary.phone}
              </a>
            </li>
            <li>
              Email:{" "}
              <a
                className="text-[#1b2916] font-semibold hover:underline"
                href={`mailto:${orgPlainSummary.email}`}
              >
                {orgPlainSummary.email}
              </a>
            </li>
            <li>
              WhatsApp:{" "}
              <a
                className="text-[#1b2916] font-semibold hover:underline"
                href="https://wa.me/919315814894"
                target="_blank"
                rel="noopener noreferrer"
              >
                +91 93158 14894
              </a>
            </li>
          </ul>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/about"
              className="inline-flex items-center rounded-full bg-[#23361D] text-white text-sm font-bold px-5 py-2.5 hover:bg-[#1b2916] transition-colors"
            >
              Read our story
            </Link>
            <Link
              href="/donate"
              className="inline-flex items-center rounded-full border border-[rgba(35,54,29,0.2)] bg-white text-[#23361D] text-sm font-bold px-5 py-2.5 hover:bg-[#eef2eb] transition-colors"
            >
              Donate securely
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

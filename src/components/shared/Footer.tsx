"use client"

import Link from "next/link"
import { MapPin, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#23361D] pt-14 sm:pt-20 pb-28 lg:pb-10 text-white/70">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center">
              <div className="h-12 sm:h-16 w-auto relative flex items-center justify-start transition-transform duration-300 bg-white p-2 rounded-xl">
                <img src="/images/logo.png" alt="Parivartan Welfare Society Logo" className="h-full w-auto object-contain shrink-0" />
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-white/60">
              Enabling positive, lasting change by advancing human wellbeing
              and environmental responsibility together.
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:hello@parivartanwelfare.org"
                aria-label="Email Parivartan Welfare Society"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C37C24] hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="tel:+919315814894"
                aria-label="Call Parivartan Welfare Society"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C37C24] hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919315814894"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Parivartan Welfare Society"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 font-[var(--font-heading)]">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Our Programs', href: '/programs' },
                { label: 'Our Impact', href: '/impact' },
                { label: 'Contact Us', href: '/contact' },
                { label: 'Donate Now', href: '/donate' },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-[#C37C24] transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#C37C24]" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-bold mb-6 font-[var(--font-heading)]">Our Programs</h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Food Distribution', href: '/programs' },
                { label: 'Medical Support', href: '/programs' },
                { label: 'Education Support', href: '/programs' },
                { label: 'Community Outreach', href: '/programs' },
                { label: 'Cow Welfare (Gau Seva)', href: '/cow-donation' },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-[#C37C24] transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#798576]" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 font-[var(--font-heading)]">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C37C24] shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">
                  House Number - 242, Govindgarh, <br /> Gautam Buddha Nagar, Jewar, UP 203135
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#C37C24] shrink-0" />
                <span className="text-sm">+91 93158 14894</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#C37C24] shrink-0" />
                <span className="text-sm">hello@parivartanwelfare.org</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1.5">
            <p className="text-sm text-white/40">
              &copy; {new Date().getFullYear()} Parivartan Welfare Society. All rights reserved.
            </p>
            <p className="text-xs text-white/30">
              Designed, Developed &amp; SEO Managed by <a href="https://www.zoomdigital.in" target="_blank" rel="noopener noreferrer" className="text-[#C37C24] hover:text-[#d9923a] font-medium transition-colors">Zoom Digital</a>
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/40">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

function IconLocation({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
      />
    </svg>
  );
}

function IconMail({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    </svg>
  );
}

function IconPhone({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-gradient-to-br from-[#0a1628] via-[#0F2E6B] to-[#071b36] text-slate-300">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              <Image
                src="/logo.svg"
                alt="Removex Logistics"
                width={150}
                height={100}
              />
            </Link>
            <p className="mt- max-w-sm text-sm leading-relaxed text-slate-400">
              Trusted UK removals and logistics — house removals, freight,
              warehousing, 3PL, and rubbish removal. We move your goods safely,
              securely, and on time.
            </p>
          </div>

          {/* Quick links + Contact — one row, equal columns */}
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
                Quick links
              </h3>
              <ul className="mt-4 space-y-2.5">
                {navLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-slate-400 transition hover:text-amber-400 hover:underline underline-offset-2"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
                Contact
              </h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-700/80 text-amber-400">
                    <IconLocation className="h-4 w-4" />
                  </span>
                  <span className="text-sm text-slate-400">40 Ashford Road, E6 2aw</span>
                </li>
                <li>
                  <a
                    href="mailto:info@removexlogistics.com"
                    className="flex items-center gap-3 rounded-lg p-2 -m-2 text-sm text-slate-400 transition hover:text-amber-400 hover:bg-slate-800/50"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-700/80 text-amber-400">
                      <IconMail className="h-4 w-4" />
                    </span>
                    info@removexlogistics.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+447448647267"
                    className="flex items-center gap-3 rounded-lg p-2 -m-2 text-sm text-slate-400 transition hover:text-amber-400 hover:bg-slate-800/50"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-700/80 text-amber-400">
                      <IconPhone className="h-4 w-4" />
                    </span>
                    +44 7448 647267
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-700/80 pt-8 sm:flex-row sm:pt-10">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Removex Logistics. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Professional removals, freight &amp; logistics across the UK
          </p>
        </div>
      </div>
    </footer>
  );
}

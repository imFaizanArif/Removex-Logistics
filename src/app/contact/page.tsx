"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, defaultEase } from "@/lib/animations";

function IconMapPin({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}

function IconEnvelope({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

function IconPhone({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* Hero — centered */}
      <section className="relative flex min-h-[50vh] flex-col items-center justify-center overflow-hidden bg-[#0a1628] py-24 sm:py-32">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=85"
          alt="Contact Removex Logistics"
          fill
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F2E6B]/92 via-[#0F2E6B]/85 to-[#0a1628]" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(ellipse 60% 50% at 50% 0%, rgb(251 191 36 / 0.1), transparent 50%)`,
          }}
          aria-hidden
        />
        <div className="relative mx-auto w-full max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: defaultEase }}
            className="text-4xl font-bold tracking-tight text-white drop-shadow-lg sm:text-5xl"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="mt-4 text-lg text-blue-100/90"
          >
            Get in touch for a quote or to discuss your move or logistics needs.
          </motion.p>
        </div>
      </section>

      {/* Main content — modern layout */}
      <section className="relative py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50/80" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: defaultEase }}
            className="text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-amber-600">Get in touch</span>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
              We&apos;re here to help
            </h2>
            <p className="mt-3 max-w-xl mx-auto text-slate-600">
              Reach out for a free, no-obligation quote. We typically respond within 24 hours.
            </p>
          </motion.div>

          {/* Contact cards grid */}
          <motion.div
            className="mt-12 grid gap-6 sm:grid-cols-3"
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-40px" }}
            variants={staggerContainer}
          >
            <motion.div
              variants={{ initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.45, ease: defaultEase }}
            >
              <motion.div
                whileHover={{ y: -4, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
                className="flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                  <IconMapPin className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-sm font-semibold uppercase tracking-wider text-slate-500">Location</h3>
                <p className="mt-1 text-xl font-bold text-slate-900">40 Ashford Road, E6 2aw</p>
                <p className="mt-1 text-sm text-slate-600">United Kingdom</p>
              </motion.div>
            </motion.div>
            <motion.div
              variants={{ initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.45, ease: defaultEase }}
            >
              <motion.div
                whileHover={{ y: -4, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
                className="flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                  <IconEnvelope className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-sm font-semibold uppercase tracking-wider text-slate-500">Email</h3>
                <a
                  href="mailto:info@removexlogistics.com"
                  className="mt-1 break-all text-lg font-bold text-slate-900 underline-offset-2 transition hover:text-[#0F2E6B] hover:underline"
                >
                  info@removexlogistics.com
                </a>
                <p className="mt-2 text-sm text-slate-600">We aim to reply within 24 hours</p>
              </motion.div>
            </motion.div>
            <motion.div
              variants={{ initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.45, ease: defaultEase }}
            >
              <motion.div
                whileHover={{ y: -4, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
                className="flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-[#0F2E6B]">
                  <IconPhone className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-sm font-semibold uppercase tracking-wider text-slate-500">Phone</h3>
                <a
                  href="tel:+447448647267"
                  className="mt-1 text-xl font-bold text-slate-900 transition hover:text-[#0F2E6B]"
                >
                  +44 7448 647267
                </a>
                <p className="mt-2 text-sm text-slate-600">Call or text for quick enquiries</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* CTA strip */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, ease: defaultEase }}
            className="mt-14 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50/70 px-6 py-8 text-center sm:px-10 sm:py-10"
          >
            <p className="text-slate-700 leading-relaxed">
              Whether you need a house removal, freight quote, warehousing, or rubbish clearance — we&apos;re here to help. Reach out for a clear, no-obligation quote.
            </p>
            <div className="mt-6">
              <Link
                href="tel:+447448647267"
                className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-2.5 font-semibold text-slate-900 transition hover:bg-amber-400"
              >
                <IconPhone className="h-5 w-5" />
                Call now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

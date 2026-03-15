"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Slider from "@/components/Slider";
import { fadeUp, staggerContainer, defaultEase } from "@/lib/animations";
import { useState, useEffect } from "react";

function IconTruck({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 18V6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2h2" />
      <path d="M15 18h2a2 2 0 002-2v-3.65a1 1 0 00-.22-.614l-3.48-4.35A1 1 0 0014.52 7H14" />
      <path d="M18 18h2a2 2 0 002-2v-3.65a1 1 0 00-.22-.614L18.3 8.74a1 1 0 00-.78-.37H14" />
      <path d="M2 14h6" />
    </svg>
  );
}
function IconBox({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      <path d="M3.27 6.96L12 12.01l8.73-5.05" />
      <path d="M12 22.08V12" />
    </svg>
  );
}
function IconWarehouse({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 21h18" />
      <path d="M5 21V7l8-4 8 4v14" />
      <path d="M5 21h14" />
      <path d="M9 21v-6h6v6" />
      <path d="M9 9h.01" />
      <path d="M15 9h.01" />
    </svg>
  );
}
function IconTrash({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6" />
      <path d="M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2" />
      <path d="M10 11v6" />
      <path d="M14 11v6" />
    </svg>
  );
}
function IconShield({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
function IconLightning({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}
function IconCheckCircle({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
      <path d="M22 4L12 14.01l-3-3" />
    </svg>
  );
}
function IconCheck({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

const heroImages = [
  "https://plus.unsplash.com/premium_photo-1661901122974-e280f0c1efab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=85",
  "https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?q=80&w=1718&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const heroSlides = [
  {
    title: "REMOVEX LOGISTICS",
    subtitle:
      "We don't just move goods — we move them safely, securely, and on time.",
  },
  {
    title: "REMOVEX LOGISTICS",
    subtitle:
      "Warehousing & storage solutions for homes and businesses across the UK.",
  },
  {
    title: "REMOVEX LOGISTICS",
    subtitle:
      "Freight, transport & logistics — reliable delivery when it matters.",
  },
];

const servicesPreview = [
  {
    title: "House Removals & Moving",
    tagline: "Perfect for full-home relocations",
    description:
      "Residential and commercial moves with care and punctuality. We handle everything from packing to delivery.",
    features: [
      "Professional packing",
      "Careful handling",
      "Nationwide coverage",
    ],
  },
  {
    title: "Freight & Transport",
    tagline: "Move or deliver today—nationwide",
    description:
      "Pallet transport, commercial freight, and long-distance delivery across the UK. Reliable when it matters.",
    features: [
      "Real-time tracking",
      "Scheduled collections",
      "Same-day options",
    ],
  },
  {
    title: "Warehousing & 3PL",
    tagline: "Storage and supply chain under one roof",
    description:
      "Storage, inventory management, order fulfilment, and supply chain solutions for businesses of all sizes.",
    features: ["Flexible terms", "Secure storage", "Order fulfilment"],
  },
  {
    title: "Rubbish Removal",
    tagline: "Clear-outs and waste clearance",
    description:
      "Household and commercial waste clearance, furniture disposal, and full clearances. Quick and hassle-free.",
    features: [
      "Same-day available",
      "Eco-conscious disposal",
      "Fixed price quotes",
    ],
  },
];

const serviceBadges = [
  { label: "Fully Insured", icon: "shield" },
  { label: "Same-Day Available", icon: "lightning" },
  { label: "Fixed Price Quotes", icon: "check" },
];

const whyChoose = [
  {
    title: "Professional & Experienced Team",
    short: "Trained staff for fragile items to commercial freight.",
  },
  {
    title: "Comprehensive Services",
    short: "House moving, warehousing, freight, and 3PL under one roof.",
  },
  {
    title: "Reliable & On-Time",
    short: "Punctual collections and deliveries every time.",
  },
  {
    title: "Safe & Secure Handling",
    short: "Highest level of care and protection for your goods.",
  },
  {
    title: "Flexible & Scalable",
    short: "From small moves to full logistics outsourcing.",
  },
  { title: "Transparent Pricing", short: "No hidden costs. Clear quotations." },
  {
    title: "Customer-Focused",
    short: "Smooth, stress-free service tailored to you.",
  },
];

export default function HomePage() {
  const [heroIndex, setHeroIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(
      () => setHeroIndex((i) => (i + 1) % heroImages.length),
      5000,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* Hero with background slider */}
      <section className="relative min-h-[88vh] overflow-hidden bg-[#0a1628]">
        {heroImages.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt=""
            fill
            className="object-cover transition-opacity duration-1000"
            style={{ opacity: heroIndex === i ? 0.4 : 0 }}
            priority={i === 0}
            sizes="100vw"
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F2E6B]/92 via-[#0F2E6B]/85 to-[#0a1628]" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(ellipse 70% 60% at 50% 0%, rgb(251 191 36 / 0.08), transparent 50%)`,
          }}
          aria-hidden
        />
        <div className="relative z-10 mx-auto flex min-h-[88vh] w-full max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.h1
                key={`title-${heroIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: defaultEase }}
                className="text-4xl font-bold tracking-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl"
              >
                {heroSlides[heroIndex]?.title ?? "REMOVEX LOGISTICS"}
              </motion.h1>
            </AnimatePresence>
          </div>
          <div className="mt-5 min-h-[4.5rem] overflow-hidden sm:min-h-[5rem]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.p
                key={`subtitle-${heroIndex}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: defaultEase }}
                className="max-w-2xl text-lg text-blue-100/95 sm:text-xl lg:text-xl"
              >
                {heroSlides[heroIndex]?.subtitle ??
                  "We don't just move goods — we move them safely, securely, and on time."}
              </motion.p>
            </AnimatePresence>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3.5 text-base font-semibold text-slate-900 shadow-lg shadow-amber-900/30 transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-[#0F2E6B]"
              >
                Get a quote
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/services"
                className="inline-flex items-center rounded-xl border-2 border-white/70 bg-white/5 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/15 hover:border-white/90"
              >
                Our services
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Hero slider dots */}
        <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {heroImages.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setHeroIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === heroIndex
                  ? "w-6 bg-amber-500"
                  : "w-2 bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Intro */}
      <section className="relative py-20 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/50 to-white" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: defaultEase }}
            className="relative text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-amber-600">
              About us
            </span>
            <motion.h2
              {...fadeUp}
              className="mt-2 text-2xl font-bold bg-gradient-to-r from-[#0F2E6B] to-[#1e3a8a] bg-clip-text text-transparent sm:text-3xl"
            >
              Trusted UK Removals & Logistics
            </motion.h2>
            <motion.p
              {...fadeUp}
              transition={{ delay: 0.05 }}
              className="mt-6 text-slate-600 leading-relaxed text-base sm:text-lg"
            >
              Removex Logistics is a trusted UK removals and logistics company
              providing reliable, efficient, and professional moving solutions
              for both residential and commercial clients. We specialise in
              house removals, freight transportation, warehousing, 3PL services,
              and rubbish removal, delivering tailored logistics solutions that
              meet modern business and household needs.
            </motion.p>
            <motion.p
              {...fadeUp}
              transition={{ delay: 0.1 }}
              className="mt-5 text-slate-600 leading-relaxed text-base sm:text-lg"
            >
              Our experienced team understands that every move is different.
              Whether you&apos;re relocating your home, transporting commercial
              goods, or outsourcing your supply chain operations, we focus on
              careful handling, punctual delivery, and transparent communication
              at every stage.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services preview */}
      <section className="relative py-20 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: defaultEase }}
            className="text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-amber-600">
              What we do
            </span>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
              What We Offer
            </h2>
            <p className="mt-3 max-w-xl mx-auto text-slate-600">
              End-to-end logistics and removals under one roof
            </p>
          </motion.div>

          {/* Service cards */}
          <motion.div
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-40px" }}
            variants={staggerContainer}
          >
            {servicesPreview.map((item, i) => {
              const ServiceIcon =
                i === 0
                  ? IconTruck
                  : i === 1
                    ? IconBox
                    : i === 2
                      ? IconWarehouse
                      : IconTrash;
              return (
                <motion.article
                  key={item.title}
                  variants={{
                    initial: { opacity: 0, y: 24 },
                    whileInView: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.45, ease: defaultEase }}
                  className="flex flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-lg shadow-slate-200/60"
                >
                  <div
                    className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0F2E6B] text-white"
                    aria-hidden
                  >
                    <ServiceIcon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[#0F2E6B]/80">
                    {item.tagline}
                  </p>
                  <p className="mt-3 text-base text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                  <ul className="mt-4 space-y-2 flex-1">
                    {item.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-slate-600"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center text-[#0F2E6B]">
                          <IconCheck className="h-4 w-4" />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#0F2E6B] px-4 py-3 font-semibold text-white shadow-md transition hover:bg-[#0a2242] hover:shadow-lg"
                  >
                    Get Quote Now
                    <span aria-hidden>→</span>
                  </Link>
                </motion.article>
              );
            })}
          </motion.div>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            {serviceBadges.map((badge) => (
              <span
                key={badge.label}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-600 shadow-sm"
              >
                {badge.icon === "shield" && (
                  <IconShield className="h-5 w-5 text-[#0F2E6B]" />
                )}
                {badge.icon === "lightning" && (
                  <IconLightning className="h-5 w-5 text-[#0F2E6B]" />
                )}
                {badge.icon === "check" && (
                  <IconCheckCircle className="h-5 w-5 text-[#0F2E6B]" />
                )}
                {badge.label}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <motion.span
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-xl bg-[#0F2E6B] px-6 py-3.5 font-bold text-white shadow-lg shadow-blue-900/20 transition hover:bg-[#0a2242] hover:opacity-95"
              >
                View All Services
                <span aria-hidden>→</span>
              </Link>
            </motion.span>
          </motion.div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="relative py-20 sm:py-24">
        <div className="absolute inset-0 bg-white" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: defaultEase }}
            className="text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-amber-600">
              Why us
            </span>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
              Why Choose Removex Logistics?
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-slate-600">
              Choosing the right removals and logistics company is critical.
              Here&apos;s why clients trust us.
            </p>
          </motion.div>

          {/* Slider: visible on mobile/tablet */}
          <div className="mt-14 xl:hidden">
            <Slider showDots={true}>
              {whyChoose.map((item, i) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -2 }}
                  className="flex h-full rounded-2xl border border-slate-200/80 bg-gradient-to-b from-white to-slate-50/50 p-6 shadow-sm transition hover:border-amber-200/80 hover:shadow-md"
                >
                  <span className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#0F2E6B] to-[#1e3a8a] text-sm font-bold text-white shadow-md">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                      {item.short}
                    </p>
                  </div>
                </motion.div>
              ))}
            </Slider>
          </div>

          {/* Grid: visible on desktop */}
          <motion.ul
            className="mt-14 hidden grid-cols-2 gap-5 lg:grid lg:grid-cols-3 xl:grid-cols-4"
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-40px" }}
            variants={staggerContainer}
          >
            {whyChoose.map((item, i) => (
              <motion.li
                key={item.title}
                variants={{
                  initial: { opacity: 0, y: 24 },
                  whileInView: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.45, ease: defaultEase }}
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  className="flex h-full rounded-2xl border border-slate-200/80 bg-gradient-to-b from-white to-slate-50/50 p-6 shadow-sm transition hover:border-amber-200/80 hover:shadow-md"
                >
                  <span className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#0F2E6B] to-[#1e3a8a] text-sm font-bold text-white shadow-md">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                      {item.short}
                    </p>
                  </div>
                </motion.div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Stats + Action strip */}
      <section className="relative overflow-hidden border-y border-amber-200/50 bg-gradient-to-r from-amber-50 via-white to-blue-50 py-16 sm:py-20">
        <div
          className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 0L30 60M0 30L60 30\' stroke=\'%23f59e0b\' stroke-width=\'0.15\' fill=\'none\'/%3E%3C/svg%3E')] opacity-40"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: defaultEase }}
            className="grid grid-cols-2 gap-8 lg:grid-cols-4"
          >
            {[
              { value: "UK-Wide", label: "Coverage", icon: "📍" },
              { value: "On Time", label: "Every delivery", icon: "⏱" },
              {
                value: "Fully Insured",
                label: "Your peace of mind",
                icon: "🛡",
              },
              { value: "Free Quote", label: "No obligation", icon: "✓" },
            ].map((stat, i) => (
              <div key={stat.label} className="text-center">
                <span className="text-2xl sm:text-3xl" aria-hidden>
                  {stat.icon}
                </span>
                <p className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-sm text-slate-600">{stat.label}</p>
              </div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-14 flex flex-col items-center gap-6 rounded-2xl bg-gradient-to-r from-[#0F2E6B] to-[#1e3a8a] px-6 py-10 text-center shadow-xl sm:flex-row sm:justify-between sm:px-10 sm:py-8"
          >
            <div>
              <p className="text-lg font-semibold text-white sm:text-xl">
                Get a free quote in minutes
              </p>
              <a
                href="tel:+447448647267"
                className="mt-1 inline-block text-2xl font-bold text-amber-400 transition hover:text-amber-300 sm:text-3xl"
              >
                +44 7448 647267
              </a>
            </div>
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl bg-amber-500 px-6 py-3.5 font-semibold text-slate-900 shadow-lg transition hover:bg-amber-400"
              >
                Request a quote
              </Link>
            </motion.span>
          </motion.div>
        </div>
      </section>
    </>
  );
}

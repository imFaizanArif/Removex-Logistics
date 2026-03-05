"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Slider from "@/components/Slider";
import { fadeUp, staggerContainer, defaultEase } from "@/lib/animations";
import { useState, useEffect } from "react";

const heroImages = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=85",
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=85",
  "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1920&q=85",
];

const heroSlides = [
  {
    title: "REMOVEX LOGISTICS",
    subtitle: "We don't just move goods — we move them safely, securely, and on time.",
  },
  {
    title: "REMOVEX LOGISTICS",
    subtitle: "Warehousing & storage solutions for homes and businesses across the UK.",
  },
  {
    title: "REMOVEX LOGISTICS",
    subtitle: "Freight, transport & logistics — reliable delivery when it matters.",
  },
];

const servicesPreview = [
  {
    title: "House Removals & Moving",
    description: "Residential and commercial moves with care and punctuality.",
    href: "/services",
    image: "https://plus.unsplash.com/premium_photo-1683121732400-d0f4820801ea?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Freight & Transport",
    description: "Pallet transport, commercial freight, and long-distance delivery across the UK.",
    href: "/services",
    image: "https://plus.unsplash.com/premium_photo-1661907153090-93759d68acb1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Warehousing & 3PL",
    description: "Storage, inventory management, order fulfilment, and supply chain solutions.",
    href: "/services",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  },
  {
    title: "Rubbish Removal",
    description: "Household and commercial waste clearance, furniture disposal, clearances.",
    href: "/services",
    image: "https://plus.unsplash.com/premium_photo-1681152790475-43ce66798899?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const whyChoose = [
  { title: "Professional & Experienced Team", short: "Trained staff for fragile items to commercial freight." },
  { title: "Comprehensive Services", short: "House moving, warehousing, freight, and 3PL under one roof." },
  { title: "Reliable & On-Time", short: "Punctual collections and deliveries every time." },
  { title: "Safe & Secure Handling", short: "Highest level of care and protection for your goods." },
  { title: "Flexible & Scalable", short: "From small moves to full logistics outsourcing." },
  { title: "Transparent Pricing", short: "No hidden costs. Clear quotations." },
  { title: "Customer-Focused", short: "Smooth, stress-free service tailored to you." },
];

export default function HomePage() {
  const [heroIndex, setHeroIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setHeroIndex((i) => (i + 1) % heroImages.length), 5000);
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
                {heroSlides[heroIndex]?.subtitle ?? "We don't just move goods — we move them safely, securely, and on time."}
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
                i === heroIndex ? "w-6 bg-amber-500" : "w-2 bg-white/50 hover:bg-white/70"
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
            <span className="text-sm font-semibold uppercase tracking-wider text-amber-600">About us</span>
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
              Removex Logistics is a trusted UK removals and logistics company providing reliable, efficient, and professional moving solutions for both residential and commercial clients. We specialise in house removals, freight transportation, warehousing, 3PL services, and rubbish removal, delivering tailored logistics solutions that meet modern business and household needs.
            </motion.p>
            <motion.p
              {...fadeUp}
              transition={{ delay: 0.1 }}
              className="mt-5 text-slate-600 leading-relaxed text-base sm:text-lg"
            >
              Our experienced team understands that every move is different. Whether you&apos;re relocating your home, transporting commercial goods, or outsourcing your supply chain operations, we focus on careful handling, punctual delivery, and transparent communication at every stage.
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
            <span className="text-sm font-semibold uppercase tracking-wider text-amber-600">What we do</span>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">What We Offer</h2>
            <p className="mt-3 max-w-xl mx-auto text-slate-600">End-to-end logistics and removals under one roof</p>
          </motion.div>

          {/* Slider: visible on mobile/tablet */}
          <div className="mt-14 lg:hidden">
            <Slider showDots={true} className="px-1">
              {servicesPreview.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group block overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition hover:border-slate-300 hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="85vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 transition group-hover:opacity-100" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-slate-900 transition group-hover:text-[#0F2E6B]">{item.title}</h3>
                    <p className="mt-1.5 text-sm text-slate-600">{item.description}</p>
                  </div>
                </Link>
              ))}
            </Slider>
          </div>

          {/* Grid: visible on desktop */}
          <motion.div
            className="mt-14 hidden gap-6 lg:grid lg:grid-cols-4"
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-40px" }}
            variants={staggerContainer}
          >
            {servicesPreview.map((item, i) => (
              <motion.div
                key={item.title}
                variants={{ initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.45, ease: defaultEase }}
              >
                <Link
                  href={item.href}
                  className="group block overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition hover:border-slate-300 hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 transition group-hover:opacity-100" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-slate-900 transition group-hover:text-[#0F2E6B]">{item.title}</h3>
                    <p className="mt-1.5 text-sm text-slate-600">{item.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <motion.span whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/services"
                className="inline-flex items-center rounded-xl bg-gradient-to-r from-[#0F2E6B] to-[#1e3a8a] px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:opacity-95"
              >
                View all services
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
            <span className="text-sm font-semibold uppercase tracking-wider text-amber-600">Why us</span>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">Why Choose Removex Logistics?</h2>
            <p className="mt-3 max-w-2xl mx-auto text-slate-600">
              Choosing the right removals and logistics company is critical. Here&apos;s why clients trust us.
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
                    <h3 className="font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{item.short}</p>
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
                variants={{ initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 } }}
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
                    <h3 className="font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{item.short}</p>
                  </div>
                </motion.div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Stats + Action strip */}
      <section className="relative overflow-hidden border-y border-amber-200/50 bg-gradient-to-r from-amber-50 via-white to-blue-50 py-16 sm:py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 0L30 60M0 30L60 30\' stroke=\'%23f59e0b\' stroke-width=\'0.15\' fill=\'none\'/%3E%3C/svg%3E')] opacity-40" aria-hidden />
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
              { value: "Fully Insured", label: "Your peace of mind", icon: "🛡" },
              { value: "Free Quote", label: "No obligation", icon: "✓" },
            ].map((stat, i) => (
              <div key={stat.label} className="text-center">
                <span className="text-2xl sm:text-3xl" aria-hidden>{stat.icon}</span>
                <p className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">{stat.value}</p>
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
              <p className="text-lg font-semibold text-white sm:text-xl">Get a free quote in minutes</p>
              <a href="tel:+447424452729" className="mt-1 inline-block text-2xl font-bold text-amber-400 transition hover:text-amber-300 sm:text-3xl">
                +44 7424 452729
              </a>
            </div>
            <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
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

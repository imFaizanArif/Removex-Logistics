"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, defaultEase } from "@/lib/animations";

const services: {
  title: string;
  description: string;
  bullets: string[];
  image?: string;
}[] = [
  {
    title: "Transportation & Freight Services",
    description:
      "Removex Logistics provides reliable transportation and freight services across the UK for businesses and individuals requiring secure and timely delivery of goods.",
    bullets: [
      "Pallet transport",
      "Commercial freight delivery",
      "Large item transportation",
      "Scheduled delivery services",
      "Long-distance transport solutions",
    ],
    image:
      "https://plus.unsplash.com/premium_photo-1661907153090-93759d68acb1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Warehousing & Storage Solutions",
    description:
      "We offer flexible warehousing and storage services for both short-term and long-term requirements.",
    bullets: [
      "Homeowners between moves",
      "Business inventory storage",
      "Retail stock management",
      "Equipment and furniture storage",
    ],
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  },
  {
    title: "3PL (Third-Party Logistics) Services",
    description:
      "Professional Third-Party Logistics (3PL) solutions for businesses outsourcing logistics operations.",
    bullets: [
      "Inventory management",
      "Order fulfilment",
      "Storage and distribution",
      "Last-mile delivery",
      "Supply chain coordination",
    ],
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
  },
  {
    title: "Value-Added & Specialist Services",
    description:
      "Tailored specialist services to meet unique client requirements.",
    bullets: [
      "Furniture assembly and disassembly",
      "Handling of fragile and high-value items",
      "Specialist transport (pianos, antiques, heavy equipment)",
      "Scheduled contract logistics",
      "Custom moving solutions",
    ],
    image:
      "https://plus.unsplash.com/premium_photo-1683121732400-d0f4820801ea?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Rubbish Removal Services",
    description:
      "Professional rubbish removal for residential and commercial clients.",
    bullets: [
      "Household rubbish removal",
      "Old furniture disposal",
      "Garage and loft clearances",
      "Office waste clearance",
      "Post-move cleanouts",
    ],
    image:
      "https://plus.unsplash.com/premium_photo-1681152790475-43ce66798899?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Household Rubbish Moving",
    description:
      "Reliable household rubbish moving services during or after relocation.",
    bullets: [
      "Old sofas and mattresses",
      "Broken furniture",
      "Appliances",
      "General household waste",
      "Garden waste (where applicable)",
    ],
    image:
      "https://plus.unsplash.com/premium_photo-1680300960805-e76bb338d59e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative flex min-h-[50vh] flex-col items-center justify-center overflow-hidden bg-[#0a1628] py-24 sm:py-32">
        <Image
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=85"
          alt="Logistics services"
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
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="mt-4 max-w-2xl mx-auto text-lg text-blue-100/90"
          >
            End-to-end removals, freight, warehousing, 3PL, and rubbish removal
            across the UK.
          </motion.p>
        </div>
      </section>

      <section className="relative py-16 sm:py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.p
            className="text-center text-sm font-semibold uppercase tracking-wider text-amber-600"
            {...fadeUp}
            transition={{ duration: 0.5, ease: defaultEase }}
          >
            Additional Logistics & Specialist Services
          </motion.p>

          <motion.div
            className="mt-12 space-y-24 lg:space-y-28"
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                variants={{
                  initial: { opacity: 0, y: 28 },
                  whileInView: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: defaultEase }}
                className={`grid gap-10 lg:grid-cols-2 lg:gap-14 lg:items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  {service.image && (
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative aspect-video overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-lg"
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </motion.div>
                  )}
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <motion.div whileHover={{ y: -2 }} className="relative">
                    <span className="text-sm font-semibold uppercase tracking-wider text-amber-600">
                      Our services
                    </span>
                    <h2 className="mt-2 text-xl font-bold bg-gradient-to-r from-[#0F2E6B] to-[#1e3a8a] bg-clip-text text-transparent sm:text-2xl">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-slate-600 leading-relaxed text-base sm:text-lg">
                      {service.description}
                    </p>
                    <ul className="mt-5 space-y-2.5">
                      {service.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-3 text-slate-600"
                        >
                          <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.span
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3.5 font-semibold text-slate-900 shadow-lg shadow-amber-900/25 transition hover:opacity-95"
              >
                Get a quote
              </Link>
            </motion.span>
          </motion.div>
        </div>
      </section>
    </>
  );
}

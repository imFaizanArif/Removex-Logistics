"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Slider from "@/components/Slider";
import { fadeUp, staggerContainer, defaultEase } from "@/lib/animations";

const whyChoose = [
  { title: "Professional & Experienced Team", text: "Our trained staff handle everything from fragile household items to commercial freight with precision and care." },
  { title: "Comprehensive Services", text: "From house moving and household rubbish removal to warehousing, freight transport, and 3PL logistics, we provide complete end-to-end solutions under one roof." },
  { title: "Reliable & On-Time Delivery", text: "We understand the importance of deadlines. Our team ensures punctual collections and deliveries every time." },
  { title: "Safe & Secure Handling", text: "Your belongings and goods are treated with the highest level of care and protection." },
  { title: "Flexible & Scalable Solutions", text: "Whether you need a small house move or full logistics outsourcing, our services are customised to your requirements." },
  { title: "Transparent Pricing", text: "No hidden costs. Clear quotations. Honest communication." },
  { title: "Customer-Focused Approach", text: "Your satisfaction is our priority. We work closely with every client to ensure smooth and stress-free service." },
];

const missionGoals = [
  "Deliver every project on schedule",
  "Protect our clients' belongings with expert handling",
  "Offer flexible and scalable logistics solutions",
  "Build long-term partnerships based on trust and reliability",
  "Continuously improve our service standards",
];

export default function AboutPage() {
  return (
    <>
      <section className="relative flex min-h-[50vh] flex-col items-center justify-center overflow-hidden bg-[#0a1628] py-24 sm:py-32">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=85"
          alt="Our team and logistics"
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
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="mt-4 text-lg text-blue-100/90"
          >
            Trusted UK removals and logistics — your move, our mission.
          </motion.p>
        </div>
      </section>

      <section className="relative py-20 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/40 to-white" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, ease: defaultEase }}
            className="relative text-center"
          >
            <h2 className="text-2xl font-bold bg-gradient-to-r from-[#0F2E6B] to-[#1e3a8a] bg-clip-text text-transparent sm:text-3xl">
              Trusted UK Removals & Logistics
            </h2>
            <p className="mt-6 text-slate-600 leading-relaxed text-base sm:text-lg">
              Removex Logistics is a trusted UK removals and logistics company providing reliable, efficient, and professional moving solutions for both residential and commercial clients. We specialise in house removals, freight transportation, warehousing, 3PL services, and rubbish removal, delivering tailored logistics solutions that meet modern business and household needs.
            </p>
            <p className="mt-5 text-slate-600 leading-relaxed text-base sm:text-lg">
              Our experienced team understands that every move is different. Whether you&apos;re relocating your home, transporting commercial goods, or outsourcing your supply chain operations, we focus on careful handling, punctual delivery, and transparent communication at every stage.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: defaultEase }}
              className="mt-8 rounded-xl border-l-4 border-amber-500 bg-amber-50/60 px-5 py-4"
            >
              <p className="font-semibold text-slate-800 text-lg leading-snug">
                At Removex Logistics, we don&apos;t just move goods — we move them safely, securely, and on time.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-20 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/60 via-white to-slate-50/50" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, ease: defaultEase }}
            className="relative text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-amber-600">Our mission</span>
            <h2 className="mt-2 text-2xl font-bold bg-gradient-to-r from-[#0F2E6B] to-[#1e3a8a] bg-clip-text text-transparent sm:text-3xl">
              Our Mission
            </h2>
            <p className="mt-6 text-slate-600 leading-relaxed text-base sm:text-lg">
              Our mission is simple: to provide dependable, cost-effective, and professional logistics and removals services while maintaining the highest standards of safety, efficiency, and customer satisfaction.
            </p>
            <span className="mt-8 block text-sm font-semibold uppercase tracking-wider text-amber-600">We aim to</span>
            <motion.ul
              className="mt-4 mx-auto max-w-2xl space-y-3"
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {missionGoals.map((goal) => (
                <motion.li
                  key={goal}
                  variants={{ initial: { opacity: 0, x: -8 }, whileInView: { opacity: 1, x: 0 } }}
                  transition={{ duration: 0.35, ease: defaultEase }}
                  className="flex items-start gap-3 text-slate-600 leading-relaxed"
                >
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
                  {goal}
                </motion.li>
              ))}
            </motion.ul>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: defaultEase }}
              className="mt-10 rounded-xl border-l-4 border-amber-500 bg-amber-50/60 px-5 py-4 text-center"
            >
              <p className="font-semibold text-slate-800 text-lg leading-snug">
                We are committed to becoming a leading name in UK removals, transportation, and third-party logistics services.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-20 sm:py-24">
        <div className="absolute inset-0 bg-white" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, ease: defaultEase }}
            className="text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-amber-600">Why us</span>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
              Why Choose Removex Logistics?
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-slate-600">
              Choosing the right removals and logistics company is critical. Here&apos;s why clients trust us.
            </p>
          </motion.div>

          {/* Slider on mobile/tablet */}
          <div className="mt-14 xl:hidden">
            <Slider showDots={true}>
              {whyChoose.map((item, i) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -2 }}
                  className="flex gap-5 rounded-2xl border border-slate-200/80 bg-gradient-to-b from-white to-slate-50/50 p-6 shadow-sm transition hover:border-amber-200/80 hover:shadow-md sm:p-8"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#0F2E6B] to-[#1e3a8a] text-lg font-bold text-white shadow-md">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-1.5 text-slate-600 leading-relaxed">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </Slider>
          </div>

          {/* List on desktop */}
          <motion.ul
            className="mt-14 hidden space-y-5 xl:block"
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-40px" }}
            variants={staggerContainer}
          >
            {whyChoose.map((item, i) => (
              <motion.li
                key={item.title}
                variants={{ initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.45, ease: defaultEase }}
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  className="flex gap-5 rounded-2xl border border-slate-200/80 bg-gradient-to-b from-white to-slate-50/50 p-6 shadow-sm transition hover:border-amber-200/80 hover:shadow-md sm:p-8"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#0F2E6B] to-[#1e3a8a] text-lg font-bold text-white shadow-md">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-1.5 text-slate-600 leading-relaxed">{item.text}</p>
                  </div>
                </motion.div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>
    </>
  );
}

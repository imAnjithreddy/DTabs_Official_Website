"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const items = [
  {
    number: "01",
    title: "People first",
    text: "Technology should make people's work clearer, faster, and more meaningful — not add friction.",
  },
  {
    number: "02",
    title: "Designed for complexity",
    text: "We take complicated operations and turn them into intuitive, connected experiences across every touchpoint.",
  },
  {
    number: "03",
    title: "Intelligence by design",
    text: "Data models and automations are architected into the core foundations rather than retrofitted as an afterthought.",
  },
  {
    number: "04",
    title: "Built to grow",
    text: "Our platforms scale seamlessly, engineered to evolve in tandem with the institutions that depend on them.",
  },
];

export default function Approach() {
  return (
    <section id="technology" className="relative w-full bg-white text-[#111]">
      <div className="mx-auto max-w-[1440px] px-6 py-28 sm:px-10 lg:px-16 lg:py-44">
        <div className="grid gap-16 lg:grid-cols-[0.4fr_0.6fr] lg:gap-24">
          {/* Left: Sticky Brand Column */}
          <div className="lg:sticky lg:top-36 lg:h-fit">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-semibold text-[#888]">
                03
              </span>

              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#888]">
                Our Approach
              </span>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 max-w-[420px] text-[clamp(2.6rem,4.5vw,4.6rem)] font-medium leading-[1.04] tracking-[-0.045em] text-[#111]"
            >
              Technology <br />
              <span className="text-[#8e8e8e]">with purpose.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-6 max-w-[360px] text-base leading-relaxed text-[#666]"
            >
              Every system we engineer follows four non-negotiable principles to
              ensure resilience, ergonomics, and lasting clarity.
            </motion.p>
          </div>

          {/* Right: Interactive Architectural Cards */}
          <div className="border-t border-black/[0.08]">
            {items.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative cursor-default border-b border-black/[0.08] py-10 transition-colors duration-500 hover:bg-[#fafafa]/80 sm:px-6"
              >
                <div className="grid grid-cols-[40px_1fr] items-baseline gap-6 sm:grid-cols-[50px_1fr]">
                  {/* Monospace Indicator */}
                  <span className="font-mono text-xs font-semibold text-[#999] transition-colors duration-300 group-hover:text-black">
                    {item.number}
                  </span>

                  <div>
                    {/* Title with hover arrow transition */}
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-medium tracking-[-0.03em] text-[#111] transition-transform duration-300 ease-out group-hover:translate-x-1 sm:text-2xl">
                        {item.title}
                      </h3>

                      <ArrowUpRight
                        size={18}
                        strokeWidth={1.8}
                        className="text-[#999] opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 group-hover:text-black"
                      />
                    </div>

                    {/* Description */}
                    <p className="mt-4 max-w-[540px] text-base leading-relaxed text-[#666] transition-colors duration-300 group-hover:text-[#444]">
                      {item.text}
                    </p>
                  </div>
                </div>

                {/* Subtle active line indicator */}
                <div className="absolute bottom-[-1px] left-0 h-[1.5px] w-0 bg-black transition-all duration-500 ease-out group-hover:w-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const pillars = [
  {
    number: "01",
    title: "People first",
    desc: "Designed around genuine human workflows, not arbitrary technical constraints.",
  },
  {
    number: "02",
    title: "Real-world impact",
    desc: "Pragmatic systems engineered to deliver measurable operational clarity.",
  },
  {
    number: "03",
    title: "Built to scale",
    desc: "Robust architectural foundations ready to support long-term organizational expansion.",
  },
];

export default function Vision() {
  return (
    <section id="about" className="relative w-full bg-white text-[#111]">
      <div className="mx-auto max-w-[1440px] px-6 py-28 sm:px-10 lg:px-16 lg:py-44">
        {/* TOP: Section Label & Manifesto Headline */}
        <div className="grid gap-10 lg:grid-cols-[0.35fr_1.65fr] lg:gap-14">
          {/* Section Indicator */}
          <div className="flex items-center gap-3 lg:items-start lg:pt-3">
            <span className="font-mono text-xs font-semibold text-[#888]">
              01
            </span>

            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#888]">
              Our Vision
            </span>
          </div>

          {/* Large Hero Statement */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-[clamp(2.5rem,5.2vw,5.5rem)] font-medium leading-[1.04] tracking-[-0.045em] text-[#111]">
              Technology should remove complexity,{" "}
              <span className="text-[#8e8e8e] transition-colors duration-500 hover:text-[#555]">
                not create another layer of it.
              </span>
            </h2>
          </motion.div>
        </div>

        {/* Dynamic Animated Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="my-16 h-px w-full origin-left bg-black/[0.08] lg:my-24"
        />

        {/* BOTTOM: Narrative & Detailed Interactive Pillars */}
        <div className="grid gap-14 lg:grid-cols-[0.35fr_0.8fr_0.85fr] lg:gap-14">
          {/* Subtle Tagline / Spacer */}
          <div className="hidden font-mono text-xs uppercase tracking-widest text-[#aaa] lg:block">
            Core Philosophy
          </div>

          {/* Narrative Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-lg leading-relaxed text-[#555] sm:text-[19px]">
              We believe the best technology quietly makes things better. It
              brings fragmented operations together, equips teams with intuitive
              tools, and turns complicated architectures into frictionless,
              everyday experiences.
            </p>
          </motion.div>

          {/* Interactive Feature List */}
          <div className="space-y-0 divide-y divide-black/[0.08] border-y border-black/[0.08]">
            {pillars.map((pillar, idx) => (
              <VisionPoint
                key={pillar.number}
                number={pillar.number}
                title={pillar.title}
                desc={pillar.desc}
                delay={idx * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function VisionPoint({
  number,
  title,
  desc,
  delay,
}: {
  number: string;
  title: string;
  desc: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative cursor-default py-6 transition-all duration-300 hover:bg-[#fafafa]/80 sm:px-4"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-xs font-medium text-[#999] transition-colors duration-300 group-hover:text-black">
            {number}
          </span>
          <h3 className="text-base font-medium tracking-tight text-[#1a1a1a] transition-transform duration-300 group-hover:translate-x-1">
            {title}
          </h3>
        </div>

        {/* Micro-interaction indicator */}
        <ArrowUpRight
          size={16}
          strokeWidth={1.8}
          className="text-[#999] opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 group-hover:text-black"
        />
      </div>

      {/* Expandable/Fading Context */}
      <p className="mt-2 pl-8 text-xs leading-relaxed text-[#777] transition-colors duration-300 group-hover:text-[#444]">
        {desc}
      </p>
    </motion.div>
  );
}

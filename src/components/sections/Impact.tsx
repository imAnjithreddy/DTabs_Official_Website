"use client";

import { motion } from "framer-motion";
import { TrendingUp, Layers, GraduationCap, Building2 } from "lucide-react";

const stats = [
  {
    value: "6+",
    label: "Partner Institutions",
    detail: "Scaling across higher ed & campuses",
    icon: Building2,
  },
  {
    value: "02",
    label: "Operating Platforms",
    detail: "Specialized for education & enterprise",
    icon: Layers,
  },
  {
    value: "K–12",
    label: "Integrated Ecosystem",
    detail: "From early learning to administration",
    icon: GraduationCap,
  },
  {
    value: "99.9%",
    label: "Uptime Reliability",
    detail: "Mission-critical infrastructure",
    icon: TrendingUp,
  },
];

export default function Impact() {
  return (
    <section className="relative overflow-hidden bg-[#0c0d0e] py-28 text-white sm:py-36 lg:py-44">
      {/* Subtle Background Glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-b from-white/[0.04] to-transparent blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-semibold text-white/40">
            04
          </span>

          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/50">
            Our Impact
          </span>
        </div>

        {/* Stat Cards Grid */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative flex flex-col justify-between bg-[#0c0d0e] p-8 transition-colors duration-500 hover:bg-[#131518] sm:p-10"
              >
                {/* Top Accent Icon */}
                <div className="flex items-center justify-between text-white/30 transition-colors duration-300 group-hover:text-white/70">
                  <Icon size={20} strokeWidth={1.8} />
                  <span className="font-mono text-[11px] text-white/25">
                    0{index + 1}
                  </span>
                </div>

                {/* Big Metric Display */}
                <div className="mt-14">
                  <div className="text-[clamp(3.2rem,4.5vw,4.8rem)] font-medium tracking-[-0.05em] text-white transition-transform duration-300 group-hover:-translate-y-0.5">
                    {stat.value}
                  </div>

                  <div className="mt-3 text-sm font-medium tracking-tight text-white/80">
                    {stat.label}
                  </div>

                  <p className="mt-1 text-xs leading-relaxed text-white/40">
                    {stat.detail}
                  </p>
                </div>

                {/* Bottom Highlight Border on Hover */}
                <div className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-white transition-all duration-500 ease-out group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>

        {/* Closing Headline Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-28 border-t border-white/10 pt-16"
        >
          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
            <h3 className="text-[clamp(2.2rem,4vw,4.2rem)] font-medium leading-[1.05] tracking-[-0.045em] text-white">
              Different industries. <br />
              Different operational demands. <br />
              <span className="text-white/40">
                One outcome — work that flows.
              </span>
            </h3>

            <p className="max-w-[360px] text-sm leading-relaxed text-white/50">
              We replace brittle legacy software with resilient platforms
              designed for organizations that cannot afford friction.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

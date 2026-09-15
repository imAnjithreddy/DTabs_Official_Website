"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

const products = [
  {
    number: "01",
    name: "NexusOne",
    category: "Education Infrastructure",
    tagline: "Unifying Academic & Operational Life",
    description:
      "A connected school operating platform designed to orchestrate admissions, academics, fee pipelines, examinations, and communication inside one cohesive ecosystem.",
    image: "/images/products/nexusone/nexus.png",
    accent: "#0A2946",
    accentGlow: "rgba(10, 41, 70, 0.08)",
    href: "https://www.nexus-one.in/",
    metrics: ["100% Paperless", "Real-Time Sync"],
  },
  {
    number: "02",
    name: "FlowOS",
    category: "Enterprise Intelligence",
    tagline: "Next-Gen Workflow Orchestration",
    description:
      "A business operating system that harmonizes IT services, multi-team automations, distributed application data, and operational analytics into a streamlined interface.",
    image: "/images/products/flowos/flow.png",
    accent: "#6366f1",
    accentGlow: "rgba(99, 102, 241, 0.08)",
    href: "https://flowos.dtabs.tech",
    metrics: ["Low-Latency Flow", "Autonomous Ops"],
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="relative w-full bg-[#f8f8f6] py-28 text-[#111] sm:py-36 lg:py-44"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="grid gap-12 lg:grid-cols-[0.35fr_1.65fr] lg:gap-14">
          <div className="flex items-center gap-3 lg:items-start lg:pt-3">
            <span className="font-mono text-xs font-semibold text-[#888]">
              02
            </span>

            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#888]">
              Our Platforms
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-[clamp(2.6rem,5.2vw,5.5rem)] font-medium leading-[1.02] tracking-[-0.05em] text-[#111]">
              Purpose-built architectures <br className="hidden sm:inline" />
              <span className="text-[#8e8e8e]">
                for high-stakes operations.
              </span>
            </h2>

            <p className="mt-8 max-w-[560px] text-lg leading-relaxed text-[#666]">
              Two dedicated platforms. Two completely distinct domains. One
              unified engineering philosophy — turning complex operational
              friction into pure clarity.
            </p>
          </motion.div>
        </div>

        {/* Products Showcase */}
        <div className="mt-28 space-y-36 lg:space-y-48">
          {products.map((product, index) => (
            <motion.article
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.9,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group grid items-center gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16"
            >
              {/* Product Info & Specs */}
              <div className="flex flex-col justify-between order-2 lg:order-1">
                <div>
                  {/* Category Pill & Index */}
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-semibold tracking-wider text-[#999]">
                      {product.number}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-black/20" />
                    <span
                      className="rounded-full px-3 py-1 text-[11px] font-medium tracking-wide uppercase"
                      style={{
                        backgroundColor: product.accentGlow,
                        color: product.accent,
                      }}
                    >
                      {product.category}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="mt-6 text-[clamp(2.2rem,3.2vw,3.6rem)] font-medium tracking-[-0.04em] text-[#111]">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium tracking-tight text-[#777]">
                    {product.tagline}
                  </p>

                  {/* Description */}
                  <p className="mt-6 max-w-[460px] text-base leading-relaxed text-[#555]">
                    {product.description}
                  </p>

                  {/* Quick Feature Badges */}
                  <div className="mt-7 flex flex-wrap gap-2.5">
                    {product.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-black/[0.06] bg-white px-3 py-1.5 text-xs font-medium text-[#444] shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
                      >
                        <Sparkles size={12} style={{ color: product.accent }} />
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Interactive Action Button */}
                <div className="mt-10 pt-8 border-t border-black/[0.07]">
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-black/10 bg-white px-6 py-3.5 text-sm font-medium text-[#111] shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-black/30 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] active:scale-[0.98]"
                  >
                    <span>Launch {product.name}</span>
                    <span
                      className="flex h-6 w-6 items-center justify-center rounded-full text-white transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                      style={{ backgroundColor: product.accent }}
                    >
                      <ArrowUpRight size={14} strokeWidth={2.2} />
                    </span>
                  </a>
                </div>
              </div>

              {/* Product Visual Mockup Container */}
              <div className="order-1 lg:order-2">
                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block overflow-hidden rounded-[26px] border border-black/[0.06] bg-white p-2.5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] transition-all duration-500 hover:shadow-[0_30px_90px_-20px_rgba(0,0,0,0.15)] sm:p-4"
                >
                  {/* Subtle Top Browser Chrome Bar */}
                  <div className="mb-3 flex items-center justify-between px-2">
                    <div className="flex items-center gap-1.5">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                      <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                      <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
                    </div>
                    <span className="font-mono text-[11px] text-[#aaa]">
                      {new URL(product.href).hostname}
                    </span>
                  </div>

                  {/* Image Frame */}
                  <div className="relative overflow-hidden rounded-[18px] bg-neutral-100">
                    <img
                      src={product.image}
                      alt={`${product.name} application overview`}
                      className="block aspect-[16/10] w-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.03]"
                    />

                    {/* Hover Glow Mask */}
                    <div
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        background: `radial-gradient(circle at 50% 50%, ${product.accentGlow} 0%, transparent 80%)`,
                      }}
                    />
                  </div>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

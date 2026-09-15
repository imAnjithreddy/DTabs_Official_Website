"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Clock } from "lucide-react";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f8f8f6] py-28 text-[#111] sm:py-36 lg:py-44"
    >
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="mb-12 flex items-center gap-3">
          <span className="font-mono text-xs font-semibold text-[#888]">
            05
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#888]">
            Get In Touch
          </span>
        </div>

        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
          {/* LEFT: Headline & Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="mt-8 text-[clamp(2.6rem,5vw,5.2rem)] font-medium leading-[0.98] tracking-[-0.05em] text-[#111]">
              Technology that <br />
              moves organizations <br />
              <span className="text-[#8e8e8e]">forward.</span>
            </h2>

            <p className="mt-8 max-w-[460px] text-base leading-relaxed text-[#666]">
              Have an idea or a platform requirement? Drop us an email and
              we&apos;ll get back to you within 24 business hours.
            </p>

            {/* Direct Contact Pillars */}
            <div className="mt-12 space-y-6 border-t border-black/[0.08] pt-10">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-black/[0.06] bg-white text-[#444]">
                  <Mail size={17} strokeWidth={1.8} />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#999]">
                    Email Directly
                  </p>
                  <a
                    href="mailto:tanush@dtabs.tech"
                    className="text-sm font-medium text-[#111] hover:underline"
                  >
                    tanush@dtabs.tech
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-black/[0.06] bg-white text-[#444]">
                  <MapPin size={17} strokeWidth={1.8} />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#999]">
                    Headquarters
                  </p>
                  <p className="text-sm font-medium text-[#111]">
                    DTabs Technologies · Bengaluru, India
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-black/[0.06] bg-white text-[#444]">
                  <Clock size={17} strokeWidth={1.8} />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#999]">
                    Turnaround
                  </p>
                  <p className="text-sm font-medium text-[#111]">
                    Response within 24 business hours
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Email CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative rounded-3xl border border-black/[0.08] bg-white p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.06)] sm:p-12"
          >
            {/* Icon */}
            <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-black/[0.06] bg-[#f4f4f2]">
              <Mail size={24} strokeWidth={1.6} className="text-[#333]" />
            </div>

            <h3 className="text-2xl font-medium tracking-tight text-[#111]">
              Email us your idea
            </h3>
            <p className="mt-3 max-w-[380px] text-sm leading-relaxed text-[#777]">
              Whether it&apos;s a product inquiry, partnership proposal, or a
              custom architecture request — we read every email and respond
              personally.
            </p>

            {/* Email Address Display */}
            <div className="mt-10 rounded-2xl border border-black/[0.07] bg-[#f8f8f6] px-6 py-5">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#999]">
                Reach us at
              </p>
              <a
                href="mailto:tanush@dtabs.tech"
                className="mt-1.5 block text-xl font-medium tracking-tight text-[#111] transition-colors hover:text-[#444]"
              >
                tanush@dtabs.tech
              </a>
            </div>

            {/* CTA Button */}
            <a
              href="mailto:tanush@dtabs.tech?subject=Inquiry%20from%20DTabs%20Website"
              className="group mt-8 relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-[#111] py-4 text-sm font-medium !text-white shadow-[0_10px_25px_rgba(0,0,0,0.1)] transition-all hover:shadow-[0_16px_35px_rgba(0,0,0,0.2)] active:scale-[0.99]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Open your email app
                <ArrowUpRight
                  size={16}
                  strokeWidth={2}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
              <div className="absolute inset-0 z-0 h-full w-full -translate-x-full bg-gradient-to-r from-[#333] to-[#1a1a1a] transition-transform duration-500 ease-out group-hover:translate-x-0" />
            </a>

            <p className="mt-4 text-center text-[11px] text-[#aaa]">
              No forms. No friction. Just a direct conversation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

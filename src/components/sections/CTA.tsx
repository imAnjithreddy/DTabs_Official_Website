"use client";

import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

interface ContactFormData {
  fullName: string;
  email: string;
  organization: string;
  platformInterest: "NexusOne" | "FlowOS" | "Custom Architecture";
  message: string;
}

export default function CTA() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    defaultValues: {
      platformInterest: "NexusOne",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    const recipient = "tanush@dtabs.tech";
    const subject = `Inquiry: ${data.platformInterest} - ${data.fullName}${data.organization ? ` (${data.organization})` : ""
      }`;

    const body = `Name: ${data.fullName}
Email: ${data.email}
Organization: ${data.organization || "N/A"}
Platform Interest: ${data.platformInterest}

Message:
${data.message}`;

    // Directly open default mail client with formatted data
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f8f8f6] py-28 text-[#111] sm:py-36 lg:py-44"
    >
      {/* Background Grid Pattern */}
      {/* <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:4rem_4rem]" /> */}

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
            {/* <div className="inline-flex items-center gap-2.5 rounded-full border border-black/[0.08] bg-white/80 px-3.5 py-1.5 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs font-medium tracking-tight text-[#444]">
                Accepting new enterprise partnerships
              </span>
            </div> */}

            <h2 className="mt-8 text-[clamp(2.6rem,5vw,5.2rem)] font-medium leading-[0.98] tracking-[-0.05em] text-[#111]">
              Technology that <br />
              moves organizations <br />
              <span className="text-[#8e8e8e]">forward.</span>
            </h2>

            <p className="mt-8 max-w-[460px] text-base leading-relaxed text-[#666]">
              Fill out your platform requirements and we'll draft the
              conversation directly in your mail app.
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
                  <Phone size={17} strokeWidth={1.8} />
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

          {/* RIGHT: Form Card */}
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
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <h3 className="text-xl font-medium tracking-tight text-[#111]">
                  Initiate an inquiry
                </h3>
                <p className="mt-1 text-xs text-[#777]">
                  Submit below to open your email client with all details
                  structured.
                </p>
              </div>

              {/* Name & Email */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-[#777]">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Your Good Name"
                    {...register("fullName", {
                      required: "Full name is required",
                    })}
                    className={`mt-2 w-full rounded-xl border bg-[#fcfcfb] px-4 py-3 text-sm text-[#111] placeholder:text-[#aaa] focus:bg-white focus:outline-none focus:ring-1 ${errors.fullName
                      ? "border-red-500 focus:ring-red-500"
                      : "border-black/[0.1] focus:ring-black"
                      }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1.5 text-xs text-red-500">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-[#777]">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    placeholder="your.email@company.com"
                    {...register("email", {
                      required: "Work email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className={`mt-2 w-full rounded-xl border bg-[#fcfcfb] px-4 py-3 text-sm text-[#111] placeholder:text-[#aaa] focus:bg-white focus:outline-none focus:ring-1 ${errors.email
                      ? "border-red-500 focus:ring-red-500"
                      : "border-black/[0.1] focus:ring-black"
                      }`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Organization & Platform Interest */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-[#777]">
                    Organization
                  </label>
                  <input
                    type="text"
                    placeholder="Institution / Company"
                    {...register("organization")}
                    className="mt-2 w-full rounded-xl border border-black/[0.1] bg-[#fcfcfb] px-4 py-3 text-sm text-[#111] placeholder:text-[#aaa] focus:bg-white focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-[#777]">
                    Platform of Interest
                  </label>
                  <select
                    {...register("platformInterest")}
                    className="mt-2 w-full rounded-xl border border-black/[0.1] bg-[#fcfcfb] px-4 py-3 text-sm text-[#111] focus:bg-white focus:outline-none focus:ring-1 focus:ring-black"
                  >
                    <option value="NexusOne">NexusOne (Education)</option>
                    <option value="FlowOS">FlowOS (Enterprise)</option>
                    <option value="Custom Architecture">
                      Custom Architecture
                    </option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-[#777]">
                  Project Details or Inquiries *
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your systems, scale, and operational requirements..."
                  {...register("message", {
                    required: "Please provide a brief message",
                  })}
                  className={`mt-2 w-full rounded-xl border bg-[#fcfcfb] px-4 py-3 text-sm text-[#111] placeholder:text-[#aaa] focus:bg-white focus:outline-none focus:ring-1 ${errors.message
                    ? "border-red-500 focus:ring-red-500"
                    : "border-black/[0.1] focus:ring-black"
                    }`}
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-[#111] py-4 text-sm font-medium !text-white shadow-[0_10px_25px_rgba(0,0,0,0.1)] transition-all hover:shadow-[0_16px_35px_rgba(0,0,0,0.2)] active:scale-[0.99]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Draft email message
                  <ArrowUpRight
                    size={16}
                    strokeWidth={2}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
                <div className="absolute inset-0 z-0 h-full w-full -translate-x-full bg-gradient-to-r from-[#333] to-[#1a1a1a] transition-transform duration-500 ease-out group-hover:translate-x-0" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

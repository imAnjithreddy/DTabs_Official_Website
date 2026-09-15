"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { ArrowUpRight, Globe } from "lucide-react";

const navigation = {
  platforms: [
    { name: "NexusOne", href: "https://www.nexus-one.in/", tag: "Education" },
    {
      name: "FlowOS",
      href: "https://flowos-frontend.vercel.app/",
      tag: "Enterprise",
    },
  ],
  company: [
    { name: "About DTABS", href: "about" },
    { name: "Our Philosophy", href: "technology" },
    { name: "Impact & Scale", href: "impact" },
    { name: "Careers", href: "careers" },
  ],
  legal: [
    { name: "Privacy Policy", href: "home" },
    { name: "Terms of Service", href: "home" },
    { name: "Security & Trust", href: "home" },
  ],
  socials: [
    { name: "LinkedIn", href: "https://linkedin.com" },
    { name: "X (Twitter)", href: "https://twitter.com" },
    { name: "GitHub", href: "https://github.com" },
  ],
};

export default function Footer() {
  const [istTime, setIstTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setIstTime(new Intl.DateTimeFormat("en-GB", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative w-full border-t border-black/[0.08] bg-[#f8f8f6] text-[#111]">
      <div className="mx-auto max-w-[1440px] px-6 pt-24 pb-12 sm:px-10 lg:px-16">
        {/* TOP: Brand Identity & Link Columns */}
        <div className="grid gap-16 lg:grid-cols-[1.1fr_1.9fr] lg:gap-20">
          {/* Brand Left Column */}
          <div className="flex flex-col justify-between">
            <div className="max-w-md">
              <Link href="/" className="inline-block">
                <span className="text-3xl font-medium tracking-[-0.04em] text-[#111]">
                  DTabs Technologies
                </span>
              </Link>

              <p className="mt-4 text-base leading-relaxed text-[#666]">
                Engineering intelligent digital operating platforms that
                dismantle complexity — built in India, architected for global
                scale.
              </p>

              {/* Live Location / Time Capsule */}
              <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-black/[0.08] bg-white px-4 py-2 text-xs font-mono text-[#555] shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
                <Globe size={14} className="text-[#888]" />
                <span>HQ: Bengaluru (IST)</span>
                <span className="h-1 w-1 rounded-full bg-black/30" />
                <span className="font-semibold text-[#111]">
                  {istTime || "10:01:32"}
                </span>
              </div>
            </div>

            {/* Note badge */}
            <p className="mt-12 text-xs leading-relaxed text-[#888]">
              Operating mission-critical systems across education and enterprise
              environments.
            </p>
          </div>

          {/* Nav Links Grid */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:gap-8">
            {/* Platforms */}
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#999]">
                Platforms
              </p>
              <ul className="mt-6 space-y-3.5">
                {navigation.platforms.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 text-sm font-medium text-[#333] transition-colors hover:text-black"
                    >
                      <span>{item.name}</span>
                      <ArrowUpRight
                        size={13}
                        className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#999]">
                Company
              </p>
              <ul className="mt-6 space-y-3.5">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <ScrollLink
                      to={item.href}
                      smooth
                      duration={700}
                      offset={-80}
                      spy={true}
                      activeClass="text-black"
                      className="cursor-pointer text-sm font-medium text-[#555] transition-colors hover:text-black"
                    >
                      {item.name}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#999]">
                Governance
              </p>
              <ul className="mt-6 space-y-3.5">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <ScrollLink
                      to={item.href}
                      smooth
                      duration={700}
                      offset={-80}
                      spy={true}
                      className="text-sm font-medium text-[#555] transition-colors hover:text-black cursor-pointer"
                    >
                      {item.name}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials */}
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#999]">
                Connect
              </p>
              <ul className="mt-6 space-y-3.5">
                {navigation.socials.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 text-sm font-medium text-[#555] transition-colors hover:text-black"
                    >
                      <span>{item.name}</span>
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-black/[0.08] pt-8 sm:flex-row sm:items-center">
          <p className="font-mono text-xs text-[#888]">
            © {new Date().getFullYear()} DTABS Technologies Pvt. Ltd. All rights
            reserved.
          </p>

          <div className="flex items-center gap-6 font-mono text-xs text-[#888]">
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              All Systems Operational
            </span>
            <span className="hidden sm:inline">·</span>
            <span>Bengaluru · Worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

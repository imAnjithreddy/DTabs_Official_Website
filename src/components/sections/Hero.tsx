// "use client";

// import { motion } from "framer-motion";
// import { ArrowUpRight } from "lucide-react";
// import Link from "next/link";

// export default function Hero() {
//   return (
//     <section id="home" className="relative bg-[#f7f7f5]">
//       <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
//         <div className="grid min-h-[calc(100vh-80px)] items-center gap-16 py-28 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
//           {/* LEFT */}

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{
//               duration: 0.8,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="relative z-10"
//           >
//             <div className="mb-8 flex items-center gap-3">
//               <span className="h-px w-8 bg-black" />

//               <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#888]">
//                 Technology for a smarter tomorrow
//               </span>
//             </div>

//             <h1 className="max-w-[680px] text-[clamp(3.5rem,6.2vw,6.4rem)] font-medium leading-[0.94] tracking-[-0.065em] text-[#111]">
//               We build the
//               <br />
//               systems behind
//               <br />
//               <span className="text-[#777]">better work.</span>
//             </h1>

//             <p className="mt-9 max-w-[520px] text-[16px] leading-7 text-[#666]">
//               DTABS Technologies designs and builds intelligent digital
//               platforms that connect people, processes, data, and technology —
//               from education to enterprise.
//             </p>

//             <div className="mt-9 flex items-center gap-7">
//               <Link
//                 href="#products"
//                 className="group inline-flex items-center gap-3 rounded-full bg-[#111] px-6 py-3.5 text-sm font-medium !text-white transition-all duration-300 hover:-translate-y-0.5"
//               >
//                 Explore our products
//                 <ArrowUpRight
//                   size={16}
//                   strokeWidth={1.7}
//                   className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//                 />
//               </Link>

//               <Link
//                 href="#about"
//                 className="group relative text-sm font-medium text-[#222]"
//               >
//                 About DTABS
//                 <span className="absolute -bottom-1 left-0 h-px w-full bg-black transition-transform duration-300 group-hover:scale-x-0" />
//               </Link>
//             </div>

//             <div className="mt-16 flex flex-wrap gap-6 text-[10px] uppercase tracking-[0.2em] text-[#999]">
//               <span>Education</span>
//               <span>Enterprise</span>
//               <span>Intelligence</span>
//             </div>
//           </motion.div>

//           {/* RIGHT — SINGLE LARGE COMPANY IMAGE */}

//           <motion.div
//             initial={{ opacity: 0, scale: 0.97, x: 25 }}
//             animate={{ opacity: 1, scale: 1, x: 0 }}
//             transition={{
//               duration: 1,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="relative"
//           >
//             <div className="relative overflow-hidden rounded-[28px]">
//               {/* Replace this image later */}
//               <img
//                 src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=85"
//                 alt="People working with technology"
//                 className="h-[520px] w-full object-cover sm:h-[600px] lg:h-[650px]"
//               />

//               {/* Image overlay */}

//               <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

//               {/* Image caption */}

//               <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between text-white">
//                 <div>
//                   <p className="text-[11px] uppercase tracking-[0.2em] text-white/60">
//                     DTABS Technologies
//                   </p>

//                   <p className="mt-2 max-w-[300px] text-xl font-medium leading-tight">
//                     Building technology that moves organizations forward.
//                   </p>
//                 </div>

//                 <div className="hidden h-11 w-11 items-center justify-center rounded-full border border-white/30 backdrop-blur-sm sm:flex">
//                   <ArrowUpRight size={18} />
//                 </div>
//               </div>
//             </div>

//             {/* Small floating information */}

//             <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-black/[0.06] bg-white px-5 py-4 shadow-[0_15px_50px_rgba(0,0,0,0.08)] sm:block">
//               <p className="text-[9px] uppercase tracking-[0.16em] text-[#999]">
//                 Our focus
//               </p>

//               <p className="mt-1 text-sm font-medium text-[#222]">
//                 People · Process · Technology
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       <div className="h-px bg-black/[0.08]" />
//     </section>
//   );
// }

"use client";

import { useRef, MouseEvent } from "react";
import { Link as ScrollLink } from "react-scroll";
import { ArrowUpRight, Sparkles } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const magneticBtnRef = useRef<HTMLAnchorElement>(null);

  // ----------------------------------------------------
  // GSAP INTRO TIMELINE & ENTRANCE ANIMATIONS
  // ----------------------------------------------------
  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // 1. Initial State Setup
      gsap.set(".badge-pill", { opacity: 0, y: -15 });
      gsap.set(".reveal-line", { yPercent: 120, rotateZ: 2 });
      gsap.set(".fade-item", { opacity: 0, y: 25 });
      gsap.set(".visual-mask", { clipPath: "inset(100% 0% 0% 0% round 32px)" });
      gsap.set(".visual-img", { scale: 1.25 });
      gsap.set(".floating-card", { opacity: 0, y: 30, scale: 0.92 });

      // 2. Coordinated Sequence
      tl.to(".badge-pill", {
        opacity: 1,
        y: 0,
        duration: 0.8,
      })
        .to(
          ".reveal-line",
          {
            yPercent: 0,
            rotateZ: 0,
            duration: 1.1,
            stagger: 0.12,
          },
          "-=0.5",
        )
        .to(
          ".visual-mask",
          {
            clipPath: "inset(0% 0% 0% 0% round 32px)",
            duration: 1.4,
            ease: "expo.inOut",
          },
          "-=1.0",
        )
        .to(
          ".visual-img",
          {
            scale: 1,
            duration: 1.6,
            ease: "power3.out",
          },
          "-=1.4",
        )
        .to(
          ".fade-item",
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.08,
          },
          "-=1.1",
        )
        .to(
          ".floating-card",
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: "back.out(1.6)",
          },
          "-=0.7",
        );
    },
    { scope: containerRef },
  );

  // ----------------------------------------------------
  // INTERACTIVE 3D TILT ON IMAGE HOVER
  // ----------------------------------------------------
  const handleImageMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!imageWrapperRef.current) return;
    const rect = imageWrapperRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xPercent = (x / rect.width - 0.5) * 2;
    const yPercent = (y / rect.height - 0.5) * 2;

    gsap.to(".visual-img", {
      x: xPercent * 15,
      y: yPercent * 15,
      scale: 1.05,
      duration: 0.6,
      ease: "power2.out",
    });

    gsap.to(".floating-card", {
      x: -xPercent * 12,
      y: -yPercent * 12,
      duration: 0.6,
      ease: "power2.out",
    });
  };

  const handleImageMouseLeave = () => {
    gsap.to(".visual-img", {
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.9,
      ease: "power2.out",
    });
    gsap.to(".floating-card", {
      x: 0,
      y: 0,
      duration: 0.9,
      ease: "power2.out",
    });
  };

  // ----------------------------------------------------
  // MAGNETIC PRIMARY BUTTON EFFECT
  // ----------------------------------------------------
  //   const handleButtonMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
  //     if (!magneticBtnRef.current) return;
  //     const rect = magneticBtnRef.current.getBoundingClientRect();
  //     const x = e.clientX - rect.left - rect.width / 2;
  //     const y = e.clientY - rect.top - rect.height / 2;

  //     gsap.to(magneticBtnRef.current, {
  //       x: x * 0.28,
  //       y: y * 0.28,
  //       duration: 0.3,
  //       ease: "power2.out",
  //     });
  //   };
  const handleButtonMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Use e.currentTarget or your GSAP target here
    gsap.to(e.currentTarget, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleButtonMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    gsap.to(e.currentTarget, {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: "elastic.out(1, 0.3)",
    });
  };

  //   const handleButtonMouseLeave = () => {
  //     if (!magneticBtnRef.current) return;
  //     gsap.to(magneticBtnRef.current, {
  //       x: 0,
  //       y: 0,
  //       duration: 0.6,
  //       ease: "elastic.out(1.1, 0.4)",
  //     });
  //   };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#FBFBFA] text-[#121212] selection:bg-black selection:text-white"
    >
      {/* Subtle Background Accent Blur */}
      <div className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-gradient-to-bl from-[#ECECE8] to-transparent opacity-60 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <div className="grid min-h-[calc(100vh-80px)] items-center gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 xl:gap-20">
          {/* ===================== LEFT COLUMN ===================== */}
          <div className="flex flex-col justify-center">
            {/* Tagline / Indicator Pill */}
            {/* <div className="badge-pill mb-8 inline-flex items-center gap-2.5 self-start rounded-full border border-black/[0.08] bg-white/70 px-4 py-1.5 shadow-[0_2px_12px_rgba(0,0,0,0.03)] backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#666]">
                Technology for a smarter tomorrow
              </span>
            </div> */}

            {/* Masked Typographic Headline */}
            <h1 className="max-w-[720px] text-[clamp(2.8rem,5.8vw,6.2rem)] font-medium leading-[0.98] tracking-[-0.055em] text-[#0d0d0d]">
              <span className="block overflow-hidden py-1">
                <span className="reveal-line block">We build the</span>
              </span>
              <span className="block overflow-hidden py-1">
                <span className="reveal-line block">systems behind</span>
              </span>
              <span className="block overflow-hidden py-1">
                <span className="reveal-line block text-[#737373]">
                  better work.
                </span>
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="fade-item mt-8 max-w-[530px] text-base sm:text-lg leading-relaxed text-[#5c5c5c] font-normal">
              DTabs Technologies designs and builds intelligent digital
              platforms that connect people, processes, data, and technology —
              from education to enterprise.
            </p>

            {/* Interactive Call-to-Actions */}
            <div className="fade-item mt-10 flex flex-wrap items-center gap-6 sm:gap-8">
              <ScrollLink
                // ref={magneticBtnRef}
                to="products"
                onMouseMove={handleButtonMouseMove}
                onMouseLeave={handleButtonMouseLeave}
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#111] px-7 py-4 text-sm font-medium !text-white shadow-[0_12px_32px_rgba(0,0,0,0.14)] transition-all hover:shadow-[0_18px_40px_rgba(0,0,0,0.22)]"
              >
                <span className="relative z-10 flex items-center gap-2.5">
                  Explore our products
                  <ArrowUpRight
                    size={17}
                    strokeWidth={2}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
                <div className="absolute inset-0 z-0 h-full w-full -translate-x-full bg-gradient-to-r from-[#2c2c2c] to-[#181818] transition-transform duration-500 ease-out group-hover:translate-x-0" />
              </ScrollLink>

              {/* <ScrollLink
                to="about"
                className="group relative inline-flex items-center text-sm font-medium tracking-tight text-[#222] transition-colors hover:text-black"
              >
                About DTABS
                <span className="absolute -bottom-1 left-0 h-[1.5px] w-full origin-left scale-x-100 bg-black transition-transform duration-300 ease-out group-hover:scale-x-0" />
              </ScrollLink> */}

              <ScrollLink
                to="about"
                smooth={true}
                duration={600}
                className="group relative inline-flex cursor-pointer items-center gap-2.5 rounded-full border border-black/10 bg-black/[0.02] px-6 py-3.5 text-sm font-medium tracking-tight text-[#222] backdrop-blur-sm transition-all duration-300 hover:border-black/25 hover:bg-white hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] active:scale-[0.98]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-black/40 transition-transform duration-300 group-hover:scale-125 group-hover:bg-black" />
                <span>About DTABS</span>
              </ScrollLink>
            </div>

            {/* Category Pillars */}
            <div className="fade-item mt-16 flex flex-wrap items-center gap-6 border-t border-black/[0.07] pt-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8e8e8e]">
              <span className="transition-colors hover:text-black">
                01 / Education
              </span>
              <span className="h-3 w-px bg-black/[0.12]" />
              <span className="transition-colors hover:text-black">
                02 / Enterprise
              </span>
              <span className="h-3 w-px bg-black/[0.12]" />
              <span className="transition-colors hover:text-black">
                03 / Intelligence
              </span>
            </div>
          </div>

          {/* ===================== RIGHT COLUMN (VISUAL SHOWCASE) ===================== */}
          <div
            ref={imageWrapperRef}
            onMouseMove={handleImageMouseMove}
            onMouseLeave={handleImageMouseLeave}
            className="relative flex items-center justify-center lg:justify-end"
          >
            {/* Masked Card Wrapper */}
            <div className="visual-mask relative w-full max-w-[580px] h-[520px] sm:h-[620px] lg:h-[680px] overflow-hidden rounded-[32px] bg-neutral-200 shadow-[0_24px_64px_rgba(0,0,0,0.08)]">
              {/* Media Image */}
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=85"
                alt="Modern collaborative workspace"
                className="visual-img absolute inset-0 h-full w-full object-cover will-change-transform"
              />

              {/* Cinematic Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

              {/* Bottom Overlaid Metadata */}
              <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between text-white">
                <div className="max-w-[320px]">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[10px] font-medium tracking-[0.16em] uppercase backdrop-blur-md">
                    <Sparkles size={11} className="text-amber-300" />
                    DTabs Technologies
                  </div>
                  <p className="mt-3.5 text-xl sm:text-2xl font-medium leading-snug tracking-tight">
                    Building technology that moves organizations forward.
                  </p>
                </div>

                <div className="hidden h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-md transition-transform duration-300 hover:scale-110 sm:flex">
                  <ArrowUpRight size={20} className="text-white" />
                </div>
              </div>
            </div>

            {/* Interactive Floating Pill Card */}
            <div className="floating-card pointer-events-none absolute -bottom-15 -left-6 z-20 hidden rounded-2xl border border-black/[0.06] bg-white/90 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.1)] backdrop-blur-xl sm:block will-change-transform">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8e8e8e]">
                Core Pillars
              </span>
              <div className="mt-1.5 flex items-center gap-2.5 text-sm font-semibold tracking-tight text-[#111]">
                <span>People</span>
                <span className="h-1 w-1 rounded-full bg-neutral-300" />
                <span>Process</span>
                <span className="h-1 w-1 rounded-full bg-neutral-300" />
                <span>Technology</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edge Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/[0.08] to-transparent" />
    </section>
  );
}

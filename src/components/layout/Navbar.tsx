"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ArrowUpRight, Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

const navItems = [
  {
    label: "Technology",
    target: "technology",
  },
  {
    label: "About",
    target: "about",
  },
  {
    label: "Contact",
    target: "contact",
  },
];

const products = [
  {
    name: "NexusOne",
    category: "Education Technology",
    description: "Intelligent school operating system",
    href: "https://www.nexus-one.in/",
  },
  {
    name: "FlowOS",
    category: "Enterprise Technology",
    description: "Operating system for modern businesses",
    href: "https://flowos-frontend.vercel.app/",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    setProductsOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6"
      >
        <nav
          className={`
            mx-auto flex h-16 max-w-[1280px] items-center
            justify-between rounded-full px-5
            transition-all duration-500
            ${
              scrolled
                ? "border border-[#e5e5e2] bg-white/85 shadow-[0_8px_30px_rgba(0,0,0,0.04)] backdrop-blur-xl"
                : "border border-transparent bg-transparent"
            }
          `}
        >
          {/* Logo */}
          <ScrollLink
            to="home"
            smooth
            duration={700}
            offset={-80}
            className="group flex cursor-pointer items-center"
            onClick={closeMobile}
          >
            <div className="flex flex-col leading-none">
              <span className="text-[15px] font-semibold tracking-[-0.04em]">
                DTABS
              </span>

              <span className="mt-0.5 text-[7px] font-black tracking-[0.22em] text-[#888884]">
                TECHNOLOGIES
              </span>
            </div>
          </ScrollLink>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {/* Products */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <ScrollLink
                to="products"
                smooth
                duration={700}
                offset={-80}
                type="button"
                onClick={() => setProductsOpen((prev) => !prev)}
                className="group flex items-center gap-1.5 text-[13px] font-medium text-[#555] cursor-pointer "
              >
                Products
                <ChevronDown
                  size={14}
                  strokeWidth={1.7}
                  className={`transition-transform duration-300 ${
                    productsOpen ? "rotate-180" : ""
                  }`}
                />
              </ScrollLink>

              <AnimatePresence>
                {productsOpen && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 8,
                      scale: 0.98,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      y: 8,
                      scale: 0.98,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute left-1/2 top-full mt-3 w-[360px] -translate-x-1/2 rounded-2xl border border-[#e5e5e2] bg-white p-2 shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
                  >
                    {products.map((product) => (
                      <Link
                        key={product.name}
                        href={product.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-start justify-between rounded-xl p-4 transition-colors duration-200 hover:bg-[#f7f7f5]"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[15px] font-medium tracking-[-0.02em]">
                              {product.name}
                            </span>

                            <ArrowUpRight
                              size={13}
                              className="opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                            />
                          </div>

                          <p className="mt-1 text-[11px] uppercase tracking-[0.08em] text-[#999]">
                            {product.category}
                          </p>

                          <p className="mt-2 text-[13px] text-[#666]">
                            {product.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other navigation */}
            {navItems.map((item) => (
              <ScrollLink
                key={item.target}
                to={item.target}
                smooth
                duration={700}
                offset={-80}
                className="cursor-pointer text-[13px] font-medium text-[#555] transition-colors duration-200 hover:text-[#111]"
              >
                {item.label}
              </ScrollLink>
            ))}
          </div>

          {/* Desktop CTA */}
          <ScrollLink
            to="contact"
            smooth
            duration={700}
            offset={-80}
            className="hidden cursor-pointer items-center gap-2 rounded-full bg-[#111] px-4 py-2.5 text-[12px] font-medium !text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#292929] md:flex"
          >
            Let's Talk
            <ArrowUpRight size={14} strokeWidth={1.8} />
          </ScrollLink>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e5e5e2] bg-white md:hidden"
          >
            {mobileOpen ? (
              <X size={17} strokeWidth={1.7} />
            ) : (
              <Menu size={17} strokeWidth={1.7} />
            )}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#f7f7f5] md:hidden"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.05,
                duration: 0.5,
              }}
              className="flex h-full flex-col px-6 pb-8 pt-28"
            >
              <div className="flex flex-col">
                <span className="mb-5 text-[11px] font-medium uppercase tracking-[0.12em] text-[#999]">
                  Navigation
                </span>

                <ScrollLink
                  to="home"
                  smooth
                  duration={700}
                  offset={-80}
                  onClick={closeMobile}
                  className="cursor-pointer border-b border-[#e5e5e2] py-4 text-3xl tracking-[-0.03em]"
                >
                  Home
                </ScrollLink>

                <div className="border-b border-[#e5e5e2]">
                  <button
                    type="button"
                    onClick={() => setProductsOpen((prev) => !prev)}
                    className="flex w-full items-center justify-between py-4 text-left text-3xl tracking-[-0.03em]"
                  >
                    Products
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-300 ${
                        productsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {productsOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-3">
                          {products.map((product) => (
                            <Link
                              key={product.name}
                              href={product.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={closeMobile}
                              className="block rounded-xl px-3 py-3"
                            >
                              <p className="text-lg">{product.name}</p>

                              <p className="mt-1 text-xs text-[#888]">
                                {product.category}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {navItems.map((item) => (
                  <ScrollLink
                    key={item.target}
                    to={item.target}
                    smooth
                    duration={700}
                    offset={-80}
                    onClick={closeMobile}
                    className="cursor-pointer border-b border-[#e5e5e2] py-4 text-3xl tracking-[-0.03em]"
                  >
                    {item.label}
                  </ScrollLink>
                ))}
              </div>

              <div className="mt-auto">
                <ScrollLink
                  to="contact"
                  smooth
                  duration={700}
                  offset={-80}
                  onClick={closeMobile}
                  className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#111] py-4 text-sm font-medium text-white"
                >
                  Let's Talk
                  <ArrowUpRight size={16} />
                </ScrollLink>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

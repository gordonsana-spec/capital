"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
{ label: "Mission", href: "#mission" },
{ label: "Programs", href: "#programs" },
{ label: "Apply", href: "#apply" },
{ label: "Partners", href: "#partners" },
{ label: "Contact", href: "#contact" }];


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ?
        "bg-black/92 backdrop-blur-md border-b border-[#F9A02E]/20" :
        "bg-transparent"}`
        }>

          <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group"
            onClick={(e) => {e.preventDefault();window.scrollTo({ top: 0, behavior: "smooth" });}}>

            {/* Real CCF Logo GIF */}
              <div className="w-20 h-20 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform">
                <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/14430744-852e-4f09-9a51-ce191b92b349/Culture-Capital-Fund_Guidelines-02-resized-1771886423311.webp?width=400&height=400&resize=contain"
                alt="Culture Capital Fund Logo"
                width={80}
                height={80}
                className="w-full h-full object-contain"
                unoptimized />

            </div>
            <div className="hidden sm:block">
              <span
                className="text-white text-sm font-bold tracking-wider uppercase leading-none block !whitespace-pre-line !whitespace-pre-line"
                style={{ fontFamily: "var(--font-bebas-neue)", letterSpacing: "0.12em" }}>{`Culture Capital\nfund`}


              </span>
              <span className="text-[#F9A02E] text-[10px] tracking-widest uppercase leading-none !whitespace-pre-line !whitespace-pre-line">

              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-white/70 hover:text-[#F9A02E] text-sm font-medium tracking-wider uppercase transition-colors duration-200 cursor-pointer">

                {link.label}
              </button>
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => handleNavClick("#apply")}
              className="bg-[#F9A02E] hover:bg-[#ffb84d] text-black text-sm font-bold tracking-wider uppercase px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105 cursor-pointer">

              Apply Now
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white hover:text-[#F9A02E] transition-colors">

            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen &&
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.25 }}
          className="fixed top-0 left-0 right-0 bottom-0 z-40 bg-black/97 backdrop-blur-xl flex flex-col items-center justify-center gap-8">

            <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-white/60 hover:text-white">

              <X size={28} />
            </button>

            {/* Logo in mobile menu */}
            <div className="mb-4 flex items-center gap-3">
              <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/14430744-852e-4f09-9a51-ce191b92b349/Culture-Capital-Fund_Guidelines-02-resized-1771886423311.webp?width=400&height=400&resize=contain"
              alt="Culture Capital Fund Logo"
              width={60}
              height={60}
              className="object-contain"
              unoptimized />

            </div>

            {navLinks.map((link, i) =>
          <motion.button
            key={link.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07 }}
            onClick={() => handleNavClick(link.href)}
            className="text-white hover:text-[#F9A02E] text-4xl uppercase tracking-widest transition-colors cursor-pointer"
            style={{ fontFamily: "var(--font-bebas-neue)" }}>

                {link.label}
              </motion.button>
          )}
            <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: navLinks.length * 0.07 }}
            onClick={() => handleNavClick("#apply")}
            className="mt-4 bg-[#F9A02E] text-black text-xl font-bold uppercase tracking-wider px-8 py-3 rounded-full cursor-pointer hover:bg-[#ffb84d] transition-colors"
            style={{ fontFamily: "var(--font-bebas-neue)" }}>

              Apply Now
            </motion.button>
          </motion.div>
        }
      </AnimatePresence>
    </>);

}
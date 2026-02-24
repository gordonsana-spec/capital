"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

const WORDS = ["CULTURE", "COMMUNITY", "CAPITAL", "CREATION"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayWord, setDisplayWord] = useState(WORDS[0]);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % WORDS.length);
    }, 2200);
    return () => {if (intervalRef.current) clearInterval(intervalRef.current);};
  }, []);

  useEffect(() => {
    setDisplayWord(WORDS[wordIndex]);
  }, [wordIndex]);

  const handleScroll = () => {
    document.querySelector("#mission")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Abstract grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        {[10, 25, 50, 75, 90].map((pct) =>
        <div key={pct} className="absolute top-0 bottom-0 w-px"
        style={{ left: `${pct}%`, background: "rgba(249,160,46,0.04)" }} />
        )}
        {[20, 50, 80].map((pct) =>
        <div key={pct} className="absolute left-0 right-0 h-px"
        style={{ top: `${pct}%`, background: "rgba(249,160,46,0.04)" }} />
        )}
      </div>

      {/* Glow orbs — CCF colors */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
      style={{ background: "radial-gradient(circle, rgba(249,160,46,0.07) 0%, transparent 70%)" }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
      style={{ background: "radial-gradient(circle, rgba(239,61,75,0.05) 0%, transparent 70%)" }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full pointer-events-none"
      style={{ background: "radial-gradient(circle, rgba(51,126,194,0.04) 0%, transparent 70%)" }} />

      {/* Corner brackets */}
      <div className="absolute top-24 left-8 w-12 h-12 border-t-2 border-l-2 border-[#F9A02E]/30 pointer-events-none" />
      <div className="absolute top-24 right-8 w-12 h-12 border-t-2 border-r-2 border-[#F9A02E]/30 pointer-events-none" />
      <div className="absolute bottom-24 left-8 w-12 h-12 border-b-2 border-l-2 border-[#F9A02E]/30 pointer-events-none" />
      <div className="absolute bottom-24 right-8 w-12 h-12 border-b-2 border-r-2 border-[#F9A02E]/30 pointer-events-none" />

      {/* Side label */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-2 pointer-events-none">
        <div className="w-px h-16 bg-[#F9A02E]/30" />
        <span className="text-[#F9A02E]/40 text-[10px] tracking-[0.3em] uppercase"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
          Rotterdam • NL
        </span>
        <div className="w-px h-16 bg-[#F9A02E]/30" />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">

        {/* Logo GIF — centered above headline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex justify-center mb-6">

            <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
                <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/14430744-852e-4f09-9a51-ce191b92b349/Culture-Capital-Fund_Guidelines-02-resized-1771886423311.webp?width=600&height=600&resize=contain"
              alt="Culture Capital Fund"
              width={320}
              height={320}
              className="w-full h-full object-contain"
              unoptimized />

          </div>
        </motion.div>

        {/* Overline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-6">

          <div className="w-8 h-px bg-[#F9A02E]" />
          <span className="text-[#F9A02E] text-xs font-bold tracking-[0.3em] uppercase">
            Development Fund for Urban Arts
          </span>
          <div className="w-8 h-px bg-[#F9A02E]" />
        </motion.div>

        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}>

          <h1
            className="text-[clamp(56px,11vw,140px)] leading-none tracking-tight text-white uppercase"
            style={{ fontFamily: "var(--font-bebas-neue)" }}>

            Culture
          </h1>
          {/* CCF orange gradient on Capital */}
          <h1
            className="text-[clamp(56px,11vw,140px)] leading-none tracking-tight uppercase text-ccf-gradient"
            style={{ fontFamily: "var(--font-bebas-neue)" }}>

            Capital
          </h1>
          <h1
            className="text-[clamp(56px,11vw,140px)] leading-none tracking-tight text-white uppercase"
            style={{ fontFamily: "var(--font-bebas-neue)" }}>

            Fund
          </h1>
        </motion.div>

        {/* Rotating word */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-6 flex items-center justify-center gap-3">

          <span className="text-white/40 text-sm tracking-widest uppercase">Funding</span>
          <span className="text-[#F9A02E] text-sm font-bold tracking-widest uppercase min-w-[120px] text-center">
            <motion.span
              key={displayWord}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="inline-block">

              {displayWord}
            </motion.span>
          </span>
          <span className="text-white/40 text-sm tracking-widest uppercase">In The Netherlands</span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-8 text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed !whitespace-pre-line">
          Empowering community builders & grassroots organizations with knowledge, tools, capital, capacity building, and community to thrive in the Dutch cultural landscape.


        </motion.p>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-12 flex flex-wrap justify-center gap-x-12 gap-y-6">

          {[
          { value: "\u20AC25K", label: "UP TO GRANT", color: "#F9A02E" },
          { value: "100%", label: "Grassroots Focus", color: "#EF3D4B" },
          { value: "NL", label: "Based", color: "#337EC2" },
          { value: "2026", label: "Active Rounds", color: "#F9A02E" }].
          map((stat) =>
          <div key={stat.label} className="text-center">
              <div
              className="text-3xl leading-none !whitespace-pre-line !w-full !h-[30px] !whitespace-pre-line"
              style={{ fontFamily: "var(--font-bebas-neue)", color: stat.color }}>

                {stat.value}
              </div>
              <div className="text-white/40 text-xs tracking-widest uppercase mt-1 !whitespace-pre-line">
                {stat.label}
              </div>
            </div>
          )}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4">

          <button
            onClick={() => document.querySelector("#apply")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-[#F9A02E] hover:bg-[#ffb84d] text-black text-sm font-bold uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 pulse-ccf">

            Apply for Funding
          </button>
          <button
            onClick={() => document.querySelector("#programs")?.scrollIntoView({ behavior: "smooth" })}
            className="border border-white/20 hover:border-[#F9A02E]/60 text-white/80 hover:text-white text-sm font-medium uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-200">

            Explore Programs
          </button>
        </motion.div>
      </div>

      {/* Marquee — CCF discipline words */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-24 left-0 right-0 overflow-hidden border-t border-b border-[#F9A02E]/10 py-3">

        <div className="flex marquee-track whitespace-nowrap gap-12" style={{ width: "200%" }}>
          {[...Array(2)].map((_, i) =>
          <div key={i} className="flex gap-12 items-center">
              {["Hip-Hop", "Urban Arts", "Rotterdam", "Culture", "Community", "Grants", "Music", "Dance", "Graffiti", "Poetry", "Beats", "Flow"].map((w, wi) =>
            <span key={w} className="text-white/20 text-xs tracking-[0.4em] uppercase font-medium">
                  {w}
                  <span
                className="mx-6"
                style={{ color: ["rgba(249,160,46,0.35)", "rgba(239,61,75,0.3)", "rgba(51,126,194,0.3)"][wi % 3] }}>
                ◆</span>
                </span>
            )}
            </div>
          )}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        onClick={handleScroll}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-[#F9A02E] transition-colors cursor-pointer">

        <span className="text-[9px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ArrowDown size={14} />
        </motion.div>
      </motion.button>
    </section>);

}
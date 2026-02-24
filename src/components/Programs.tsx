"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const programs = [
{
  number: "01",
  tag: "Financial Support",
  title: "Grants & Funding",
  subtitle: "Up to €2,500 per project",
  desc: "Direct financial grants for urban makers and collectives. We fund projects with proven grassroots impact — from music production and events to community art installations and cultural education.",
  features: [
  "Communitybuilders",
  "Small grassroots organizations",
  "Project-based or ongoing",
  "Dutch copyright required"],

  accent: "#F9A02E"
},
{
  number: "02",
  tag: "Education",
  title: "Cultural Education",
  subtitle: "Schools & Community",
  desc: "Supporting hip-hop and urban arts education in schools (VMBO, VSO, PRO) and community spaces. We connect culture makers with young people, bringing real artistic knowledge into classrooms.",
  features: [
  "In-school hip-hop programs",
  "Community workshops",
  "Caribbean Kingdom reach",
  "Intergenerational learning"],

  accent: "#EF3D4B"
},
{
  number: "03",
  tag: "Co-Creation",
  title: "Community Projects",
  subtitle: "Intangible Heritage",
  desc: "We invest in projects born from within communities. Whether preserving oral traditions, creating new urban rituals, or documenting street culture — if the community leads it, we back it.",
  features: [
  "Community-led projects",
  "Intangible heritage",
  "Cultural preservation",
  "Urban traditions"],

  accent: "#337EC2"
},
{
  number: "04",
  tag: "Development",
  title: "Capacity Building",
  subtitle: "Entrepreneurial Skills",
  desc: "Beyond the check — we invest in you. Through workshops, mentorship, and masterclasses, we help culture entrepreneurs build sustainable careers and professional networks.",
  features: [
  "Business skills training",
  "Industry mentorship",
  "Network access",
  "Sustainability planning"],

  accent: "#F9A02E"
}];


export default function Programs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="programs" ref={ref} className="relative py-28 bg-[#080808] overflow-hidden">
      {/* BG number */}
      <div className="absolute top-16 right-8 pointer-events-none select-none"
      style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(100px,15vw,200px)", lineHeight: 1, color: "rgba(249,160,46,0.04)" }}>
        02
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#F9A02E]" />
              <span className="text-[#F9A02E] text-xs font-bold tracking-[0.3em] uppercase">What We Fund</span>
            </div>
            <h2 className="text-white uppercase text-[clamp(42px,7vw,80px)] leading-none"
            style={{ fontFamily: "var(--font-bebas-neue)" }}>
              Our{" "}
              <span className="text-ccf-gradient">Programs</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 text-base leading-relaxed">

            Four interconnected pillars designed to support every stage of your journey — from first project to sustainable cultural enterprise.
          </motion.p>
        </div>

        {/* Programs grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {programs.map((prog, i) =>
          <motion.div
            key={prog.number}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 + i * 0.1 }}
            className="urban-card group relative bg-[#0f0f0f] border border-[#1e1e1e] p-8 rounded-2xl overflow-hidden"
            style={{ "--card-accent": prog.accent } as React.CSSProperties}>

              {/* Top accent bar — grows on hover */}
              <div
              className="absolute top-0 left-0 h-1 rounded-t-2xl transition-all duration-500 group-hover:w-full"
              style={{ background: prog.accent, width: "3rem" }} />


              {/* Number */}
              <div className="absolute top-6 right-6 text-6xl leading-none pointer-events-none select-none"
            style={{ fontFamily: "var(--font-bebas-neue)", color: `${prog.accent}10` }}>
                {prog.number}
              </div>

              {/* Tag */}
              <span className="inline-block px-3 py-1 text-[10px] font-bold tracking-widest uppercase mb-4 border rounded-full"
            style={{ borderColor: `${prog.accent}40`, color: prog.accent, background: `${prog.accent}10` }}>
                {prog.tag}
              </span>

              {/* Title */}
              <h3 className="text-white text-4xl leading-none uppercase mb-1"
            style={{ fontFamily: "var(--font-bebas-neue)" }}>
                {prog.title}
              </h3>
              <p className="text-sm font-bold tracking-wider uppercase mb-4" style={{ color: prog.accent }}>
                {prog.subtitle}
              </p>

              {/* Description */}
              <p className="text-white/55 text-sm leading-relaxed mb-6">{prog.desc}</p>

              {/* Features */}
              <ul className="space-y-2">
                {prog.features.map((feat) =>
              <li key={feat} className="flex items-center gap-3 text-white/60 text-sm !whitespace-pre-line">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: prog.accent }} />
                    {feat}
                  </li>
              )}
              </ul>
            </motion.div>
          )}
        </div>

        {/* Bottom codes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-14 text-center">

          <p className="text-white/40 text-sm mb-4">All applicants must adhere to the Dutch cultural codes</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
            { label: "Diversity & Inclusion Code", color: "#F9A02E" },
            { label: "Fair Practice Code", color: "#EF3D4B" },
            { label: "Governance Code Culture", color: "#337EC2" }].
            map((code) =>
            <span key={code.label}
            className="px-4 py-2 border text-xs tracking-wider rounded-full"
            style={{ borderColor: `${code.color}30`, color: `${code.color}80` }}>
                {code.label}
              </span>
            )}
          </div>
        </motion.div>
      </div>

      <div className="section-divider mt-28" />
    </section>);

}
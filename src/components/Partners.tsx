"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const partners = [
{
  name: "Gemeente Rotterdam",
  type: "Government Partner",
  desc: "The city of Rotterdam is a key backer of Culture Capital Fund, recognizing the vital role hip-hop and urban arts play in Rotterdam's cultural identity and social cohesion.",
  tag: "Municipal",
  accent: "#F9A02E"
},
{
  name: "Find n Fund",
  type: "Funding Network",
  desc: "A national platform connecting culture makers to funding opportunities. Together we make grant applications accessible and guide makers through the Dutch funding landscape.",
  tag: "Network",
  accent: "#EF3D4B"
}];


const disciplines = [
{ label: "Hip-Hop", icon: "🎤", color: "#F9A02E" },
{ label: "Breaking", icon: "💃", color: "#EF3D4B" },
{ label: "Graffiti", icon: "🎨", color: "#337EC2" },
{ label: "DJing", icon: "🎧", color: "#F9A02E" },
{ label: "Beatmaking", icon: "🎹", color: "#EF3D4B" },
{ label: "Spoken Word", icon: "📖", color: "#337EC2" },
{ label: "Film", icon: "🎬", color: "#F9A02E" },
{ label: "Dance", icon: "🕺", color: "#EF3D4B" }];


export default function Partners() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="partners" ref={ref} className="relative py-28 bg-[#080808] overflow-hidden">
      {/* BG number */}
      <div className="absolute top-16 right-4 pointer-events-none select-none"
      style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(100px,15vw,200px)", lineHeight: 1, color: "rgba(249,160,46,0.04)" }}>
        04
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16">

          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#F9A02E]" />
            <span className="text-[#F9A02E] text-xs font-bold tracking-[0.3em] uppercase">Partners & Network</span>
          </div>
          <h2 className="text-white uppercase text-[clamp(42px,7vw,80px)] leading-none"
          style={{ fontFamily: "var(--font-bebas-neue)" }}>
            Built With The{" "}
            <span className="text-ccf-gradient">Community</span>
          </h2>
        </motion.div>

        {/* Partners grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {partners.map((partner, i) =>
          <motion.div
            key={partner.name}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
            className="urban-card group relative bg-[#0f0f0f] border border-[#1e1e1e] p-8 rounded-2xl overflow-hidden !w-[466px] !h-[233px]">

              {/* Top accent hover bar */}
              <div
              className="absolute top-0 left-0 h-1 rounded-t-2xl transition-all duration-500 group-hover:w-full"
              style={{ background: partner.accent, width: "1.5rem" }} />


              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="inline-block px-2.5 py-1 text-[9px] font-bold tracking-widest uppercase border rounded-full mb-3 !whitespace-pre-line !whitespace-pre-line"
                style={{ borderColor: `${partner.accent}30`, color: `${partner.accent}70` }}>
                    {partner.tag}
                  </span>
                  <h3 className="text-white text-xl font-bold leading-tight !whitespace-pre-line">{partner.name}</h3>
                  <p className="text-xs tracking-wider uppercase mt-1 !whitespace-pre-line" style={{ color: partner.accent }}>{partner.type}</p>
                </div>
                <div className="w-10 h-10 border rounded-xl flex items-center justify-center flex-shrink-0 ml-4"
              style={{ borderColor: `${partner.accent}20` }}>
                  <span className="text-lg leading-none" style={{ color: `${partner.accent}50`, fontFamily: "var(--font-bebas-neue)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>

              <p className="text-white/50 text-sm leading-relaxed !whitespace-pre-line">{partner.desc}</p>
            </motion.div>
          )}
        </div>

        {/* Disciplines we fund */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-[#0f0f0f] border border-[#1e1e1e] p-8 md:p-10 relative overflow-hidden rounded-2xl">

          <div className="absolute top-0 left-0 right-0 h-px rounded-t-2xl"
          style={{ background: "linear-gradient(90deg, #F9A02E, #EF3D4B, #337EC2)" }} />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
            <div>
              <h3 className="text-white uppercase text-3xl leading-none"
              style={{ fontFamily: "var(--font-bebas-neue)" }}>
                Disciplines We Support
              </h3>
              <p className="text-white/40 text-sm mt-1">The full spectrum of hip-hop and urban arts culture</p>
            </div>
            <div className="w-16 h-px bg-[#F9A02E]/30" />
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-8 gap-4">
            {disciplines.map((d, i) =>
            <motion.div
              key={d.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.05 }}
              className="flex flex-col items-center gap-2 group cursor-default">

                <div className="w-12 h-12 border border-[#1e1e1e] rounded-xl flex items-center justify-center text-xl transition-all duration-200"
              style={{ ["--hover-border" as string]: `${d.color}40` }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = `${d.color}40`}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = "#1e1e1e"}>

                  {d.icon}
                </div>
                <span className="text-white/40 text-[9px] tracking-wider uppercase text-center leading-tight transition-colors duration-200 group-hover:text-white/70">
                  {d.label}
                </span>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>

      <div className="section-divider mt-28" />
    </section>);

}
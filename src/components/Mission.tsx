"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const values = [
{
  icon: "🎤",
  title: "Authentic Voice",
  desc: "We center the voices of hip-hop and urban culture makers who have historically been overlooked by mainstream cultural institutions.",
  color: "#F9A02E"
},
{
  icon: "🤝",
  title: "Community First",
  desc: "Every project must come from within the community — by the people, for the people. Co-creation is non-negotiable.",
  color: "#EF3D4B"
},
{
  icon: "💡",
  title: "Capacity Building",
  desc: "Beyond money, we invest in the entrepreneurial skills of culture makers — business acumen, networking, and sustainability.",
  color: "#337EC2"
},
{
  icon: "🌍",
  title: "Inclusive Culture",
  desc: "We champion diversity and inclusion at every level, ensuring the full spectrum of Dutch urban identity is represented.",
  color: "#F9A02E"
}];


export default function Mission() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="mission" ref={ref} className="relative py-28 bg-[#0a0a0a] spray-bg overflow-hidden">
      {/* Section number */}
      <div className="absolute top-16 right-8 pointer-events-none select-none"
      style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(100px,15vw,200px)", lineHeight: 1, color: "rgba(249,160,46,0.04)" }}>
        01
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16">

          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#F9A02E]" />
            <span className="text-[#F9A02E] text-xs font-bold tracking-[0.3em] uppercase">Our Mission</span>
          </div>
          <h2 className="text-white uppercase text-[clamp(42px,7vw,80px)] leading-none"
          style={{ fontFamily: "var(--font-bebas-neue)" }}>
            Funding The{" "}
            <span className="text-ccf-gradient">Culture</span>
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">

          {/* Left: Mission statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}>

            <p className="text-white/80 text-xl leading-relaxed mb-6">
              Culture Capital Fund is een grassroots ontwikkelingsfonds voor hip-hop en urban arts makers in Nederland.
            </p>
            <p className="text-white/50 text-base leading-relaxed mb-6 !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line">Wij bestaan omdat traditionele financieringssystemen nooit voor ons zijn gebouwd. Geworteld in Rotterdam werken we samen met communitybuilders, collectieven en kleine organisaties die zich identificeren met — en we geven hen de kennis en het kapitaal om te groeien. 
              {" "}
              <strong className="text-white/80">"The Culture"</strong>
            </p>
            <p className="text-white/50 text-base leading-relaxed">
              Een incubator en ontwikkelingsfonds dat is gestart om een inclusieve en gelijkwaardige culturele sector te bevorderen door sterkere{" "}
              <span className="text-[#F9A02E]">cultuurondernemers</span> te creëren. Ons fonds is speciaal ontworpen voor collectieven en grassroots organisaties.
            </p>

            {/* Quote block */}
            <div className="mt-10 pl-6 border-l-2 border-[#F9A02E]">
              <p className="text-white/70 text-lg italic leading-relaxed">
                "Cultuur is wat mensen maken en doen — met hun hoofd, hart en handen."
              </p>
              <p className="text-[#F9A02E] text-sm tracking-widest uppercase mt-3">
                Ons Leidend Principe
              </p>
            </div>
          </motion.div>

          {/* Right: Info card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative">

            <div className="relative bg-[#111] border border-[#1e1e1e] p-8 overflow-hidden rounded-2xl">
              {/* Accent line — orange */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F9A02E] via-[#EF3D4B] to-[#337EC2]" />

              <div className="mb-6">
                <span className="text-[#F9A02E] text-5xl leading-none"
                style={{ fontFamily: "var(--font-bebas-neue)" }}>
                  Who We Are
                </span>
              </div>

              <div className="space-y-5">
                {[
                { label: "Organization Type", value: "Grassroots Development Fund" },
                { label: "Primary Focus", value: "Hip-Hop & Urban Culture" },
                { label: "Location", value: "Rotterdam, Netherlands" },
                { label: "Key Partners", value: "Gemeente Rotterdam, Find n Fund" },
                { label: "Active Since", value: "2024 / 2025 Cycle" },
                { label: "Contact", value: "info@culturecapitalfund.nl" }].
                map((item) =>
                <div key={item.label} className="flex justify-between items-center border-b border-[#1e1e1e] pb-4 last:border-0 last:pb-0">
                    <span className="text-white/40 text-xs tracking-wider uppercase">{item.label}</span>
                    <span className="text-white/90 text-sm font-medium text-right max-w-[55%]">{item.value}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Floating accent squares */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-[#F9A02E]/15 rounded-lg pointer-events-none" />
            <div className="absolute -bottom-8 -right-8 w-24 h-24 border border-[#EF3D4B]/10 rounded-lg pointer-events-none" />
          </motion.div>
        </div>

        {/* Values grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, i) =>
          <motion.div
            key={val.title}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
            className="urban-card bg-[#111] border border-[#1e1e1e] p-6 rounded-xl"
            style={{ borderTopColor: val.color, borderTopWidth: 2 }}>

              <div className="text-3xl mb-4">{val.icon}</div>
              <h3 className="text-white text-lg font-bold tracking-tight mb-3">{val.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{val.desc}</p>
            </motion.div>
          )}
        </div>
      </div>

      <div className="section-divider mt-28" />
    </section>);

}
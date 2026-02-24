"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";

const eligibleList = [
"Communitybuilders",
"Artist collectives and creative groups",
"Small grassroots organizations (not-for-profit or commercial)",
"Projects with a Dutch connection or Dutch copyright",
"Community-led cultural education initiatives",
"Urban heritage and intangible culture projects",
"International projects with proven Dutch demand"];


const notEligible = [
"Large established cultural institutions",
"Production or equipment-only funding requests",
"Projects without community involvement",
"Projects outside the Netherlands/Kingdom"];


const steps = [
{ num: "01", title: "Check Eligibility", desc: "Review the criteria to make sure your project qualifies. When in doubt, email us.", color: "#F9A02E" },
{ num: "02", title: "Prepare Your Story", desc: "Document your project vision, community impact, and how the funding will be used.", color: "#EF3D4B" },
{ num: "03", title: "Submit Application", desc: "Fill out our application form with your project details, budget breakdown, and cultural codes compliance.", color: "#337EC2" },
{ num: "04", title: "Review & Decision", desc: "Our committee reviews applications on a rolling basis. You'll hear back within 4–6 weeks.", color: "#F9A02E" },
{ num: "05", title: "Get Funded", desc: "Approved projects receive funding directly. We stay connected to support your growth.", color: "#EF3D4B" }];


export default function Apply() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [formData, setFormData] = useState({ name: "", email: "", project: "", discipline: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="apply" ref={ref} className="relative py-28 bg-[#0a0a0a] overflow-hidden">
      {/* BG number */}
      <div className="absolute top-16 left-4 pointer-events-none select-none"
      style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(100px,15vw,200px)", lineHeight: 1, color: "rgba(249,160,46,0.04)" }}>
        03
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
            <span className="text-[#F9A02E] text-xs font-bold tracking-[0.3em] uppercase">Get Funded</span>
          </div>
          <h2 className="text-white uppercase text-[clamp(42px,7vw,80px)] leading-none"
          style={{ fontFamily: "var(--font-bebas-neue)" }}>
            Apply For{" "}
            <span className="text-ccf-gradient">Capital</span>
          </h2>
        </motion.div>

        {/* Eligibility grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#0f0f0f] border border-[#1e1e1e] p-8 rounded-2xl"
            style={{ borderTopColor: "#F9A02E", borderTopWidth: 2 }}>

            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <CheckCircle size={18} style={{ color: "#F9A02E" }} />
              Who Can Apply
            </h3>
            <ul className="space-y-3">
              {eligibleList.map((item) =>
              <li key={item} className="flex items-start gap-3 text-white/65 text-sm leading-relaxed !whitespace-pre-line">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#F9A02E] flex-shrink-0 mt-1.5" />
                  {item}
                </li>
              )}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#0f0f0f] border border-[#1e1e1e] p-8 rounded-2xl"
            style={{ borderTopColor: "#EF3D4B", borderTopWidth: 2 }}>

            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <XCircle size={18} className="text-white/30" />
              Not Eligible
            </h3>
            <ul className="space-y-3 mb-8">
              {notEligible.map((item) =>
              <li key={item} className="flex items-start gap-3 text-white/35 text-sm leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#EF3D4B]/40 flex-shrink-0 mt-1.5" />
                  {item}
                </li>
              )}
            </ul>
            <div className="border-t border-[#1e1e1e] pt-6">
              <p className="text-white/40 text-xs leading-relaxed">
                Not sure if you qualify? Send us a brief description at{" "}
                <a href="mailto:info@culturecapitalfund.nl" className="text-[#F9A02E] hover:underline">
                  info@culturecapitalfund.nl
                </a>{" "}
                and we will get back to you.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Application steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20">

          <h3 className="text-white/60 text-xs font-bold tracking-[0.3em] uppercase mb-10">How It Works</h3>
          <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {steps.map((step, i) =>
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
              className="relative">

                {i < steps.length - 1 &&
              <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-gradient-to-r from-[#F9A02E]/30 to-transparent" style={{ zIndex: 0 }} />
              }
                <div className="relative z-10">
                  <div className="text-4xl leading-none mb-3" style={{ fontFamily: "var(--font-bebas-neue)", color: step.color }}>
                    {step.num}
                  </div>
                  <h4 className="text-white font-bold text-sm mb-2">{step.title}</h4>
                  <p className="text-white/40 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Application form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative bg-[#0f0f0f] border border-[#1e1e1e] p-8 md:p-12 overflow-hidden rounded-2xl">

          {/* Multi-color top stripe */}
          <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
          style={{ background: "linear-gradient(90deg, #F9A02E 0%, #EF3D4B 50%, #337EC2 100%)" }} />

          {!submitted ?
          <>
              <h3 className="text-white uppercase text-4xl md:text-5xl leading-none mb-2"
            style={{ fontFamily: "var(--font-bebas-neue)" }}>
                Start Your Application
              </h3>
              <p className="text-white/40 text-sm mb-8">We review all applications. Open rounds in 2025 — apply now.</p>

              <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-white/40 text-xs tracking-widest uppercase">Your Name *</label>
                  <input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your full name or collective name"
                  className="w-full bg-[#0a0a0a] border border-[#222] text-white placeholder-white/20 px-4 py-3 text-sm focus:outline-none focus:border-[#F9A02E]/50 transition-colors rounded-lg" />

                </div>

                <div className="space-y-1">
                  <label className="text-white/40 text-xs tracking-widest uppercase">Email *</label>
                  <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full bg-[#0a0a0a] border border-[#222] text-white placeholder-white/20 px-4 py-3 text-sm focus:outline-none focus:border-[#F9A02E]/50 transition-colors rounded-lg" />

                </div>

                <div className="space-y-1">
                  <label className="text-white/40 text-xs tracking-widest uppercase">Project Name *</label>
                  <input
                  required
                  value={formData.project}
                  onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                  placeholder="Name of your project or initiative"
                  className="w-full bg-[#0a0a0a] border border-[#222] text-white placeholder-white/20 px-4 py-3 text-sm focus:outline-none focus:border-[#F9A02E]/50 transition-colors rounded-lg" />

                </div>

                <div className="space-y-1">
                  <label className="text-white/40 text-xs tracking-widest uppercase">Discipline *</label>
                  <select
                  required
                  value={formData.discipline}
                  onChange={(e) => setFormData({ ...formData, discipline: e.target.value })}
                  className="w-full bg-[#0a0a0a] border border-[#222] text-white px-4 py-3 text-sm focus:outline-none focus:border-[#F9A02E]/50 transition-colors appearance-none cursor-pointer rounded-lg">

                    <option value="" className="bg-[#111]">Select discipline...</option>
                    <option value="music" className="bg-[#111]">Music / Hip-Hop</option>
                    <option value="dance" className="bg-[#111]">Dance / Choreography</option>
                    <option value="visual" className="bg-[#111]">Visual Arts / Graffiti</option>
                    <option value="spoken" className="bg-[#111]">Spoken Word / Poetry</option>
                    <option value="education" className="bg-[#111]">Cultural Education</option>
                    <option value="production" className="bg-[#111]">Film / Production</option>
                    <option value="other" className="bg-[#111]">Other Urban Arts</option>
                  </select>
                </div>

                <div className="md:col-span-2 space-y-1">
                  <label className="text-white/40 text-xs tracking-widest uppercase">Tell Us About Your Project *</label>
                  <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your project, its community impact, and how the funding will be used..."
                  className="w-full bg-[#0a0a0a] border border-[#222] text-white placeholder-white/20 px-4 py-3 text-sm focus:outline-none focus:border-[#F9A02E]/50 transition-colors resize-none rounded-lg" />

                </div>

                <div className="md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <p className="text-white/25 text-xs leading-relaxed max-w-md">
                    By submitting you agree to adhere to the Diversity & Inclusion Code, Fair Practice Code, and Governance Code Culture.
                  </p>
                  <button
                  type="submit"
                  className="bg-[#F9A02E] hover:bg-[#ffb84d] text-black text-sm font-bold uppercase tracking-widest px-10 py-4 rounded-full transition-all duration-200 hover:scale-105 whitespace-nowrap flex-shrink-0">

                    Submit Application
                  </button>
                </div>
              </form>
            </> :

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-16 text-center">

              <div className="text-6xl mb-6">🎤</div>
              <h3 className="text-[#F9A02E] text-5xl uppercase mb-4"
            style={{ fontFamily: "var(--font-bebas-neue)" }}>
                Application Received!
              </h3>
              <p className="text-white/60 text-base max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{formData.name}</strong>. We&apos;ve received your application for{" "}
                <strong className="text-white">{formData.project}</strong>. Our team will review it and get back to you within 4–6 weeks.
              </p>
              <div className="mt-8 flex items-center justify-center gap-2">
                <div className="w-8 h-px bg-[#F9A02E]" />
                <span className="text-[#F9A02E] text-xs tracking-widest uppercase">Stay Creative</span>
                <div className="w-8 h-px bg-[#F9A02E]" />
              </div>
            </motion.div>
          }
        </motion.div>
      </div>

      <div className="section-divider mt-28" />
    </section>);

}
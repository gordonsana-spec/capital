"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Instagram, Youtube, Mail, MapPin, ExternalLink, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const footerLinks = {
  Fund: [
    { label: "Our Mission", href: "#mission" },
    { label: "Programs", href: "#programs" },
    { label: "Apply", href: "#apply" },
    { label: "Partners", href: "#partners" },
  ],
  Culture: [
    { label: "Hip-Hop", href: "#programs" },
    { label: "Urban Arts", href: "#programs" },
    { label: "Education", href: "#programs" },
    { label: "Community", href: "#partners" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Use", href: "#" },
    { label: "Diversity Code", href: "#" },
    { label: "Fair Practice", href: "#" },
  ],
};

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  const scrollTo = (href: string) => {
    if (href === "#") return;
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="contact" ref={ref} className="relative bg-[#050505] overflow-hidden">
      {/* Top gradient stripe — all 3 CCF colors */}
      <div className="h-px" style={{ background: "linear-gradient(90deg, #F9A02E 0%, #EF3D4B 50%, #337EC2 100%)", opacity: 0.6 }} />

      {/* CTA Band */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="relative py-20 md:py-28 border-b border-[#111] overflow-hidden"
      >
        {/* Giant BG text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="text-[#F9A02E]/[0.025] whitespace-nowrap"
            style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(80px,18vw,260px)", lineHeight: 1 }}>
            GET IN TOUCH
          </span>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Contact info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[#F9A02E]" />
                <span className="text-[#F9A02E] text-xs font-bold tracking-[0.3em] uppercase">Contact Us</span>
              </div>
              <h2 className="text-white uppercase leading-none mb-6"
                style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(40px,6vw,72px)" }}>
                Let&apos;s Build{" "}
                <span className="text-ccf-gradient">The Future</span>
                <br />Of Culture
              </h2>
              <p className="text-white/50 text-base leading-relaxed mb-10 max-w-md">
                Have a project in mind? Questions about eligibility? Want to collaborate? We&apos;d love to hear from you. Reach out and let&apos;s talk culture.
              </p>

              {/* Contact details */}
              <div className="space-y-4">
                <a href="mailto:info@culturecapitalfund.nl" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 border border-[#1e1e1e] group-hover:border-[#F9A02E]/40 rounded-xl flex items-center justify-center transition-colors">
                    <Mail size={14} style={{ color: "#F9A02E" }} />
                  </div>
                  <div>
                    <div className="text-white/30 text-[10px] tracking-widest uppercase">Email</div>
                    <div className="text-white/80 text-sm group-hover:text-[#F9A02E] transition-colors">
                      info@culturecapitalfund.nl
                    </div>
                  </div>
                  <ArrowUpRight size={12} className="text-white/20 group-hover:text-[#F9A02E] ml-auto transition-colors" />
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-[#1e1e1e] rounded-xl flex items-center justify-center">
                    <MapPin size={14} style={{ color: "#EF3D4B" }} />
                  </div>
                  <div>
                    <div className="text-white/30 text-[10px] tracking-widest uppercase">Location</div>
                    <div className="text-white/80 text-sm">Rotterdam, Netherlands</div>
                  </div>
                </div>

                <a href="https://www.culturecapitalfund.nl" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 group">
                  <div className="w-10 h-10 border border-[#1e1e1e] group-hover:border-[#337EC2]/40 rounded-xl flex items-center justify-center transition-colors">
                    <ExternalLink size={14} style={{ color: "#337EC2" }} />
                  </div>
                  <div>
                    <div className="text-white/30 text-[10px] tracking-widest uppercase">Website</div>
                    <div className="text-white/80 text-sm group-hover:text-[#337EC2] transition-colors">
                      culturecapitalfund.nl
                    </div>
                  </div>
                  <ArrowUpRight size={12} className="text-white/20 group-hover:text-[#337EC2] ml-auto transition-colors" />
                </a>
              </div>

              {/* Socials */}
              <div className="flex items-center gap-3 mt-8">
                <span className="text-white/20 text-xs tracking-widest uppercase">Follow</span>
                <div className="flex gap-2">
                  {[
                    { icon: <Instagram size={14} />, label: "Instagram", href: "#", color: "#F9A02E" },
                    { icon: <Youtube size={14} />, label: "YouTube", href: "#", color: "#EF3D4B" },
                  ].map((social) => (
                    <a key={social.label} href={social.href} aria-label={social.label}
                      className="w-9 h-9 border border-[#1e1e1e] rounded-xl flex items-center justify-center text-white/40 transition-all duration-200"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = `${social.color}50`;
                        e.currentTarget.style.color = social.color;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "#1e1e1e";
                        e.currentTarget.style.color = "rgba(255,255,255,0.4)";
                      }}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Newsletter */}
            <div>
              <div className="bg-[#0f0f0f] border border-[#1e1e1e] p-8 relative overflow-hidden rounded-2xl">
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                  style={{ background: "linear-gradient(90deg, #F9A02E, #EF3D4B, #337EC2)" }} />

                {!subscribed ? (
                  <>
                    <h3 className="text-white uppercase text-3xl leading-none mb-2"
                      style={{ fontFamily: "var(--font-bebas-neue)" }}>
                      Stay In The Loop
                    </h3>
                    <p className="text-white/40 text-sm mb-6 leading-relaxed">
                      Get notified about open grant rounds, cultural events, and community news. No spam — just culture.
                    </p>

                    <form onSubmit={handleSubscribe} className="space-y-3">
                      <input
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full bg-[#0a0a0a] border border-[#222] text-white placeholder-white/20 px-4 py-3 text-sm focus:outline-none focus:border-[#F9A02E]/50 transition-colors rounded-lg"
                      />
                      <button
                        type="submit"
                        className="w-full bg-[#F9A02E] hover:bg-[#ffb84d] text-black text-sm font-bold uppercase tracking-widest py-3.5 rounded-full transition-all duration-200 hover:scale-[1.02]"
                      >
                        Subscribe
                      </button>
                    </form>

                    <div className="mt-6 pt-6 border-t border-[#1e1e1e]">
                      <p className="text-white/30 text-xs leading-relaxed">
                        Ready to apply? Don&apos;t wait — open rounds fill fast.
                      </p>
                      <button onClick={() => scrollTo("#apply")}
                        className="mt-3 flex items-center gap-2 text-[#F9A02E] text-sm font-bold uppercase tracking-wider hover:underline">
                        Apply for Funding <ArrowUpRight size={14} />
                      </button>
                    </div>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-8 text-center"
                  >
                    <div className="text-4xl mb-4">🎧</div>
                    <h4 className="text-[#F9A02E] text-3xl uppercase mb-2"
                      style={{ fontFamily: "var(--font-bebas-neue)" }}>
                      You&apos;re In!
                    </h4>
                    <p className="text-white/50 text-sm">
                      Welcome to the Culture Capital community. We&apos;ll keep you posted.
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Footer bottom */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 overflow-hidden flex items-center justify-center">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/14430744-852e-4f09-9a51-ce191b92b349/Culture-Capital-Fund_Guidelines-02-resized-1771886423311.webp?width=400&height=400&resize=contain"
                    alt="Culture Capital Fund"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                    unoptimized
                  />
              </div>
              <div>
                <div className="text-white text-xs font-bold tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-bebas-neue)" }}>
                  Culture Capital
                </div>
                <div className="text-[#F9A02E] text-[9px] tracking-widest uppercase">Fund</div>
              </div>
            </div>
            <p className="text-white/30 text-xs leading-relaxed">
              Investing in hip-hop and urban arts makers in the Netherlands.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-white/40 text-[10px] font-bold tracking-[0.25em] uppercase mb-4">{heading}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <button onClick={() => scrollTo(link.href)}
                      className="text-white/50 hover:text-[#F9A02E] text-sm transition-colors cursor-pointer">
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-[#111] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs">
            © 2025 Culture Capital Fund. Rotterdam, Netherlands. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#F9A02E] pulse-ccf" />
            <span className="text-white/20 text-xs">Applications Open 2025</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

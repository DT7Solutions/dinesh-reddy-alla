import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Linkedin,
  ArrowUpRight,
  ShieldCheck,
  ThumbsUp,
  MessageSquare,
  Repeat2,
  Send,
  Globe,
  Layers,
  TrendingUp,
  Users,
} from "lucide-react";
import imgRectangle34 from "../../imports/DineshAllaPortfolio/dfcb74d743d45e2b342af9f04c54f6ed74efd874.png";

const LINKEDIN_URL = "https://www.linkedin.com/in/dineshalla/";

export default function LinkedInSection() {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(248);

  const handleLike = () => {
    setLiked(!liked);
    setLikesCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <section id="linkedin" className="py-16 md:py-20 bg-[#f7faff] relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#0077b5]/10 rounded-full blur-[90px] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#f09800]/10 rounded-full blur-[90px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0077b5]/10 border border-[#0077b5]/20 mb-3">
            <Linkedin className="w-3.5 h-3.5 text-[#0077b5]" />
            <span className="text-[#0077b5] text-xs font-semibold tracking-wider uppercase" style={{ fontFamily: "'Poppins', sans-serif" }}>
              LinkedIn Network
            </span>
          </div>
          <h2
            style={{ fontFamily: "'Afacad Flux', sans-serif", fontWeight: 500 }}
            className="text-[30px] md:text-[40px] text-[#0a1422] leading-tight"
          >
            Connect on LinkedIn
          </h2>
        </div>

        {/* 2-Column Clean Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* ── LEFT: Crisp LinkedIn Profile & Featured Post Card (Cols 6) ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="bg-white rounded-2xl border border-[#e2eaf2] shadow-[0_10px_30px_rgba(0,119,181,0.06)] overflow-hidden">
              
              {/* Header Banner */}
              <div className="h-20 bg-gradient-to-r from-[#0a1422] via-[#0b294c] to-[#0077b5] relative px-4 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 bg-black/40 text-white text-[11px] font-medium px-2.5 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
                  Active Network
                </span>

                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white flex items-center gap-1 text-xs transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>@dineshalla</span>
                </a>
              </div>

              {/* Profile Bar */}
              <div className="px-5 pb-5 pt-0">
                <div className="flex items-end justify-between gap-3 -mt-9 mb-3">
                  <div className="relative">
                    <img
                      src={imgRectangle34}
                      alt="Dinesh Alla"
                      className="w-18 h-18 rounded-full object-cover border-3 border-white shadow-md bg-slate-100"
                    />
                    <div className="absolute bottom-0 right-0 bg-[#0077b5] text-white p-0.5 rounded-full border-2 border-white">
                      <Linkedin className="w-3 h-3 fill-current" />
                    </div>
                  </div>

                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#0077b5] hover:bg-[#005f93] text-white text-xs font-semibold transition-all duration-200 shadow-sm hover:scale-105 active:scale-95"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    <span>Connect</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>

                <div className="mb-4">
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-lg font-bold text-[#0a1422]" style={{ fontFamily: "'Afacad Flux', sans-serif" }}>
                      Dinesh Alla
                    </h3>
                    <ShieldCheck className="w-4 h-4 text-[#0077b5]" />
                  </div>
                  <p className="text-xs text-[#475569] font-medium">
                    Founder &amp; MD @ DT7 Agency • AWS Solutions Architect
                  </p>
                  <p className="text-[11px] text-[#8c9ba5] flex items-center gap-1 mt-0.5">
                    <Globe className="w-3 h-3" />
                    <span>500+ connections • Andhra Pradesh, India</span>
                  </p>
                </div>

                {/* Short Featured Post Box */}
                <div className="bg-[#f8fbfe] rounded-xl p-3.5 border border-[#e8f1f8] space-y-2.5">
                  <div className="flex items-center justify-between text-[11px] text-[#64748b]">
                    <span className="font-semibold text-[#0077b5]">Featured Insight</span>
                    <span>2d ago</span>
                  </div>

                  <p className="text-xs text-[#334155] leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300 }}>
                    &ldquo;Scalable cloud architecture isn&apos;t just about handling traffic peaks—it&apos;s about building lean, modular systems that accelerate business growth.&rdquo;
                  </p>

                  <div className="flex items-center justify-between text-[11px] text-[#64748b] border-t border-[#e2eaf2] pt-2">
                    <button
                      onClick={handleLike}
                      className={`flex items-center gap-1 transition-colors ${
                        liked ? "text-[#0077b5] font-semibold" : "hover:text-[#0077b5]"
                      }`}
                    >
                      <ThumbsUp className="w-3.5 h-3.5" />
                      <span>{likesCount} Likes</span>
                    </button>

                    <a
                      href={LINKEDIN_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0077b5] hover:underline flex items-center gap-0.5"
                    >
                      <span>Read Post</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>


          {/* ── RIGHT: Concise Content & Direct Actions (Cols 6) ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 space-y-5"
          >
            <div>
              <p
                className="text-[24px] md:text-[28px] font-semibold text-[#0a1422] leading-snug mb-2"
                style={{ fontFamily: "'Afacad Flux', sans-serif" }}
              >
                Let&apos;s Connect, Collaborate &amp; Build Together
              </p>
              <p
                className="text-sm text-[#556987] leading-relaxed"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300 }}
              >
                Follow my journey on LinkedIn for practical breakdowns on AWS cloud systems, tech agency leadership, and digital growth.
              </p>
            </div>

            {/* 3 Short Bullet Points */}
            <div className="space-y-2.5">
              {[
                { icon: Layers, text: "AWS Cloud & Resilient System Architecture" },
                { icon: TrendingUp, text: "Scaling Digital Ventures & E-Commerce" },
                { icon: Users, text: "Technology Advisory & Strategic Partnerships" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-white border border-[#e2eaf2] shadow-xs"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#0077b5]/10 text-[#0077b5] flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs md:text-sm font-medium text-[#1e293b]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Compact Stats */}
            <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-[#0a1422] text-white text-center">
              <div>
                <span className="block text-xl font-bold text-[#f09800]" style={{ fontFamily: "'Afacad Flux', sans-serif" }}>
                  500+
                </span>
                <span className="text-[10px] text-slate-300">Connections</span>
              </div>
              <div className="border-x border-white/15">
                <span className="block text-xl font-bold text-[#38bdf8]" style={{ fontFamily: "'Afacad Flux', sans-serif" }}>
                  11+
                </span>
                <span className="text-[10px] text-slate-300">Yrs in Tech</span>
              </div>
              <div>
                <span className="block text-xl font-bold text-[#4ade80]" style={{ fontFamily: "'Afacad Flux', sans-serif" }}>
                  6+
                </span>
                <span className="text-[10px] text-slate-300">Ventures</span>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-full bg-[#0077b5] hover:bg-[#005f93] text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-95"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <Linkedin className="w-4 h-4 fill-current" />
              <span>Connect with Dinesh Alla</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

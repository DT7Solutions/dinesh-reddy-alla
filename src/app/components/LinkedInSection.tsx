import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Linkedin,
  ArrowUpRight,
  ShieldCheck,
  ThumbsUp,
  Globe,
  TrendingUp,
  Megaphone,
  Code2,
  GraduationCap,
  Building2,
  Sparkles,
  Target,
} from "lucide-react";
import imgRectangle34 from "../../imports/DineshAllaPortfolio/dfcb74d743d45e2b342af9f04c54f6ed74efd874.png";

const LINKEDIN_URL = "https://www.linkedin.com/in/dineshalla/";

export default function LinkedInSection() {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(318);

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
          
          {/* ── LEFT: Crisp LinkedIn Profile & Featured Post Card (Cols 5) ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
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
                      DINESH ALLA
                    </h3>
                    <ShieldCheck className="w-4 h-4 text-[#0077b5]" />
                    <span className="text-[11px] text-[#64748b] font-normal">He/Him</span>
                  </div>
                  <p className="text-xs text-[#334155] font-medium leading-relaxed mt-1">
                    Managing Director @ DT7 Agency | SEO, Google Ads, Meta Ads &amp; Amazon Ads Specialist
                  </p>
                  
                  {/* Affiliations badges */}
                  <div className="mt-2.5 pt-2.5 border-t border-[#f1f5f9] space-y-1.5 text-[11px] text-[#475569]">
                    <div className="flex items-center gap-1.5 font-medium text-[#0f172a]">
                      <Building2 className="w-3.5 h-3.5 text-[#f09800] flex-shrink-0" />
                      <span>DT7 Agency</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-medium text-[#0f172a]">
                      <GraduationCap className="w-3.5 h-3.5 text-[#0077b5] flex-shrink-0" />
                      <span>Indian Institute of Management Visakhapatnam</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-[#64748b] flex items-center gap-1 mt-2">
                    <Globe className="w-3 h-3 text-[#0077b5]" />
                    <span>519 followers • 431 connections • Andhra Pradesh, India</span>
                  </p>
                </div>

                {/* Short Featured Post Box */}
                <div className="bg-[#f8fbfe] rounded-xl p-3.5 border border-[#e8f1f8] space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-[#64748b]">
                    <span className="font-semibold text-[#0077b5] flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Featured Philosophy
                    </span>
                    <span>Recent Insight</span>
                  </div>

                  <p className="text-xs text-[#334155] leading-relaxed italic" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300 }}>
                    &ldquo;Before crafting a strategy, we invest time in understanding unique organizational needs and challenges—delivering measurable digital growth and tangible ROI.&rdquo;
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
                      className="text-[#0077b5] hover:underline flex items-center gap-0.5 font-medium"
                    >
                      <span>View Profile</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>


          {/* ── RIGHT: Enhanced Content Points & Highlights (Cols 7) ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-5"
          >
            <div>
              <p
                className="text-[24px] md:text-[28px] font-semibold text-[#0a1422] leading-snug mb-1.5"
                style={{ fontFamily: "'Afacad Flux', sans-serif" }}
              >
                Driving Digital Success &amp; Scalable Growth
              </p>
              <p
                className="text-xs md:text-sm text-[#556987] leading-relaxed"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300 }}
              >
                Follow my journey on LinkedIn for actionable strategies on multi-channel performance marketing, high-impact web design, and result-driven agency execution.
              </p>
            </div>

            {/* Enhanced Feature Points based on LinkedIn Details */}
            <div className="space-y-3">
              
              {/* Point 1: Performance Marketing & Ads */}
              <div className="p-3.5 rounded-xl bg-white border border-[#e2eaf2] shadow-xs hover:border-[#0077b5]/40 transition-all duration-200">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0077b5]/10 text-[#0077b5] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Target className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="text-xs md:text-sm font-semibold text-[#0a1422]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        Multi-Channel Ads &amp; High-ROI Growth
                      </h4>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#0077b5]/10 text-[#0077b5]">
                        Core Focus
                      </span>
                    </div>
                    <p className="text-xs text-[#556987] leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300 }}>
                      Driving customer acquisition and maximizing return on ad spend across SEO, Google Ads, Facebook Ads, and Amazon Ads.
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {["SEO", "Google Ads", "Facebook Ads", "Amazon Ads", "ROI Optimization"].map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md bg-[#f1f5f9] text-[#334155] text-[10px] font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Point 2: Web Design & Development */}
              <div className="p-3.5 rounded-xl bg-white border border-[#e2eaf2] shadow-xs hover:border-[#f09800]/40 transition-all duration-200">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#f09800]/10 text-[#f09800] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="text-xs md:text-sm font-semibold text-[#0a1422]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        Exceptional Web Design &amp; Development
                      </h4>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#f09800]/10 text-[#f09800]">
                        Full-Cycle
                      </span>
                    </div>
                    <p className="text-xs text-[#556987] leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300 }}>
                      Delivering custom, responsive website design and internet development solutions built to scale from startups to large corporations.
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {["Custom Web Design", "Internet Solutions", "Startups & Enterprises"].map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md bg-[#f1f5f9] text-[#334155] text-[10px] font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Point 3: Strategic Leadership & Agency Innovation */}
              <div className="p-3.5 rounded-xl bg-white border border-[#e2eaf2] shadow-xs hover:border-[#10b981]/40 transition-all duration-200">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#10b981]/10 text-[#10b981] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="text-xs md:text-sm font-semibold text-[#0a1422]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        Strategic Leadership &amp; Continuous Innovation
                      </h4>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#10b981]/10 text-[#10b981]">
                        Leadership
                      </span>
                    </div>
                    <p className="text-xs text-[#556987] leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300 }}>
                      Managing Director at DT7 Agency, dedicated to continuous innovation, achieving clients&apos; core business objectives, and ensuring complete customer satisfaction.
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {["DT7 Agency MD", "Digital Leadership", "Client Satisfaction", "Tangible Results"].map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md bg-[#f1f5f9] text-[#334155] text-[10px] font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Compact Highlighted Stats */}
            <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-[#0a1422] text-white text-center shadow-sm">
              <div>
                <span className="block text-lg md:text-xl font-bold text-[#38bdf8]" style={{ fontFamily: "'Afacad Flux', sans-serif" }}>
                  519+
                </span>
                <span className="text-[10px] text-slate-300">Followers</span>
              </div>
              <div className="border-x border-white/15">
                <span className="block text-lg md:text-xl font-bold text-[#f09800]" style={{ fontFamily: "'Afacad Flux', sans-serif" }}>
                  431+
                </span>
                <span className="text-[10px] text-slate-300">Connections</span>
              </div>
              <div>
                <span className="block text-lg md:text-xl font-bold text-[#4ade80]" style={{ fontFamily: "'Afacad Flux', sans-serif" }}>
                  100%
                </span>
                <span className="text-[10px] text-slate-300">Tangible Results</span>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-full bg-[#0077b5] hover:bg-[#005f93] text-white text-xs md:text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-95"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <Linkedin className="w-4 h-4 fill-current" />
              <span>Connect with Dinesh Alla on LinkedIn</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

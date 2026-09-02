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
  Send,
  Plus,
  ExternalLink,
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* ── LEFT: Rich LinkedIn Profile & Authentic About Card (Cols 6) ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col h-full"
          >
            <div className="bg-white rounded-2xl border border-[#e2eaf2] shadow-[0_10px_30px_rgba(0,119,181,0.06)] overflow-hidden h-full flex flex-col justify-between">
              
              {/* Top Section */}
              <div>
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

                {/* Profile Bar & Body */}
                <div className="px-5 pt-0 space-y-3">
                  
                  {/* Top Avatar & Buttons Row */}
                  <div className="flex items-end justify-between gap-3 -mt-10">
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

                    <div className="flex items-center gap-2">
                      <a
                        href={LINKEDIN_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0077b5] hover:bg-[#005f93] text-white text-xs font-semibold transition-all duration-200 shadow-sm hover:scale-105 active:scale-95"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Follow</span>
                      </a>

                      <a
                        href={LINKEDIN_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-[#0077b5] text-[#0077b5] hover:bg-[#0077b5]/10 text-xs font-medium transition-all"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        <Send className="w-3 h-3" />
                        <span>Message</span>
                      </a>
                    </div>
                  </div>

                  {/* Identity & Headline */}
                  <div className="space-y-1.5">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h3 className="text-lg font-bold text-[#0a1422]" style={{ fontFamily: "'Afacad Flux', sans-serif" }}>
                          DINESH ALLA
                        </h3>
                        <ShieldCheck className="w-4 h-4 text-[#0077b5]" />
                        <span className="text-[11px] text-[#64748b] font-normal">He/Him</span>
                      </div>
                      <p className="text-xs text-[#334155] font-medium leading-relaxed mt-1">
                        Managing Director @DT7 Agency | specialized in driving digital success for businesses through SEO, Google Ads, Facebook Ads, and Amazon Ads. I help brands increase visibility, generate leads, and maximize ROI.
                      </p>
                    </div>

                    {/* Affiliations & Location */}
                    <div className="space-y-1 pt-1.5 border-t border-[#f1f5f9] text-[11px]">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5 font-medium text-[#0f172a]">
                          <Building2 className="w-3.5 h-3.5 text-[#f09800] flex-shrink-0" />
                          <span>DT7 Agency</span>
                        </div>
                        <a
                          href={LINKEDIN_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#0077b5] hover:underline flex items-center gap-1 text-[11px] font-medium"
                        >
                          <span>View company profile</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>

                      <div className="flex items-center gap-1.5 font-medium text-[#0f172a]">
                        <GraduationCap className="w-3.5 h-3.5 text-[#0077b5] flex-shrink-0" />
                        <span>Indian Institute of Management Visakhapatnam</span>
                      </div>

                      <p className="text-[11px] text-[#64748b] flex items-center gap-1 pt-0.5">
                        <Globe className="w-3 h-3 text-[#0077b5]" />
                        <span>Andhra Pradesh, India • 519 followers • 431 connections</span>
                      </p>
                    </div>
                  </div>

                  {/* Authentic About Subsection */}
                  <div className="p-2.5 rounded-xl bg-[#f8fbfe] border border-[#e8f1f8] space-y-1">
                    <span className="text-[10.5px] font-bold text-[#0a1422] uppercase tracking-wider block">
                      About
                    </span>
                    <p className="text-[11.5px] text-[#475569] leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300 }}>
                      DT7 Agency offers exceptional web design, development, and internet marketing solutions. We invest time in understanding unique organizational challenges to deliver tangible results year after year.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Featured Philosophy Box */}
              <div className="px-5 pb-5 pt-3">
                <div className="bg-[#f0f7fc] rounded-xl p-3 border border-[#d9eaf7] space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] text-[#64748b]">
                    <span className="font-semibold text-[#0077b5] flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Featured Philosophy
                    </span>
                    <span>Recent Insight</span>
                  </div>

                  <p className="text-xs text-[#334155] leading-relaxed italic" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300 }}>
                    &ldquo;Scalable growth comes from combining laser-focused multi-channel ad acquisition with robust, high-performance web engineering.&rdquo;
                  </p>

                  <div className="flex items-center justify-between text-[11px] text-[#64748b] border-t border-[#d9eaf7] pt-1.5">
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


          {/* ── RIGHT: Streamlined Content Points & Direct Actions (Cols 6) ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-between h-full space-y-3"
          >
            <div>
              <p
                className="text-[22px] md:text-[25px] font-semibold text-[#0a1422] leading-snug mb-1"
                style={{ fontFamily: "'Afacad Flux', sans-serif" }}
              >
                Driving Digital Success &amp; Scalable Growth
              </p>
              <p
                className="text-xs text-[#556987] leading-relaxed"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300 }}
              >
                Connect on LinkedIn for actionable insights into high-ROI performance marketing, custom web development, and digital agency leadership.
              </p>
            </div>

            {/* Feature Cards filling middle area evenly */}
            <div className="flex-1 flex flex-col justify-between gap-2.5 my-1">
              
              {/* Point 1: Performance Marketing & Ads */}
              <div className="flex-1 p-3 rounded-xl bg-white border border-[#e2eaf2] shadow-xs hover:border-[#0077b5]/40 transition-all duration-200 flex flex-col justify-center">
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#0077b5]/10 text-[#0077b5] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Target className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1 mb-0.5">
                      <h4 className="text-xs font-semibold text-[#0a1422]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        Multi-Channel Ads &amp; High-ROI Growth
                      </h4>
                      <span className="text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-[#0077b5]/10 text-[#0077b5]">
                        Core Focus
                      </span>
                    </div>
                    <p className="text-[11px] text-[#556987] leading-relaxed mb-1.5" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300 }}>
                      Targeted customer acquisition and ROI maximization across SEO, Google Ads, Meta Ads &amp; Amazon Ads.
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {["SEO", "Google Ads", "Meta Ads", "Amazon Ads", "ROI Optimization"].map((tag) => (
                        <span
                          key={tag}
                          className="px-1.5 py-0.5 rounded bg-[#f1f5f9] text-[#334155] text-[9.5px] font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Point 2: Web Design & Development */}
              <div className="flex-1 p-3 rounded-xl bg-white border border-[#e2eaf2] shadow-xs hover:border-[#f09800]/40 transition-all duration-200 flex flex-col justify-center">
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#f09800]/10 text-[#f09800] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Code2 className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1 mb-0.5">
                      <h4 className="text-xs font-semibold text-[#0a1422]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        Exceptional Web Design &amp; Development
                      </h4>
                      <span className="text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-[#f09800]/10 text-[#f09800]">
                        Full-Cycle
                      </span>
                    </div>
                    <p className="text-[11px] text-[#556987] leading-relaxed mb-1.5" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300 }}>
                      Custom responsive website design and scalable internet development engineered for startups and enterprises.
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {["Custom Web Design", "Internet Solutions", "Startups & Enterprises"].map((tag) => (
                        <span
                          key={tag}
                          className="px-1.5 py-0.5 rounded bg-[#f1f5f9] text-[#334155] text-[9.5px] font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Point 3: Strategic Leadership & Agency Innovation */}
              <div className="flex-1 p-3 rounded-xl bg-white border border-[#e2eaf2] shadow-xs hover:border-[#10b981]/40 transition-all duration-200 flex flex-col justify-center">
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#10b981]/10 text-[#10b981] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <TrendingUp className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1 mb-0.5">
                      <h4 className="text-xs font-semibold text-[#0a1422]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        Strategic Leadership &amp; Innovation
                      </h4>
                      <span className="text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-[#10b981]/10 text-[#10b981]">
                        Leadership
                      </span>
                    </div>
                    <p className="text-[11px] text-[#556987] leading-relaxed mb-1.5" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300 }}>
                      Managing Director @ DT7 Agency, dedicated to continuous innovation and delivering tangible business outcomes.
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {["DT7 Agency MD", "Digital Leadership", "Client Satisfaction", "Tangible Results"].map((tag) => (
                        <span
                          key={tag}
                          className="px-1.5 py-0.5 rounded bg-[#f1f5f9] text-[#334155] text-[9.5px] font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* CTA Button */}
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-[#0077b5] hover:bg-[#005f93] text-white text-xs font-semibold shadow-sm hover:shadow transition-all duration-200 hover:scale-[1.01] active:scale-95 mt-auto"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <Linkedin className="w-3.5 h-3.5 fill-current" />
              <span>Connect with Dinesh Alla on LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

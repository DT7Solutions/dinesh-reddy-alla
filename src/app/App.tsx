import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import svgPaths from "../imports/DineshAllaPortfolio/svg-ux7tgka6em";
import imgImage19 from "../imports/DineshAllaPortfolio/ae7ff146b4f0cd8702caa1b9b115640b9a811a06.png";
import imgRectangle34 from "../imports/DineshAllaPortfolio/dfcb74d743d45e2b342af9f04c54f6ed74efd874.png";
import imgArrow1 from "../imports/DineshAllaPortfolio/78169e50f6c898cb645ee892d7c8dd7082c396a9.png";
import imgArrow3 from "../imports/DineshAllaPortfolio/78169e50f6c898cb645ee892d7c8dd7082c396a9.png";
import imgArrow5 from "../imports/DineshAllaPortfolio/87311fc93eced249456d4e21ff54587b04ab3837.png";
import imgArrow2 from "../imports/DineshAllaPortfolio/39311d50c40814cdebc014564a2c324135115f27.png";
import imgIimCertificate from "../imports/DineshAllaPortfolio/iim_certificate.png";
import imgSkillNationCertificate from "../imports/DineshAllaPortfolio/skill_nation_certificate.png";
import imgJConnectCertificate from "../imports/DineshAllaPortfolio/j_connect_certificate.png";
import imgIimSpeech from "../imports/DineshAllaPortfolio/iim_speech.png";
import imgBniMember from "../imports/DineshAllaPortfolio/bni_member.png";
import imgEntrepreneurAwardBadge from "../imports/DineshAllaPortfolio/entrepreneur_award_badge.png";
import imgImage24 from "../imports/DineshAllaPortfolio/ed0d5886e0cbe0515e8fbbcc54f27379a82c2809.png";
import imgImage25 from "../imports/DineshAllaPortfolio/0f910d08394d014585907cf11a1267366e5ae17a.png";
import imgImage26 from "../imports/DineshAllaPortfolio/d6fb729b37b4a58bd76ed7b07aaa37fc50301315.png";
import imgImage27 from "../imports/DineshAllaPortfolio/bc52af5fb41b673e2e8913e0537d62f0efef87d0.png";
import imgImage28 from "../imports/DineshAllaPortfolio/c8aa41f540ace662dccf2342ca9a2eba01848cc2.png";
import imgImage29 from "../imports/DineshAllaPortfolio/7bce286c19fd06c096e3c36dda5ae9fb1814c9c5.png";
import imgEllipse17 from "../imports/DineshAllaPortfolio/b3e478665f65a54c3998b8eea9c580caa58d2df3.png";
import imgImage18 from "../imports/DineshAllaPortfolio/b3cdd2ceeff87513c3dfe606a0471608fbec5eab.png";
import imgImage20 from "../imports/DineshAllaPortfolio/46c931e692faa9a20272963f83fb68b5c8946e3f.png";
import imgImage21 from "../imports/DineshAllaPortfolio/61a2bcb7867173274ae582a3656738234db3a8ed.png";
import imgSignature from "../imports/DineshAllaPortfolio/bc9c5a714f1df6f80d2ec01bae2bb5a0985cd65f.png";
import imgRectangle54 from "../imports/DineshAllaPortfolio-1/adb596bdf7f04cf61b81e9316264b71422c8c6db.png";
import imgRectangle55 from "../imports/DineshAllaPortfolio-1/5e13f4ac72fb20848ec70924bbf391eda493adcc.png";

// ─── Helpers ──────────────────────────────────────────────────────────────────
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Arrow star icon (from SVG paths) ─────────────────────────────────────────
function StarArrow({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 16.5 16.58">
      <path d={svgPaths.pf3e8200} fill="white" />
      <path d={svgPaths.p3f9a38a0} fill="white" />
    </svg>
  );
}

// ─── Circle arrow button ──────────────────────────────────────────────────────
function CircleArrow() {
  return (
    <div className="relative w-11 h-11 flex-shrink-0">
      <svg className="absolute inset-0 w-full h-full" fill="none" viewBox="0 0 44 44">
        <circle cx="22" cy="22" fill="#F09800" r="22" />
        <path d="M15 22.3H29.46" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d={svgPaths.p2bdda6c0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    </div>
  );
}

// ─── NAV ──────────────────────────────────────────────────────────────────────
const NAV_LINKS = ["Home", "About", "Experience", "Portfolio", "Awards", "Partners", "Testimonials"];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrolled = false;
    const fn = () => {
      const isScrolled = window.scrollY > 100;
      if (isScrolled !== lastScrolled) {
        lastScrolled = isScrolled;
        setScrolled(isScrolled);
      }
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scroll = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-[background-color,box-shadow,border-color] duration-300"
      style={{
        background: scrolled ? "#ffffff" : "rgba(255, 255, 255, 0.25)",
        backdropFilter: scrolled ? "none" : "blur(24px) saturate(180%)",
        WebkitBackdropFilter: scrolled ? "none" : "blur(24px) saturate(180%)",
        borderBottom: scrolled ? "1px solid #e5e5e5" : "1px solid rgba(255, 255, 255, 0.6)",
        boxShadow: scrolled
          ? "0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255,255,255,0.8)"
          : "inset 0 1px 0 rgba(255,255,255,0.6)",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 h-[80px] flex items-center justify-between gap-4">
        {/* Logo */}
        <a
          href="#"
          className="text-[28px] md:text-[34px] font-bold leading-none flex-shrink-0"
          style={{ fontFamily: "'Afacad Flux', sans-serif" }}
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        >
          <span style={{ color: "#0c0f22" }}>Dinesh</span>{" "}
          <span style={{ color: "#f09800" }}>Alla</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {NAV_LINKS.map((label, i) => (
            <button
              key={label}
              onClick={() => scroll(label.toLowerCase())}
              className="text-[15px] xl:text-[16px] whitespace-nowrap transition-colors duration-200"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: i === 0 ? 500 : 400,
                color: i === 0 ? "#0c0f22" : "#585858",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f09800")}
              onMouseLeave={(e) => (e.currentTarget.style.color = i === 0 ? "#0c0f22" : "#585858")}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Contact button */}
        <button
          onClick={() => scroll("contact")}
          className="hidden lg:flex items-center justify-center rounded-[22px] text-[16px] font-medium text-white whitespace-nowrap px-6 h-[44px]"
          style={{ background: "#f09800", fontFamily: "'Poppins', sans-serif" }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Contact
        </button>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 flex flex-col gap-1.5"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
        >
          <span className="block w-6 h-0.5 bg-[#0a1422]" style={{ transform: menuOpen ? "rotate(45deg) translate(3px, 3px)" : "" }} />
          <span className="block w-6 h-0.5 bg-[#0a1422]" style={{ opacity: menuOpen ? 0 : 1 }} />
          <span className="block w-6 h-0.5 bg-[#0a1422]" style={{ transform: menuOpen ? "rotate(-45deg) translate(3px, -3px)" : "" }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-[#e5e5e5] px-6 pb-6 flex flex-col gap-4">
          {NAV_LINKS.map((label) => (
            <button
              key={label}
              onClick={() => scroll(label.toLowerCase())}
              className="text-left text-[16px] py-1 text-[#585858]"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => scroll("contact")}
            className="self-start px-6 py-2.5 rounded-[22px] text-white text-[16px]"
            style={{ background: "#f09800", fontFamily: "'Poppins', sans-serif" }}
          >
            Contact
          </button>
        </div>
      )}
    </header>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function Hero() {
  const MARQUEE_ITEMS = [
    "AWS Architect", "Web Development", "Cloud Services",
    "Branding", "Digital Marketing", "Creative Strategies", "Business Amplification",
  ];

  return (
    <section id="home" className="pt-[80px] bg-white overflow-hidden">
      <style>{`
        .founder-stroke {
          color: transparent;
          -webkit-text-stroke: 1.5px #0a1422;
        }
        @media (max-width: 768px) {
          .founder-stroke { -webkit-text-stroke: 1px #0a1422; }
        }
      `}</style>

      {/*
        Figma hero (1440px canvas):
        • "👋 Hi…" intro  — y=170, left≈573px (centered on heading)
        • Heading (84px)  — y=205
            "FOUNDER "     x=154   transparent (stroke)
            "& CEO OF "    x=506   #0a1422
            "DT7 "         x=506   #ea4723 (inline after)
            "AGENCY"       x=1001  transparent (stroke)
        • Photo (452×452) — y=305, centered at x=720
        • Subtitle        — y=774, centered, max-w=791
        • CTA button      — y=845, x≈596; orange circle LEFT, text RIGHT
        • Dark strip      — y=959
      */}

      {/* ── Intro line ── */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="text-center mt-8 text-[16px] md:text-[18px] text-[#0c0f22] px-4"
        style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300 }}
      >
        👋 Hi, I'm Dinesh Alla and I am the
      </motion.p>

      {/* ── Giant heading ──
          Figma canvas = 1440px wide. Exact pixel positions:
            "FOUNDER "   → x=154px  → 154/1440 = 10.69vw   (stroke/outlined)
            "& CEO OF "  → x=506px  → 506/1440 = 35.14vw   (solid #0a1422)
            "DT7 "       → inline after & CEO OF             (#ea4723)
            "AGENCY"     → x=1001px → 1001/1440 = 69.51vw  (#ea4723)
          Font-size = 84px → 84/1440 = 5.83vw
          We use vw units so it scales perfectly at every viewport width.
      ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full mt-3 select-none"
      >
        {/* DESKTOP (md+) — full-bleed, vw-positioned */}
        <div
          className="hidden md:block relative w-full overflow-visible"
          style={{ height: "7vw" }}
        >
          {/* FOUNDER — outlined stroke text */}
          <span
            style={{
              position: "absolute",
              left: "10.69vw",
              top: 0,
              fontFamily: "'Afacad Flux', sans-serif",
              fontWeight: 500,
              fontSize: "5.83vw",
              lineHeight: 1,
              whiteSpace: "nowrap",
              color: "transparent",
              WebkitTextStroke: "1.8px #0a1422",
            }}
          >
            FOUNDER
          </span>

          {/* & CEO OF DT7 — solid dark + red */}
          <span
            style={{
              position: "absolute",
              left: "35.14vw",
              top: 0,
              fontFamily: "'Afacad Flux', sans-serif",
              fontWeight: 500,
              fontSize: "5.83vw",
              lineHeight: 1,
              whiteSpace: "nowrap",
              color: "#0a1422",
            }}
          >
            &amp; CEO OF{" "}
            <span style={{ color: "#ea4723" }}>DT7</span>
          </span>

          {/* AGENCY — transparent fill + #ea4723 stroke (same color as DT7, outlined) */}
          <span
            style={{
              position: "absolute",
              left: "69.51vw",
              top: 0,
              fontFamily: "'Afacad Flux', sans-serif",
              fontWeight: 500,
              fontSize: "5.83vw",
              lineHeight: 1,
              whiteSpace: "nowrap",
              color: "transparent",
              WebkitTextStroke: "1.8px #ea4723",
            }}
          >
            AGENCY
          </span>
        </div>

        {/* MOBILE — centered stacked */}
        <div className="md:hidden text-center px-4">
          <h1
            style={{
              fontFamily: "'Afacad Flux', sans-serif",
              fontWeight: 500,
              fontSize: "clamp(36px, 10vw, 54px)",
              lineHeight: 1.1,
            }}
          >
            <span style={{ color: "transparent", WebkitTextStroke: "1.5px #0a1422" }}>
              FOUNDER
            </span>
            <br />
            <span style={{ color: "#0a1422" }}>&amp; CEO OF </span>
            <span style={{ color: "#ea4723" }}>DT7</span>
            <br />
            <span style={{ color: "transparent", WebkitTextStroke: "1.5px #ea4723" }}>
              AGENCY
            </span>
          </h1>
        </div>
      </motion.div>

      {/* ── Profile photo — centered ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.2 }}
        className="flex justify-center mt-4 md:mt-6"
      >
        <img
          src={imgImage19}
          alt="Dinesh Alla"
          className="object-cover pointer-events-none mt-0 md:-mt-10"
          style={{
            width: "clamp(240px, 31.4vw, 452px)",
            height: "clamp(240px, 31.4vw, 452px)",
          }}
        />
      </motion.div>

      {/* ── Subtitle ── */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center text-[15px] md:text-[18px] text-[#0c0f22] mt-5 mx-auto px-6"
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 300,
          maxWidth: 791,
        }}
      >
        Founder &amp; CEO · DT7 Agency Pvt. Ltd. · AWS Architect · Web Development · Cloud Services · Branding · Digital Marketing · Creative Strategies · Business Amplification
      </motion.p>

      {/* ── CTA button — orange circle LEFT, text RIGHT ── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex justify-center mt-8 mb-12"
      >
        <button
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          className="flex items-center border border-[#0a1422] rounded-[50px] overflow-hidden transition-shadow duration-200"
          style={{ height: 54, paddingRight: 16 }}
          onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 4px 20px rgba(240,152,0,0.28)")}
          onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "")}
        >
          {/* Orange circle with star arrow — on the LEFT */}
          <div
            className="flex-shrink-0 flex items-center justify-center rounded-full"
            style={{ width: 44, height: 44, background: "#f09800", marginLeft: 5 }}
          >
            {/* Star arrow rotated -30° */}
            <div style={{ transform: "rotate(-30deg)", width: 16, height: 16 }}>
              <svg width="16" height="16" fill="none" viewBox="0 0 16.5 16.58">
                <path d={svgPaths.pf3e8200} fill="white" />
                <path d={svgPaths.p3f9a38a0} fill="white" />
              </svg>
            </div>
          </div>
          {/* Text */}
          <span
            className="text-[#0a1422] text-[15px] md:text-[16px] font-medium whitespace-nowrap"
            style={{ fontFamily: "'Poppins', sans-serif", marginLeft: 14, marginRight: 4 }}
          >
            Let's Connect with Me
          </span>
        </button>
      </motion.div>

      {/* ── Dark marquee strip ── */}
      <div className="bg-[#0a1422] h-[61px] overflow-hidden flex items-center">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex items-center whitespace-nowrap"
        >
          {[0, 1].map((ri) => (
            <span key={ri} className="flex items-center">
              {MARQUEE_ITEMS.map((item, i) => (
                <span key={i} className="flex items-center">
                  <span
                    className="text-[15px] md:text-[18px] text-white px-4 md:px-5"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300 }}
                  >
                    {item}
                  </span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <circle cx="6" cy="6" r="6" fill="#F09800" />
                  </svg>
                </span>
              ))}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── ABOUT / MY STORY ─────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" className="bg-[#f6f6f6] py-16 md:py-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[150px]">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">

          {/* ── LEFT: layered photo stack ─────────────────────────────────────── */}
          <Reveal className="flex-shrink-0 w-full flex justify-center h-[390px] min-[400px]:h-[440px] md:h-[530px] md:w-auto">
            <div
              className="origin-top flex-shrink-0 scale-[0.7] min-[400px]:scale-[0.8] md:scale-100"
              style={{ position: "relative", width: 407, height: 530, transformOrigin: "top center" }}
            >
              {/* Dark shadow backdrop */}
              <div
                className="absolute bg-[#020508]"
                style={{ left: 0, top: 0, width: 367, height: 473 }}
              />
              {/* Orange square — top-right corner of dark box */}
              <div
                className="absolute bg-[#f09800]"
                style={{ left: 367 - 15, top: 0, width: 15, height: 15 }}
              />
              {/* Orange square — bottom-left corner area */}
              <div
                className="absolute bg-[#f09800]"
                style={{ left: 0, top: 458, width: 15, height: 15 }}
              />
              {/* Actual photo — offset 40px right, 40px down */}
              <div
                className="absolute overflow-hidden"
                style={{ left: 40, top: 40, width: 367, height: 473 }}
              >
                <img
                  src={imgRectangle34}
                  alt="Dinesh Alla"
                  className="w-full h-full object-cover pointer-events-none"
                />
              </div>
            </div>
          </Reveal>

          {/* ── RIGHT: story text ─────────────────────────────────────────────── */}
          <Reveal delay={0.12} className="flex-1 min-w-0 pt-0 md:pt-2">

            {/* "My Story" heading row:
                - Orange filled rect behind the text (w=184, h=51)
                - "My Story" bold white text 44px (positioned 15px right of orange rect start, 4px higher)
                - Gradient line to the RIGHT of the orange block at the same vertical level
            */}
            <div className="flex items-center gap-0 mb-5 md:mb-6">
              <div className="relative flex-shrink-0" style={{ width: 184, height: 51 }}>
                {/* Orange background */}
                <div className="absolute inset-0 bg-[#f09800]" />
                {/* Text sits 15px from left of orange block */}
                <h2
                  className="absolute text-white font-bold leading-none"
                  style={{
                    fontFamily: "'Afacad Flux', sans-serif",
                    fontSize: 44,
                    left: 15,
                    top: "50%",
                    transform: "translateY(-50%)",
                    whiteSpace: "nowrap",
                  }}
                >
                  My Story
                </h2>
              </div>
              {/* Gradient rule extending to the right of the heading */}
              <div
                className="flex-1 h-[2px] ml-3"
                style={{ background: "linear-gradient(to right, #202020, white)" }}
              />
            </div>

            {/* Bio paragraph 1 */}
            <p
              className="text-[15px] md:text-[16px] leading-relaxed text-[#0c0f22] mb-5"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300 }}
            >
              I began my career in 2013 as a Junior Developer, gaining expertise in software development, database management, and AWS solutions. Over the years, I advanced in technology and leadership, mastering diverse technical domains. In 2022, leveraging nearly a decade of experience, I founded DT7 Solutions, offering cutting-edge digital services such as website development, social media management, and e-commerce solutions across platforms like Amazon. Our mission is to empower clients with innovative strategies to enhance their online presence and drive business growth. Following the tremendous success of DT7 Solutions.
            </p>

            {/* Bio paragraph 2 */}
            <p
              className="text-[15px] md:text-[16px] leading-relaxed text-[#0c0f22]"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300 }}
            >
              I expanded my entrepreneurial ventures by establishing DT7 Agency, where we focus on designing, digital marketing, branding, and crafting innovative strategies to amplify business growth. In addition to my entrepreneurial endeavors, I am also a Managing Partner at Sri Sainadh, Frosinn Rocha, Alanati Ruchulu and NR Constructions.
            </p>

            {/* Signature — dark rectangle masked by the signature image */}
            <div className="mt-6 mb-8">
              <div
                style={{
                  width: 143,
                  height: 44,
                  background: "#0a1422",
                  maskImage: `url(${imgSignature})`,
                  WebkitMaskImage: `url(${imgSignature})`,
                  maskSize: "143px 44px",
                  WebkitMaskSize: "143px 44px",
                  maskRepeat: "no-repeat",
                  WebkitMaskRepeat: "no-repeat",
                  maskPosition: "center",
                  WebkitMaskPosition: "center",
                }}
              />
            </div>

          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ─── EXPERIENCE ───────────────────────────────────────────────────────────────

// Horizontal dashed arrow (→ or ←)
function HDash({ flip = false }: { flip?: boolean }) {
  return (
    <div className="hidden lg:flex items-center justify-center w-full">
      <svg width="160" height="16" viewBox="0 0 160 16" fill="none" style={{ transform: flip ? "scaleX(-1)" : "none" }}>
        <line x1="2" y1="8" x2="148" y2="8" stroke="#c0c0c0" strokeWidth="1" strokeDasharray="4 4" strokeLinecap="round" />
        <line x1="140" y1="3" x2="152" y2="8" stroke="#c0c0c0" strokeWidth="1" strokeLinecap="round" />
        <line x1="140" y1="13" x2="152" y2="8" stroke="#c0c0c0" strokeWidth="1" strokeLinecap="round" />
      </svg>
    </div>
  );
}

// Vertical dashed down arrow
function VDash() {
  return (
    <div className="hidden lg:flex justify-center items-center" style={{ height: 80 }}>
      <svg width="16" height="80" viewBox="0 0 16 80" fill="none">
        <line x1="8" y1="2" x2="8" y2="66" stroke="#c0c0c0" strokeWidth="1" strokeDasharray="4 4" strokeLinecap="round" />
        <line x1="3" y1="58" x2="8" y2="70" stroke="#c0c0c0" strokeWidth="1" strokeLinecap="round" />
        <line x1="13" y1="58" x2="8" y2="70" stroke="#c0c0c0" strokeWidth="1" strokeLinecap="round" />
      </svg>
    </div>
  );
}

// Single experience card
function ExpCard({
  period, role, desc, bg, delay = 0,
}: {
  period: string; role: string; desc: string; bg: string; delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <div
        style={{
          background: bg,
          borderRadius: 20,
          padding: "24px 24px 28px 24px",
          minHeight: 178,
        }}
      >
        {/* Top row: role title + date pill */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginBottom: 16 }}>
          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: 20,
              color: "#000",
              margin: 0,
            }}
          >
            {role}
          </p>
          {/* Dark horizontal pill */}
          <div
            style={{
              background: "#0a1422",
              borderRadius: 50,
              padding: "8px 20px",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 500,
                fontSize: 15,
                color: "white",
                whiteSpace: "nowrap",
              }}
            >
              {period}
            </span>
          </div>
        </div>

        {/* Description */}
        <p
          style={{
            fontFamily: "'Afacad Flux', sans-serif",
            fontWeight: 300,
            fontSize: 17,
            color: "#000",
            lineHeight: 1.55,
            margin: 0,
          }}
        >
          {desc}
        </p>
      </div>
    </Reveal>
  );
}

function Experience() {
  return (
    <section id="experience" className="bg-white py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[150px]">

        {/* ── Section header ── */}
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <h2
                style={{
                  fontFamily: "'Afacad Flux', sans-serif",
                  fontWeight: 500,
                  fontSize: "clamp(28px, 3.33vw, 48px)",
                  color: "#0a1422",
                  lineHeight: 1.15,
                  marginBottom: 8,
                }}
              >
                Experience My Professional Evolution
              </h2>
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 300,
                  fontSize: 15,
                  color: "#0a1422",
                }}
              >
                A Journey of Leadership Innovation &amp; Growth
              </p>
            </div>

            {/* Year badges: dark (2013) flush left, orange (2022) taller on right */}
            <div style={{ display: "flex", alignItems: "flex-end", gap: 0 }}>
              <div style={{ background: "#0a1422", width: 134, height: 50, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 0 }}>
                <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, fontSize: 18, color: "white" }}>2013</span>
              </div>
              <div style={{ background: "#f09800", width: 134, height: 91, display: "flex", alignItems: "flex-start", justifyContent: "center", paddingTop: 16, marginLeft: 8 }}>
                <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, fontSize: 18, color: "white" }}>2022</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ── Snake grid ──
            ROW 1: Left → Right
            GAP:         ↓ (right side)
            ROW 2: Left ← Right
            GAP:  ↓ (left side)
            ROW 3: Left → Right
        */}

        {/* ROW 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_180px_1fr] items-center gap-y-4 lg:gap-y-0">
          <ExpCard period="2013 - 2015" role="Junior Developer"
            desc="Gained foundational programming skills and worked on smaller project components."
            bg="rgba(201,217,253,0.5)" delay={0} />
          <HDash flip={false} />
          <ExpCard period="2015 - 2016" role="Senior Developer"
            desc="Took ownership of critical development tasks and mentored junior team members."
            bg="rgba(254,201,203,0.5)" delay={0.1} />
        </div>

        {/* After row 1: ↓ arrow on RIGHT column */}
        <div className="hidden lg:grid grid-cols-[1fr_180px_1fr]">
          <div />
          <div />
          <VDash />
        </div>

        {/* ROW 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_180px_1fr] items-center gap-y-4 lg:gap-y-0 mt-4 lg:mt-0">
          <ExpCard period="2017 - 2019" role="Team Leader"
            desc="Directed a team of developers, balancing technical guidance with collaboration."
            bg="rgba(254,191,220,0.5)" delay={0.1} />
          <HDash flip={true} />
          <ExpCard period="2016 - 2017" role="Database Engineer"
            desc="Managed database systems, ensuring data integrity and performance optimization."
            bg="rgba(224,251,202,0.5)" delay={0.2} />
        </div>

        {/* After row 2: ↓ arrow on LEFT column */}
        <div className="hidden lg:grid grid-cols-[1fr_180px_1fr]">
          <VDash />
          <div />
          <div />
        </div>

        {/* ROW 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_180px_1fr] items-center gap-y-4 lg:gap-y-0 mt-4 lg:mt-0">
          <ExpCard period="2019 - 2021" role="Project Manager"
            desc="Oversaw project planning, execution, and delivery ensuring alignment with client goals."
            bg="rgba(208,253,232,0.5)" delay={0.2} />
          <HDash flip={false} />
          <ExpCard period="2021 - 2022" role="AWS Architecture"
            desc="Designed scalable, secure, and cost-effective cloud solutions using AWS services."
            bg="rgba(189,252,246,0.5)" delay={0.3} />
        </div>

      </div>
    </section>
  );
}

// ─── EDUCATION ────────────────────────────────────────────────────────────────
const EDUCATION_DATA = [
  {
    id: 1,
    category: "Post Graduation",
    title: "IIM Visakhapatnam",
    description: "I am thrilled that I completed my Post Graduation in Digital Marketing and Growth from IIM Visakhapatnam. This program has sharpened my digital marketing expertise, empowering me to drive growth in the digital era.",
    image: imgIimSpeech,
    filter: "none",
  },
  {
    id: 2,
    category: "Professional Network",
    title: "BNI Guntur",
    description: "I am proud to be a member of BNI Guntur, a vibrant network of business professionals. Being part of this community has enhanced my networking skills and opened new avenues for collaboration.",
    image: imgBniMember,
    filter: "none",
  },
  {
    id: 3,
    category: "Service & Leadership",
    title: "Rotary Club",
    description: "Honored to be a member of the Rotary Club, a global community dedicated to service and leadership. Being part of this esteemed group inspires me to contribute meaningfully to society and foster impactful connections.",
    image: imgEntrepreneurAwardBadge,
    filter: "none",
  }
];

function Education() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const prevIndex = (activeIndex - 1 + EDUCATION_DATA.length) % EDUCATION_DATA.length;
  const nextIndex = (activeIndex + 1) % EDUCATION_DATA.length;

  const activeItem = EDUCATION_DATA[activeIndex];
  const prevItem = EDUCATION_DATA[prevIndex];
  const nextItem = EDUCATION_DATA[nextIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % EDUCATION_DATA.length);
  };

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section
      className="bg-white py-16 md:py-24"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-[150px]">

        {/* Centered title */}
        <Reveal className="text-center mb-14">
          <h2
            className="text-[28px] md:text-[40px] font-medium text-[#0a1422] leading-snug text-center mx-auto"
            style={{ fontFamily: "'Afacad Flux', sans-serif", maxWidth: 591 }}
          >
            Built on Education Defined by Honour Driven by Purpose
          </h2>
        </Reveal>

        {/* Content: grey grid LEFT + text RIGHT */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

          {/* ── Phone mockup image grid ── */}
          <Reveal className="flex-shrink-0 w-full md:w-auto">
            <div className="flex gap-[12px] items-start w-full justify-center md:justify-start">
              {/* Narrow left col: hidden on mobile/tablet, visible on md and up */}
              <div className="hidden md:flex flex-col gap-[12px] flex-shrink-0">
                {/* Top: flipped previous item */}
                <div className="w-[180px] h-[186px] lg:w-[258px] lg:h-[267px] overflow-hidden bg-[#d9d9d9]">
                  <motion.div
                    key={`prev-${prevItem.id}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{ width: "100%", height: "100%" }}
                  >
                    <div style={{ transform: "scale(1,-1) rotate(180deg)", width: "100%", height: "100%" }}>
                      <img
                        src={prevItem.image}
                        alt="Previous mockup"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                          pointerEvents: "none",
                          filter: prevItem.filter
                        }}
                      />
                    </div>
                  </motion.div>
                </div>
                {/* Bottom: normal next item */}
                <div className="w-[180px] h-[186px] lg:w-[258px] lg:h-[267px] overflow-hidden bg-[#d9d9d9]">
                  <motion.div
                    key={`next-${nextItem.id}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{ width: "100%", height: "100%" }}
                  >
                    <img
                      src={nextItem.image}
                      alt="Next mockup"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        pointerEvents: "none",
                        filter: nextItem.filter
                      }}
                    />
                  </motion.div>
                </div>
              </div>
              {/* Wide right col: 1 tall active phone */}
              <div className="w-full max-w-[340px] md:w-[270px] md:h-[381px] lg:w-[387px] lg:h-[546px] aspect-[387/546] md:aspect-auto overflow-hidden bg-[#d9d9d9]">
                <motion.div
                  key={`active-${activeItem.id}`}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  style={{ width: "100%", height: "100%" }}
                >
                  <img
                    src={activeItem.image}
                    alt="Active mockup"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      pointerEvents: "none",
                      filter: activeItem.filter
                    }}
                  />
                </motion.div>
              </div>
            </div>
          </Reveal>

          {/* ── Right text panel ── */}
          <Reveal delay={0.15} className="flex-1 pt-0 lg:pt-16">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* Category label */}
              <p
                style={{
                  fontFamily: "'Afacad Flux', sans-serif",
                  fontWeight: 500,
                  fontSize: 24,
                  color: "#f09800",
                  marginBottom: 8,
                }}
              >
                {activeItem.category}
              </p>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "'Afacad Flux', sans-serif",
                  fontWeight: 500,
                  fontSize: "clamp(32px, 3.33vw, 48px)",
                  color: "#0a1422",
                  lineHeight: 1.15,
                  marginBottom: 16,
                }}
              >
                {activeItem.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: "'Afacad Flux', sans-serif",
                  fontWeight: 400,
                  fontSize: 20,
                  color: "#8b8b8b",
                  lineHeight: 1.6,
                  maxWidth: 453,
                  marginBottom: 32,
                }}
              >
                {activeItem.description}
              </p>
            </motion.div>

            {/* View Next button */}
            <button
              onClick={handleNext}
              className="flex items-center rounded-[50px] overflow-hidden transition-opacity duration-200"
              style={{ background: "#0a1422", height: 54, width: 173, paddingLeft: 20, gap: 0 }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <span
                className="flex-1 text-white text-left"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, fontSize: 16 }}
              >
                View Next
              </span>
              {/* Orange circle with arrow */}
              <div
                className="flex-shrink-0 flex items-center justify-center rounded-full"
                style={{ width: 44, height: 44, background: "#f09800", marginRight: 5 }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M4 9H14" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M10 5L14 9L10 13" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const AWARDS_DATA = [
  {
    id: 1,
    year: "2024",
    title: "IIM Certificate",
    issuer: "IIM Visakhapatnam",
    description: "Completed the Post Graduation in Digital Marketing and Growth from IIM Visakhapatnam.",
    image: imgIimCertificate,
    color: "#5e4080", // Purple
  },
  {
    id: 2,
    year: "2023",
    title: "Skill Nation Certificate",
    issuer: "Skill Nation",
    description: "Skill Nation Certificate for WhatsApp Marketing & Automation, showcasing expertise in marketing strategies.",
    image: imgSkillNationCertificate,
    color: "#373758", // Dark Blue
  },
  {
    id: 3,
    year: "2023",
    title: "J Connect Certificate",
    issuer: "J Connect",
    description: "J Connect Certificate for New Age Digital Marketing, recognizing expertise in modern digital strategies.",
    image: imgJConnectCertificate,
    color: "#f09800", // Orange
  }
];

function Awards() {
  const CARD_W = 406;
  const CARD_H = 467;
  const STACK_OFFSET = 24; // each layer shifts down by 24px

  const [cards, setCards] = useState(AWARDS_DATA);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
  };

  const handleAnimationComplete = (id: number) => {
    if (id === cards[0].id) {
      setCards((prev) => {
        const [first, ...rest] = prev;
        return [...rest, first];
      });
      setIsAnimating(false);
    }
  };

  const handleDotClick = (targetOriginalIdx: number) => {
    if (isAnimating) return;
    const targetId = AWARDS_DATA[targetOriginalIdx].id;
    const currentIdx = cards.findIndex((c) => c.id === targetId);
    if (currentIdx === 0) return;

    if (currentIdx === 1) {
      setIsAnimating(true);
    } else if (currentIdx === 2) {
      setCards((prev) => {
        const [first, ...rest] = prev;
        return [...rest, first];
      });
      setTimeout(() => {
        setIsAnimating(true);
      }, 50);
    }
  };

  useEffect(() => {
    if (isHovered || isAnimating) return;
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [cards, isAnimating, isHovered]);

  return (
    <section id="awards" className="bg-[#0a1422] py-16 md:py-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[150px]">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-0">

          {/* ── LEFT ── */}
          <Reveal className="flex-1">
            {/* Subtitle + underline lines — matches screenshot exactly */}
            <div style={{ display: "inline-block", marginBottom: 24 }}>
              <p style={{
                fontFamily: "'Afacad Flux', sans-serif", fontWeight: 500, fontSize: 20,
                color: "white", marginBottom: 6, whiteSpace: "nowrap",
              }}>
                My Journey My Achievements
              </p>
              {/* Orange + white lines flush beneath the text, no gap */}
              <div style={{ display: "flex", gap: 8 }}>
                <div style={{ height: 2, width: 45, background: "#f09800", flexShrink: 0 }} />
                <div style={{ height: 2, width: 161, background: "white", flexShrink: 0 }} />
              </div>
            </div>

            <h2 style={{
              fontFamily: "'Afacad Flux', sans-serif", fontWeight: 500,
              fontSize: "clamp(40px, 4.17vw, 60px)", color: "white", lineHeight: 1.2,
            }}>
              Awards<br />&amp; Honours
            </h2>
          </Reveal>

          {/* ── CENTER: stacked card ── */}
          <Reveal delay={0.1} className="flex-shrink-0 w-full max-w-[406px]">
            {/* Outer wrapper accounts for the stack offset at top */}
            <div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative w-full"
              style={{ height: CARD_H + STACK_OFFSET * 2 }}
            >
              {cards.map((card, idx) => {
                // Stack layout target styling based on order in current state
                let animateTarget = { y: STACK_OFFSET * 2, opacity: 1, scale: 1, zIndex: 30 };
                if (idx === 1) {
                  animateTarget = { y: STACK_OFFSET, opacity: 1, scale: 1, zIndex: 20 };
                } else if (idx === 2) {
                  animateTarget = { y: 0, opacity: 1, scale: 1, zIndex: 10 };
                }

                // If active card is transitioning next, animate index 0 down
                // and indices 1 and 2 up
                if (isAnimating) {
                  if (idx === 0) {
                    animateTarget = { y: 520, opacity: 0, scale: 0.95, zIndex: 30 };
                  } else if (idx === 1) {
                    animateTarget = { y: STACK_OFFSET * 2, opacity: 1, scale: 1, zIndex: 25 };
                  } else if (idx === 2) {
                    animateTarget = { y: STACK_OFFSET, opacity: 1, scale: 1, zIndex: 15 };
                  }
                }

                // Show details only on the top active card, fade out on inactive cards
                const isTopActive = idx === 0 && !isAnimating;

                return (
                  <motion.div
                    key={card.id}
                    initial={false}
                    animate={animateTarget}
                    onAnimationComplete={() => {
                      if (idx === 0 && isAnimating) {
                        handleAnimationComplete(card.id);
                      }
                    }}
                    transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                    style={{
                      position: "absolute",
                      left: 0,
                      width: "100%",
                      height: CARD_H,
                      background: card.color,
                      borderRadius: 44,
                      overflow: "hidden",
                      boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
                    }}
                  >
                    <motion.div
                      animate={{ opacity: isTopActive ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col items-center justify-between h-full py-8 px-6 text-center select-none"
                    >
                      {/* Year */}
                      <p style={{
                        fontFamily: "'Afacad Flux', sans-serif", fontWeight: 500, fontSize: 22, color: "white",
                      }}>
                        {card.year}
                      </p>

                      {/* Image container */}
                      <div className="w-[252px] h-[177px] max-w-[85%] overflow-hidden rounded-xl flex items-center justify-center bg-black/10 p-2">
                        <img
                          src={card.image}
                          alt={card.title}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                            display: "block",
                            pointerEvents: "none"
                          }}
                        />
                      </div>

                      {/* Text details */}
                      <div className="flex flex-col gap-2">
                        <p style={{
                          fontFamily: "'Afacad Flux', sans-serif", fontWeight: 500, fontSize: 30, color: "white",
                          lineHeight: 1.15
                        }}>
                          {card.title}
                        </p>
                        <p style={{
                          fontFamily: "'Afacad Flux', sans-serif", fontWeight: 400, fontSize: 15, color: "white",
                          lineHeight: 1.4, opacity: 0.95
                        }}>
                          {card.description}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </Reveal>

          {/* ── RIGHT: dots + heading ── */}
          <Reveal delay={0.15} className="flex-1 flex flex-col items-start md:pl-16">
            {/* Dots */}
            <div className="flex gap-2.5 mb-5">
              {AWARDS_DATA.map((award, originalIdx) => {
                const isActive = cards[0].id === award.id;
                return (
                  <button
                    key={award.id}
                    onClick={() => handleDotClick(originalIdx)}
                    className="w-3.5 h-3.5 rounded-full transition-all duration-300 cursor-pointer"
                    style={{
                      background: isActive ? "white" : "#5a5a5a",
                      transform: isActive ? "scale(1.2)" : "scale(1)",
                      border: "none",
                      outline: "none",
                    }}
                    aria-label={`Go to slide ${originalIdx + 1}`}
                  />
                );
              })}
            </div>
            <h3 style={{
              fontFamily: "'Afacad Flux', sans-serif", fontWeight: 500,
              fontSize: "clamp(28px, 2.78vw, 40px)", color: "white", lineHeight: 1.25,
            }}>
              Professional Awards Achieved Through My Journey
            </h3>
          </Reveal>

        </div>
      </div>
    </section>
  );
}

// ─── ENTERPRISES / ACHIEVEMENTS ───────────────────────────────────────────────
/*
  Figma grid (1440px, each cell 102×101px, 6 cols × 7 rows, starts at left=150):
  Row 0: C2-C3 wide WHITE (DT7 logo)
  Row 1: C1 WHITE(FR), C4 WHITE(SriSainadh), C6 GREY
  Row 2: C2 GREY, C5 WHITE
  Row 3: C1 GREY, C3 WHITE(NRConstr), C6 GREY
  Row 4: C2 WHITE, C4 GREY, C6 WHITE(G7Solutions)
  Row 5: C5 GREY
  Row 6: C4 WHITE(Alanati)

  Stats right side: number + gradient line + label
*/

const CW = 102; // cell width
const CH = 101; // cell height

function Enterprises() {
  const CELLS = [
    // Row 0
    { r: 0, c: 1, w: CW * 2, bg: "#ffffff", logo: imgImage24 },
    // Row 1
    { r: 1, c: 0, w: CW, bg: "#fffefe", logo: imgImage28 },
    { r: 1, c: 3, w: CW, bg: "#fffefe", logo: imgImage25 },
    { r: 1, c: 5, w: CW, bg: "#dbe4e9" },
    // Row 2
    { r: 2, c: 1, w: CW, bg: "#dbe4e9" },
    { r: 2, c: 4, w: CW, bg: "#fffefe" },
    // Row 3
    { r: 3, c: 0, w: CW, bg: "#dbe4e9" },
    { r: 3, c: 2, w: CW, bg: "#fffefe", logo: imgImage26 },
    { r: 3, c: 5, w: CW, bg: "#dbe4e9" },
    // Row 4
    { r: 4, c: 1, w: CW, bg: "#fffefe" },
    { r: 4, c: 3, w: CW, bg: "#dbe4e9" },
    { r: 4, c: 5, w: CW, bg: "#fffefe", logo: imgImage27 },
    // Row 5
    { r: 5, c: 4, w: CW, bg: "#dbe4e9" },
    // Row 6
    { r: 6, c: 3, w: CW, bg: "#ffffff", logo: imgImage29 },
  ];

  const STATS = [
    { value: "11+", label: "Years of Expertise" },
    { value: "06", label: "Thriving Businesses" },
    { value: "150+", label: "Satisfied Clients" },
  ];

  const gridW = CW * 6;
  const gridH = CH * 7;

  return (
    <section id="partners" className="bg-[#f3f8ff] py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[150px]">
        <Reveal className="text-center mb-14">
          <h2 style={{ fontFamily: "'Afacad Flux', sans-serif", fontWeight: 500, fontSize: "clamp(28px,2.78vw,40px)", color: "#0a1422" }}>
            My Enterprises - Achievements
          </h2>
        </Reveal>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center justify-center">

          {/* ── Logo grid — exact Figma positions ── */}
          <Reveal className="flex-shrink-0 overflow-hidden w-full lg:w-[612px] flex justify-center h-[370px] min-[400px]:h-[460px] sm:h-[640px] md:h-[707px]">
            <div
              className="origin-top flex-shrink-0 scale-[0.52] min-[400px]:scale-[0.65] sm:scale-[0.9] md:scale-100"
              style={{ position: "relative", width: gridW, height: gridH, transformOrigin: "top center" }}
            >
              {CELLS.map((cell, i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    left: cell.c * CW,
                    top: cell.r * CH,
                    width: cell.w,
                    height: CH,
                    background: cell.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {cell.logo && (
                    <img
                      src={cell.logo}
                      alt=""
                      style={{ maxWidth: "80%", maxHeight: "80%", objectFit: "contain", pointerEvents: "none" }}
                    />
                  )}
                </div>
              ))}
            </div>
          </Reveal>

          {/* ── Stats ── */}
          <Reveal delay={0.15} className="w-full lg:w-[380px] lg:flex-shrink-0 flex flex-col items-center lg:items-start justify-center gap-8 md:gap-12 pt-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex items-center gap-6">
                {/* Large number */}
                <span style={{
                  fontFamily: "'Afacad Flux', sans-serif", fontWeight: 600,
                  fontSize: "clamp(40px,3.47vw,50px)", color: "#0a1422",
                  minWidth: 90, display: "inline-block",
                }}>
                  {stat.value}
                </span>
                {/* Orange gradient line */}
                <div style={{
                  width: 92, height: 2, flexShrink: 0,
                  background: "linear-gradient(to right, #f09800, #8a5700)",
                }} />
                {/* Label */}
                <span style={{
                  fontFamily: "'Afacad Flux', sans-serif", fontWeight: 400,
                  fontSize: 18, color: "#707070",
                }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </Reveal>

        </div>
      </div>
    </section>
  );
}


// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
const T_CARDS = [
  { quote: `"Working with Dinesh Alla was a fantastic experience. He is innovative, approachable, and highly professional. The results were beyond our expectations. "`, name: "Phani kumar", company: "Dharani Info Technologies Pvt. Ltd", logo: imgImage28 },
  { quote: `"Working with Dinesh Alla was a fantastic experience. He is innovative, approachable, and highly professional. The results were beyond our expectations. "`, name: "Phani kumar", company: "Dharani Info Technologies Pvt. Ltd", logo: imgImage27 },
  { quote: `"Working with Dinesh Alla was a fantastic experience. He is innovative, approachable, and highly professional. The results were beyond our expectations. "`, name: "Phani kumar", company: "Dharani Info Technologies Pvt. Ltd", logo: imgImage29 },
  { quote: `"Working with Dinesh Alla was a fantastic experience. He is innovative, approachable, and highly professional. The results were beyond our expectations. "`, name: "Phani kumar", company: "Dharani Info Technologies Pvt. Ltd", logo: imgImage28 },
];

function Testimonials() {
  const [activeT, setActiveT] = useState(0);

  const handlePrevT = () => {
    setActiveT((prev) => (prev - 1 + T_CARDS.length) % T_CARDS.length);
  };

  const handleNextT = () => {
    setActiveT((prev) => (prev + 1) % T_CARDS.length);
  };

  return (
    <section id="testimonials" className="bg-white pb-16 md:pb-24">

      {/* Title */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-[150px]">
        <Reveal className="text-center mb-12">
          <h2 style={{
            fontFamily: "'Afacad Flux', sans-serif", fontWeight: 500,
            fontSize: "clamp(22px, 2.36vw, 34px)", color: "#0a1422",
            maxWidth: 753, margin: "0 auto", paddingTop: 48,
          }}>
            Voices That Validate Our Vision - Where Client Experiences Inspire Our Future.
          </h2>
        </Reveal>
      </div>

      {/* DESKTOP marquee — hidden on mobile, visible on desktop */}
      <div className="hidden md:block" style={{ overflow: "hidden", width: "100%" }}>
        <motion.div
          animate={{ x: ["-430px", "-2030px"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear", repeatType: "loop" }}
          style={{ display: "flex", gap: 20, width: "max-content" }}
        >
          {/* Duplicate cards for seamless infinite loop */}
          {[...T_CARDS, ...T_CARDS].map((t, i) => (
            <div key={i} style={{
              background: "#f3f8ff",
              border: "1px solid #e5e5e5",
              borderRadius: 10,
              width: 560,
              flexShrink: 0,
              padding: "31px 32px 28px 32px",
              display: "flex",
              flexDirection: "column",
            }}>
              {/* Quote */}
              <p style={{
                fontFamily: "'Afacad Flux', sans-serif", fontWeight: 300,
                fontSize: 22, color: "#0a1422", lineHeight: 1.45,
                flex: 1, marginBottom: 20,
              }}>
                {t.quote}
              </p>

              {/* Bottom: name+company LEFT, logo RIGHT */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                <div>
                  <p style={{ fontFamily: "'Afacad Flux', sans-serif", fontWeight: 600, fontSize: 28, color: "#0a1422", margin: 0 }}>
                    {t.name}
                  </p>
                  <p style={{ fontFamily: "'Afacad Flux', sans-serif", fontWeight: 400, fontSize: 18, color: "#0a1422", margin: 0 }}>
                    {t.company}
                  </p>
                </div>
                <div style={{ width: 72, height: 60, background: "white", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <img src={t.logo} alt={t.name} style={{ maxWidth: "80%", maxHeight: "80%", objectFit: "contain", pointerEvents: "none" }} />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* MOBILE slider — visible on mobile, hidden on desktop */}
      <div className="block md:hidden px-6 w-full max-w-[600px] mx-auto">
        <div style={{
          background: "#f3f8ff",
          border: "1px solid #e5e5e5",
          borderRadius: 10,
          width: "100%",
          padding: "24px 24px 20px 24px",
          display: "flex",
          flexDirection: "column",
          minHeight: 280,
        }}>
          {/* Quote */}
          <motion.p
            key={activeT}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            style={{
              fontFamily: "'Afacad Flux', sans-serif", fontWeight: 300,
              fontSize: 20, color: "#0a1422", lineHeight: 1.45,
              flex: 1, marginBottom: 20,
            }}
          >
            {T_CARDS[activeT].quote}
          </motion.p>

          {/* Bottom */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
            <div>
              <p style={{ fontFamily: "'Afacad Flux', sans-serif", fontWeight: 600, fontSize: 24, color: "#0a1422", margin: 0 }}>
                {T_CARDS[activeT].name}
              </p>
              <p style={{ fontFamily: "'Afacad Flux', sans-serif", fontWeight: 400, fontSize: 16, color: "#0a1422", margin: 0 }}>
                {T_CARDS[activeT].company}
              </p>
            </div>
            <div style={{ width: 64, height: 52, background: "white", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <img src={T_CARDS[activeT].logo} alt="" style={{ maxWidth: "80%", maxHeight: "80%", objectFit: "contain", pointerEvents: "none" }} />
            </div>
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={handlePrevT}
            className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200"
            style={{ background: "#0a1422" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#f09800")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#0a1422")}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M14 9H4" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M8 13L4 9L8 5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            onClick={handleNextT}
            className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200"
            style={{ background: "#f09800" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#0a1422")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#f09800")}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M4 9H14" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M10 5L14 9L10 13" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

    </section>
  );
}

// ─── CONTACT ──────────────────────────────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "sent">("idle");

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Valid email required";
    if (!form.message.trim()) e.message = "Required";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStatus("loading");

    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_oqk9ebd",
          template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_e34ayvr",
          user_id: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "Di159h43CNTx3xpQM",
          template_params: {
            from_name: form.name,
            from_email: form.email,
            reply_to: form.email,
            message: form.message,
          },
        }),
      });

      if (response.ok) {
        setStatus("sent");
      } else {
        const errText = await response.text();
        setErrors({ submit: `Failed to send: ${errText || response.statusText}` });
        setStatus("idle");
      }
    } catch (err: any) {
      setErrors({ submit: `Error: ${err.message || err}` });
      setStatus("idle");
    }
  };

  return (
    <section id="contact" className="bg-white py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[150px]">
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* ── LEFT: large circle + inner gradient circle + Follow Now + social ── */}
          <Reveal className="relative flex flex-col items-center">
            {/* Large ellipse background */}
            <div className="relative" style={{ width: 367, height: 367 }}>
              <img src={imgEllipse17} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} />
              {/* Inner gradient circle with Follow Now */}
              <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}>
                <svg width="234" height="234" viewBox="0 0 234 234" fill="none">
                  <circle cx="117" cy="117" r="116.5" fill="url(#cg1)" stroke="#707275" />
                  <defs>
                    <linearGradient id="cg1" x1="117" y1="0" x2="117" y2="234" gradientUnits="userSpaceOnUse">
                      <stop stopColor="white" stopOpacity="0.9" />
                      <stop offset="1" stopColor="white" stopOpacity="0.69" />
                    </linearGradient>
                  </defs>
                </svg>
                <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }}>
                  <p style={{ fontFamily: "'Afacad Flux', sans-serif", fontWeight: 600, fontSize: 28, color: "#0a1422", margin: 0 }}>
                    Follow Now
                  </p>
                  <div style={{ display: "flex", gap: 16 }}>
                    <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                      <img src={imgImage18} alt="Instagram" style={{ width: 21, height: 21, objectFit: "cover" }} />
                    </a>
                    <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                      <img src={imgImage20} alt="Facebook" style={{ width: 22, height: 21, objectFit: "cover" }} />
                    </a>
                    <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                      <img src={imgImage21} alt="LinkedIn" style={{ width: 21, height: 21, objectFit: "cover" }} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ── RIGHT: Contact Me + info + coffee quote + form + submit ── */}
          <Reveal delay={0.1}>
            {/* Contact Me heading */}
            <h2 style={{ fontFamily: "'Afacad Flux', sans-serif", fontWeight: 500, fontSize: 34, color: "#0a1422", textAlign: "center", marginBottom: 16 }}>
              Contact Me
            </h2>
            {/* Tagline */}
            <p style={{ fontFamily: "'Afacad Flux', sans-serif", fontWeight: 300, fontSize: 22, color: "#696969", marginBottom: 8 }}>
              Your Digital Success Starts Here – Get in Touch!
            </p>
            {/* Address */}
            <p style={{ fontFamily: "'Afacad Flux', sans-serif", fontWeight: 400, fontSize: 18, color: "#0a1422", marginBottom: 4 }}>
              Dt7 Agency Pvt. Ltd. Chandramouli Nagar, Guntur, Andhra Pradesh - 522007, India
            </p>
            <p style={{ fontFamily: "'Afacad Flux', sans-serif", fontWeight: 400, fontSize: 18, color: "#0a1422", marginBottom: 4 }}>+91 8885782778</p>
            <p style={{ fontFamily: "'Afacad Flux', sans-serif", fontWeight: 400, fontSize: 18, color: "#0a1422", marginBottom: 24 }}>dineshalla@gmail.com</p>
            {/* Coffee quote */}
            <p style={{ fontFamily: "'Afacad Flux', sans-serif", fontWeight: 500, fontSize: 34, color: "#0a1422", marginBottom: 32, lineHeight: 1.3 }}>
              Let's grab a coffee and jump on conversation chat with me.
            </p>

            {status === "sent" ? (
              <div className="flex flex-col items-center justify-center py-20 text-center gap-4">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200 }}>
                  <div className="w-16 h-16 rounded-full bg-[#f09800] flex items-center justify-center">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12l5 5L20 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </motion.div>
                <p className="text-[28px] font-medium text-[#0a1422]" style={{ fontFamily: "'Afacad Flux', sans-serif" }}>Message sent!</p>
                <p className="text-[18px] text-[#585858]" style={{ fontFamily: "'Afacad Flux', sans-serif", fontWeight: 300 }}>I'll get back to you soon.</p>
                <button onClick={() => { setStatus("idle"); setForm({ name: "", email: "", message: "" }); }} className="text-[#f09800] underline text-[16px]" style={{ fontFamily: "'Poppins', sans-serif" }}>Send another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-0">
                {/* Name field */}
                <div className="border-b border-[#8f8f8f] pb-1 mb-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    className="w-full bg-transparent outline-none text-[18px] text-[#0a1422] placeholder-[#8f8f8f]"
                    style={{ fontFamily: "'Afacad Flux', sans-serif" }}
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                </div>

                {/* Email field */}
                <div className="border-b border-[#8f8f8f] pb-1 mb-6">
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className="w-full bg-transparent outline-none text-[18px] text-[#0a1422] placeholder-[#8f8f8f]"
                    style={{ fontFamily: "'Afacad Flux', sans-serif" }}
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>

                {/* Message field */}
                <div className="border-b border-[#8f8f8f] pb-1 mb-8">
                  <input
                    type="text"
                    placeholder="Message"
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className="w-full bg-transparent outline-none text-[18px] text-[#0a1422] placeholder-[#8f8f8f]"
                    style={{ fontFamily: "'Afacad Flux', sans-serif" }}
                  />
                  {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                </div>

                {errors.submit && <p className="text-sm text-red-500 mb-6">{errors.submit}</p>}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="bg-[#f09800] rounded-[22px] px-7 h-[44px] text-white text-[16px] font-medium transition-opacity"
                  style={{ fontFamily: "'Poppins', sans-serif", opacity: status === "loading" ? 0.7 : 1 }}
                >
                  {status === "loading" ? "Sending..." : "Submit Now"}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-[#0a1422] h-[90px] flex items-center">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 w-full flex flex-col sm:flex-row items-center justify-center gap-2 text-center">
        {/* Gradient lines decorative */}
        <p
          className="text-[16px] text-white"
          style={{ fontFamily: "'Afacad Flux', sans-serif", fontWeight: 300 }}
        >
          DineshAlla © 2025 All Rights Reserved Crafted With ♥ By{" "}
          <a
            href="https://dt7.agency/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-white hover:text-[#f09800] transition-colors"
          >
            DT7AGENCY
          </a>
        </p>
      </div>
    </footer>
  );
}

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="bg-white min-h-screen" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <style>{`
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #f6f6f6; }
        ::-webkit-scrollbar-thumb { background: #f09800; border-radius: 3px; }
      `}</style>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Awards />
        <Enterprises />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

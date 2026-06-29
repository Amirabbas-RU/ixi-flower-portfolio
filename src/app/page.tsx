"use client";

import { useState } from "react";
import ProfileCard from "@/components/profile-card";
import TypingKeyboard from "@/components/typing-keyboard";
import StaggeredGrid from "@/components/staggered-grid";
import MagicRings from "@/components/magic-rings";
import DecryptedText from "@/components/decrypted-text";
import AnimateCode from "@/components/animate-code";
import ScrollReveal from "@/components/scroll-reveal";
import ProjectDialog from "@/components/project-dialog";
import { CreepyButton } from "@/components/creepy-button";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNetworkWired,
  FaServer,
} from "react-icons/fa";

const skillItems = [
  {
    id: 1,
    title: "Frontend",
    subtitle: "React · Next.js · TS · Tailwind",
    description: "Modern, reactive UIs with the best tools in the ecosystem.",
    icon: <FaReact />,
  },
  {
    id: 2,
    title: "Network & Cybersecurity",
    subtitle: "Network Security · Analysis · Protocols",
    description: "Securing networks, analyzing threats, and building resilient infrastructure.",
    icon: <FaNetworkWired />,
  },
  {
    id: 3,
    title: "Backend",
    subtitle: "Node.js · C# · Python",
    description: "Scalable APIs, databases, and server-side logic.",
    icon: <FaServer />,
  },
];

const projects = [
  {
    title: "jitsi-infinity",
    desc: "Production-ready video conferencing stack — Jitsi Meet on Docker with a Python auto-scaler, recording, monitoring dashboards, and auto-scaling infrastructure.",
    tech: ["Docker", "Python", "Lua", "Nginx"],
    href: "https://github.com/ixiflower/jitsi-infinity",
    site: "",
    stars: 2,
    lang: "Docker",
    langColor: "#2496ed",
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
  },
  {
    title: "Shimer",
    desc: "A powerful time-tracking and productivity app built from scratch with React Native (Expo) — timer, goals, analytics, calendar, secure vault, and backup. Fully offline-first.",
    tech: ["React Native", "Expo", "TypeScript", "SQLite"],
    href: "https://github.com/ixiflower/Shimer",
    site: "",
    stars: 0,
    lang: "TypeScript",
    langColor: "#3178c6",
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
  },
  {
    title: "trademind-bot",
    desc: "AI-powered trading signal bot for Pocket Option & binary options. Multi-indicator technical analysis across Crypto, Forex, Stocks, and Commodities with real-time alerts.",
    tech: ["Python", "TA-Lib", "Telegram API", "Pandas"],
    href: "https://github.com/ixiflower/trademind-bot",
    site: "",
    stars: 0,
    lang: "Python",
    langColor: "#3776ab",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
  },
  {
    title: "BotU",
    desc: "A no-code Telegram bot builder platform with AI-powered assistance. Build, configure, and manage Telegram bots visually through a web dashboard. Powered by React, Django, and Gemini AI.",
    tech: ["React", "Django", "Gemini AI", "Docker"],
    href: "https://github.com/ixiflower/BotU",
    site: "https://freaky-botu.netlify.app",
    stars: 0,
    lang: "TypeScript",
    langColor: "#3178c6",
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
  },
  {
    title: "SERENE",
    desc: "Premium Shopify Hydrogen storefront with atmospheric hero section, glassmorphic design, full cart system, and live Storefront API product integration — the flagship ecommerce build.",
    tech: ["Hydrogen", "React Router", "Tailwind", "GraphQL"],
    href: "https://github.com/ixiflower/serene",
    site: "https://serene-two-azure.vercel.app",
    stars: 0,
    lang: "TypeScript",
    langColor: "#3178c6",
    gradient: "from-rose-500/20 via-pink-500/10 to-transparent",
  },
  {
    title: "ixi-News-BOT",
    desc: "A Python-powered Telegram news bot that fetches and delivers the latest headlines directly to your chat — automatic updates, category filtering, and clean formatting.",
    tech: ["Python", "Telegram Bot API", "AsyncIO"],
    href: "https://github.com/ixiflower/ixi-News-BOT",
    site: "",
    stars: 1,
    lang: "Python",
    langColor: "#3776ab",
    gradient: "from-sky-500/20 via-blue-500/10 to-transparent",
  },
  {
    title: "Storipalorium",
    desc: "A contemplative, minimal bookmark and snippet storage app — full-text search, tag organization, and a clean reading-focused interface. Built with Next.js and Neon Auth.",
    tech: ["Next.js", "Neon Auth", "Drizzle", "TypeScript"],
    href: "https://github.com/ixiflower/Storipalorium",
    site: "https://storipalorium.vercel.app",
    stars: 0,
    lang: "TypeScript",
    langColor: "#3178c6",
    gradient: "from-indigo-500/20 via-blue-500/10 to-transparent",
  },
  {
    title: "polybot-tg",
    desc: "Telegram bot that auto-fetches MTProto proxies & V2Ray configs, pings them for latency, and posts the best ones to your channel — with a real-time inline admin panel.",
    tech: ["Python", "Telegram MTProto", "Async", "V2Ray"],
    href: "https://github.com/ixiflower/polybot-tg",
    site: "",
    stars: 0,
    lang: "Python",
    langColor: "#3776ab",
    gradient: "from-fuchsia-500/20 via-purple-500/10 to-transparent",
  },
];

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[number] | null>(null);

  return (
    <>
      {/* ─── Hero Section ─── */}
      <section className="relative min-h-dvh flex items-center px-4 sm:px-8 lg:px-16 pt-24 pb-40 sm:pb-0 overflow-hidden">
        {/* MagicRings background */}
        <MagicRings
          className="absolute inset-0 z-0 pointer-events-none"
          color="#ffffff"
          colorTwo="#444444"
          opacity={0.25}
          followMouse={true}
          mouseInfluence={0.12}
          attenuation={8}
          ringCount={5}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">

            {/* ─── Badge ─── */}
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-xs text-zinc-500 border border-zinc-800 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-pulse" />
              Open for opportunities
            </div>

            {/* ─── Main Title with Glow ─── */}
            <div className="mb-1">
              <DecryptedText
                text="ixi_flower"
                animateOn="view"
                speed={60}
                maxIterations={8}
                sequential={true}
                revealDirection="start"
                characters="!@#$%^&*()_+ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
                className="text-[clamp(2.5rem,8vw,6rem)] font-bold text-white leading-none tracking-tighter drop-shadow-[0_0_30px_rgba(255,255,255,0.12)]"
                encryptedClassName="text-[clamp(2.5rem,8vw,6rem)] font-bold text-zinc-700 leading-none tracking-tighter"
              />
            </div>

            {/* ─── Divider + Subtitle ─── */}
            <div className="flex items-center gap-3 sm:gap-4 mb-2 mt-3">
              <span className="w-8 sm:w-12 h-px bg-zinc-700" />
              <span className="text-xs sm:text-sm text-zinc-600 tracking-[0.2em] uppercase font-light">
                Developer
              </span>
              <span className="w-8 sm:w-12 h-px bg-zinc-700" />
            </div>

            {/* ─── Subtitle ─── */}
            <DecryptedText
              text="Amirabbas Rouintan"
              animateOn="view"
              speed={40}
              maxIterations={6}
              sequential={true}
              revealDirection="start"
              characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
              className="text-[clamp(1rem,2.5vw,1.6rem)] text-zinc-400 leading-tight tracking-wide"
              encryptedClassName="text-[clamp(1rem,2.5vw,1.6rem)] text-zinc-700 leading-tight tracking-wide"
            />

            {/* ─── TypingKeyboard (moved down) ─── */}
            <div className="mt-16 sm:mt-20 w-full flex justify-center">
              <TypingKeyboard
                className="w-full max-w-[500px] sm:max-w-[700px] lg:max-w-[900px]"
                autoTypeText="a flower in the digital world.   "
                accentColor="#888888"
                secondaryAccent="#666666"
                scale={1.0}
              />
            </div>

            {/* ─── Description ─── */}
            <p className="mt-8 max-w-lg text-sm sm:text-base text-zinc-500 leading-relaxed">
              Developer crafting digital experiences with code and design.
              Building things at the intersection of art and engineering.
              Passionate about React, TypeScript, and creating beautiful
              interfaces.
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="fixed bottom-6 sm:absolute sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[10px] sm:text-xs text-zinc-700">scroll</span>
          <div className="w-3.5 h-6 sm:w-4 sm:h-7 border border-zinc-700 rounded-full flex justify-center">
            <div className="w-0.5 h-1.5 sm:w-1 sm:h-2 bg-zinc-600 rounded-full mt-1.5 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ─── Skills Section ─── */}
      <section id="skills" className="relative z-10 px-4 sm:px-6 pt-16 sm:pt-28 pb-12 sm:pb-16">
        <StaggeredGrid
          bentoItems={skillItems}
          centerText="SKILLS"
        />
      </section>

      {/* ─── Education & Courses Section ─── */}
      <section id="education" className="relative z-10 px-4 sm:px-8 lg:px-16 pt-4 pb-20 sm:pb-32">
        <div className="w-full max-w-5xl mx-auto">
          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-white mb-10 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Education &amp; Courses
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              {
                title: "The Modern Python 3 Bootcamp",
                subtitle: "Udemy",
                items: [
                  "Python fundamentals through advanced topics",
                  "OOP, decorators, generators, testing",
                  "Certificate: UC-9842c80b-e377-4960-b027-83a31256595d",
                ],
                cert: "https://www.udemy.com/certificate/UC-9842c80b-e377-4960-b027-83a31256595d/",
              },
              {
                title: "OWASP Zero",
                subtitle: "voorivex.academy",
                items: [
                  "Web security fundamentals",
                  "OWASP Top 10 vulnerabilities",
                  "Ethical hacking methodology",
                ],
                cert: "https://voorivex.academy/classes/owasp-zero",
              },
              {
                title: "Certified Ethical Hacker (CEH)",
                subtitle: "maktabkhooneh",
                items: [
                  "Ethical hacking methodology & tools",
                  "Reconnaissance, scanning, exploitation",
                  "Post-exploitation & reporting",
                ],
              },
              {
                title: "Security Plus",
                subtitle: "maktabkhooneh",
                items: [
                  "Threats, attacks & vulnerabilities",
                  "Architecture & design",
                  "Cryptography & PKI",
                ],
              },
              {
                title: "LPIC-1 Bootcamp",
                subtitle: "Jadi",
                items: [
                  "Linux system administration",
                  "Command line, shell scripting",
                  "System maintenance & security",
                ],
              },
              {
                title: "CompTIA Network+",
                subtitle: "Arjang",
                items: [
                  "Networking concepts & protocols",
                  "Infrastructure & troubleshooting",
                  "Network security fundamentals",
                ],
              },
              {
                title: "The Modern Python",
                subtitle: "Arjang",
                items: [
                  "Advanced Python programming",
                  "AsyncIO, networking, APIs",
                  "Real-world project-based learning",
                ],
              },
              {
                title: "Docker - Kubernetes",
                subtitle: "DevOps",
                items: [
                  "Containerization with Docker",
                  "Orchestration with Kubernetes",
                  "CI/CD pipeline integration",
                ],
              },
              {
                title: "nmap",
                subtitle: "Udemy",
                items: [
                  "Network discovery & scanning",
                  "NSE scripting engine",
                  "Vulnerability assessment techniques",
                ],
              },
              {
                title: "REACT.JS Course",
                subtitle: "Frontend",
                items: [
                  "Modern React with hooks & context",
                  "State management & routing",
                  "Component design patterns",
                ],
              },
            ].map((course, i) => (
              <motion.div
                key={course.title}
                className="border border-zinc-800 rounded-xl p-5 sm:p-6 bg-black/40 backdrop-blur-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-base sm:text-lg font-semibold text-white mb-1">
                  {course.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 mb-3">
                  {course.subtitle}
                  {course.cert && (
                    <a
                      href={course.cert}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 ml-2 text-violet-500 hover:text-violet-400 transition-colors text-[11px]"
                    >
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2v20M2 12h20"/>
                        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/>
                      </svg>
                      Certificate ↗
                    </a>
                  )}
                </p>
                <ul className="space-y-1.5">
                  {course.items.map((item) => (
                    <li
                      key={item}
                      className="text-xs sm:text-sm text-zinc-400 flex items-start gap-2"
                    >
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── About Section (bottom) — ProfileCard + Description ─── */}
      <section id="about" className="relative z-10 px-4 sm:px-8 lg:px-16 pb-20 sm:pb-32">
        <div className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              className="flex justify-center lg:order-2 w-full"
              initial={{ opacity: 0, x: 100, y: 100 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-none lg:w-[340px]">
                <ProfileCard
                  name="Amirabbas Rouintan"
                  title="Backend & Infrastructure"
                  handle="ixi_flower"
                  status="Available"
                  contactText="Contact Me"
                  showUserInfo={true}
                  avatarUrl="/avatar.png"
                  behindGlowColor="rgba(255, 255, 255, 0.12)"
                  onContactClick={() => window.location.href = "mailto:amirabbas.rouintan2007@gmail.com"}
                />
              </div>
            </motion.div>
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:order-1">
            <motion.h2
              className="text-2xl sm:text-3xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              About Me
            </motion.h2>
            <motion.div
              className="max-w-md text-sm sm:text-base text-zinc-400 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
              viewport={{ once: true }}
            >
              <ScrollReveal
                baseOpacity={0.15}
                enableBlur={true}
                blurStrength={6}
                baseRotation={2}
                containerClassName="my-0"
                textClassName="!text-[clamp(0.875rem,1.5vw,1rem)] !font-normal !leading-relaxed text-zinc-400"
                rotationEnd="center center"
                wordAnimationEnd="center center"
              >
                I&apos;m Amirabbas Rouintan — a 19-year-old self-taught developer
                from Karaj, Iran. I&apos;ve been coding since I was 12, building
                everything from backend infrastructure to networking tools.
                Working with Python, Go, TypeScript, and system-level
                engineering — crafting APIs, automating infrastructure, and
                diving deep into network protocols. Currently
                working at Ecode team as a backend and infrastructure developer.
              </ScrollReveal>
            </motion.div>
            <motion.p
              className="max-w-md text-sm sm:text-base text-zinc-500 leading-relaxed mt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
              viewport={{ once: true }}
            >
              The bitter taste of life is what makes the sweet moments worth every
              step of the journey.
            </motion.p>
            <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
            >
              <a
                href="mailto:amriabbas.rouintan2007@gmail.com"
                className="px-5 py-2.5 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white text-sm font-medium rounded-xl transition-colors"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Code Philosophy Section ─── */}
      <section className="relative z-10 px-4 sm:px-8 lg:px-16 pb-20 sm:pb-32">
        <div className="w-full max-w-3xl mx-auto">
          <AnimateCode
            code={`// the-bitter-taste.ts

type Moment = {
  flavor: 'bitter' | 'sweet' | 'both';
  intensity: number;
  timestamp: number;
};

const wisdom = (moments: Moment[]): string => {
  const bitter = moments.filter(
    m => m.flavor === 'bitter'
  );
  const sweet = moments.filter(
    m => m.flavor === 'sweet'
  );

  /* The paradox of existence:
     Without bitter, sweet has no meaning.
     Without pain, joy is just noise. */

  return \`In \${moments.length} moments of being alive,
  \${bitter.length} were bitter,
  \${sweet.length} were sweet.

  But here's the thing:
  The bitterness didn't break you.
  It built you.

  And the sweetness?
  It was always worth the taste.

  — ixi_flower\`;
};`}
            fileName="the-bitter-taste.ts"
            lang="tsx"
            typingSpeed={25}
            className="w-full"
          />
        </div>
      </section>

      {/* ─── Projects Section ─── */}
      <section id="projects" className="relative z-10 px-4 sm:px-8 lg:px-16 pb-20 sm:pb-32">
        <div className="w-full max-w-6xl mx-auto">
          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-white mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Projects
          </motion.h2>

          {/* ─── Project Cards ─── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {projects.map((project, i) => (
              <motion.button
                key={project.title}
                onClick={() => setSelectedProject(project)}
                className="group relative block rounded-2xl overflow-visible text-left w-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                {/* Background glow orb */}
                <div
                  className={`absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${project.gradient} blur-xl pointer-events-none`}
                />

                {/* Card */}
                <div className="relative h-full rounded-2xl border border-zinc-800 group-hover:border-zinc-600 bg-black/30 backdrop-blur-md p-5 sm:p-6 transition-all duration-300 group-hover:bg-black/40">
                  {/* Top: Lang dot + stars */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: project.langColor }}
                      />
                      <span className="text-[11px] text-zinc-500 font-mono">
                        {project.lang}
                      </span>
                    </div>
                    {project.stars > 0 && (
                      <span className="text-[11px] text-zinc-600 font-mono flex items-center gap-1">
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                        {project.stars}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-zinc-200 transition-colors mb-2">
                    {project.title}
                    <span className="inline-block ml-1.5 text-zinc-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-sm">
                      ↗
                    </span>
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4 line-clamp-3">
                    {project.desc}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] sm:text-xs px-2 py-0.5 rounded-md bg-zinc-800/60 text-zinc-500 border border-zinc-800/40"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* View All Projects Button */}
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <CreepyButton
              onClick={() => window.open("https://github.com/ixiflower", "_blank", "noopener noreferrer")}
              coverClassName="bg-violet-600"
            >
              View All Projects
            </CreepyButton>
          </motion.div>
        </div>
      </section>

      {/* ─── Project Dialog ─── */}
      <ProjectDialog
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}

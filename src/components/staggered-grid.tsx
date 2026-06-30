"use client";
import React, { useEffect, useRef, useState, useId } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaCode,
  FaMobileAlt,
  FaCogs,
  FaServer,
  FaDatabase,
  FaCloud,
  FaBolt,
  FaLayerGroup,
  FaPaintBrush,
  FaShieldAlt,
  FaRocket,
  FaCrown,
  FaStar,
  FaAtom,
  FaArrowDown,
} from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiKotlin, SiDotnet, SiNeovim } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

export interface BentoItem {
  id: number | string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  content?: React.ReactNode;
  color?: string;
  bgImage?: string;
}

export interface StaggeredGridProps {
  bentoItems: BentoItem[];
  centerText?: string;
  className?: string;
}

const gridLabels = [
  { label: "React", icon: FaReact },
  { label: "Next.js", icon: SiNextdotjs },
  { label: "TypeScript", icon: SiTypescript },
  { label: "Tailwind", icon: SiTailwindcss },
  { label: "Node.js", icon: FaNodeJs },
  { label: "Python", icon: FaPython },
  { label: "Kotlin", icon: SiKotlin },
  { label: "C#", icon: FaCode },
  { label: "Neovim", icon: SiNeovim },
  { label: "Docker", icon: FaDocker },
  { label: "Git", icon: FaGitAlt },
  { label: "Linux", icon: FaLinux },
  { label: "Mobile", icon: FaMobileAlt },
  { label: "Backend", icon: FaServer },
  { label: "Database", icon: FaDatabase },
  { label: "Cloud", icon: FaCloud },
  { label: "API", icon: FaCogs },
  { label: "React Native", icon: FaCode },
  { label: "Design", icon: FaPaintBrush },
  { label: "DevOps", icon: FaRocket },
  { label: "Full Stack", icon: FaCrown },
];

const gridIcons = [
  FaReact, SiNextdotjs, SiTypescript, SiTailwindcss, FaNodeJs,
  FaPython, SiKotlin, FaCode, SiNeovim, FaDocker,
  FaGitAlt, FaLinux, FaMobileAlt, FaServer, FaDatabase,
  FaCloud, FaCogs, FaCode, FaPaintBrush, FaRocket, FaCrown,
];

const splitText = (text: string) => {
  return text.split("").map((char, i) => (
    <span key={i} className="char inline-block" style={{ willChange: "transform" }}>
      {char === " " ? "\u00A0" : char}
    </span>
  ));
};

export default function StaggeredGrid({
  bentoItems,
  centerText = "SKILLS",
  className,
}: StaggeredGridProps) {
  const [isLoaded, setIsLoaded] = useState(true);
  const gridFullRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [activeBento, setActiveBento] = useState(0);

  useEffect(() => {
    if (!isLoaded) return;

    if (textRef.current) {
      const chars = textRef.current.querySelectorAll(".char");
      gsap
        .timeline({
          scrollTrigger: {
            trigger: textRef.current,
            start: "top bottom",
            end: "center center-=25%",
            scrub: 1,
          },
        })
        .from(chars, {
          ease: "sine.out",
          yPercent: 300,
          autoAlpha: 0,
          stagger: { each: 0.05, from: "center" },
        });
    }

    if (gridFullRef.current) {
      const gridFullItems = gridFullRef.current.querySelectorAll(".grid__item");
      const numColumns = 7;
      const middleColumnIndex = Math.floor(numColumns / 2);

      const columns: Element[][] = Array.from({ length: numColumns }, () => []);
      gridFullItems.forEach((item: any) => {
        const colAttr = item.getAttribute("data-col");
        const columnIndex = colAttr !== null ? parseInt(colAttr, 10) : 0;
        if (columns[columnIndex]) columns[columnIndex].push(item);
      });

      columns.forEach((columnItems, columnIndex) => {
        const delayFactor = Math.abs(columnIndex - middleColumnIndex) * 0.2;
        gsap
          .timeline({
            scrollTrigger: {
              trigger: gridFullRef.current,
              start: "top bottom",
              end: "center center",
              scrub: 1.5,
            },
          })
          .from(columnItems, {
            yPercent: 450,
            autoAlpha: 0,
            delay: delayFactor,
            ease: "sine.out",
          });
      });

      const bentoContainer = gridFullRef.current.querySelector(".bento-container");
      if (bentoContainer) {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: gridFullRef.current,
              start: "top top+=15%",
              end: "bottom center",
              scrub: 1,
              invalidateOnRefresh: true,
            },
          })
          .to(bentoContainer, {
            y: window.innerHeight * 0.1,
            scale: 1.5,
            zIndex: 1000,
            ease: "power2.out",
            duration: 1,
            force3D: true,
          }, 0);
      }
    }
  }, [isLoaded]);

  const mixedGridItems: (string | "BENTO_GROUP")[] = Array.from({ length: 21 }, (_, i) => `GRID_${i % 10}`);
  mixedGridItems[16] = "BENTO_GROUP";

  // Gray color palette for card backgrounds
  const grayShades = [
    "#3a3a3a", "#4a4a4a", "#525252", "#404040", "#454545",
    "#383838", "#4e4e4e", "#484848", "#3e3e3e", "#505050",
  ];

  return (
    <div className={cn("relative overflow-hidden w-full", className)}>
      <section className="grid place-items-center w-full relative mt-[5vh]">
        <div
          ref={textRef}
          className="text font-alt uppercase flex content-center text-[clamp(2.5rem,12vw,8rem)] leading-[0.7] text-neutral-900 dark:text-white"
        >
          {splitText(centerText)}
        </div>
      </section>

      <section className="grid place-items-center w-full relative">
        <div
          ref={gridFullRef}
          className="grid--full relative w-full my-[5vh] h-auto aspect-[1.3] max-w-none p-2 sm:p-4 grid gap-2 sm:gap-4 grid-cols-7 grid-rows-5"
        >
          {mixedGridItems.map((item, i) => {
            if (item === "BENTO_GROUP") {
              if (!bentoItems || bentoItems.length === 0) return null;
              return (
                <div
                  key="bento-group"
                  data-col={2}
                  className="grid__item bento-container col-span-3 row-span-1 relative z-20 flex items-center justify-center gap-1 sm:gap-2 h-full w-full will-change-transform"
                >
                  {bentoItems.map((bentoItem, index) => {
                    const isActive = activeBento === index;
                    return (
                      <div
                        key={bentoItem.id}
                        className={cn(
                          "relative cursor-pointer overflow-hidden rounded-xl sm:rounded-2xl h-full transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",
                          isActive
                            ? "shadow-2xl shadow-zinc-500/20"
                            : "bg-zinc-700/60"
                        )}
                        style={{ width: isActive ? "60%" : "20%", backgroundColor: isActive ? "rgba(255, 255, 255, 0.08)" : "rgba(113, 113, 122, 0.4)" }}
                        onMouseEnter={() => setActiveBento(index)}
                        onClick={() => setActiveBento(index)}
                      >
                        <div
                          className={cn(
                            "absolute inset-0 rounded-xl sm:rounded-2xl border z-50 pointer-events-none transition-colors duration-700",
                            isActive ? "border-zinc-400/50" : "border-zinc-600/40"
                          )}
                        />

                        {/* Background image */}
                        {bentoItem.bgImage && (
                          <div className="absolute inset-0 overflow-hidden">
                            <div
                              className="absolute inset-0 bg-cover bg-center"
                              style={{ backgroundImage: `url(${bentoItem.bgImage})` }}
                            />
                            <div className="absolute inset-0 bg-black/65" />
                          </div>
                        )}

                        {/* Active Content */}
                        <div
                          className={cn(
                            "absolute inset-0 flex flex-col transition-all duration-500 ease-in-out",
                            isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                          )}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-zinc-600/40 via-zinc-800/60 to-zinc-950 overflow-hidden z-0">
                            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />
                          </div>
                          <div className="absolute bottom-0 left-0 w-full h-20 flex items-center justify-between px-3 sm:px-5 z-20">
                            <div className="flex flex-col relative z-10">
                              <h3 className="text-xs sm:text-sm font-bold text-white drop-shadow-md leading-none tracking-tight">
                                {bentoItem.title}
                              </h3>
                              <span className="text-[10px] text-zinc-400 mt-0.5">{bentoItem.subtitle}</span>
                            </div>
                            <div className="text-white/90 transition-colors hover:text-white drop-shadow-md relative z-10 text-sm sm:text-lg">
                              {bentoItem.icon}
                            </div>
                          </div>
                        </div>

                        {/* Inactive Content */}
                        <div
                          className={cn(
                            "absolute inset-0 flex flex-col items-center justify-center gap-1 sm:gap-2 transition-all duration-500",
                            isActive ? "opacity-0 scale-90 pointer-events-none" : "opacity-100 scale-100"
                          )}
                        >
                          <div className="text-white/50 group-hover:text-white/80 transition-colors text-sm sm:text-xl">
                            {bentoItem.icon}
                          </div>
                          <span className="text-[8px] sm:text-[10px] font-medium text-zinc-400 group-hover:text-zinc-300 transition-colors uppercase tracking-wider text-center px-1 leading-tight">
                            {bentoItem.title}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            }

            if (i === 17 || i === 18) return null;

            if (typeof item === "string") {
              const SkillIcon = gridIcons[i % gridIcons.length];
              const label = gridLabels[i % gridLabels.length]?.label || "Skill";
              const gray = grayShades[i % grayShades.length];

              return (
                <figure
                  key={`img-${i}`}
                  data-col={i % 7}
                  className="grid__item m-0 relative z-10 [perspective:800px] will-change-[transform,opacity] group cursor-pointer"
                >
                  <div
                    className="grid__item-img w-full h-full [backface-visibility:hidden] will-change-transform rounded-lg sm:rounded-xl overflow-hidden shadow-sm border border-zinc-600/30 flex items-center justify-center transition-all duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl group-hover:border-zinc-400/40"
                    style={{ background: `linear-gradient(135deg, ${gray}, ${gray}dd)` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                    <div className="relative z-10 flex flex-col items-center justify-center gap-1 sm:gap-2 p-1">
                      <SkillIcon className="w-4 h-4 sm:w-6 sm:h-6 text-white/50 transition-all duration-300 group-hover:text-white group-hover:scale-110" />
                      <div className="text-center opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300 delay-75">
                        <span className="block text-[8px] sm:text-[10px] font-medium text-white/90 uppercase tracking-wider">
                          {label}
                        </span>
                      </div>
                    </div>
                  </div>
                </figure>
              );
            }
            return null;
          })}
        </div>
      </section>
    </div>
  );
}

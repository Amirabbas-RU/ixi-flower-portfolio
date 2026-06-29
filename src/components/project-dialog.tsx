"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useCallback } from "react";

interface Project {
  title: string;
  desc: string;
  tech: string[];
  href: string;
  site?: string;
  stars: number;
  lang: string;
  langColor: string;
  gradient: string;
}

interface ProjectDialogProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDialog({ project, onClose }: ProjectDialogProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (project) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, handleKeyDown]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Dialog */}
          <motion.div
            className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 bg-black/50 backdrop-blur-2xl shadow-2xl shadow-black/50"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-all duration-200"
              aria-label="Close"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <div className="flex flex-col lg:flex-row">
              {/* ─── Iframe or placeholder ─── */}
              <div className="relative w-full lg:w-[55%] min-h-[240px] lg:min-h-[400px] rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none overflow-hidden bg-black/60">
                {project.site ? (
                  <>
                    <div className="absolute inset-0 flex items-center justify-center z-0">
                      <div className="w-5 h-5 border-2 border-zinc-600 border-t-zinc-300 rounded-full animate-spin" />
                    </div>
                    <iframe
                      src={project.site}
                      className="relative z-10 w-full h-full min-h-[240px] lg:min-h-[400px]"
                      title={`${project.title} preview`}
                      sandbox="allow-scripts allow-same-origin"
                      loading="lazy"
                    />
                    {/* Gradient fade at bottom of iframe */}
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/80 to-transparent pointer-events-none z-20" />
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full min-h-[240px] lg:min-h-[400px] p-8 text-center">
                    <div
                      className="w-16 h-16 rounded-2xl mb-4 flex items-center justify-center"
                      style={{
                        background: `radial-gradient(circle, ${project.langColor}33, transparent 70%)`,
                      }}
                    >
                      <svg className="w-8 h-8 text-zinc-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                      </svg>
                    </div>
                    <p className="text-zinc-500 text-sm">No live preview available</p>
                    <p className="text-zinc-700 text-xs mt-1">This project doesn&apos;t have a deployed website</p>
                  </div>
                )}
              </div>

              {/* ─── Details panel ─── */}
              <div className="flex-1 p-6 sm:p-8 flex flex-col">
                {/* Language + Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: project.langColor }}
                    />
                    <span className="text-xs text-zinc-500 font-mono">{project.lang}</span>
                  </div>
                  {project.stars > 0 && (
                    <span className="text-xs text-zinc-600 font-mono flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      {project.stars}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{project.title}</h3>

                {/* Description */}
                <p className="text-sm text-zinc-400 leading-relaxed mb-6">{project.desc}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-lg bg-zinc-800/60 text-zinc-400 border border-zinc-800/40"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-zinc-800 via-zinc-700/50 to-zinc-800 mb-6" />

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                  {project.site && (
                    <a
                      href={project.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2.5 rounded-xl text-sm font-medium text-white bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 transition-all duration-200 text-center"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                        Visit Site
                      </span>
                    </a>
                  )}
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${project.site ? 'flex-1' : 'w-full'} px-4 py-2.5 rounded-xl text-sm font-medium text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 transition-all duration-200 text-center`}
                  >
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      View on GitHub
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

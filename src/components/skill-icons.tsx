"use client";

/* ─── 3D Illustrated Skill Icons ───
 * Custom illustrated isometric-style SVG icons
 * Designed to match the dark portfolio theme
 */

export function FrontendIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Glow behind */}
      <circle cx="40" cy="40" r="32" fill="url(#frontendGlow)" opacity="0.25" />

      {/* Monitor body (isometric) */}
      <path
        d="M16 28c0-2.2 1.8-4 4-4h40c2.2 0 4 1.8 4 4v26c0 2.2-1.8 4-4 4H20c-2.2 0-4-1.8-4-4V28z"
        fill="url(#frontendMonitor)"
        stroke="url(#frontendStroke)"
        strokeWidth="1.5"
      />

      {/* Screen inner glow */}
      <rect x="20" y="28" width="40" height="22" rx="2" fill="#0a0a0f" />
      <rect x="20" y="28" width="40" height="22" rx="2" fill="url(#frontendScreen)" opacity="0.6" />

      {/* Code lines on screen */}
      <g opacity="0.9">
        {/* Line 1 - opening tag */}
        <path d="M24 33h8" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 36h12" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 39h6" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 42h10" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 45h4" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* Cursor blink */}
      <rect x="29" y="43" width="2" height="4" fill="#7C3AED" rx="0.5" className="animate-pulse" />

      {/* Stand */}
      <path d="M32 58h16" stroke="#52525b" strokeWidth="2" strokeLinecap="round" />
      <path d="M38 58v4l-4 4h12l-4-4v-4" stroke="#52525b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

      {/* Floating elements */}
      <circle cx="58" cy="22" r="3" fill="#7C3AED" opacity="0.5" />
      <circle cx="62" cy="28" r="2" fill="#10B981" opacity="0.4" />
      <circle cx="54" cy="18" r="2" fill="#3B82F6" opacity="0.4" />

      {/* Terminal bracket accents */}
      <path d="M56 24l2-2-2-2" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />

      {/* Depth shadow */}
      <rect x="16" y="54" width="48" height="2" rx="1" fill="black" opacity="0.3" />

      <defs>
        <radialGradient id="frontendGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="frontendMonitor" x1="16" y1="28" x2="60" y2="54">
          <stop offset="0%" stopColor="#3b3b47" />
          <stop offset="100%" stopColor="#1f1f2a" />
        </linearGradient>
        <linearGradient id="frontendStroke" x1="16" y1="28" x2="60" y2="54">
          <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#52525b" />
        </linearGradient>
        <linearGradient id="frontendScreen" x1="20" y1="28" x2="60" y2="50">
          <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#10B981" stopOpacity="0.05" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function NetworkSecurityIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Glow behind */}
      <circle cx="40" cy="40" r="32" fill="url(#netGlow)" opacity="0.25" />

      {/* Network arcs */}
      <path
        d="M16 28c0-2.2 1.8-4 4-4h40c2.2 0 4 1.8 4 4v26c0 2.2-1.8 4-4 4H20c-2.2 0-4-1.8-4-4V28z"
        fill="url(#netBg)"
        stroke="url(#netStroke)"
        strokeWidth="1.5"
      />

      {/* 3D Shield body */}
      <g transform="translate(40,36)">
        {/* Shadow */}
        <ellipse cx="0" cy="18" rx="14" ry="3" fill="black" opacity="0.3" />
        {/* Shield body */}
        <path
          d="M0-16C6-16 14-12 14-6v2c0 10-6.5 17.5-14 20C-6.5 13.5-14 6-14-4v-2c0-6 6-10 14-10z"
          fill="url(#shieldGrad)"
          stroke="url(#shieldStroke)"
          strokeWidth="1.5"
        />
        {/* Shield inner glow */}
        <path
          d="M0-13C5-13 11-10 11-6v1c0 8-5 14-11 16.5C-5 9-11 3-11-5v-1c0-4 5-7 11-7z"
          fill="url(#shieldInner)"
          opacity="0.5"
        />
        {/* Lock body */}
        <rect x="-5" y="-6" width="10" height="8" rx="1.5" fill="#0a0a0f" />
        <rect x="-5" y="-6" width="10" height="8" rx="1.5" fill="url(#lockGrad)" opacity="0.6" />
        {/* Lock shackle */}
        <path
          d="M-3-6v-3a3 3 0 016 0v3"
          stroke="url(#lockStroke)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        {/* Keyhole */}
        <circle cx="0" cy="-2" r="1.5" fill="#EF4444" opacity="0.8" />
        <path d="M0-1v-2" stroke="#EF4444" strokeWidth="1" opacity="0.8" />
      </g>

      {/* Network nodes (orbiting dots) */}
      <circle cx="26" cy="26" r="3" fill="#EF4444" opacity="0.7" />
      <circle cx="54" cy="26" r="3" fill="#EF4444" opacity="0.7" />
      <circle cx="22" cy="44" r="2.5" fill="#F97316" opacity="0.6" />
      <circle cx="58" cy="44" r="2.5" fill="#F97316" opacity="0.6" />
      <circle cx="28" cy="54" r="2" fill="#EF4444" opacity="0.5" />
      <circle cx="52" cy="54" r="2" fill="#EF4444" opacity="0.5" />

      {/* Connection lines */}
      <path d="M29 28l14 4" stroke="#EF4444" strokeWidth="0.8" opacity="0.3" strokeDasharray="3 2" />
      <path d="M51 28l-14 4" stroke="#EF4444" strokeWidth="0.8" opacity="0.3" strokeDasharray="3 2" />
      <path d="M29 28l-4 13" stroke="#EF4444" strokeWidth="0.8" opacity="0.3" strokeDasharray="3 2" />
      <path d="M51 28l4 13" stroke="#EF4444" strokeWidth="0.8" opacity="0.3" strokeDasharray="3 2" />

      <defs>
        <radialGradient id="netGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#EF4444" />
          <stop offset="100%" stopColor="#EF4444" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="netBg" x1="16" y1="24" x2="60" y2="58">
          <stop offset="0%" stopColor="#3b3b47" />
          <stop offset="100%" stopColor="#1f1f2a" />
        </linearGradient>
        <linearGradient id="netStroke" x1="16" y1="24" x2="60" y2="58">
          <stop offset="0%" stopColor="#EF4444" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#52525b" />
        </linearGradient>
        <linearGradient id="shieldGrad" x1="-14" y1="-16" x2="14" y2="20">
          <stop offset="0%" stopColor="#EF4444" />
          <stop offset="50%" stopColor="#DC2626" />
          <stop offset="100%" stopColor="#991B1B" />
        </linearGradient>
        <linearGradient id="shieldStroke" x1="-14" y1="-16" x2="14" y2="20">
          <stop offset="0%" stopColor="#FCA5A5" />
          <stop offset="100%" stopColor="#7F1D1D" />
        </linearGradient>
        <linearGradient id="shieldInner" x1="-11" y1="-13" x2="11" y2="17">
          <stop offset="0%" stopColor="#FEE2E2" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FEE2E2" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="lockGrad" x1="-5" y1="-6" x2="5" y2="2">
          <stop offset="0%" stopColor="#1f1f2a" />
          <stop offset="100%" stopColor="#0a0a0f" />
        </linearGradient>
        <linearGradient id="lockStroke" x1="-3" y1="-9" x2="3" y2="-3">
          <stop offset="0%" stopColor="#FCA5A5" />
          <stop offset="100%" stopColor="#DC2626" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function BackendIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Glow behind */}
      <circle cx="40" cy="40" r="32" fill="url(#backendGlow)" opacity="0.25" />

      {/* Server body */}
      <path
        d="M16 28c0-2.2 1.8-4 4-4h40c2.2 0 4 1.8 4 4v26c0 2.2-1.8 4-4 4H20c-2.2 0-4-1.8-4-4V28z"
        fill="url(#serverBg)"
        stroke="url(#serverStroke)"
        strokeWidth="1.5"
      />

      {/* Server rack lines */}
      <g opacity="0.15">
        <line x1="20" y1="35" x2="60" y2="35" stroke="#52525b" strokeWidth="0.5" />
        <line x1="20" y1="45" x2="60" y2="45" stroke="#52525b" strokeWidth="0.5" />
        <line x1="20" y1="38" x2="60" y2="38" stroke="#52525b" strokeWidth="0.5" />
        <line x1="20" y1="48" x2="60" y2="48" stroke="#52525b" strokeWidth="0.5" />
      </g>

      {/* Server units */}
      {/* Unit 1 */}
      <rect x="24" y="30" width="32" height="8" rx="2" fill="url(#serverUnit)" stroke="#52525b" strokeWidth="0.8" />
      <circle cx="30" cy="34" r="1.5" fill="#10B981" opacity="0.8" />
      <rect x="42" y="32" width="6" height="4" rx="0.5" fill="#3b3b47" stroke="#52525b" strokeWidth="0.5" />

      {/* Unit 2 */}
      <rect x="24" y="40" width="32" height="8" rx="2" fill="url(#serverUnit)" stroke="#52525b" strokeWidth="0.8" />
      <circle cx="30" cy="44" r="1.5" fill="#3B82F6" opacity="0.8" />
      <rect x="42" y="42" width="6" height="4" rx="0.5" fill="#3b3b47" stroke="#52525b" strokeWidth="0.5" />

      {/* Unit 3 (bottom - active) */}
      <rect x="24" y="50" width="32" height="8" rx="2" fill="url(#serverUnitActive)" stroke="#10B981" strokeWidth="0.8" />
      <circle cx="30" cy="54" r="1.5" fill="#10B981" opacity="1" />
      <circle cx="34" cy="54" r="1.5" fill="#10B981" opacity="0.6" />
      <circle cx="38" cy="54" r="1.5" fill="#10B981" opacity="0.3" />
      <rect x="42" y="52" width="6" height="4" rx="0.5" fill="#1f1f2a" stroke="#10B981" strokeWidth="0.5" />

      {/* LED glow line */}
      <rect x="24" y="49" width="32" height="1" fill="#10B981" opacity="0.3" />

      {/* Database cylinder in front */}
      <g transform="translate(56,52)">
        <ellipse cx="0" cy="0" rx="5" ry="2" fill="url(#dbTop)" />
        <path d="M-5 0v6c0 2.2 2.2 4 5 4s5-1.8 5-4V0" fill="url(#dbBody)" />
        <ellipse cx="0" cy="6" rx="5" ry="2" fill="url(#dbBottom)" />
        <ellipse cx="0" cy="6" rx="5" ry="1.5" fill="#10B981" opacity="0.15" />
        {/* DB reflection */}
        <path d="M-2 1v8" stroke="white" strokeWidth="0.5" opacity="0.08" />
      </g>

      {/* Data flow arrows */}
      <path d="M58 36l3-2-3-2" stroke="#10B981" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
      <path d="M58 44l3-2-3-2" stroke="#10B981" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />

      <defs>
        <radialGradient id="backendGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="serverBg" x1="16" y1="24" x2="60" y2="58">
          <stop offset="0%" stopColor="#3b3b47" />
          <stop offset="100%" stopColor="#1f1f2a" />
        </linearGradient>
        <linearGradient id="serverStroke" x1="16" y1="24" x2="60" y2="58">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#52525b" />
        </linearGradient>
        <linearGradient id="serverUnit" x1="24" y1="30" x2="56" y2="38">
          <stop offset="0%" stopColor="#2a2a35" />
          <stop offset="100%" stopColor="#1a1a25" />
        </linearGradient>
        <linearGradient id="serverUnitActive" x1="24" y1="50" x2="56" y2="58">
          <stop offset="0%" stopColor="#1a3a2a" />
          <stop offset="100%" stopColor="#0d2818" />
        </linearGradient>
        <linearGradient id="dbTop" x1="-5" y1="0" x2="5" y2="0">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
        <linearGradient id="dbBody" x1="-5" y1="0" x2="5" y2="10">
          <stop offset="0%" stopColor="#059669" />
          <stop offset="100%" stopColor="#065F46" />
        </linearGradient>
        <linearGradient id="dbBottom" x1="-5" y1="6" x2="5" y2="6">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
      </defs>
    </svg>
  );
}

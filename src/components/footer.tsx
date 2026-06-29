"use client";

import { FaGithub, FaTelegram, FaEnvelope, FaLinkedin, FaYoutube } from "react-icons/fa";
import SocialButton from "./social-button";
import SocialFlipButton from "./social-flip-button";

const brandColors: Record<string, string> = {
  GitHub: "#888",
  Telegram: "#0088cc",
  Email: "#ea4335",
  LinkedIn: "#0a66c2",
  YouTube: "#ff0000",
};

const iconMap: Record<string, React.ReactNode> = {
  GitHub: <FaGithub size={18} />,
  Telegram: <FaTelegram size={18} />,
  Email: <FaEnvelope size={18} />,
  LinkedIn: <FaLinkedin size={18} />,
  YouTube: <FaYoutube size={18} />,
};

const socialLinks = [
  {
    href: "https://github.com/ixiflower",
    label: "GitHub",
  },
  {
    href: "https://t.me/ixi_flower",
    label: "Telegram",
  },
  {
    href: "mailto:amriabbas.rouintan2007@gmail.com",
    label: "Email",
  },
  {
    href: "https://linkedin.com/in/ixiflower",
    label: "LinkedIn",
  },
  {
    href: "https://youtube.com/@ixi_flower",
    label: "YouTube",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-zinc-800/60">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-6 sm:py-8">
        <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-between">
          {/* Copyright */}
          <p className="text-xs sm:text-sm text-zinc-500 order-2 sm:order-1">
            &copy; {year} ixi_flower. All rights reserved.
          </p>

          {/* Desktop: SocialFlipButton (hidden on mobile) */}
          <div className="hidden md:block order-1 sm:order-2">
            <SocialFlipButton />
          </div>

          {/* Mobile: candy buttons (hidden on md+) */}
          <div className="flex md:hidden items-center justify-center gap-2 flex-wrap order-1 sm:order-2">
            {socialLinks.map((link) => (
              <SocialButton
                key={link.label}
                href={link.href}
                label={link.label}
                icon={iconMap[link.label]}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";

interface HeaderProps {
  apkUrl: string;
}

export default function Header({ apkUrl }: HeaderProps) {
  const headerRef = useRef<HTMLElement>(null);
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      if (headerRef.current) {
        if (currentScroll > lastScroll.current && currentScroll > 100) {
          headerRef.current.style.transform = "translateY(-100%)";
        } else {
          headerRef.current.style.transform = "translateY(0)";
        }
        headerRef.current.style.transition = "transform 0.4s ease";
      }
      lastScroll.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header ref={headerRef} className="docked full-width top-0 sticky z-50 bg-surface/80 glass-header border-b border-border/50 shadow-sm">
      <nav className="flex justify-between items-center w-full px-6 py-4 max-w-container-max mx-auto">
        <div className="font-h3 text-h3 font-bold text-primary flex items-center gap-2">
          <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          Lumina
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link className="text-primary font-bold border-b-2 border-primary font-body-md py-1" href="#">Sobre o App</Link>
          <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md py-1" href="#">Como Instalar</Link>
          <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md py-1" href="#">Comunidade</Link>
        </div>
        <a href={apkUrl} className="btn-gradient text-white px-6 py-2.5 rounded-full font-label-md hover:opacity-90 active:scale-95 transition-all duration-150 inline-block text-center">
          Baixar APK
        </a>
      </nav>
    </header>
  );
}

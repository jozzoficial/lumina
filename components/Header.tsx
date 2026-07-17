"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import logoImg from "../public/img/logo.png";

interface HeaderProps {
  apkUrl: string;
  webUrl: string;
}

export default function Header({ apkUrl, webUrl }: HeaderProps) {
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
        <Link href="/" className="flex items-center gap-2">
          <Image src={logoImg} alt="Lumina Logo" className="h-10 w-auto" />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link className="text-primary font-bold border-b-2 border-primary font-body-md py-1" href="#sobre">Sobre o App</Link>
          <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md py-1" href="#como-instalar">Como Instalar</Link>
          <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md py-1" href="#comunidade">Comunidade</Link>
        </div>
        <div className="flex items-center gap-4">
          <a href={webUrl} className="hidden md:block text-on-surface-variant hover:text-primary font-bold transition-colors">
            Aceder Web
          </a>
          <a href={apkUrl} className="btn-gradient text-white px-6 py-2.5 rounded-full font-label-md hover:opacity-90 active:scale-95 transition-all duration-150 inline-block text-center shadow-md">
            Baixar APK
          </a>
        </div>
      </nav>
    </header>
  );
}

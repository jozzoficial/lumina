import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";

export default function Home() {
  // Coloque aqui o link do GitHub Releases (ou outro) e o link da sua Web App
  const apkUrl = "https://github.com/jozzoficial/lumina-landingpage/releases/download/v1.0.0/lumina_app.1.0.0.apk";
  const webUrl = "https://lumina-app-taket.web.app";

  return (
    <>
      <Header apkUrl={apkUrl} webUrl={webUrl} />
      <main>
        {/* Hero Section */}
        <section className="relative pt-section-v pb-section-v px-gutter max-w-container-max mx-auto">
          <div className="grid lg:grid-cols-2 gap-stack-lg items-center">
            <div className="space-y-stack-md text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary-fixed/30 text-secondary font-label-md rounded-full border border-secondary-fixed">
                <span className="material-symbols-outlined text-[18px]">verified_user</span>
                <span>Especialmente para Mães Angolanas</span>
              </div>
              <h1 className="font-h1 text-h1-mobile lg:text-h1 text-text-primary">
                O teu guia digital e <span className="text-primary">seguro</span> na maternidade
              </h1>
              <p className="text-body-lg text-text-secondary max-w-xl mx-auto lg:mx-0">
                Acompanha o crescimento do teu bebé semana a semana, gere as tuas consultas e recebe apoio personalizado. Tudo pensado para o teu telemóvel Android.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                <a href={apkUrl} className="btn-gradient text-white px-8 py-4 rounded-full font-label-md flex items-center justify-center gap-2 hover:opacity-90 transition-all active:scale-95 inline-flex">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>android</span>
                  Baixar App (APK Android)
                </a>
                <a href={webUrl} className="border-2 border-on-background text-on-background hover:bg-on-background hover:text-surface px-8 py-4 rounded-full font-label-md transition-all active:scale-95 inline-flex items-center justify-center">
                  Aceder Web App
                </a>
              </div>
            </div>
            <div className="relative flex justify-center items-center">
              {/* Subtle Glow */}
              <div className="absolute w-[400px] h-[400px] bg-primary/10 rounded-full blur-[80px] -z-10"></div>
              <div className="relative mx-auto w-full max-w-[320px] bg-gray-900 border-[12px] border-gray-900 rounded-[3rem] shadow-2xl">
                {/* Câmara frontal (Punch Hole) realista para Android */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-black rounded-full border border-gray-800/50 z-20 shadow-[inset_0_-2px_4px_rgba(255,255,255,0.1)]"></div>
                
                {/* Altifalante superior minúsculo */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gray-800 rounded-b-lg z-20"></div>
                
                {/* Botões Físicos Laterais (Volume e Power) */}
                <div className="absolute -left-[14px] top-[100px] w-[3px] h-[40px] bg-gray-800 rounded-l-md"></div>
                <div className="absolute -left-[14px] top-[150px] w-[3px] h-[40px] bg-gray-800 rounded-l-md"></div>
                <div className="absolute -right-[14px] top-[130px] w-[3px] h-[50px] bg-gray-800 rounded-r-md"></div>

                {/* Ecrã Real do Telemóvel */}
                <div className="w-full h-auto rounded-[2.2rem] overflow-hidden relative bg-black flex items-center justify-center">
                  <Image 
                    src="/img/dashboard-ecra.png" 
                    alt="Ecrã real do aplicativo Lumina" 
                    width={320}
                    height={650}
                    className="w-full h-auto object-cover relative z-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Bento Grid */}
        <section id="sobre" className="py-section-v px-gutter bg-surface-container-low">
          <div className="max-w-container-max mx-auto">
            <div className="text-center mb-stack-lg space-y-2">
              <h2 className="font-h2 text-h2 text-text-primary">Por que escolher o Lumina?</h2>
              <p className="text-text-secondary text-body-lg max-w-2xl mx-auto">Tecnologia desenhada para acompanhar cada passo da tua jornada materna com segurança e clareza.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-surface p-8 rounded-3xl border border-border/50 shadow-sm hover-lift group">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 transition-colors group-hover:bg-primary group-hover:text-white">
                  <span className="material-symbols-outlined text-3xl">medical_services</span>
                </div>
                <h3 className="font-h3 text-h3 mb-4">Consultas Pré-Natais</h3>
                <p className="text-text-secondary">Acompanhamento rigoroso focado no protocolo da OMS. Nunca percas uma consulta no teu centro de saúde.</p>
              </div>
              {/* Feature 2 */}
              <div className="bg-surface p-8 rounded-3xl border border-border/50 shadow-sm hover-lift group">
                <div className="w-14 h-14 bg-secondary-container/10 rounded-2xl flex items-center justify-center text-secondary mb-6 transition-colors group-hover:bg-secondary-container group-hover:text-white">
                  <span className="material-symbols-outlined text-3xl">assignment</span>
                </div>
                <h3 className="font-h3 text-h3 mb-4">Diário de Sintomas</h3>
                <p className="text-text-secondary">Regista como te sentes diariamente para criar um histórico clínico preciso para partilhares com o teu médico.</p>
              </div>
              {/* Feature 3 */}
              <div className="bg-emergency-soft p-8 rounded-3xl border border-error/10 shadow-sm hover-lift group">
                <div className="w-14 h-14 bg-error/10 rounded-2xl flex items-center justify-center text-error mb-6 transition-colors group-hover:bg-error group-hover:text-white">
                  <span className="material-symbols-outlined text-3xl">emergency</span>
                </div>
                <h3 className="font-h3 text-h3 mb-4 text-on-surface">Alerta SOS</h3>
                <p className="text-on-surface-variant">Botão de pânico com ligação directa ao 112 e partilha imediata da tua localização com os teus contactos de emergência.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Installation Guide */}
        <section id="como-instalar" className="py-section-v px-gutter">
          <div className="max-w-container-max mx-auto bg-inverse-surface rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none"></div>
            <div className="relative z-10 grid lg:grid-cols-5 gap-stack-lg items-center">
              <div className="lg:col-span-2 space-y-stack-md">
                <h2 className="font-h2 text-h2 text-white">Como instalar o Lumina no teu Android</h2>
                <p className="text-primary-fixed-dim text-body-lg">Garante a tua segurança descarregando a aplicação directamente do nosso site oficial.</p>
                <div className="pt-4">
                  <a href={apkUrl} className="bg-white text-inverse-surface px-8 py-4 rounded-full font-label-md hover:bg-primary-fixed transition-colors flex items-center gap-2 inline-flex">
                    <span className="material-symbols-outlined">download</span>
                    Descarregar Agora
                  </a>
                </div>
              </div>
              <div className="lg:col-span-3 space-y-6">
                <div className="flex gap-6 items-start">
                  <div className="w-10 h-10 rounded-full bg-primary flex-shrink-0 flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <h4 className="text-white font-h3 text-h3">Descarrega o Ficheiro</h4>
                    <p className="text-outline-variant">Clica no botão de download. O ficheiro APK será guardado na pasta de <strong>Transferências</strong> do teu telemóvel.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-10 h-10 rounded-full bg-primary flex-shrink-0 flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h4 className="text-white font-h3 text-h3">Permite Fontes Desconhecidas</h4>
                    <p className="text-outline-variant">Nas definições de segurança do teu Android, autoriza a instalação de aplicações fora da Play Store.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-10 h-10 rounded-full bg-primary flex-shrink-0 flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h4 className="text-white font-h3 text-h3">Instala e Começa a Usar</h4>
                    <p className="text-outline-variant">Abre o ficheiro e segue os passos. Em segundos estarás pronta para acompanhar o teu bebé!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Teaser */}
        <section id="comunidade" className="py-section-v px-gutter max-w-container-max mx-auto text-center">
          <div className="bg-surface-container rounded-3xl p-12 space-y-6">
            <span className="material-symbols-outlined text-primary text-5xl">diversity_1</span>
            <h2 className="font-h2 text-h2">Mais do que um App, uma Comunidade</h2>
            <p className="text-text-secondary text-body-lg max-w-2xl mx-auto">Junta-te a milhares de outras mães angolanas no nosso grupo exclusivo para partilhar experiências e conselhos.</p>
            <div className="flex justify-center pt-4">
              <a className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all" href={webUrl}>
                Ir para a Comunidade Lumina
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-stack-lg px-gutter max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-stack-md bg-surface-container-low border-t border-border/30">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <Image src="/img/logo.png" alt="Lumina Logo" width={160} height={40} className="h-10 w-auto" />
          </div>
          <p className="font-caption text-caption text-on-surface-variant">Desenvolvido com carinho pela TaketWare</p>
        </div>
        <div className="flex gap-6">
          <a className="font-caption text-caption text-on-surface-variant hover:text-primary transition-colors underline decoration-primary/30 underline-offset-4" href={webUrl}>WhatsApp Suporte</a>
          <a className="font-caption text-caption text-on-surface-variant hover:text-primary transition-colors underline decoration-primary/30 underline-offset-4" href={webUrl}>Termos de Uso</a>
          <a className="font-caption text-caption text-on-surface-variant hover:text-primary transition-colors underline decoration-primary/30 underline-offset-4" href={webUrl}>Privacidade</a>
        </div>
        <div className="flex gap-4">
          <a href={webUrl} className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all cursor-pointer">
            <span className="material-symbols-outlined text-sm">public</span>
          </a>
          <a href={webUrl} className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all cursor-pointer">
            <span className="material-symbols-outlined text-sm">share</span>
          </a>
        </div>
      </footer>
    </>
  );
}

import React, { useEffect, useRef, useState } from 'react';
import { Navbar } from '../sections/Navbar';
import { Footer } from '../sections/Footer';
import { Card } from '../components/Card';

const DEV_WORKFLOWS_URL = 'https://pay.hotmart.com/J103882607O?checkoutMode=2';

const faqItems = [
  {
    question: '¿En qué formato se entrega el pack?',
    answer: 'Recibes un bundle organizado por categorías listo para importar en n8n, con instrucciones claras y ejemplos etiquetados.',
  },
  {
    question: '¿Necesito saber usar n8n?',
    answer: 'Es ideal si ya conoces lo básico. Incluimos notas y flujos comentados para que puedas adaptar rápido sin empezar de cero.',
  },
  {
    question: '¿Puedo usar los workflows con clientes?',
    answer: 'Sí. Puedes usarlos en tus proyectos y con tus clientes. Ajusta credenciales y endpoints según cada caso.',
  },
  {
    question: '¿Cuánto tiempo tendré acceso?',
    answer: 'Acceso inmediato y permanente al pack descargable. Guárdalo y úsalo cuando lo necesites.',
  },
];

const DevMaterialsPage: React.FC = () => {
  const heroTextRef = useRef<HTMLDivElement>(null);
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const applyCustomStyles = () => {
      const styleExists = document.querySelector('style[data-hotmart-override]');
      if (styleExists) return;

      const style = document.createElement('style');
      style.setAttribute('data-hotmart-override', 'true');
      style.textContent = `
        a.hotmart-fb.hotmart__button-checkout,
        .hotmart-fb.hotmart__button-checkout {
          position: relative !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          overflow: hidden !important;
          background: linear-gradient(135deg, #10b981 0%, #8b5cf6 100%) !important;
          background-image: linear-gradient(135deg, #10b981 0%, #8b5cf6 100%) !important;
          color: white !important;
          border: none !important;
          outline: none !important;
          text-decoration: none !important;
          font-weight: 600 !important;
          backdrop-filter: blur(10px) !important;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
          box-shadow: 
            0 0 15px rgba(16, 185, 129, 0.4),
            0 0 30px rgba(139, 92, 246, 0.4),
            0 4px 15px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.1) !important;
          border-radius: 0.5rem !important;
          padding: 0.75rem 1.5rem !important;
          box-sizing: border-box !important;
        }
        a.hotmart-fb.hotmart__button-checkout::before,
        .hotmart-fb.hotmart__button-checkout::before {
          content: '' !important;
          position: absolute !important;
          top: 0 !important;
          left: -100% !important;
          width: 100% !important;
          height: 100% !important;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent) !important;
          transition: left 0.5s ease !important;
          z-index: 1 !important;
        }
        a.hotmart-fb.hotmart__button-checkout:hover,
        .hotmart-fb.hotmart__button-checkout:hover {
          background: linear-gradient(135deg, #059669 0%, #7c3aed 100%) !important;
          background-image: linear-gradient(135deg, #059669 0%, #7c3aed 100%) !important;
          transform: translateY(-2px) scale(1.02) !important;
          box-shadow: 
            0 0 20px rgba(16, 185, 129, 0.6),
            0 0 40px rgba(139, 92, 246, 0.6),
            0 0 60px rgba(16, 185, 129, 0.3),
            0 8px 25px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.2) !important;
          border: none !important;
          outline: none !important;
        }
        a.hotmart-fb.hotmart__button-checkout:hover::before,
        .hotmart-fb.hotmart__button-checkout:hover::before {
          left: 100% !important;
        }
        a.hotmart-fb.hotmart__button-checkout:active,
        .hotmart-fb.hotmart__button-checkout:active {
          transform: translateY(0) scale(0.98) !important;
        }
        a.hotmart-fb.hotmart__button-checkout img,
        .hotmart-fb.hotmart__button-checkout img {
          display: none !important;
        }
        a.hotmart-fb.hotmart__button-checkout > *,
        .hotmart-fb.hotmart__button-checkout > * {
          position: relative !important;
          z-index: 2 !important;
        }
      `;
      document.head.appendChild(style);
    };

    const importHotmart = () => {
      const scriptExists = document.querySelector('script[src="https://static.hotmart.com/checkout/widget.min.js"]');
      const linkExists = document.querySelector('link[href="https://static.hotmart.com/css/hotmart-fb.min.css"]');
      
      if (!scriptExists) {
        const imported = document.createElement('script');
        imported.src = 'https://static.hotmart.com/checkout/widget.min.js';
        document.head.appendChild(imported);
      }
      
      if (!linkExists) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'https://static.hotmart.com/css/hotmart-fb.min.css';
        
        link.onload = () => {
          setTimeout(() => {
            applyCustomStyles();
            const buttons = document.querySelectorAll('.hotmart-fb.hotmart__button-checkout');
            buttons.forEach(btn => {
              const htmlBtn = btn as HTMLElement;
              htmlBtn.style.cssText = '';
              htmlBtn.style.border = 'none';
              htmlBtn.style.outline = 'none';
              htmlBtn.style.borderRadius = '0.5rem';
            });
          }, 100);
        };
        
        document.head.appendChild(link);
      } else {
        setTimeout(() => {
          applyCustomStyles();
          const buttons = document.querySelectorAll('.hotmart-fb.hotmart__button-checkout');
          buttons.forEach(btn => {
            (btn as HTMLElement).style.cssText = '';
          });
        }, 100);
      }
    };

    importHotmart();
    
    const intervalId = setInterval(() => {
      const buttons = document.querySelectorAll('.hotmart-fb.hotmart__button-checkout');
      if (buttons.length > 0) {
        applyCustomStyles();
        buttons.forEach(btn => {
          const htmlBtn = btn as HTMLElement;
          htmlBtn.style.background = '';
          htmlBtn.style.backgroundColor = '';
          htmlBtn.style.backgroundImage = '';
          htmlBtn.style.border = 'none';
          htmlBtn.style.outline = 'none';
          htmlBtn.style.borderRadius = '0.5rem';
        });
        clearInterval(intervalId);
      }
    }, 200);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroTextRef.current) return;
      const rect = heroTextRef.current.getBoundingClientRect();
      const shouldShow = rect.bottom <= 120; // once hero headline scrolls past
      setShowStickyBar(shouldShow);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg text-gray-200">
      <Navbar />

      <div
        className={`fixed top-20 left-0 right-0 z-40 transition-all duration-300 ${
          showStickyBar ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3 pointer-events-none'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center gap-3 justify-between rounded-xl bg-gradient-to-r from-primary-purple/30 via-dark-surface to-primary-green/30 border border-primary-purple/30 px-4 py-3 shadow-lg shadow-primary-purple/10 backdrop-blur">
            <div className="text-sm sm:text-base text-gray-100 font-semibold flex flex-wrap items-center gap-2">
              <span className="px-2 py-1 rounded-lg bg-dark-surface/60 border border-primary-purple/40">Pack 3.500+ workflows n8n</span>
              <span className="text-primary-green-light">·</span>
              <span>Precio lanzamiento: <span className="text-primary-green-light font-bold">5 USD</span></span>
            </div>
            <a
              onClick={(e) => { e.preventDefault(); return false; }}
              href={DEV_WORKFLOWS_URL}
              className="hotmart-fb hotmart__button-checkout px-4 py-2 rounded-lg font-semibold bg-gradient-to-r from-primary-green to-primary-purple text-white hover:from-primary-green-dark hover:to-primary-purple-dark transition-all duration-300 shadow-md shadow-primary-green/30"
            >
              Comprar ahora
            </a>
          </div>
        </div>
      </div>

      <main className="pt-20 pb-16">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/10 via-dark-bg to-primary-green/10 blur-3xl opacity-70" />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div 
                className={`space-y-6 transition-all duration-700 ease-out ${
                  isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                ref={heroTextRef}
              >
                <p className="uppercase tracking-[0.2em] text-xs text-primary-green">Pack especial</p>
                <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-white">
                  El pack definitivo de workflows n8n para devs
                </h1>
                <p className="text-lg text-gray-300">
                  Lleva un pack con <span className="text-white font-semibold">más de 3.500 workflows listos para usar en n8n</span> para acelerar integraciones, pruebas y prototipos sin reinventar la rueda.
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-dark-surface/70 border border-primary-green/40 text-sm text-primary-green-light shadow-primary-green/10 shadow">
                  <span>Pago único</span>
                  <span className="text-primary-green">•</span>
                  <span>Descarga inmediata</span>
                </div>
                <div className="p-4 rounded-xl bg-dark-surface/60 border border-primary-purple/30 flex items-center justify-between gap-6">
                  <div>
                    <p className="text-sm text-gray-400">Precio lanzamiento</p>
                    <p className="text-3xl font-bold text-primary-green-light">5 USD</p>
                  </div>
                  <a
                    onClick={(e) => { e.preventDefault(); return false; }}
                    href={DEV_WORKFLOWS_URL}
                    className="hotmart-fb hotmart__button-checkout px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-primary-green to-primary-purple text-white hover:from-primary-green-dark hover:to-primary-purple-dark transition-all duration-300 shadow-lg shadow-primary-purple/30"
                  >
                    Quiero el pack por 5 USD
                  </a>
                </div>
                <p className="text-sm text-gray-400">Acceso inmediato al pack una vez completes el pago.</p>
              </div>

              <div 
                className={`relative transition-all duration-700 ease-out delay-200 ${
                  isMounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
              >
                <div className="absolute -inset-8 bg-gradient-to-br from-primary-green/20 to-primary-purple/30 blur-3xl opacity-50" />
                <div className="relative bg-dark-surface border border-dark-border rounded-2xl p-8 shadow-2xl">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-primary-green-light" />
                      <span className="w-2 h-2 rounded-full bg-primary-purple-light" />
                      <span className="w-2 h-2 rounded-full bg-gray-400" />
                    </div>
                    <span className="text-xs text-gray-400">n8n mega pack</span>
                  </div>
                  <div className="space-y-4 text-sm text-gray-300">
                    <Card className="bg-dark-surface-light border border-primary-purple/40 shadow-primary-purple/10">
                      <p className="text-primary-green font-semibold">3.500+ flujos listos</p>
                      <p className="text-gray-400 mt-1">Integraciones con APIs, webhooks y plantillas listas para copiar.</p>
                    </Card>
                    <Card className="bg-dark-surface-light border border-primary-green/40 shadow-primary-green/10">
                      <p className="text-primary-purple-light font-semibold">Estructuras editables</p>
                      <p className="text-gray-400 mt-1">Nodos anotados y ordenados para adaptarlos en minutos.</p>
                    </Card>
                    <Card className="bg-dark-surface-light border border-dark-border shadow-dark-border/20">
                      <p className="text-white font-semibold">Checklist de inicio rápido</p>
                      <p className="text-gray-400 mt-1">Configura credenciales, prueba y despliega sin pasos extra.</p>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section 
          className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-3 gap-10 transition-all duration-700 ease-out delay-300 ${
            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-3xl font-bold text-white">Qué incluye</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                '+3.500 workflows listos para usar en n8n.',
                'Flujos para integraciones con APIs, webhooks y servicios comunes.',
                'Ejemplos que se pueden adaptar rápido a proyectos reales.',
                'Estructuras pensadas para ser entendidas y modificadas por devs.',
              ].map((item) => (
                <div key={item} className="flex items-start space-x-3 p-4 rounded-xl bg-dark-surface border border-dark-border">
                  <span className="text-primary-green">◆</span>
                  <p className="text-gray-200">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 bg-dark-surface border border-primary-purple/30 rounded-2xl p-6">
            <h3 className="text-2xl font-semibold text-white">Para quién es</h3>
            <ul className="space-y-3 text-gray-300">
              <li>• Desarrolladores que ya usan n8n.</li>
              <li>• Personas técnicas que quieren prototipar más rápido.</li>
              <li>• Equipos que necesitan muchas automatizaciones sin partir de cero.</li>
            </ul>
          </div>
        </section>

        <section 
          className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 transition-all duration-700 ease-out delay-400 ${
            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="rounded-2xl border border-primary-green/30 bg-primary-green/5 px-6 py-10">
            <h3 className="text-2xl font-semibold text-white mb-6">Beneficios</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                'Ahorra horas buscando ejemplos sueltos.',
                'Inspírate con flujos reales que puedes adaptar.',
                'Crea MVPs, PoCs y automatizaciones en minutos.',
              ].map((benefit) => (
                <div key={benefit} className="flex items-start space-x-3 bg-dark-surface-light border border-dark-border rounded-xl p-4">
                  <span className="text-primary-green">✅</span>
                  <p className="text-gray-200">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section 
          className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6 transition-all duration-700 ease-out delay-500 ${
            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-sm text-primary-green uppercase tracking-[0.2em]">Lanzamiento</p>
              <h3 className="text-3xl font-bold text-white">Precio lanzamiento: 5 USD</h3>
              <p className="text-gray-300 mt-2">Incluye acceso inmediato al pack completo.</p>
            </div>
            <a
              onClick={(e) => { e.preventDefault(); return false; }}
              href={DEV_WORKFLOWS_URL}
              className="hotmart-fb hotmart__button-checkout px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-primary-green to-primary-purple text-white hover:from-primary-green-dark hover:to-primary-purple-dark transition-all duration-300 shadow-lg shadow-primary-green/30 text-center"
            >
              Quiero el pack por 5 USD
            </a>
          </div>
        </section>

        <section 
          className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 transition-all duration-700 ease-out delay-600 ${
            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-dark-surface border border-dark-border rounded-2xl p-6 md:p-10 space-y-6">
            <h3 className="text-2xl font-semibold text-white">FAQ</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {faqItems.map((item) => (
                <div key={item.question} className="p-4 rounded-xl bg-dark-surface-light border border-dark-border">
                  <p className="text-white font-semibold">{item.question}</p>
                  <p className="text-gray-400 mt-2">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DevMaterialsPage;



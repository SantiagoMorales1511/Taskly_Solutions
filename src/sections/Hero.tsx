import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

interface HeroProps {
  isMounted?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ isMounted = false }) => {
  const { scrollToSection } = useSmoothScroll();
  const navigate = useNavigate();

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div 
          className={`text-center lg:text-left space-y-8 transition-all duration-700 ease-out ${
            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-white">Automatizamos tu negocio para que</span>
            <br />
            <span className="text-gradient">dejes de hacer tareas repetitivas</span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0">
            En Taskly Solutions diseñamos automatizaciones y bots que conectan tus herramientas y te ahorran horas de trabajo cada semana.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              variant="primary"
              onClick={() => scrollToSection('contacto')}
              className="text-lg px-8 py-4"
            >
              Quiero automatizar mi negocio
            </Button>
            <Button
              variant="secondary"
              onClick={() => scrollToSection('proceso')}
              className="text-lg px-8 py-4"
            >
              Ver cómo funciona
            </Button>
          </div>

          <p className="text-sm text-gray-500 pt-4">
            Enfocado en emprendedores y negocios en Latinoamérica.
          </p>
        </div>

        <div 
          className={`relative transition-all duration-700 ease-out delay-200 ${
            isMounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}
        >
          <div className="relative bg-dark-surface border border-dark-border rounded-2xl p-8 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-green/10 to-primary-purple/10 opacity-50"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-sm font-medium text-gray-300">⚡ Taskly en acción</div>
              </div>

              <ConsoleOutput />

              <div className="mt-6 flex items-center justify-center">
                <div className="px-4 py-2 bg-primary-green/10 border border-primary-green/30 rounded-full text-xs text-primary-green-light">
                  Ejemplo de tareas que Taskly puede automatizar por ti.
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-purple/20 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-green/20 rounded-full blur-2xl"></div>
        </div>

        <div 
          className={`mt-4 bg-gradient-to-r from-primary-green/10 via-dark-surface to-primary-purple/10 border border-dark-border rounded-2xl p-6 shadow-lg shadow-primary-purple/10 transition-all duration-700 ease-out delay-300 ${
            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <p className="text-sm text-primary-green uppercase tracking-[0.2em]">Pack dev</p>
              <p className="text-lg text-white font-semibold">Pack de 3.500+ workflows n8n</p>
              <p className="text-sm text-gray-400">Listo para integrar y prototipar más rápido.</p>
            </div>
            <Button
              variant="secondary"
              onClick={() => navigate('/dev-material')}
              className="px-6 py-3 bg-dark-surface border-primary-green/60 text-primary-green-light hover:border-primary-green hover:text-white hover:bg-primary-green/10"
            >
              Ver el pack
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const ConsoleOutput: React.FC = () => {
  const events = [
    { status: 'OK', message: 'Nuevo mensaje recibido desde formulario de la web' },
    { status: 'OK', message: 'Enviando respuesta automática por WhatsApp…' },
    { status: 'OK', message: 'Creando contacto en el CRM' },
    { status: 'OK', message: 'Programando recordatorio de seguimiento' },
    { status: 'OK', message: 'Actualizando estado del cliente a "Interesado"' },
  ];

  const [displayedEvents, setDisplayedEvents] = useState<Array<{ status: string; message: string; displayedText: string; isComplete: boolean }>>([]);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentEventIndex >= events.length) {
      setIsTyping(false);
      return;
    }

    const currentEvent = events[currentEventIndex];
    const fullText = currentEvent.message;

    if (currentCharIndex <= fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedEvents((prev) => {
          const newEvents = [...prev];
          if (!newEvents[currentEventIndex]) {
            newEvents[currentEventIndex] = {
              status: currentEvent.status,
              message: fullText,
              displayedText: '',
              isComplete: false,
            };
          }
          newEvents[currentEventIndex].displayedText = fullText.slice(0, currentCharIndex);
          newEvents[currentEventIndex].isComplete = currentCharIndex === fullText.length;
          return newEvents;
        });

        if (currentCharIndex < fullText.length) {
          setCurrentCharIndex(currentCharIndex + 1);
        } else {
          setTimeout(() => {
            setCurrentEventIndex(currentEventIndex + 1);
            setCurrentCharIndex(0);
          }, 200);
        }
      }, 20 + Math.random() * 15);

      return () => clearTimeout(timer);
    }
  }, [currentEventIndex, currentCharIndex, events]);

  return (
    <div className="relative font-mono text-sm space-y-3 py-4">
      {displayedEvents.map((event, index) => (
        <ConsoleEvent
          key={index}
          status={event.status}
          message={event.displayedText}
          showCursor={index === currentEventIndex && isTyping}
        />
      ))}
    </div>
  );
};

const ConsoleEvent: React.FC<{ status: string; message: string; showCursor?: boolean }> = ({ 
  status, 
  message,
  showCursor = false 
}) => {
  return (
    <div className="flex items-start space-x-3 text-gray-300">
      <span className="text-primary-green font-semibold">[{status}]</span>
      <span className="text-gray-400">
        {message}
        {showCursor && <span className="inline-block w-0.5 h-4 bg-primary-green ml-0.5 cursor-blink">▊</span>}
      </span>
    </div>
  );
};


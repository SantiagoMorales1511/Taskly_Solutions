import React from 'react';
import { Section } from '../components/Section';
import { Icon } from '../components/Icon';

const steps = [
  {
    number: '01',
    title: 'Diagnóstico de tu negocio',
    description: 'Analizamos tus procesos actuales, identificamos oportunidades de automatización y definimos objetivos claros.',
    icon: 'MagnifyingGlassIcon' as const,
    color: 'green',
  },
  {
    number: '02',
    title: 'Diseño del flujo de automatización',
    description: 'Creamos un diseño detallado del flujo, mapeando cada paso y las herramientas que se integrarán.',
    icon: 'LightBulbIcon' as const,
    color: 'purple',
  },
  {
    number: '03',
    title: 'Implementación y pruebas',
    description: 'Desarrollamos la automatización, la integramos con tus sistemas y realizamos pruebas exhaustivas.',
    icon: 'CogIcon' as const,
    color: 'green',
  },
  {
    number: '04',
    title: 'Acompañamiento y mejora continua',
    description: 'Te capacitamos, monitoreamos el funcionamiento y optimizamos el sistema según tus necesidades.',
    icon: 'ArrowPathIcon' as const,
    color: 'purple',
  },
];

interface ProcessProps {
  isMounted?: boolean;
}

export const Process: React.FC<ProcessProps> = ({ isMounted = false }) => {
  return (
    <Section id="proceso">
      <div className="max-w-7xl mx-auto">
        <div 
          className={`text-center mb-16 transition-all duration-700 ease-out delay-600 ${
            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-white">Así </span>
            <span className="text-gradient">trabajamos contigo</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Un proceso claro y estructurado para garantizar el éxito de tu automatización
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full">
            <div className="absolute inset-0 bg-gradient-to-b from-primary-green via-primary-purple via-primary-green to-primary-purple opacity-30"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-green to-transparent h-1/4 animate-pulse"></div>
          </div>

          <div className="space-y-16 lg:space-y-20">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 transition-all duration-700 ease-out ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } ${
                  isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${700 + index * 200}ms` }}
              >
                <div className="flex-1 lg:w-1/2 text-center lg:text-left">
                  <div className="inline-flex items-center justify-center lg:justify-start gap-4 mb-6">
                    <div
                      className={`relative flex items-center justify-center w-20 h-20 rounded-2xl transform transition-all duration-300 hover:scale-110 ${
                        step.color === 'green'
                          ? 'bg-gradient-to-br from-primary-green/30 to-primary-green/10 text-primary-green border-2 border-primary-green shadow-lg shadow-primary-green/20'
                          : 'bg-gradient-to-br from-primary-purple/30 to-primary-purple/10 text-primary-purple border-2 border-primary-purple shadow-lg shadow-primary-purple/20'
                      }`}
                    >
                      <Icon name={step.icon} className="w-10 h-10" />
                      <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${
                        step.color === 'green' ? 'bg-primary-green' : 'bg-primary-purple'
                      } animate-pulse`}></div>
                    </div>
                    <div className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-gray-700 to-gray-900">{step.number}</div>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-white">{step.title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">{step.description}</p>
                </div>

                <div className="hidden lg:flex w-16 h-16 flex-shrink-0 relative z-10 items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-dark-surface border-2 border-dark-border"></div>
                  <div
                    className={`relative w-14 h-14 rounded-full flex items-center justify-center ${
                      step.color === 'green'
                        ? 'bg-gradient-to-br from-primary-green to-primary-green/80 glow-green'
                        : 'bg-gradient-to-br from-primary-purple to-primary-purple/80 glow-purple'
                    }`}
                  >
                    <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm"></div>
                  </div>
                </div>

                <div className="flex-1 lg:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};


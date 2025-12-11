import React from 'react';
import { Section } from '../components/Section';

interface AboutProps {
  isMounted?: boolean;
}

export const About: React.FC<AboutProps> = ({ isMounted = false }) => {
  return (
    <Section id="sobre-taskly">
      <div className="max-w-4xl mx-auto text-center">
        <h2 
          className={`text-4xl sm:text-5xl font-bold mb-8 transition-all duration-700 ease-out delay-1000 ${
            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-white">Sobre </span>
          <span className="text-gradient">Taskly Solutions</span>
        </h2>

        <div 
          className={`flex flex-col items-center mb-12 transition-all duration-700 ease-out delay-1100 ${
            isMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          <div className="w-32 h-32 rounded-full bg-dark-surface border-2 border-primary-green/30 flex items-center justify-center mb-6 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-primary-green/20 to-primary-purple/20 flex items-center justify-center">
              <span className="text-4xl font-bold text-primary-green">TS</span>
            </div>
          </div>
        </div>

        <div 
          className={`space-y-6 text-lg text-gray-300 leading-relaxed transition-all duration-700 ease-out delay-1200 ${
            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p>
            Taskly Solutions nace con la misión de ayudar a emprendedores y negocios a dejar de vivir apagando incendios y empezar a trabajar con sistemas.
          </p>
          <p>
            Creamos automatizaciones a la medida usando herramientas modernas (n8n, APIs, integraciones, etc.) enfocadas en negocios de Latinoamérica.
          </p>
          <p className="text-gray-400">
            Entendemos los desafíos únicos de los negocios en nuestra región y diseñamos soluciones que se adaptan a tu realidad, tu presupuesto y tus objetivos de crecimiento.
          </p>
        </div>

        <div 
          className={`mt-12 p-6 bg-dark-surface/50 rounded-xl border border-dark-border transition-all duration-700 ease-out delay-1300 ${
            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-sm text-gray-400 mb-2">Nuestra promesa</p>
          <p className="text-xl text-white font-semibold">
            "No vendemos tecnología, vendemos tiempo y tranquilidad para que te enfoques en lo que realmente importa: hacer crecer tu negocio."
          </p>
        </div>
      </div>
    </Section>
  );
};



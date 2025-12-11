import React from 'react';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { Icon } from '../components/Icon';

const cases = [
  {
    title: 'Clínica Dental',
    context: 'Clínica dental con múltiples sucursales necesitaba optimizar su proceso de agendamiento.',
    problem: 'Perdían citas por falta de recordatorios, el personal dedicaba horas a confirmar citas manualmente y había confusión con los horarios.',
    result: 'Implementamos un sistema automatizado de recordatorios por WhatsApp 24h y 2h antes de cada cita, integrado con su sistema de agendamiento.',
    metrics: {
      label: 'Reducción de no-shows',
      value: '85%',
      color: 'green',
    },
    icon: 'HeartIcon' as const,
  },
  {
    title: 'Academia Online',
    context: 'Academia de cursos online que crecía rápidamente necesitaba escalar su proceso de inscripción.',
    problem: 'El proceso manual de inscripción, pago y acceso a cursos tomaba días. Los estudiantes se frustraban esperando acceso.',
    result: 'Automatizamos el flujo completo: inscripción → pago → acceso inmediato al curso → certificado automático al completar.',
    metrics: {
      label: 'Tiempo de activación',
      value: 'Instantáneo',
      color: 'purple',
    },
    icon: 'AcademicCapIcon' as const,
  },
  {
    title: 'Emprendimiento E-commerce',
    context: 'Negocio que vendía productos por WhatsApp y redes sociales, sin página web formal.',
    problem: 'Perdían leads porque no respondían a tiempo, no tenían seguimiento de clientes y las ventas se perdían en conversaciones.',
    result: 'Creamos un sistema que captura leads de todas las fuentes, los organiza en CRM, envía respuestas automáticas y notifica al equipo para seguimiento personalizado.',
    metrics: {
      label: 'Aumento en conversión',
      value: '120%',
      color: 'green',
    },
    icon: 'ShoppingBagIcon' as const,
  },
];

interface CasesProps {
  isMounted?: boolean;
}

export const Cases: React.FC<CasesProps> = ({ isMounted = false }) => {
  return (
    <Section id="casos" className="bg-dark-surface/30">
      <div className="max-w-7xl mx-auto">
        <div 
          className={`text-center mb-16 transition-all duration-700 ease-out delay-800 ${
            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-white">Lo que puedes </span>
            <span className="text-gradient">lograr con Taskly</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Casos reales de cómo la automatización transforma negocios
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <Card 
              key={index} 
              className={`flex flex-col h-full transition-all duration-700 ease-out ${
                isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${900 + index * 150}ms` }}
            >
              <div
                className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 ${
                  caseItem.metrics.color === 'green'
                    ? 'bg-primary-green/20 text-primary-green'
                    : 'bg-primary-purple/20 text-primary-purple'
                }`}
              >
                <Icon name={caseItem.icon} className="w-7 h-7" />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-white">{caseItem.title}</h3>

              <div className="space-y-4 flex-grow">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Contexto</p>
                  <p className="text-gray-300">{caseItem.context}</p>
                </div>

                <div className="border-l-2 border-red-500/50 pl-4">
                  <p className="text-sm text-red-400 mb-1 font-semibold">Antes</p>
                  <p className="text-gray-400 text-sm">{caseItem.problem}</p>
                </div>

                <div className="border-l-2 border-primary-green pl-4">
                  <p className="text-sm text-primary-green mb-1 font-semibold">Después</p>
                  <p className="text-gray-300 text-sm">{caseItem.result}</p>
                </div>
              </div>

              <div
                className={`mt-6 p-4 rounded-lg ${
                  caseItem.metrics.color === 'green'
                    ? 'bg-primary-green/10 border border-primary-green/30'
                    : 'bg-primary-purple/10 border border-primary-purple/30'
                }`}
              >
                <p className="text-xs text-gray-400 mb-1">{caseItem.metrics.label}</p>
                <p
                  className={`text-3xl font-bold ${
                    caseItem.metrics.color === 'green' ? 'text-primary-green' : 'text-primary-purple'
                  }`}
                >
                  {caseItem.metrics.value}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};



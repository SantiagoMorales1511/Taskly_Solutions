import React from 'react';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { Icon } from '../components/Icon';

const services = [
  {
    icon: 'ChatBubbleLeftRightIcon' as const,
    title: 'Integración de WhatsApp con CRM',
    description: 'Conecta WhatsApp con tu CRM y formularios para capturar leads automáticamente y organizarlos sin esfuerzo.',
    color: 'green',
  },
  {
    icon: 'UserGroupIcon' as const,
    title: 'Automatización de seguimiento de leads',
    description: 'Sistema inteligente que sigue a tus leads en cada etapa del embudo, enviando mensajes personalizados en el momento adecuado.',
    color: 'purple',
  },
  {
    icon: 'BellIcon' as const,
    title: 'Recordatorios y notificaciones automáticas',
    description: 'Envía recordatorios de citas, pagos pendientes y notificaciones importantes a tus clientes sin intervención manual.',
    color: 'green',
  },
  {
    icon: 'ChartBarIcon' as const,
    title: 'Dashboards y reportes automáticos',
    description: 'Genera reportes y visualiza métricas clave de tu negocio automáticamente, actualizados en tiempo real.',
    color: 'purple',
  },
  {
    icon: 'CreditCardIcon' as const,
    title: 'Automatización de pagos y facturación',
    description: 'Gestiona pagos recurrentes, envía facturas automáticas y sincroniza con tu sistema contable.',
    color: 'green',
  },
  {
    icon: 'EnvelopeIcon' as const,
    title: 'Gestión de emails y respuestas',
    description: 'Organiza, categoriza y responde emails automáticamente según reglas predefinidas, ahorrando horas de trabajo.',
    color: 'purple',
  },
];

interface ServicesProps {
  isMounted?: boolean;
}

export const Services: React.FC<ServicesProps> = ({ isMounted = false }) => {
  return (
    <Section id="servicios" className="bg-dark-surface/30">
      <div className="max-w-7xl mx-auto">
        <div 
          className={`text-center mb-16 transition-all duration-700 ease-out delay-400 ${
            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-white">¿Qué </span>
            <span className="text-gradient">automatizamos?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Soluciones personalizadas para optimizar los procesos de tu negocio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group transition-all duration-700 ease-out ${
                isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${500 + index * 100}ms` }}
            >
              <div className="flex flex-col h-full">
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                    service.color === 'green'
                      ? 'bg-primary-green/20 text-primary-green'
                      : 'bg-primary-purple/20 text-primary-purple'
                  } group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon name={service.icon} className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-primary-green transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 flex-grow">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};





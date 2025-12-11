import React, { useState, FormEvent } from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';

interface ContactProps {
  isMounted?: boolean;
}

export const Contact: React.FC<ContactProps> = ({ isMounted = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessType: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log('Form submitted:', formData);

    setTimeout(() => {
      setIsSubmitting(false);
      alert('¡Mensaje enviado! Te contactaremos pronto. (Por ahora esto es solo una demo)');
      setFormData({
        name: '',
        email: '',
        businessType: '',
        message: '',
      });
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Section id="contacto" className="bg-dark-surface/30">
      <div className="max-w-3xl mx-auto">
        <div 
          className={`text-center mb-12 transition-all duration-700 ease-out delay-1400 ${
            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-white">¿Listo para </span>
            <span className="text-gradient">automatizar tu negocio?</span>
          </h2>
          <p className="text-xl text-gray-400">
            Cuéntanos qué tipo de negocio tienes y qué te gustaría automatizar.
          </p>
        </div>

        <form 
          onSubmit={handleSubmit} 
          className={`space-y-6 transition-all duration-700 ease-out delay-1500 ${
            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-dark-surface border border-dark-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent transition-all"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-dark-surface border border-dark-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent transition-all"
              placeholder="tu@email.com"
            />
          </div>

          <div>
            <label htmlFor="businessType" className="block text-sm font-medium text-gray-300 mb-2">
              Tipo de negocio
            </label>
            <select
              id="businessType"
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-dark-surface border border-dark-border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent transition-all"
            >
              <option value="">Selecciona una opción</option>
              <option value="ecommerce">E-commerce / Tienda online</option>
              <option value="servicios">Servicios profesionales</option>
              <option value="salud">Salud / Clínicas</option>
              <option value="educacion">Educación / Academia</option>
              <option value="restaurante">Restaurante / Food & Beverage</option>
              <option value="inmobiliaria">Inmobiliaria</option>
              <option value="otro">Otro</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 bg-dark-surface border border-dark-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent transition-all resize-none"
              placeholder="Cuéntanos qué procesos te gustaría automatizar..."
            />
          </div>

          <Button
            type="submit"
            variant="primary"
            className="w-full text-lg py-4"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
          </Button>
        </form>

        <div 
          className={`mt-8 text-center transition-all duration-700 ease-out delay-1600 ${
            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-gray-400 mb-2">También puedes escribirnos por Instagram:</p>
          <a
            href="https://instagram.com/taskly.solutions"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-green hover:text-primary-green-light transition-colors font-semibold inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @taskly.solutions
          </a>
        </div>
      </div>
    </Section>
  );
};



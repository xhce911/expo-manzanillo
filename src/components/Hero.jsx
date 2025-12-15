import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fondo con gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-gray-50"></div>
      
      {/* Elementos decorativos sutiles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      
      <div className={`relative z-10 container-custom text-center transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Badge superior */}
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 mb-8">
          <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
          <span className="text-sm font-medium text-gray-700">Manzanillo, Colima</span>
        </div>

        {/* Título principal */}
        <h1 className="heading-1 mb-6">
          <span className="block text-gray-900">Expo Educación</span>
          <span className="block bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mt-2">
            Manzanillo 2024
          </span>
        </h1>

        {/* Subtítulo */}
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          Conectando instituciones educativas con familias y profesionales 
          en busca de oportunidades formativas.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="btn-primary">
            <span>Ver Paquetes de Stands</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          <button className="btn-secondary">
            <span>Ver Agenda Completa</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </button>
        </div>

        {/* Info rápida */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          {[
            { label: 'Fecha', value: '15-16 Nov', icon: '📅' },
            { label: 'Horario', value: '9:00-18:00', icon: '⏰' },
            { label: 'Expositores', value: '50+', icon: '🏫' },
            { label: 'Entrada', value: 'Gratuita', icon: '🎫' }
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="text-2xl mb-2">{item.icon}</div>
              <div className="font-semibold text-gray-900">{item.value}</div>
              <div className="text-sm text-gray-500">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
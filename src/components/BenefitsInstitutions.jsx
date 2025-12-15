import React from 'react';

const BenefitsInstitutions = () => {
  const benefits = [
    {
      icon: '👁️',
      title: 'Alcance Amplificado',
      description: 'Exposición directa a miles de familias y profesionales en busca de opciones educativas.',
      gradient: 'from-blue-50 to-blue-100'
    },
    {
      icon: '🤝',
      title: 'Contacto Calificado',
      description: 'Interacción personal con prospectos genuinamente interesados en formación.',
      gradient: 'from-emerald-50 to-emerald-100'
    },
    {
      icon: '⭐',
      title: 'Imagen Profesional',
      description: 'Participación en un evento premium que refuerza el prestigio institucional.',
      gradient: 'from-violet-50 to-violet-100'
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-blue-600 font-medium mb-4">
            <span className="w-6 h-px bg-blue-600"></span>
            PARA INSTITUCIONES
          </div>
          <h2 className="heading-2 mb-6 text-gray-900">
            Maximiza tu <span className="text-blue-600">presencia</span> educativa
          </h2>
          <p className="text-body text-gray-600">
            Participa en el principal encuentro educativo de la región y conecta 
            con tu audiencia ideal.
          </p>
        </div>

        {/* Grid de beneficios */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Card */}
              <div className="card h-full flex flex-col">
                
                {/* Icono con fondo gradiente */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300`}>
                  <span className="text-2xl">{benefit.icon}</span>
                </div>
                
                {/* Contenido */}
                <h3 className="heading-3 mb-4 text-gray-900">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 flex-grow">
                  {benefit.description}
                </p>
                
                {/* Línea decorativa */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center text-sm text-blue-600 font-medium">
                    <span>Beneficio exclusivo</span>
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="btn-primary">
            <span>Descargar Folleto de Participación</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </button>
          <p className="text-sm text-gray-500 mt-4">
            Formatos disponibles: PDF, Excel, PowerPoint
          </p>
        </div>

      </div>
    </section>
  );
};

export default BenefitsInstitutions;
import React from 'react';

const BenefitsVisitors = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-blue-600 font-medium mb-4">
            <span className="w-6 h-px bg-blue-600"></span>
            PARA VISITANTES
          </div>
          <h2 className="heading-2 mb-6 text-gray-900">
            Encuentra tu <span className="text-blue-600">camino</span> educativo
          </h2>
          <p className="text-body text-gray-600">
            Ya sea para tu familia o tu desarrollo profesional, tenemos opciones 
            que se adaptan a tus necesidades.
          </p>
        </div>

        {/* Dos columnas comparativas */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Columna Familias */}
          <div className="card border-blue-100">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mr-4">
                <span className="text-2xl">👨‍👩‍👧‍👦</span>
              </div>
              <div>
                <h3 className="heading-3 text-gray-900">Para Familias</h3>
                <p className="text-gray-500 text-sm">Educación básica y media</p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                'Compara múltiples instituciones en un solo lugar',
                'Asesoría personalizada para la elección escolar',
                'Actividades interactivas para niños',
                'Charlas sobre métodos educativos modernos',
                'Información sobre becas y apoyos'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 mt-0.5 flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100">
              <div className="text-sm text-gray-500 mb-2">Recomendado para:</div>
                <div className="flex flex-wrap gap-2">
                  {['Preescolar', 'Primaria', 'Secundaria', 'Preparatoria'].map((nivel, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                      {nivel}
                    </span>
                  ))}
                </div>
            </div>
          </div>

          {/* Columna Profesionales */}
          <div className="card border-emerald-100">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mr-4">
                <span className="text-2xl">💼</span>
              </div>
              <div>
                <h3 className="heading-3 text-gray-900">Para Profesionales</h3>
                <p className="text-gray-500 text-sm">Educación superior y continua</p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                'Explora opciones de posgrado y maestrías',
                'Conoce programas de certificación profesional',
                'Networking con instituciones y colegas',
                'Charlas sobre tendencias laborales',
                'Oportunidades de becas exclusivas'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 mt-0.5 flex-shrink-0">
                    <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100">
              <div className="text-sm text-gray-500 mb-2">Niveles disponibles:</div>
              <div className="flex flex-wrap gap-2">
                {['Licenciatura', 'Maestría', 'Doctorado', 'Certificaciones'].map((nivel, idx) => (
                  <span key={idx} className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm">
                    {nivel}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* CTA unificado */}
        <div className="text-center mt-12">
          <button className="btn-primary" style={{backgroundColor:"var(--primary)"}}>
            <span>Registrarme como Visitante</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
          </button>
          <p className="text-sm text-gray-500 mt-3">
            Registro gratuito • Acceso a todas las actividades
          </p>
        </div>

      </div>
    </section>
  );
};

export default BenefitsVisitors;
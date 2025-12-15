import React from 'react';

const WhatIsExpo = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Columna de texto */}
          <div>
            <div className="inline-flex items-center gap-2 text-blue-600 font-medium mb-4">
              <span className="w-6 h-px bg-blue-600"></span>
              ACERCA DEL EVENTO
            </div>
            
            <h2 className="heading-2 mb-6 text-gray-900">
              ¿Qué es <span className="text-blue-600">Expo Educación</span>?
            </h2>
            
            <div className="space-y-4">
              <p className="text-body">
                Un encuentro estratégico que reúne a instituciones educativas, empresas, 
                familias y profesionales en un solo espacio para explorar oportunidades 
                formativas desde educación básica hasta posgrados y certificaciones.
              </p>
              <p className="text-body">
                Creamos un ecosistema donde la oferta educativa se encuentra con la demanda, 
                facilitando decisiones informadas y conexiones valiosas para el desarrollo 
                académico y profesional.
              </p>
            </div>

            {/* Lista de puntos clave */}
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                'Encuentro anual',
                '50+ instituciones',
                'Charlas especializadas',
                'Networking profesional'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-50 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Columna de video */}
          <div className="relative">
            <div className="card overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden">
                {/* Placeholder para video */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <p className="text-gray-600 font-medium">Video promocional</p>
                    <p className="text-sm text-gray-500">30 segundos</p>
                  </div>
                </div>
              </div>
              
              {/* Overlay info */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <p className="text-sm font-medium text-gray-800">Experiencia 2023</p>
                </div>
                <div className="text-xs text-gray-500 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">
                  ▶️ 2:30 min
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatIsExpo;
import React from 'react';

const Venue = () => {
  const amenities = [
    { icon: '❄️', label: 'Aire Acondicionado', desc: 'Climatización controlada' },
    { icon: '🅿️', label: 'Estacionamiento', desc: 'Área vigilada gratuita' },
    { icon: '♿', label: 'Accesibilidad', desc: 'Rampas y espacios adaptados' },
    { icon: '📶', label: 'Wi-Fi Gratuito', desc: 'Internet de alta velocidad' },
    { icon: '☕', label: 'Cafetería', desc: 'Servicio de alimentos' },
    { icon: '🎧', label: 'Audio/Video', desc: 'Equipo profesional' }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-blue-600 font-medium mb-4">
            <span className="w-6 h-px bg-blue-600"></span>
            SEDE
          </div>
          <h2 className="heading-2 mb-6 text-gray-900">
            Un espacio <span className="text-blue-600">perfecto</span> para aprender
          </h2>
          <p className="text-body text-gray-600">
            Celebramos en un lugar diseñado para el aprendizaje, la conexión 
            y el descubrimiento de oportunidades educativas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Columna izquierda - Info */}
          <div>
            <div className="card mb-8">
              <h3 className="heading-3 mb-6 text-gray-900">
                Salón Convenciones <span className="text-blue-600">Marbella</span>
              </h3>
              
              <div className="space-y-4">
                <p className="text-gray-600">
                  Ubicado estratégicamente en el corazón de Manzanillo, nuestro 
                  salón ofrece el ambiente ideal para un encuentro educativo 
                  de primer nivel.
                </p>
                
                <div className="pt-6 border-t border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-4">Características principales:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-blue-50 rounded flex items-center justify-center">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Capacidad para 2,000+ visitantes</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-blue-50 rounded flex items-center justify-center">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      </div>
                      <span className="text-gray-700">50+ stands profesionales</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-blue-50 rounded flex items-center justify-center">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                      </div>
                      <span className="text-gray-700">3 salas para conferencias</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Amenities Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {amenities.map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl p-4 border border-gray-100">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="font-medium text-gray-900 text-sm">{item.label}</div>
                  <div className="text-xs text-gray-500 mt-1">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Columna derecha - Mapa */}
          <div>
            <div className="card h-full">
              <h3 className="heading-3 mb-6 text-gray-900">Ubicación y contacto</h3>
              
              {/* Mapa placeholder */}
              <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl mb-6 overflow-hidden relative">
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 font-medium">Centro de Convenciones Manzanillo</p>
                  <p className="text-sm text-gray-500 mt-2">Mapa interactivo</p>
                </div>
              </div>
              
              {/* Info de contacto */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gray-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-medium text-gray-900">Dirección</p>
                    <p className="text-gray-600">Blvd. Miguel de la Madrid 1000, Manzanillo, Colima</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gray-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-medium text-gray-900">Horario del evento</p>
                    <p className="text-gray-600">15-16 Noviembre • 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gray-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-medium text-gray-900">Contacto</p>
                    <p className="text-gray-600">info@expoeducacionmanzanillo.com</p>
                    <p className="text-gray-600">+52 314 123 4567</p>
                  </div>
                </div>
              </div>
              
              {/* Botón de dirección */}
              <button className="btn-secondary w-full mt-8">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <span>Abrir en Google Maps</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Venue;
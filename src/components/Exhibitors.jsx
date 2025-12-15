import React, { useState, useEffect } from 'react';

const Exhibitors = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const exhibitors = [
    { id: 1, name: "Universidad de Colima", short: "UCOL", confirmed: true },
    { id: 2, name: "Tecnológico de Monterrey", short: "TEC", confirmed: true },
    { id: 3, name: "Universidad de Guadalajara", short: "UDG", confirmed: true },
    { id: 4, name: "Universidad Autónoma de México", short: "UNAM", confirmed: true },
    { id: 5, name: "Instituto Politécnico Nacional", short: "IPN", confirmed: true },
    { id: 6, name: "Próximamente", short: "?", confirmed: false },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(exhibitors.length / 3));
    }, 4000);
    return () => clearInterval(interval);
  }, [exhibitors.length]);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-blue-600 font-medium mb-4">
            <span className="w-6 h-px bg-blue-600"></span>
            EXPOSITORES
          </div>
          <h2 className="heading-2 mb-6 text-gray-900">
            Instituciones <span className="text-blue-600">participantes</span>
          </h2>
          <p className="text-body text-gray-600">
            Conoce a algunas de las instituciones educativas que forman parte 
            de nuestra edición 2024.
          </p>
        </div>

        {/* Carrusel */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {/* Grupo 1 */}
            <div className="w-full flex-shrink-0">
              <div className="grid md:grid-cols-3 gap-6">
                {exhibitors.slice(0, 3).map((exhibitor) => (
                  <div key={exhibitor.id} className="card group">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
                      exhibitor.confirmed ? 'bg-blue-50' : 'bg-gray-100'
                    }`}>
                      <span className={`text-2xl font-bold ${
                        exhibitor.confirmed ? 'text-blue-600' : 'text-gray-400'
                      }`}>
                        {exhibitor.short}
                      </span>
                    </div>
                    
                    <h3 className={`font-semibold mb-2 ${
                      exhibitor.confirmed ? 'text-gray-900' : 'text-gray-400'
                    }`}>
                      {exhibitor.name}
                    </h3>
                    
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm ${
                      exhibitor.confirmed 
                        ? 'bg-green-50 text-green-700' 
                        : 'bg-gray-100 text-gray-500'
                    }`}>
                      <span className={`w-2 h-2 rounded-full ${
                        exhibitor.confirmed ? 'bg-green-500' : 'bg-gray-400'
                      }`}></span>
                      {exhibitor.confirmed ? 'Confirmado' : 'Próximamente'}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Grupo 2 */}
            <div className="w-full flex-shrink-0">
              <div className="grid md:grid-cols-3 gap-6">
                {exhibitors.slice(3).map((exhibitor) => (
                  <div key={exhibitor.id} className="card group">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
                      exhibitor.confirmed ? 'bg-blue-50' : 'bg-gray-100'
                    }`}>
                      <span className={`text-2xl font-bold ${
                        exhibitor.confirmed ? 'text-blue-600' : 'text-gray-400'
                      }`}>
                        {exhibitor.short}
                      </span>
                    </div>
                    
                    <h3 className={`font-semibold mb-2 ${
                      exhibitor.confirmed ? 'text-gray-900' : 'text-gray-400'
                    }`}>
                      {exhibitor.name}
                    </h3>
                    
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm ${
                      exhibitor.confirmed 
                        ? 'bg-green-50 text-green-700' 
                        : 'bg-gray-100 text-gray-500'
                    }`}>
                      <span className={`w-2 h-2 rounded-full ${
                        exhibitor.confirmed ? 'bg-green-500' : 'bg-gray-400'
                      }`}></span>
                      {exhibitor.confirmed ? 'Confirmado' : 'Próximamente'}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Controles */}
        <div className="flex items-center justify-center mt-8 space-x-4">
          <button 
            onClick={() => setCurrentIndex(0)}
            className={`w-3 h-3 rounded-full transition-all ${currentIndex === 0 ? 'bg-blue-600' : 'bg-gray-300'}`}
          />
          <button 
            onClick={() => setCurrentIndex(1)}
            className={`w-3 h-3 rounded-full transition-all ${currentIndex === 1 ? 'bg-blue-600' : 'bg-gray-300'}`}
          />
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="btn-secondary">
            <span>Ver Lista Completa</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Exhibitors;
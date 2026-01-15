import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center mainBg" >
      {/* Fondo con gradiente sutil */}
     
      
      {/* Elementos decorativos sutiles */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      
      <div className={`relative z-10 container-custom text-center transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Badge superior */}
        

        {/* Título principal */}
        <h1 className=" mb-6 justify-start text-left mt-24  ">
          <img src="https://firebasestorage.googleapis.com/v0/b/archipielablog.firebasestorage.app/o/expoeducacion%2FFull_logo.png?alt=media&token=d9f59cc2-dfb3-47fb-a011-9c427c652587" alt="" />
          <p className="text-lg md:text-lg text-white mx-auto my-8 leading-relaxed ">
          Reúne en un solo lugar a las mejores instituciones educativas, academias y programas formativos de Manzanillo y la región.<br></br> <br></br>
          👉 Conoce, compara y decide con información real.<br></br>  <br></br>
          🎁 Los primeros 200 estudiantes asistentes recibirán un kit de bienvenida.<br></br>

          </p>
        </h1>

       

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-left mb-16">
          <button className="btn-primary" style={{backgroundColor:"var(--primary)"}}>
            <span>Ver Paquetes de Stands</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          <button className="btn-secondary" style={{color:"var(--secondary)"}}>
            <span>Ver Agenda Completa</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </button>
        </div>

        {/* Info rápida */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto my-6">
          {[
            { label: 'Fecha', value: '17 de Abril', icon: '📅' },
            { label: 'Horario', value: '9:00-18:00', icon: '⏰' },
           
            { label: 'Entrada', value: 'Gratuita', icon: '🎫' }
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="text-2xl mb-2">{item.icon}</div>
              <div className="font-semibold text-white">{item.value}</div>
              <div className="text-sm text-white  ">{item.label}</div>
            </div>
          ))}
        </div>
       
      </div>

      {/* Scroll indicator */}
     
    </div>
  );
};

export default Hero;
import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import WhatIsExpo from './components/WhatIsExpo';
import BenefitsInstitutions from './components/BenefitsInstitutions';
import BenefitsVisitors from './components/BenefitsVisitors';
import Exhibitors from './components/Exhibitors';
import Agenda from './components/Agenda';
import Venue from './components/Venue';
import Navigation from './components/Navigation';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 300)) {
          current = section.getAttribute('id');
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="font-sans text-gray-800 mx-auto md:overflow-x-hidden md:p-4 p-2">
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <section id="hero">
        <Hero />
      </section>

      <section id="what-is">
        <WhatIsExpo />
      </section>

      <section id="benefits-institutions">
        <BenefitsInstitutions />
      </section>

      <section id="benefits-visitors">
        <BenefitsVisitors />
      </section>
    {/*
      <section id="exhibitors">
        <Exhibitors />
      </section>
*/}
      <section id="agenda">
        <Agenda />
      </section>

      <section id="venue">
        <Venue />
      </section>

      
    <footer className=" text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Columna 1 */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-300 rounded-lg flex items-center justify-center">
                <span className="font-bold">E</span>
              </div>
              <div>
                <div className="font-bold">Expo Educación</div>
                <div className="text-sm text-gray-400">Manzanillo 2026</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Conectando educación, oportunidades y futuro en la costa del Pacífico.
            </p>
          </div>

          {/* Columna 2 */}
          <div>
            <h4 className="font-semibold mb-6">Enlaces rápidos</h4>
            <div className="space-y-3">
              {['Qué es', 'Para instituciones', 'Para visitantes', 'Agenda'].map((item) => (
                <button
                  key={item}
                  className="block text-gray-400 hover:text-white text-sm transition-colors"
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Columna 3 */}
          <div>
            <h4 className="font-semibold mb-6">Contacto</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div>info@expoeducacionmanzanillo.com</div>
              <div>+52 314 123 4567</div>
              <div>Manzanillo, Colima, México</div>
            </div>
          </div>

          {/* Columna 4 */}
          <div>
            <h4 className="font-semibold mb-6">Suscríbete</h4>
            <p className="text-gray-400 text-sm mb-4">
              Recibe información sobre próximos eventos y novedades.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Tu email"
                className="flex-grow px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm focus:outline-none focus:border-blue-500"
              />
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium transition-colors">
                →
              </button>
            </div>
          </div>

        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Expo Educación Manzanillo. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default App;
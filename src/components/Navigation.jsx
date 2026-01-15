import React, { useState } from 'react';

const Navigation = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Inicio' },
    { id: 'what-is', label: 'Qué es' },
    { id: 'benefits-institutions', label: 'Instituciones' },
    { id: 'benefits-visitors', label: 'Visitantes' },
    
    { id: 'agenda', label: 'Agenda' },
    { id: 'venue', label: 'Sede' }
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <button 
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-2 group"
            >
              
              <div className="text-left">
                <div className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                 <img src="https://firebasestorage.googleapis.com/v0/b/archipielablog.firebasestorage.app/o/expoeducacion%2Fshortlogo.png?alt=media&token=c14cca77-c83e-441a-a19c-eb2205a3c6aa" alt="" className="w-22 h-10" />
                </div>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.slice(1).map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === item.id 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button className="ml-4 px-6 py-2  text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors" style={{backgroundColor:"var(--primary)"}}>
                Contacto
              </button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <div className="space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      scrollToSection(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      activeSection === item.id 
                        ? 'text-blue-600 bg-blue-50' 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <button className="block w-full text-left px-4 py-3  text-white text-sm font-medium rounded-lg mt-2" style={{backgroundColor:"var(--primary)"}}>
                  Contacto
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Floating Contact Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button className="bg-white text-gray-700 p-3 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl hover:border-gray-300 transition-all group">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div className="text-left hidden group-hover:block animate-fadeIn">
              <div className="text-sm font-medium">¿Preguntas?</div>
              <div className="text-xs text-gray-500">Contáctanos</div>
            </div>
          </div>
        </button>
      </div>
    </>
  );
};

export default Navigation;
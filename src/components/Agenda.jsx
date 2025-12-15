import React, { useState } from 'react';

const Agenda = () => {
  const [activeDay, setActiveDay] = useState(1);
  
  const schedule = {
    1: [
      { time: "09:00", title: "Registro y Apertura", type: "general" },
      { time: "10:00", title: "Inauguración Oficial", type: "conference", speaker: "Lic. Juan Pérez" },
      { time: "11:00", title: "Taller: Educación STEM", type: "workshop", location: "Sala A" },
      { time: "12:00", title: "Presentación Artística", type: "cultural", group: "Grupo Folklórico" },
      { time: "14:00", title: "Mesa Redonda: Futuro Educativo", type: "conference", speaker: "Dra. María González" }
    ],
    2: [
      { time: "09:30", title: "Conferencia: Innovación Educativa", type: "conference", speaker: "Dr. Carlos Ruiz" },
      { time: "11:00", title: "Workshop: Metodologías Activas", type: "workshop", location: "Sala B" },
      { time: "13:00", title: "Networking Institucional", type: "networking" },
      { time: "15:00", title: "Presentación de Becas", type: "info", organization: "SEP" },
      { time: "16:30", title: "Clausura y Reconocimientos", type: "general" }
    ]
  };

  const getTypeColor = (type) => {
    const colors = {
      conference: "bg-blue-100 text-blue-700",
      workshop: "bg-emerald-100 text-emerald-700",
      cultural: "bg-purple-100 text-purple-700",
      networking: "bg-amber-100 text-amber-700",
      info: "bg-gray-100 text-gray-700",
      general: "bg-gray-100 text-gray-700"
    };
    return colors[type] || colors.general;
  };

  const getTypeIcon = (type) => {
    const icons = {
      conference: "🎤",
      workshop: "🛠️",
      cultural: "🎭",
      networking: "🤝",
      info: "ℹ️",
      general: "📋"
    };
    return icons[type] || icons.general;
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-blue-600 font-medium mb-4">
            <span className="w-6 h-px bg-blue-600"></span>
            AGENDA
          </div>
          <h2 className="heading-2 mb-6 text-gray-900">
            Planifica tu <span className="text-blue-600">visita</span>
          </h2>
          <p className="text-body text-gray-600">
            Dos días llenos de actividades educativas, culturales y profesionales. 
            Organiza tu tiempo para aprovechar al máximo.
          </p>
        </div>

        {/* Selector de días */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 p-1 rounded-xl">
            {[
              { day: 1, date: "15 Nov", label: "Día 1" },
              { day: 2, date: "16 Nov", label: "Día 2" }
            ].map((item) => (
              <button
                key={item.day}
                onClick={() => setActiveDay(item.day)}
                className={`px-8 py-3 rounded-lg font-medium transition-all ${
                  activeDay === item.day 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <div className="flex flex-col items-center">
                  <span className="font-semibold">{item.label}</span>
                  <span className="text-sm mt-1">{item.date}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Línea central */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200"></div>
            
            {schedule[activeDay].map((event, index) => (
              <div 
                key={index}
                className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Time */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                  <div className="text-lg font-semibold text-gray-900">{event.time}</div>
                </div>
                
                {/* Dot */}
                <div className="relative z-10">
                  <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                </div>
                
                {/* Event Card */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pl-12' : 'pr-12'}`}>
                  <div className="card">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">{event.title}</h3>
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm ${getTypeColor(event.type)}`}>
                          <span>{getTypeIcon(event.type)}</span>
                          <span className="capitalize">{event.type}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Info adicional */}
                    <div className="space-y-2 mt-4">
                      {event.speaker && (
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          <span>{event.speaker}</span>
                        </div>
                      )}
                      
                      {event.location && (
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span>{event.location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="btn-primary">
            <span>Descargar Agenda Completa</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </button>
          <p className="text-sm text-gray-500 mt-3">
            PDF • Excel • Google Calendar
          </p>
        </div>

      </div>
    </section>
  );
};

export default Agenda;
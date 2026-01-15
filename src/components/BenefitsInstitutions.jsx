import React from 'react';

const BenefitsInstitutions = () => {
  const benefits = [
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Eres madre o padre y:',
      bullet1: 'Si estás buscando una nueva escuela para tu hijo o hija',
      bullet2: 'Estás eligiendo su siguiente paso: kínder, primaria, secundaria o preparatoria',
      bullet3: 'Necesitas actividades extraescolares de ciencias, arte o deportes',
      gradient: 'from-blue-50 to-blue-100'
    },
    {
      icon: '🎓',
      title: 'Estás en preparatoria y quieres:',
      bullet1: 'Conocer las carreras universitarias que Manzanillo te ofrece',
      bullet2: 'Explorar universidades y planes de estudio de escuelas de la región',
      bullet3: '',
      gradient: 'from-emerald-50 to-emerald-100'
    },
    {
      icon: '👩‍💼',
      title: 'Si estás pensando en actualizar tus conocimientos',
      bullet1: 'Conocer las licenciaturas directamente con las instituciones',
      bullet2: 'Analizar los diferentes posgrados que Manzanillo tiene para ti',
      bullet3: 'Conoce las modalidades que las universidades te ofrecen',
      gradient: 'from-purple-50 to-purple-100'
    }
  ];

  return (
    <section className="section-padding bg-gray-50 bg2 min-h-screen items-center justify-center flex mx-auto">
      <div className="container-custom">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-white font-medium mb-4">
            <span className="w-6 h-px "></span>
            👨‍👩‍👧‍👦 ¿Para quién es 
          </div>
          <h2 className="heading-2 mb-6 text-white">
          <span className="text-white" style={{fontFamily:"Geophy"}}> Expo Educación Manzanillo</span> ?
          </h2>
          <p className="text-body text-white">
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
              <div className="card h-full flex flex-col b">
                
                {/* Icono con fondo gradiente */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300`}>
                  <span className="text-2xl">{benefit.icon}</span>
                </div>
                
                {/* Contenido */}
                <h3 className="heading-3 mb-4 text-gray-900">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 flex-grow  my-3">
                  {benefit.bullet1}
                </p>
                <p className="text-gray-600 flex-grow my-3">
                  {benefit.bullet2}
                </p>
                <p className="text-gray-600 flex-grow my-3">
                  {benefit.bullet3}
                </p>
                
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a href="https://firebasestorage.googleapis.com/v0/b/archipielablog.firebasestorage.app/o/expoeducacion%2FEXPO%20EDUCACI%C3%93N%20-%20carpeta%20comercial%20(1).pdf?alt=media&token=bec149e6-fd43-47d7-a24b-db026e002dc0"  download={"Carpeta Comercial"}>
            <button className="btn-primary" style={{backgroundColor:"var(--primary)"}}>
              <span>Descargar Folleto de Participación</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
          </button>
          </a>
          <p className="text-sm text-white mt-4">
            Formatos disponibles: PDF, Excel, PowerPoint
          </p>
        </div>

      </div>
    </section>
  );
};

export default BenefitsInstitutions;
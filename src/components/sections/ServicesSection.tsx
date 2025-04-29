const ServicesSection = () => {
  const services = [
    {
      title: "Reparo de Alto-Falantes",
      description: "Serviços especializados de reparo para alto-falantes automotivos, profissionais e residenciais de diversas marcas como JBL, Selenium, Eros e Pioneer.",
      icon: (
        <div className="flex justify-center items-center h-16">
          <svg className="w-10 h-10 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ minWidth: '40px', minHeight: '40px', maxWidth: '40px', maxHeight: '40px' }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
          </svg>
        </div>
      ),
    },
    {
      title: "Manutenção Preventiva",
      description: "Serviços de manutenção preventiva para prolongar a vida útil dos seus equipamentos de som e evitar falhas técnicas e problemas de áudio.",
      icon: (
        <div className="flex justify-center items-center h-16">
          <svg className="w-10 h-10 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ minWidth: '40px', minHeight: '40px', maxWidth: '40px', maxHeight: '40px' }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
        </div>
      ),
    },
    {
      title: "Recondicionamento",
      description: "Recondicionamento completo de alto-falantes com substituição de componentes e restauração das especificações originais de fábrica.",
      icon: (
        <div className="flex justify-center items-center h-16">
          <svg className="w-10 h-10 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ minWidth: '40px', minHeight: '40px', maxWidth: '40px', maxHeight: '40px' }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
          </svg>
        </div>
      ),
    },
    {
      title: "Kits de Reparo",
      description: "Fornecimento de kits completos e originais para reparo de alto-falantes de diversas marcas, incluindo JBL, Selenium, Pioneer e outras marcas profissionais.",
      icon: (
        <div className="flex justify-center items-center h-16">
          <svg className="w-10 h-10 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ minWidth: '40px', minHeight: '40px', maxWidth: '40px', maxHeight: '40px' }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
          </svg>
        </div>
      ),
    },
    {
      title: "Diagnóstico Especializado",
      description: "Avaliação técnica detalhada para identificar problemas em alto-falantes e sistemas de som com equipamentos de precisão e profissionais experientes.",
      icon: (
        <div className="flex justify-center items-center h-16">
          <svg className="w-10 h-10 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ minWidth: '40px', minHeight: '40px', maxWidth: '40px', maxHeight: '40px' }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
          </svg>
        </div>
      ),
    },
    {
      title: "Assistência Multi-Marcas",
      description: "Atendemos as principais marcas do mercado de áudio: JBL, Selenium, Eros, Ultravox, Snake, Oversound, Bravox e Pioneer com peças originais.",
      icon: (
        <div className="flex justify-center items-center h-16">
          <svg className="w-10 h-10 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ minWidth: '40px', minHeight: '40px', maxWidth: '40px', maxHeight: '40px' }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
        </div>
      ),
    },
  ];

  return (
    <section id="services" className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Serviços de Reparo de Alto-Falantes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma linha completa de serviços de reparo e manutenção para alto-falantes de diversas marcas e aplicações, 
            incluindo equipamentos automotivos, profissionais e residenciais.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md transition-transform duration-300 hover:transform hover:scale-105 text-center">
              {service.icon}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="https://wa.me/5514996251173?text=Olá%2C%20gostaria%20de%20solicitar%20um%20orçamento"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors shadow-md"
          >
            Solicitar orçamento
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

const ContactSection = () => {
  return (
    <section id="contact" className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contato</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Tem dúvidas ou precisa de um reparo? Entre em contato com nossa equipe de especialistas.</p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-8 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center md:text-left">Fale Conosco</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100">
                    <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ minWidth: '24px', minHeight: '24px', maxWidth: '24px', maxHeight: '24px' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-800">Nosso Endereço</h4>
                    <p className="text-gray-600 mt-1">Av. Nuno de Assis, 18-50 - Bauru, SP</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100">
                    <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ minWidth: '24px', minHeight: '24px', maxWidth: '24px', maxHeight: '24px' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-800">WhatsApp</h4>
                    <p className="text-gray-600 mt-1">
                      <a href="https://wa.me/5514996251173?text=Ol%C3%A1%2C%20gostaria%20de%20algumas%20informa%C3%A7%C3%B5es." target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                        (14) 99625-1173
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100">
                    <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ minWidth: '24px', minHeight: '24px', maxWidth: '24px', maxHeight: '24px' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div className="ml-4 max-w-[calc(100%-60px)]">
                    <h4 className="text-lg font-medium text-gray-800">Email</h4>
                    <p className="text-gray-600 mt-1 text-sm md:text-base break-all">
                      <a href="mailto:ciadofalantebauru@outlook.com" className="hover:text-blue-600 transition-colors">
                        ciadofalantebauru@outlook.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center md:text-left">Horário de Funcionamento</h3>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-gray-800 text-lg">Segunda a Sexta</h5>
                    <p className="text-gray-600">8h30 - 18h</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 text-lg">Sábado</h5>
                    <p className="text-gray-600">8h30 - 12h30</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 text-lg">Domingo</h5>
                    <p className="text-gray-600">Fechado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 w-full rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.125274153895!2d-49.06352082435161!3d-22.311101479678864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bf67abc8f54aa7%3A0x790bbed3a26e868c!2sCia%20do%20Falante!5e0!3m2!1spt-BR!2sbr!4v1745701122680!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Cia do Falante"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

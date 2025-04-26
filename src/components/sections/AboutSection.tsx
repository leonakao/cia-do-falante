const AboutSection = () => {
  return (
    <section id="about" className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Sobre Nós</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 mb-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Nossa História</h3>
            <p className="text-gray-600 mb-6">
              A Cia do Falante é uma assistência técnica especializada em alto-falantes automotivos, profissionais e residenciais. 
              Há anos no mercado, nos dedicamos a oferecer serviços de reparo e manutenção de alta qualidade para as principais 
              marcas do mercado, incluindo JBL, Selenium, Eros, Ultravox, Snake, Oversound, Bravos e Pioneer.
            </p>
            <p className="text-gray-600 mb-6">
              Nosso compromisso é proporcionar soluções rápidas e eficientes para restaurar o desempenho original dos seus 
              equipamentos de som. Trabalhamos com peças originais e contamos com técnicos altamente qualificados para 
              garantir a satisfação total dos nossos clientes.
            </p>
            
            <div className="grid grid-cols-3 gap-4 mt-8 text-center">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="text-blue-600 text-3xl font-bold">1000+</h4>
                <p className="text-gray-600">Clientes Atendidos</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="text-blue-600 text-3xl font-bold">8+</h4>
                <p className="text-gray-600">Marcas Especializadas</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="text-blue-600 text-3xl font-bold">100%</h4>
                <p className="text-gray-600">Peças Originais</p>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1558574869-9778b7680e58?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Oficina da Cia do Falante" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

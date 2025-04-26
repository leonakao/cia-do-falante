const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 w-full flex-shrink-0">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Cia do Falante</h2>
            <p className="text-gray-300">
              Especialistas em reparo e manutenção de alto-falantes automotivos, profissionais e residenciais.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition duration-300">
                  Início
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition duration-300">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition duration-300">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition duration-300">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Reparo de Alto-Falantes</li>
              <li className="text-gray-300">Manutenção Preventiva</li>
              <li className="text-gray-300">Recondicionamento</li>
              <li className="text-gray-300">Kits de Reparo</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg 
                  className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ minWidth: '20px', minHeight: '20px', maxWidth: '20px', maxHeight: '20px' }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span className="text-gray-300">Av. das Caixas Acústicas, 123, São Paulo - SP</span>
              </li>
              <li className="flex items-start">
                <svg 
                  className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ minWidth: '20px', minHeight: '20px', maxWidth: '20px', maxHeight: '20px' }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span className="text-gray-300">(11) 9876-5432</span>
              </li>
              <li className="flex items-start">
                <svg 
                  className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ minWidth: '20px', minHeight: '20px', maxWidth: '20px', maxHeight: '20px' }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span className="text-gray-300">contato@ciadofalante.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Cia do Falante. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

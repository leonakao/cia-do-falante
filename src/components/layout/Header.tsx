import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md w-full z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          {/* Logo placeholder - will be replaced with actual logo */}
          <div className="flex items-center">
            {/* Uncomment and update the src when you have the logo */}
            {/* <img src="/path/to/your/logo.svg" alt="Cia do Falante Logo" className="h-10 mr-3" /> */}
            <h1 className="text-2xl font-bold">
              <span className="text-red-600">Cia do</span> <span className="text-black">Falante</span>
            </h1>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium">Início</a>
          <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">Sobre</a>
          <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">Serviços</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">Contato</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg 
            className="w-6 h-6 flex-shrink-0" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
            style={{ minWidth: '24px', minHeight: '24px', maxWidth: '24px', maxHeight: '24px' }}
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white px-4 py-2 shadow-inner">
          <div className="flex flex-col space-y-3 pb-3">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium" onClick={toggleMenu}>Início</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium" onClick={toggleMenu}>Sobre</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium" onClick={toggleMenu}>Serviços</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium" onClick={toggleMenu}>Contato</a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;

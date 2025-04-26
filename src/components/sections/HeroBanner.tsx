const HeroBanner = () => {
  return (
    <section className="w-full relative mb-8" id="home">
      <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] bg-[#1a1a2e] relative">
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {/* Main content container with logo and sound wave */}
          <div className="relative w-full max-w-4xl mx-auto px-4 flex flex-col items-center">
            {/* Logo */}
            <div className="mb-0">
              <img src="/images/logo.png" alt="Cia do Falante Logo" className="w-64 md:w-80 lg:w-96" />
            </div>
            
            {/* Sound wave animation */}
            <div className="mb-6">
              <div className="flex items-center space-x-2">
                {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                  <div 
                    key={i}
                    className={`w-2 bg-blue-500 opacity-70 rounded-full animate-pulse`}
                    style={{
                      height: `${30 + (i % 3) * 20}px`,
                      animationDelay: `${i * 0.2}s`
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Partner logos container */}
          <div className="absolute w-full h-full pointer-events-none">
            {/* JBL logo - left side */}
            <div className="hidden md:block absolute top-1/3 left-[15%] transform -translate-y-1/2">
              <img 
                src="/images/partners/jbl.png" 
                alt="JBL" 
                className="w-24 h-24 lg:w-32 lg:h-32 object-contain opacity-80 hover:opacity-100 transition-opacity" 
              />
            </div>
            
            {/* Eros logo - right side */}
            <div className="hidden md:block absolute top-1/3 right-[15%] transform -translate-y-1/2">
              <img 
                src="/images/partners/eros.png" 
                alt="Eros" 
                className="w-24 h-24 lg:w-32 lg:h-32 object-contain opacity-80 hover:opacity-100 transition-opacity" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;

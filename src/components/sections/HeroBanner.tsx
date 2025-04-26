const HeroBanner = () => {
  return (
    <section className="w-full relative mb-8">
      <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] bg-[#1a1a2e] relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="w-full h-full flex items-center justify-center">
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                <div 
                  key={i}
                  className={`w-2 bg-blue-500 opacity-30 rounded-full animate-pulse`}
                  style={{
                    height: `${30 + (i % 3) * 20}px`,
                    animationDelay: `${i * 0.2}s`
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Partner logos - hidden on mobile, visible on larger screens */}
        <div className="hidden md:block absolute top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
          <img src="/images/partners/jbl.png" alt="JBL" className="w-32 h-32 object-contain" />
        </div>
        <div className="hidden md:block absolute bottom-1/3 right-1/4 transform translate-x-1/2 translate-y-1/2">
          <img src="/images/partners/eros.png" alt="Eros" className="w-32 h-32 object-contain" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="backdrop-blur-sm bg-black/40 py-8 px-4 md:px-16 rounded-lg max-w-[90%] md:max-w-none">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center">
              Cia do Falante
            </h1>
            <p className="text-lg md:text-xl text-gray-200 text-center mt-4">
              Assistência Técnica Especializada em Alto-Falantes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;

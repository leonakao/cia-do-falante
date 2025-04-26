const HeroBanner = () => {
  return (
    <section className="w-full relative mb-8">
      <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] bg-gradient-to-r from-blue-600 to-purple-600 relative">
      <img 
        src="/src/assets/images/hero-banner.jpg" 
        alt="Cia do Falante - Assistência Técnica para Alto-Falantes" 
        className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
      />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black bg-opacity-10 py-6 px-12 rounded-lg">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">
              Cia do Falante
            </h1>
            <p className="text-xl text-white text-center mt-4">
              Assistência Técnica Especializada em Alto-Falantes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;

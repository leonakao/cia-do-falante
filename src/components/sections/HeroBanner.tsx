const HeroBanner = () => {
  return (
    <section className="w-full relative mb-8">
      <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden relative">
        <img 
          src="/src/assets/images/hero-banner.jpg" 
          alt="Cia do Falante - Assistência Técnica para Alto-Falantes" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black bg-opacity-50 py-6 px-12 rounded-lg">
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

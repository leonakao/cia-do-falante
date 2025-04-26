const HeroSection = () => {
  return (
    <section id="home" className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Unlock Your Communication Potential</h1>
            <p className="text-xl mb-8">
              Professional speech therapy and voice coaching services to help you communicate with clarity and confidence.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="#contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium inline-block transition duration-300"
              >
                Book a Consultation
              </a>
              <a
                href="#services"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg font-medium inline-block transition duration-300"
              >
                Our Services
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt="Speech therapy session"
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

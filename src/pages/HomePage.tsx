import AboutSection from '../components/sections/AboutSection';
import ContactSection from '../components/sections/ContactSection';
import HeroBanner from '../components/sections/HeroBanner';
import ServicesSection from '../components/sections/ServicesSection';

const HomePage = () => {
  return (
    <main className="w-full">
      <HeroBanner />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </main>
  );
};

export default HomePage;

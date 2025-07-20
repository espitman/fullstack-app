import Header from '../component/home/Header';
import Features from '../component/home/Features';
import Benefits from '../component/home/Benefits';
import PromoSection from '../component/home/PromoSection';
import Footer from '../component/home/Footer';
import TechLogos from '../component/home/TechLogos';

const Home = () => (
  <div className="flex flex-col min-h-screen bg-white">
    <Header />
    <Features />
    <Benefits />
    <PromoSection />
    <TechLogos />
    <Footer />
  </div>
);

export default Home; 
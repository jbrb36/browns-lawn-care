import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import LawnMowing from './pages/LawnMowing';
import Fertilizer from './pages/Fertilizer';
import CleanupsMulch from './pages/CleanupsMulch';
import SnowRemoval from './pages/SnowRemoval';
import MosquitoControl from './pages/MosquitoControl';
import About from './pages/About';
import Contact from './pages/Contact';
import ServiceArea from './pages/ServiceArea';
import SantaSquad from './pages/SantaSquad';
import MullicaHill from './pages/MullicaHill';
import Clarksboro from './pages/Clarksboro';
import Swedesboro from './pages/Swedesboro';
import Woolwich from './pages/Woolwich';
import Sewell from './pages/Sewell';
import WashingtonTownship from './pages/WashingtonTownship';
import Mantua from './pages/Mantua';
import Glassboro from './pages/Glassboro';
import Pitman from './pages/Pitman';
import Wenonah from './pages/Wenonah';
import Gibbstown from './pages/Gibbstown';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'services':
        return <Services onNavigate={setCurrentPage} />;
      case 'lawn-mowing':
        return <LawnMowing onNavigate={setCurrentPage} />;
      case 'fertilizer':
        return <Fertilizer onNavigate={setCurrentPage} />;
      case 'cleanups-mulch':
        return <CleanupsMulch onNavigate={setCurrentPage} />;
      case 'snow-removal':
        return <SnowRemoval onNavigate={setCurrentPage} />;
      case 'mosquito-control':
        return <MosquitoControl onNavigate={setCurrentPage} />;
      case 'about':
        return <About onNavigate={setCurrentPage} />;
      case 'contact':
        return <Contact />;
      case 'service-area':
        return <ServiceArea onNavigate={setCurrentPage} />;
      case 'santa-squad':
        return <SantaSquad onNavigate={setCurrentPage} />;
      case 'mullica-hill':
        return <MullicaHill onNavigate={setCurrentPage} />;
      case 'clarksboro':
        return <Clarksboro onNavigate={setCurrentPage} />;
      case 'swedesboro':
        return <Swedesboro onNavigate={setCurrentPage} />;
      case 'woolwich':
        return <Woolwich onNavigate={setCurrentPage} />;
      case 'sewell':
        return <Sewell onNavigate={setCurrentPage} />;
      case 'washington-township':
        return <WashingtonTownship onNavigate={setCurrentPage} />;
      case 'mantua':
        return <Mantua onNavigate={setCurrentPage} />;
      case 'glassboro':
        return <Glassboro onNavigate={setCurrentPage} />;
      case 'pitman':
        return <Pitman onNavigate={setCurrentPage} />;
      case 'wenonah':
        return <Wenonah onNavigate={setCurrentPage} />;
      case 'gibbstown':
        return <Gibbstown onNavigate={setCurrentPage} />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>{renderPage()}</main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;

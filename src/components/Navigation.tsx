import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Services', path: 'services' },
    { name: 'Service Area', path: 'service-area' },
    { name: 'About', path: 'about' },
    { name: 'Contact', path: 'contact' },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <div className="text-2xl font-heading font-bold text-dark">
              Brown's <span className="text-primary">Lawn Care</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => onNavigate(link.path)}
                className={`font-medium transition-colors ${
                  currentPage === link.path
                    ? 'text-primary'
                    : 'text-dark hover:text-primary'
                }`}
              >
                {link.name}
              </button>
            ))}
            <a
              href="tel:6098681127"
              className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-heading font-semibold hover:bg-secondary transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5" />
              <span className="flex flex-col items-start leading-tight">
                <span className="text-xs font-normal">Call Now – Free Estimates</span>
                <span className="text-sm">(609) 868-1127</span>
              </span>
            </a>
          </div>

          <button
            className="md:hidden text-dark"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => {
                  onNavigate(link.path);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left py-2 font-medium ${
                  currentPage === link.path
                    ? 'text-primary'
                    : 'text-dark'
                }`}
              >
                {link.name}
              </button>
            ))}
            <a
              href="tel:6098681127"
              className="flex items-center justify-center gap-3 bg-primary text-white px-6 py-4 rounded-lg font-heading font-semibold w-full shadow-lg text-lg"
            >
              <Phone className="w-5 h-5" />
              <span className="flex flex-col items-start leading-tight">
                <span className="text-xs font-normal">Call Now – Free Estimates</span>
                <span className="text-base">(609) 868-1127</span>
              </span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

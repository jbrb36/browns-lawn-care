import { Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt="Brown's Lawn Care logo"
                className="w-12 h-12"
              />
              <div>
                <h3 className="font-heading font-bold text-lg text-white">
                  Brown's
                </h3>
                <p className="text-primary text-xs font-semibold">Lawn Care</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Family-owned lawn and property maintenance serving Gloucester County, NJ.
            </p>
            <p className="text-gray-400 text-sm mt-3 leading-relaxed">
              Fully insured for residential and commercial properties.
            </p>
            <p className="text-primary text-sm mt-3 font-medium">
              Serving Mullica Hill, NJ & surrounding areas
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('lawn-mowing')}
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Lawn Mowing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('fertilizer')}
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Fertilizer Program
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('cleanups-mulch')}
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Seasonal Cleanups
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('snow-removal')}
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Snow Removal
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('mosquito-control')}
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Mosquito Control
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:6098681127"
                  className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  (609) 868-1127
                </a>
              </li>
              <li>
                <a
                  href="mailto:Brownslawnandpropertycare@gmail.com"
                  className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  Brownslawnandpropertycare@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                Serving Gloucester County, NJ
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Brown's Lawn Care & Property Maintenance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

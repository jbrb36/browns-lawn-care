import { ArrowRight, Check, Sparkles } from 'lucide-react';

interface SantaSquadProps {
  onNavigate: (page: string) => void;
}

export default function SantaSquad({ onNavigate }: SantaSquadProps) {
  const services = [
    'Custom design',
    'Professional installation',
    'Maintenance throughout season',
    'Takedown service',
    'Storage until next year',
  ];

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-12 h-12" />
              <h1 className="font-heading font-bold text-4xl md:text-5xl">
                Brown's Santa Squad
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-100">
              Professional Holiday Lighting Installation
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl text-dark mb-6">
                Hassle-Free Holiday Lighting
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Skip the ladder and let Brown's Santa Squad handle your holiday lighting this year. We provide complete holiday light installation services for homes and businesses throughout Gloucester County.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From design to installation, maintenance, and storage, we take care of everything so you can enjoy a beautifully lit property without the work or worry.
              </p>
            </div>

            <div className="bg-light p-8 rounded-lg">
              <h3 className="font-heading font-semibold text-2xl text-dark mb-6">
                Complete Service Includes
              </h3>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl text-dark mb-12 text-center">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-heading font-bold text-xl mb-4">
                1
              </div>
              <h3 className="font-heading font-semibold text-xl text-dark mb-3">
                Design Consultation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We work with you to create a custom lighting design that matches your vision and highlights your property's best features.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-heading font-bold text-xl mb-4">
                2
              </div>
              <h3 className="font-heading font-semibold text-xl text-dark mb-3">
                Professional Installation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our trained team safely installs your lights with attention to detail and quality. We handle all the climbing, hanging, and setup.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-heading font-bold text-xl mb-4">
                3
              </div>
              <h3 className="font-heading font-semibold text-xl text-dark mb-3">
                Complete Takedown
              </h3>
              <p className="text-gray-600 leading-relaxed">
                After the season, we remove and carefully store your lights until next year. No work required on your part.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-light p-8 md:p-12 rounded-lg">
            <h2 className="font-heading font-bold text-3xl text-dark mb-6">
              Residential & Commercial
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Whether you want to add curb appeal to your home or create an inviting atmosphere for your business, Brown's Santa Squad delivers professional holiday lighting installations that make your property shine throughout the season.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We serve homes, businesses, HOAs, and commercial properties throughout Gloucester County with custom holiday lighting solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
            Join the 2025 Holiday List
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Spots fill up quickly! Reserve your holiday lighting installation for the 2025 season
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-white text-primary px-8 py-4 rounded-lg font-heading font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
          >
            Request Information
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}

import { ArrowRight, Check, Leaf, Users } from 'lucide-react';

interface LawnMowingProps {
  onNavigate: (page: string) => void;
}

export default function LawnMowing({ onNavigate }: LawnMowingProps) {
  const features = [
    'Weekly mowing',
    'Trimming & edging',
    'Hard-surface blow-off',
    'Per-cut billing',
    'Residential & commercial',
  ];

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Leaf className="w-12 h-12" />
              <h1 className="font-heading font-bold text-4xl md:text-5xl">
                Weekly Lawn Mowing in Mullica Hill, NJ
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-100 mb-4">
              Professional weekly lawn care for homeowners and businesses across Gloucester County.
            </p>
            <p className="text-lg text-gray-100 mb-8 italic">
              We focus on consistent, professional service — not rushed, mow-and-go work.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white text-primary px-8 py-4 rounded-lg font-heading font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2 shadow-lg"
            >
              Request a Free Quote
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl text-dark mb-6">
                Professional Lawn Mowing Service
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our weekly lawn mowing service keeps your property looking sharp throughout the growing season. We provide consistent, reliable service with attention to detail that sets us apart.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Each visit includes complete mowing, precise trimming around obstacles and edges, detailed edging along sidewalks and driveways, and thorough cleanup of all hard surfaces.
              </p>
            </div>

            <div className="bg-light p-8 rounded-lg">
              <h3 className="font-heading font-semibold text-2xl text-dark mb-6">
                What's Included
              </h3>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="font-heading font-bold text-3xl text-dark mb-4">
              This Service Is Ideal For:
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-light p-6 rounded-lg text-center">
              <p className="text-gray-700 font-medium">
                Homeowners who want reliable, professional results
              </p>
            </div>
            <div className="bg-light p-6 rounded-lg text-center">
              <p className="text-gray-700 font-medium">
                Busy families who don't want to manage lawn maintenance
              </p>
            </div>
            <div className="bg-light p-6 rounded-lg text-center">
              <p className="text-gray-700 font-medium">
                Businesses and HOAs needing dependable service
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
            <h2 className="font-heading font-bold text-3xl text-dark mb-6">
              Per-Cut Billing Model
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We bill per cut based on your property's size, layout, and specific needs. This transparent pricing model means you only pay for the service you receive.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you have a small residential lot or a large commercial property, we provide competitive pricing and exceptional value. Contact us for a custom quote based on your property.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-4">
            Want Reliable Lawn Mowing?
          </h2>
          <p className="text-lg text-white/90 mb-6">
            Get a free quote and experience the difference professional service makes.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-white text-primary px-8 py-4 rounded-lg font-heading font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2 shadow-lg"
          >
            Request a Free Quote
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <section className="py-16 bg-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-2xl text-dark mb-6 text-center">
            Related Services
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <button
              onClick={() => onNavigate('fertilizer')}
              className="bg-white p-6 rounded-lg shadow-md text-left hover:shadow-lg transition-all"
            >
              <h3 className="font-heading font-semibold text-xl text-dark mb-2">
                Fertilizer Program
              </h3>
              <p className="text-gray-600 mb-3">
                Complete 6-step treatment plan for a healthier, greener lawn.
              </p>
              <span className="text-primary font-medium inline-flex items-center gap-1">
                Learn more <ArrowRight className="w-4 h-4" />
              </span>
            </button>
            <button
              onClick={() => onNavigate('mosquito-control')}
              className="bg-white p-6 rounded-lg shadow-md text-left hover:shadow-lg transition-all"
            >
              <h3 className="font-heading font-semibold text-xl text-dark mb-2">
                Mosquito Control
              </h3>
              <p className="text-gray-600 mb-3">
                Monthly treatments to help you enjoy your outdoor space.
              </p>
              <span className="text-primary font-medium inline-flex items-center gap-1">
                Learn more <ArrowRight className="w-4 h-4" />
              </span>
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
            Ready for Professional Lawn Care?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Fast estimates • Clear pricing • Consistent service
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-white text-primary px-8 py-4 rounded-lg font-heading font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2 shadow-lg"
          >
            Request a Free Quote
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}

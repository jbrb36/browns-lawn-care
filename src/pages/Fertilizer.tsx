import { ArrowRight, Check, Droplet, Users, Shield } from 'lucide-react';

interface FertilizerProps {
  onNavigate: (page: string) => void;
}

export default function Fertilizer({ onNavigate }: FertilizerProps) {
  const features = [
    'Weed control',
    'Pre- & post-emergents',
    'Lawn health monitoring',
    'Monthly billing',
    'Bundle discounts',
  ];

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Droplet className="w-12 h-12" />
              <h1 className="font-heading font-bold text-4xl md:text-5xl">
                Fertilizer & Weed Control in Gloucester County, NJ
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-100 mb-4">
              Professional 6-step lawn treatment program for healthier, greener grass all season long.
            </p>
            <p className="text-lg text-gray-100 mb-8 italic">
              We use professional-grade products applied by trained technicians, with safety in mind for families, pets, and properties.
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
                Professional Lawn Treatment Program
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our comprehensive 6-step fertilizer program is designed to keep your lawn healthy, green, and weed-free throughout the entire growing season.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Each treatment is carefully timed to provide optimal nutrition and protection for your lawn. We use professional-grade products and proven techniques to deliver consistent results.
              </p>
            </div>

            <div className="bg-light p-8 rounded-lg">
              <h3 className="font-heading font-semibold text-2xl text-dark mb-6">
                Program Features
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

      <section className="py-20 bg-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl text-dark mb-12 text-center">
            6-Step Treatment Schedule
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { step: 1, name: 'Early Spring', desc: 'Pre-emergent & fertilizer' },
              { step: 2, name: 'Late Spring', desc: 'Weed control & fertilizer' },
              { step: 3, name: 'Early Summer', desc: 'Fertilizer & grub prevention' },
              { step: 4, name: 'Mid Summer', desc: 'Weed control & fertilizer' },
              { step: 5, name: 'Early Fall', desc: 'Weed control & fertilizer' },
              { step: 6, name: 'Late Fall', desc: 'Winterizer application' },
            ].map((treatment) => (
              <div key={treatment.step} className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-heading font-bold text-xl mb-4">
                  {treatment.step}
                </div>
                <h3 className="font-heading font-semibold text-xl text-dark mb-2">
                  {treatment.name}
                </h3>
                <p className="text-gray-600">{treatment.desc}</p>
              </div>
            ))}
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
                Homeowners who want a lush, healthy lawn without the guesswork
              </p>
            </div>
            <div className="bg-light p-6 rounded-lg text-center">
              <p className="text-gray-700 font-medium">
                Properties struggling with weeds, thin grass, or poor color
              </p>
            </div>
            <div className="bg-light p-6 rounded-lg text-center">
              <p className="text-gray-700 font-medium">
                HOAs and businesses needing professionally maintained turf
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-10 h-10 text-primary" />
              <h2 className="font-heading font-bold text-2xl text-dark">
                Safe & Effective Application
              </h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p className="leading-relaxed">
                <strong>Lawn Safety:</strong> Your lawn is safe for normal use shortly after treatment. We recommend waiting until the product has been watered in or dried completely before extended activity.
              </p>
              <p className="leading-relaxed">
                <strong>Watering Guidance:</strong> For best results, water your lawn within 24 hours of granular applications. Liquid treatments should dry completely before watering (typically 2-3 hours).
              </p>
              <p className="leading-relaxed">
                <strong>Complements Mowing:</strong> This program works best when paired with consistent mowing. Regular cutting promotes healthy, dense turf that resists weeds naturally.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-light p-8 md:p-12 rounded-lg">
            <h2 className="font-heading font-bold text-3xl text-dark mb-6">
              Convenient Monthly Billing
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our fertilizer program is billed monthly, making it easy to budget for professional lawn care. The monthly cost is spread evenly throughout the season, regardless of when treatments are applied.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Bundle with our weekly mowing service and receive special discounted pricing. We reward customers who trust us with multiple services.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-4">
            Want a Healthier, Greener Lawn?
          </h2>
          <p className="text-lg text-white/90 mb-6">
            Get a free quote and learn how our 6-step program can transform your property.
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

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-2xl text-dark mb-6 text-center">
            Related Services
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <button
              onClick={() => onNavigate('lawn-mowing')}
              className="bg-light p-6 rounded-lg shadow-md text-left hover:shadow-lg transition-all"
            >
              <h3 className="font-heading font-semibold text-xl text-dark mb-2">
                Lawn Mowing
              </h3>
              <p className="text-gray-600 mb-3">
                Weekly mowing service to keep your lawn looking sharp.
              </p>
              <span className="text-primary font-medium inline-flex items-center gap-1">
                Learn more <ArrowRight className="w-4 h-4" />
              </span>
            </button>
            <button
              onClick={() => onNavigate('cleanups-mulch')}
              className="bg-light p-6 rounded-lg shadow-md text-left hover:shadow-lg transition-all"
            >
              <h3 className="font-heading font-semibold text-xl text-dark mb-2">
                Cleanups & Mulch
              </h3>
              <p className="text-gray-600 mb-3">
                Spring and fall property cleanups with fresh mulch installation.
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

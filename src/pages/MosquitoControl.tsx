import { ArrowRight, Check, Bug, Users, Calendar } from 'lucide-react';

interface MosquitoControlProps {
  onNavigate: (page: string) => void;
}

export default function MosquitoControl({ onNavigate }: MosquitoControlProps) {
  const features = [
    'Monthly billing',
    'Child & pet-safe products',
    'Bundle discounts',
  ];

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Bug className="w-12 h-12" />
              <h1 className="font-heading font-bold text-4xl md:text-5xl">
                Mosquito Control in Mullica Hill, NJ
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-100 mb-4">
              Reclaim your outdoor space and enjoy your yard without mosquito annoyance.
            </p>
            <div className="flex items-center gap-2 text-gray-100 bg-white/10 px-4 py-3 rounded-lg inline-flex mb-8">
              <Calendar className="w-5 h-5" />
              <p className="text-sm font-medium">
                Offered during peak mosquito season (April - October)
              </p>
            </div>
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
                Enjoy Your Outdoor Space
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Take back your yard from mosquitoes with our professional mosquito control program. Our monthly treatments significantly reduce mosquito populations, allowing you to enjoy outdoor activities without constant pest annoyance.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We use EPA-approved products that are safe for children and pets while being highly effective against mosquitoes. Treatments are applied by trained professionals on a consistent monthly schedule.
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
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
            <h2 className="font-heading font-bold text-3xl text-dark mb-6">
              How It Works
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-heading font-semibold text-xl text-dark mb-2">
                  Monthly Treatments
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We visit your property monthly throughout mosquito season to apply barrier treatments to vegetation, where mosquitoes rest during the day.
                </p>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-xl text-dark mb-2">
                  Safe & Effective
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our products are EPA-approved and safe for children and pets once dry. We target mosquito breeding and resting areas while being gentle on beneficial insects.
                </p>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-xl text-dark mb-2">
                  Bundle & Save
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Add mosquito control to your existing lawn care services and receive special bundle pricing. The more services you combine, the more you save.
                </p>
              </div>
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
                Families who want to enjoy their yard, deck, and patio areas
              </p>
            </div>
            <div className="bg-light p-6 rounded-lg text-center">
              <p className="text-gray-700 font-medium">
                Properties near wooded areas or standing water
              </p>
            </div>
            <div className="bg-light p-6 rounded-lg text-center">
              <p className="text-gray-700 font-medium">
                Homeowners who entertain outdoors during summer months
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
            <h2 className="font-heading font-bold text-3xl text-dark mb-6">
              Add-On Service
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Mosquito control is available as an add-on to our other services. Customers who bundle mosquito treatments with weekly mowing or fertilizer programs receive discounted pricing. Contact us to learn about bundle options and seasonal rates.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-4">
            Ready to Enjoy Your Outdoor Space?
          </h2>
          <p className="text-lg text-white/90 mb-6">
            Get a free quote and reclaim your yard from mosquitoes this season.
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
              onClick={() => onNavigate('lawn-mowing')}
              className="bg-white p-6 rounded-lg shadow-md text-left hover:shadow-lg transition-all"
            >
              <h3 className="font-heading font-semibold text-xl text-dark mb-2">
                Lawn Mowing
              </h3>
              <p className="text-gray-600 mb-3">
                Weekly mowing service to complement your mosquito control.
              </p>
              <span className="text-primary font-medium inline-flex items-center gap-1">
                Learn more <ArrowRight className="w-4 h-4" />
              </span>
            </button>
            <button
              onClick={() => onNavigate('fertilizer')}
              className="bg-white p-6 rounded-lg shadow-md text-left hover:shadow-lg transition-all"
            >
              <h3 className="font-heading font-semibold text-xl text-dark mb-2">
                Fertilizer Program
              </h3>
              <p className="text-gray-600 mb-3">
                Complete lawn treatment for healthier turf all season.
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

import { ArrowRight, Check, Snowflake, Users, Shield } from 'lucide-react';

interface SnowRemovalProps {
  onNavigate: (page: string) => void;
}

export default function SnowRemoval({ onNavigate }: SnowRemovalProps) {
  const features = [
    'Plowing',
    'Shoveling',
    'Ice melt',
    'Seasonal contracts',
  ];

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Snowflake className="w-12 h-12" />
              <h1 className="font-heading font-bold text-4xl md:text-5xl">
                Snow Removal Services in Gloucester County, NJ
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-100 mb-4">
              Fast, reliable residential and commercial snow plowing, shoveling, and salting.
            </p>
            <p className="text-lg text-gray-100 mb-8 italic">
              We focus on safety and accessibility — keeping your property clear and reducing slip hazards during winter storms.
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
                Dependable Winter Service
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                When winter weather hits South Jersey, you need reliable snow removal service to keep your property safe and accessible. Our team is ready to respond quickly to winter storms.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We serve both residential and commercial properties with professional equipment and experienced operators. From driveways to parking lots, we keep your property clear and safe.
              </p>
            </div>

            <div className="bg-light p-8 rounded-lg">
              <h3 className="font-heading font-semibold text-2xl text-dark mb-6">
                Snow Services
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
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-heading font-bold text-2xl text-dark mb-4">
                Residential Snow Removal
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Keep your home accessible all winter long:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Driveway plowing</li>
                <li>• Walkway shoveling</li>
                <li>• Ice melt application</li>
                <li>• Per-visit or seasonal contracts</li>
                <li>• Reliable response times</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-heading font-bold text-2xl text-dark mb-4">
                Commercial Snow Removal
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Professional service for businesses and HOAs:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Parking lot plowing</li>
                <li>• Sidewalk clearing</li>
                <li>• Salting and ice control</li>
                <li>• Seasonal contract priority</li>
                <li>• Commercial-grade equipment</li>
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
                Homeowners who need reliable, prompt snow clearing
              </p>
            </div>
            <div className="bg-light p-6 rounded-lg text-center">
              <p className="text-gray-700 font-medium">
                Businesses that must stay open and accessible in winter
              </p>
            </div>
            <div className="bg-light p-6 rounded-lg text-center">
              <p className="text-gray-700 font-medium">
                HOAs and commercial properties requiring priority service
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
            <h2 className="font-heading font-bold text-3xl text-dark mb-6">
              Seasonal Contracts Available
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Lock in your snow removal service with a seasonal contract. Contract customers receive priority service during winter storms and predictable seasonal pricing.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We also offer per-visit pricing for customers who prefer to call when needed. Whether residential or commercial, we have flexible options to meet your needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-4">
            Need Reliable Snow Removal?
          </h2>
          <p className="text-lg text-white/90 mb-6">
            Get a free quote and be prepared before the next winter storm hits.
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
              onClick={() => onNavigate('cleanups-mulch')}
              className="bg-white p-6 rounded-lg shadow-md text-left hover:shadow-lg transition-all"
            >
              <h3 className="font-heading font-semibold text-xl text-dark mb-2">
                Cleanups & Mulch
              </h3>
              <p className="text-gray-600 mb-3">
                Spring and fall property cleanups to keep your landscape fresh.
              </p>
              <span className="text-primary font-medium inline-flex items-center gap-1">
                Learn more <ArrowRight className="w-4 h-4" />
              </span>
            </button>
            <button
              onClick={() => onNavigate('lawn-mowing')}
              className="bg-white p-6 rounded-lg shadow-md text-left hover:shadow-lg transition-all"
            >
              <h3 className="font-heading font-semibold text-xl text-dark mb-2">
                Lawn Mowing
              </h3>
              <p className="text-gray-600 mb-3">
                Weekly mowing service for a consistently maintained lawn.
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
            Ready for Winter Weather?
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

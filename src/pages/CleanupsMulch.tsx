import { ArrowRight, Check, Sparkles, Users, Clock } from 'lucide-react';

interface CleanupsMulchProps {
  onNavigate: (page: string) => void;
}

export default function CleanupsMulch({ onNavigate }: CleanupsMulchProps) {
  const features = [
    'Leaf removal',
    'Stick/branch cleanup',
    'Bed edging & touch-ups',
    'Mulch installation',
    'Debris haul-away',
  ];

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-12 h-12" />
              <h1 className="font-heading font-bold text-4xl md:text-5xl">
                Seasonal Cleanups & Mulch in Mullica Hill, NJ
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-100 mb-4">
              Professional spring and fall property cleanups across Gloucester County.
            </p>
            <div className="flex items-center gap-2 text-gray-100 bg-white/10 px-4 py-3 rounded-lg inline-flex mb-8">
              <Clock className="w-5 h-5" />
              <p className="text-sm font-medium">
                Best scheduled early due to seasonal demand
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
                Seasonal Property Refresh
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Seasonal cleanups are essential for maintaining a healthy, attractive landscape. Our comprehensive service prepares your property for the season ahead while addressing accumulated debris and wear.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether it's spring preparation or fall winterization, we handle all aspects of seasonal cleanup to keep your property looking its best year-round.
              </p>
            </div>

            <div className="bg-light p-8 rounded-lg">
              <h3 className="font-heading font-semibold text-2xl text-dark mb-6">
                Cleanup Services
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
                Spring Cleanups
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Spring cleanup prepares your landscape for the growing season:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Remove winter debris and dead vegetation</li>
                <li>• Edge and define landscape beds</li>
                <li>• Fresh mulch installation</li>
                <li>• Branch and stick removal</li>
                <li>• Complete property refresh</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-heading font-bold text-2xl text-dark mb-4">
                Fall Cleanups
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Fall cleanup protects your landscape through winter:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Comprehensive leaf removal</li>
                <li>• Bed maintenance and touch-ups</li>
                <li>• Debris cleanup and haul-away</li>
                <li>• Gutter clearing (add-on available)</li>
                <li>• Winter preparation</li>
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
                Homeowners preparing for or recovering from seasonal changes
              </p>
            </div>
            <div className="bg-light p-6 rounded-lg text-center">
              <p className="text-gray-700 font-medium">
                Properties that need enhanced curb appeal and fresh mulch
              </p>
            </div>
            <div className="bg-light p-6 rounded-lg text-center">
              <p className="text-gray-700 font-medium">
                Busy families who don't want to handle seasonal upkeep
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
            <h2 className="font-heading font-bold text-3xl text-dark mb-6">
              Professional Mulch Installation
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Fresh mulch enhances your property's appearance while providing important benefits for your plants and soil. We offer professional mulch installation with proper depth and coverage.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our team edges beds for clean lines, removes old mulch if needed, and applies premium mulch material. Available as part of seasonal cleanup or as a standalone service.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-4">
            Ready to Refresh Your Property?
          </h2>
          <p className="text-lg text-white/90 mb-6">
            Get a free quote and see how professional cleanups can transform your landscape.
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
                Weekly mowing to keep your lawn looking sharp all season.
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
                Complete 6-step treatment for healthier, greener grass.
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

import { ArrowRight, Leaf, Droplet, Sparkles, Snowflake, Bug, CheckCircle } from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const services = [
    {
      icon: Leaf,
      title: 'Lawn Care (Weekly Mowing)',
      description: 'Consistent weekly mowing with clean edges and professional results. Priced clearly based on your property size. Includes trimming, edging, and hard-surface blow-off.',
      link: 'lawn-mowing',
    },
    {
      icon: Droplet,
      title: 'Fertilizer Program',
      description: 'Complete 6-step seasonal treatment program to keep your grass healthy, green, and weed-free all season long. Includes weed control, pre and post-emergents, and lawn health monitoring.',
      link: 'fertilizer',
    },
    {
      icon: Sparkles,
      title: 'Seasonal Cleanups & Mulch',
      description: 'Spring and fall cleanups, leaf removal, debris haul-away, and fresh mulch installation to enhance curb appeal. We handle all bed edging, touch-ups, and cleanup.',
      link: 'cleanups-mulch',
    },
    {
      icon: Snowflake,
      title: 'Snow Removal',
      description: 'Fast, reliable residential and commercial snow plowing, shoveling, and salting to keep your property safe and accessible. Available for seasonal contracts or per-event service.',
      link: 'snow-removal',
    },
    {
      icon: Bug,
      title: 'Mosquito Control (Add-On)',
      description: 'Monthly mosquito treatments using child and pet-safe products to help you enjoy your outdoor space. Available as an add-on with bundle discounts.',
      link: 'mosquito-control',
    },
  ];

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            High-quality, reliable lawn and property maintenance for homeowners, HOAs, and businesses across Gloucester County, NJ.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Whether you're a homeowner looking to maintain your property, an HOA managing a community, or a business owner needing reliable grounds care, we provide professional lawn and property maintenance throughout Gloucester County and surrounding areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-light p-8 rounded-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-primary"
              >
                <service.icon className="w-14 h-14 text-primary mb-4" />
                <h3 className="font-heading font-bold text-2xl text-dark mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <button
                  onClick={() => onNavigate(service.link)}
                  className="text-primary font-heading font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-dark mb-8 text-center">
            We're a Great Fit If You Want:
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <CheckCircle className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-heading font-semibold text-xl text-dark mb-3">
                Consistent, No-Stress Service
              </h3>
              <p className="text-gray-600">
                Service you don't have to chase down or manage yourself.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <CheckCircle className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-heading font-semibold text-xl text-dark mb-3">
                Clear Pricing, No Surprises
              </h3>
              <p className="text-gray-600">
                Transparent quotes and billing you can understand.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <CheckCircle className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-heading font-semibold text-xl text-dark mb-3">
                One Reliable Company Year-Round
              </h3>
              <p className="text-gray-600">
                From spring cleanups to winter snow removal.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
            Not Sure What You Need?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Request a free quote and we'll help you find the right service for your property.
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

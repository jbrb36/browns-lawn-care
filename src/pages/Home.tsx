import { ArrowRight, CheckCircle, Leaf, Snowflake, Sparkles, MapPin } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const services = [
    {
      icon: Leaf,
      title: 'Lawn Care (Weekly Mowing)',
      description: 'Consistent weekly mowing with clean edges and professional results — priced clearly based on your property size.',
      path: 'lawn-mowing',
    },
    {
      icon: Sparkles,
      title: 'Fertilizer Program',
      description: 'Complete 6-step lawn treatment plan to keep your grass healthy, green, and weed-free all season long.',
      path: 'fertilizer',
    },
    {
      icon: Leaf,
      title: 'Seasonal Cleanups & Mulch',
      description: 'Spring and fall cleanups, leaf removal, debris haul-away, and fresh mulch installation to enhance curb appeal.',
      path: 'cleanups-mulch',
    },
    {
      icon: Snowflake,
      title: 'Snow Removal',
      description: 'Fast, reliable residential and commercial snow plowing, shoveling, and salting to keep your property safe and accessible.',
      path: 'snow-removal',
    },
  ];

  const reasons = [
    {
      title: 'Family-Owned & Local',
      description: 'Proudly serving Gloucester County neighborhoods we live and work in.',
    },
    {
      title: 'Professional & Reliable',
      description: 'Consistent scheduling, clean equipment, and dependable crews.',
    },
    {
      title: 'Residential & Commercial',
      description: 'Trusted by homeowners, HOAs, and local businesses.',
    },
    {
      title: 'Year-Round Service',
      description: 'One company for mowing, cleanups, fertilization, and snow removal.',
    },
  ];

  const towns = [
    { name: 'Mullica Hill', slug: 'mullica-hill' },
    { name: 'Clarksboro', slug: 'clarksboro' },
    { name: 'Swedesboro', slug: 'swedesboro' },
    { name: 'Woolwich', slug: 'woolwich' },
    { name: 'Sewell', slug: 'sewell' },
    { name: 'Washington Township', slug: 'washington-township' },
    { name: 'Mantua', slug: 'mantua' },
    { name: 'Glassboro', slug: 'glassboro' },
    { name: 'Pitman', slug: 'pitman' },
    { name: 'Wenonah', slug: 'wenonah' },
    { name: 'Gibbstown', slug: 'gibbstown' },
  ];

  return (
    <div className="pt-20">
      <section className="relative bg-gradient-to-br from-primary to-secondary text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="max-w-4xl">
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                Professional Lawn Care & Property Maintenance in Gloucester County, South Jersey
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed">
                Family-owned, local lawn care for homeowners, HOAs, and businesses — from weekly mowing to snow removal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <button
                  onClick={() => onNavigate('contact')}
                  className="bg-white text-primary px-8 py-4 rounded-lg font-heading font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2 shadow-lg"
                >
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5" />
                </button>
                <a
                  href="tel:6098681127"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-heading font-semibold text-lg hover:bg-white hover:text-primary transition-colors inline-flex items-center justify-center gap-2"
                >
                  Call (609) 868-1127
                </a>
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-100 text-sm md:text-base">
                <CheckCircle className="w-5 h-5" />
                <span>Locally owned</span>
                <span className="mx-2">•</span>
                <span>Fully insured</span>
                <span className="mx-2">•</span>
                <span>Serving Gloucester County</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-dark mb-4">
              Year-Round Property Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional lawn and property maintenance for South Jersey homes and businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => onNavigate(service.path)}
                className="bg-light p-8 rounded-lg hover:shadow-lg transition-all text-left hover:scale-105 duration-200"
              >
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-heading font-semibold text-xl text-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                <span className="text-primary font-medium inline-flex items-center gap-1">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('services')}
              className="bg-primary text-white px-8 py-4 rounded-lg font-heading font-semibold text-lg hover:bg-secondary transition-colors inline-flex items-center gap-2"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-white/90 mb-6">
            Get a free estimate today and see why homeowners and businesses trust Brown's Lawn Care.
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

      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-dark mb-4">
              Why Homeowners Choose Brown's
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-dark mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-8 h-8 text-primary" />
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-dark">
                Serving Gloucester County & Surrounding Areas
              </h2>
            </div>
            <p className="text-lg text-gray-600 mb-8">
              Based in Mullica Hill, NJ, we proudly serve homeowners and businesses throughout South Jersey.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {towns.map((town, index) => (
              <button
                key={index}
                onClick={() => onNavigate(town.slug)}
                className="bg-light px-6 py-3 rounded-full text-dark font-medium hover:bg-primary hover:text-white transition-colors"
              >
                {town.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
            Ready for Reliable Lawn & Property Care?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Fast estimates • Clear pricing • Consistent service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white text-primary px-8 py-4 rounded-lg font-heading font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2 shadow-lg"
            >
              Request a Free Quote
              <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href="tel:6098681127"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-heading font-semibold text-lg hover:bg-white hover:text-primary transition-colors inline-flex items-center justify-center gap-2"
            >
              Call Now – Free Estimates
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

import { useEffect } from 'react';
import { ArrowRight, CheckCircle, Leaf, Snowflake, Sparkles, Bug, MapPin, Shield } from 'lucide-react';

interface PitmanProps {
  onNavigate: (page: string) => void;
}

export default function Pitman({ onNavigate }: PitmanProps) {
  useEffect(() => {
    document.title = 'Lawn Care & Property Maintenance in Pitman, NJ | Brown\'s Lawn Care';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional lawn care and property maintenance in Pitman, NJ. Family-owned, reliable service for homes and businesses. Free quotes available.');
    }
  }, []);

  const services = [
    {
      icon: Leaf,
      title: 'Weekly Lawn Maintenance & Mowing',
      path: 'lawn-mowing',
    },
    {
      icon: Sparkles,
      title: 'Fertilizer & Weed Control Programs',
      path: 'fertilizer',
    },
    {
      icon: Leaf,
      title: 'Seasonal Cleanups & Mulch Installation',
      path: 'cleanups-mulch',
    },
    {
      icon: Bug,
      title: 'Mosquito Control',
      path: 'mosquito-control',
    },
    {
      icon: Snowflake,
      title: 'Snow Removal (Residential & Commercial)',
      path: 'snow-removal',
    },
  ];

  const reasons = [
    'Consistent, reliable service you don\'t have to chase',
    'Clean, professional results — not rushed mow-and-go work',
    'Clear pricing and honest communication',
    'Local, family-owned company that treats properties with care',
    'One local company for dependable, year-round lawn and property maintenance',
  ];

  const qualifications = [
    'A dependable lawn care company in Pitman',
    'Professional service for a home, HOA, or business',
    'Clear expectations and consistent scheduling',
    'A local team you can trust long-term',
  ];

  const faqs = [
    {
      question: 'Do you offer weekly lawn mowing in Pitman?',
      answer: 'Yes, we provide reliable weekly lawn maintenance throughout Pitman. Our services include mowing, edging, trimming, and blowing for a clean, professional finish every visit.',
    },
    {
      question: 'Do you service both residential and commercial properties?',
      answer: 'Absolutely. We serve homeowners, HOAs, and businesses throughout Pitman and surrounding areas. Whether you need weekly mowing for your home or year-round property maintenance for your business, we have the experience and equipment to deliver consistent results.',
    },
    {
      question: 'How do I get a quote for lawn care in Pitman?',
      answer: 'Getting a quote is easy. You can request a free estimate through our contact form or call us directly at (609) 868-1127. We\'ll discuss your property needs and provide clear, upfront pricing.',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-secondary text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="max-w-4xl">
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                Lawn & Property Maintenance in Pitman, NJ
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed">
                Reliable, family-owned lawn care and property maintenance for homes, businesses, and HOAs in Pitman, NJ.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
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
                  Call (609) 868-1127
                </a>
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-100 text-sm md:text-base">
                <CheckCircle className="w-5 h-5" />
                <span>Family-owned</span>
                <span className="mx-2">•</span>
                <span>Residential & Commercial</span>
                <span className="mx-2">•</span>
                <span>Serving Pitman</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
              Based in nearby Mullica Hill, <strong>Brown's Lawn Care & Property Maintenance</strong> proudly serves homeowners, businesses, and HOAs throughout Pitman. We understand the expectations of Pitman properties — clean presentation, reliable scheduling, and consistent results.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Our crews regularly work in Pitman, allowing us to provide consistent scheduling and dependable service year-round.
            </p>
          </div>
        </div>
      </section>

      {/* Services Offered Section */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-dark mb-4">
              Lawn & Property Services We Offer in Pitman
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              In Pitman, our most requested lawn and property services include:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => onNavigate(service.path)}
                className="bg-white p-6 rounded-lg hover:shadow-lg transition-all text-left border-2 border-transparent hover:border-primary"
              >
                <service.icon className="w-10 h-10 text-primary mb-3" />
                <h3 className="font-heading font-semibold text-lg text-dark mb-2">
                  {service.title}
                </h3>
                <span className="text-primary font-medium inline-flex items-center gap-1 text-sm">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate('services')}
              className="text-primary font-heading font-semibold text-lg hover:underline inline-flex items-center gap-2"
            >
              View All Services <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Why Pitman Homeowners Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-dark mb-6">
              Why Pitman Homeowners Choose Brown's Lawn Care
            </h2>
          </div>

          <div className="space-y-4">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start gap-4 bg-light p-5 rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-lg text-gray-700">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6">
            Looking for Reliable Lawn Care in Pitman?
          </h2>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-white text-primary px-8 py-4 rounded-lg font-heading font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2 shadow-lg"
          >
            Get a Free Quote
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Who This Service Is For */}
      <section className="py-20 bg-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-dark mb-6">
              This Service Is a Great Fit If You're Looking For:
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {qualifications.map((qualification, index) => (
              <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-lg text-gray-700">{qualification}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Context */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <MapPin className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h2 className="font-heading font-bold text-2xl text-dark mb-4">
                Local Service Area
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                While our home base is in Mullica Hill, we also serve nearby communities such as Pitman, Glassboro, Mantua, and Wenonah. Our crews regularly operate in this area, allowing for efficient scheduling and reliable service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Credibility */}
      <section className="py-16 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Brown's Lawn Care & Property Maintenance</strong> is fully insured and committed to safe, professional service for residential and commercial properties.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-dark mb-4">
              Lawn Care in Pitman — Common Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-light p-6 rounded-lg">
                <h3 className="font-heading font-semibold text-xl text-dark mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Ready to Get Started?
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

import { ArrowRight, Award, Clock, MessageCircle, Shield, Users, CheckCircle } from 'lucide-react';

interface AboutProps {
  onNavigate: (page: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  const values = [
    {
      icon: Clock,
      title: 'Reliability',
      description: 'Consistent, dependable service you can count on week after week.',
    },
    {
      icon: Shield,
      title: 'Professionalism',
      description: 'Trained team members, clean equipment, and a respectful approach to every property.',
    },
    {
      icon: Award,
      title: 'Quality Work',
      description: 'Attention to detail in every service, from mowing and edging to seasonal care.',
    },
    {
      icon: MessageCircle,
      title: 'Clear Communication',
      description: 'Responsive service, honest answers, and transparent pricing.',
    },
    {
      icon: Users,
      title: 'Year-Round Care',
      description: 'One trusted company to maintain your property through every season.',
    },
  ];

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            Family-Owned. Community-Focused.
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            Proudly serving Gloucester County with reliable, professional lawn and property maintenance.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-3xl text-dark mb-8">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Brown's Lawn Care & Property Maintenance is a family-owned business serving homeowners and businesses throughout Gloucester County, New Jersey. We built our company on hard work, honesty, and dependable service.
              </p>
              <p>
                We take pride in caring for our community's properties with the same attention and respect we give our own. From weekly lawn maintenance to complete seasonal care, our goal is simple: deliver consistent, high-quality service you can rely on.
              </p>
              <p>
                We understand that your property is an important investment. That's why we focus on clear communication, professional results, and long-term relationships built on trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-dark mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <value.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-heading font-semibold text-xl text-dark mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-dark mb-8 text-center">
            What Sets Us Apart
          </h2>
          <div className="bg-light p-8 md:p-10 rounded-lg">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">
                  We show up when we say we will
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">
                  We don't rush jobs or cut corners
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">
                  We communicate clearly and consistently
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">
                  We treat every property like it's our own
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">
                  We build long-term relationships with our customers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-md">
            <h2 className="font-heading font-bold text-3xl text-dark mb-6 text-center">
              Serving Gloucester County & Surrounding Areas
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
              Based in Mullica Hill, NJ, we proudly serve residential and commercial properties throughout Gloucester County and nearby communities. Whether you need weekly lawn maintenance, seasonal cleanups, or winter snow removal, our team is here to keep your property looking its best year-round.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 text-lg">
            Fully insured for residential and commercial properties, with a commitment to safe, professional service.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
            Ready to Work With a Team You Can Trust?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Experience the difference of reliable, professional, local service.
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

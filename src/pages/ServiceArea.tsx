import { ArrowRight, MapPin } from 'lucide-react';

interface ServiceAreaProps {
  onNavigate: (page: string) => void;
}

export default function ServiceArea({ onNavigate }: ServiceAreaProps) {
  const towns = [
    {
      name: 'Mullica Hill',
      description: 'Residential & Commercial Lawn and Property Maintenance',
      hasLandingPage: true,
      slug: 'mullica-hill',
    },
    {
      name: 'Clarksboro',
      description: 'Residential & Commercial Lawn and Property Maintenance',
      hasLandingPage: true,
      slug: 'clarksboro',
    },
    {
      name: 'Swedesboro',
      description: 'Residential & Commercial Lawn and Property Maintenance',
      hasLandingPage: true,
      slug: 'swedesboro',
    },
    {
      name: 'Woolwich',
      description: 'Residential & Commercial Lawn and Property Maintenance',
      hasLandingPage: true,
      slug: 'woolwich',
    },
    {
      name: 'Sewell',
      description: 'Residential & Commercial Lawn and Property Maintenance',
      hasLandingPage: true,
      slug: 'sewell',
    },
    {
      name: 'Washington Township',
      description: 'Residential & Commercial Lawn and Property Maintenance',
      hasLandingPage: true,
      slug: 'washington-township',
    },
    {
      name: 'Mantua',
      description: 'Residential & Commercial Lawn and Property Maintenance',
      hasLandingPage: true,
      slug: 'mantua',
    },
    {
      name: 'Glassboro',
      description: 'Residential & Commercial Lawn and Property Maintenance',
      hasLandingPage: true,
      slug: 'glassboro',
    },
    {
      name: 'Pitman',
      description: 'Residential & Commercial Lawn and Property Maintenance',
      hasLandingPage: true,
      slug: 'pitman',
    },
    {
      name: 'Wenonah',
      description: 'Residential & Commercial Lawn and Property Maintenance',
      hasLandingPage: true,
      slug: 'wenonah',
    },
    {
      name: 'Gibbstown',
      description: 'Residential & Commercial Lawn and Property Maintenance',
      hasLandingPage: true,
      slug: 'gibbstown',
    },
  ];

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <MapPin className="w-12 h-12" />
            <h1 className="font-heading font-bold text-4xl md:text-5xl">
              Service Areas
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            Proudly serving Gloucester County and nearby communities
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-heading font-bold text-3xl text-dark mb-6">
              Local Service You Can Trust
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              As a family-owned business based in Mullica Hill, NJ, we're committed to providing reliable, professional lawn and property maintenance to our neighbors throughout Gloucester County and South Jersey. We serve both residential and commercial properties in the following areas:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {towns.map((town, index) => {
              const TownCard = town.hasLandingPage ? 'button' : 'div';
              return (
                <TownCard
                  key={index}
                  onClick={town.hasLandingPage && town.slug ? () => onNavigate(town.slug) : undefined}
                  className={`bg-light p-6 rounded-lg hover:shadow-lg transition-shadow border-2 border-transparent hover:border-primary ${town.hasLandingPage ? 'cursor-pointer text-left w-full' : ''}`}
                >
                  <div className="flex items-start gap-3">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading font-semibold text-xl text-dark mb-2">
                        {town.name}
                      </h3>
                      <p className="text-gray-600">{town.description}</p>
                      {town.hasLandingPage && (
                        <span className="text-primary font-medium inline-flex items-center gap-1 mt-2 text-sm">
                          Learn more about {town.name} <ArrowRight className="w-4 h-4" />
                        </span>
                      )}
                    </div>
                  </div>
                </TownCard>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
            <h2 className="font-heading font-bold text-3xl text-dark mb-6 text-center">
              Don't See Your Town?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed text-center mb-8">
              We're always looking to expand our service area. If you're located near Gloucester County and interested in our lawn and property maintenance services, give us a call. We'd be happy to discuss serving your area.
            </p>
            <div className="flex justify-center">
              <a
                href="tel:6098681127"
                className="bg-primary text-white px-8 py-4 rounded-lg font-heading font-semibold text-lg hover:bg-secondary transition-colors inline-flex items-center gap-2"
              >
                Call (609) 868-1127
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl text-dark mb-4">
              Services Available in All Areas
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-light p-6 rounded-lg">
              <h3 className="font-heading font-semibold text-xl text-dark mb-3">
                Residential Services
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Weekly lawn mowing</li>
                <li>• Fertilizer programs</li>
                <li>• Spring and fall cleanups</li>
                <li>• Mulch installation</li>
                <li>• Snow removal</li>
                <li>• Mosquito control</li>
              </ul>
            </div>

            <div className="bg-light p-6 rounded-lg">
              <h3 className="font-heading font-semibold text-xl text-dark mb-3">
                Commercial Services
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Commercial lawn maintenance</li>
                <li>• Property cleanups</li>
                <li>• Landscape bed care</li>
                <li>• Parking lot snow removal</li>
                <li>• HOA services</li>
                <li>• Year-round contracts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Reliable service • Clear communication • Local professionals
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

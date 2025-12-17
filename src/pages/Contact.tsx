import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    services: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const { error: submitError } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            address: formData.address,
            email: formData.email,
            phone: formData.phone,
            services: formData.services,
            message: formData.message || '',
          },
        ]);

      if (submitError) throw submitError;

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          address: '',
          email: '',
          phone: '',
          services: '',
          message: '',
        });
      }, 5000);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('There was an error submitting your request. Please try calling us directly at (609) 868-1127.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            Get a Free Quote
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            Reach out today and we'll help you find the right lawn or property service for your needs.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading font-bold text-3xl text-dark mb-8">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Ready to improve your property? Contact us today for a free estimate. We proudly serve residential and commercial properties throughout Gloucester County.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-dark mb-1">
                      Phone
                    </h3>
                    <a
                      href="tel:6098681127"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      (609) 868-1127
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-dark mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:brownslawnandpropertycare@gmail.com"
                      className="text-gray-600 hover:text-primary transition-colors break-all"
                    >
                      brownslawnandpropertycare@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-dark mb-1">
                      Service Area
                    </h3>
                    <p className="text-gray-600">
                      Gloucester County, NJ and surrounding areas
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-light p-6 rounded-lg">
                <h3 className="font-heading font-semibold text-xl text-dark mb-3">
                  Business Hours
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Friday: 7:00 AM - 6:00 PM</p>
                  <p>Saturday: 8:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Messages received outside business hours will be returned as soon as possible.
                </p>
              </div>
            </div>

            <div className="bg-light p-8 rounded-lg">
              <h2 className="font-heading font-bold text-2xl text-dark mb-6">
                Request a Quote
              </h2>

              {submitted ? (
                <div className="bg-primary/10 border border-primary text-primary p-6 rounded-lg text-center">
                  <p className="font-heading font-semibold text-lg">
                    Thank you for your request!
                  </p>
                  <p className="mt-2">We'll be in touch soon.</p>
                </div>
              ) : (
                <>
                  {error && (
                    <div className="bg-red-50 border border-red-300 text-red-700 p-4 rounded-lg mb-4">
                      <p>{error}</p>
                    </div>
                  )}
                  <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-dark font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-dark font-medium mb-2">
                      Property Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-dark font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-dark font-medium mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-dark font-medium mb-2">
                      Services Interested In *
                    </label>
                    <select
                      name="services"
                      value={formData.services}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select a service...</option>
                      <option value="lawn-mowing">Lawn Mowing</option>
                      <option value="fertilizer">Fertilizer Program</option>
                      <option value="cleanups">Seasonal Cleanups</option>
                      <option value="mulch">Mulch Installation</option>
                      <option value="snow">Snow Removal</option>
                      <option value="mosquito">Mosquito Control</option>
                      <option value="multiple">Multiple Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-dark font-medium mb-2">
                      Message (optional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div className="text-center py-2">
                    <p className="text-sm text-gray-600">
                      Free estimates • No obligation • Clear pricing
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-white px-6 py-4 rounded-lg font-heading font-semibold text-lg hover:bg-secondary transition-colors inline-flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Get My Free Quote'}
                    {!isSubmitting && <ArrowRight className="w-5 h-5" />}
                  </button>
                </form>
                </>
              )}

              <p className="text-sm text-gray-500 text-center mt-6 leading-relaxed">
                Once submitted, a member of our team will reach out to discuss your property and provide a clear, straightforward estimate.
              </p>

              <div className="mt-8 pt-8 border-t border-gray-300 text-center">
                <p className="text-gray-600 mb-3">
                  Prefer to talk now?
                </p>
                <a
                  href="tel:6098681127"
                  className="inline-flex items-center gap-2 text-primary font-heading font-semibold text-lg hover:text-secondary transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call (609) 868-1127
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-dark mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Reliable service • Clear communication • Local professionals
          </p>
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-primary text-white px-8 py-4 rounded-lg font-heading font-semibold text-lg hover:bg-secondary transition-colors inline-flex items-center gap-2 shadow-lg"
          >
            Request a Free Quote
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}

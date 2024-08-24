import React from 'react';
import Layout from '../components/UI/layout.jsx';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[80vh] flex items-center justify-center bg-[url('/path/to/your/professional-image.jpg')]">
        <div className="bg-black bg-opacity-50 p-10 rounded-lg text-center">
          <h1 className="text-5xl font-extrabold text-white leading-tight">Get in Touch with Us</h1>
          <p className="mt-4 text-lg text-white">We are here to answer any questions you may have. Reach out to us and we'll respond as soon as we can.</p>
        </div>
      </section>

      {/* Company Information Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Company</h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            With over a decade of experience in delivering top-notch solutions, we have established ourselves as a reliable partner for businesses worldwide. Whether it's innovation or customer support, we prioritize your needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <FiPhone className="text-blue-600 text-4xl mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900">Call Us</h3>
              <p className="text-lg text-gray-600 mt-2">+123 456 7890</p>
              <p className="text-sm text-gray-500 mt-1">Available Monday to Friday, 9AM - 6PM</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <FiMail className="text-blue-600 text-4xl mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900">Email Us</h3>
              <p className="text-lg text-gray-600 mt-2">support@company.com</p>
              <p className="text-sm text-gray-500 mt-1">We'll get back to you within 24 hours</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <FiMapPin className="text-blue-600 text-4xl mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900">Visit Our Office</h3>
              <p className="text-lg text-gray-600 mt-2">123 Main St, City, Country</p>
              <p className="text-sm text-gray-500 mt-1">Open Monday to Friday, 9AM - 6PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <img src="/path/to/team-member1.jpg" alt="Team Member 1" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900">John Doe</h3>
              <p className="text-lg text-gray-600">CEO & Founder</p>
              <p className="mt-4 text-gray-500">John oversees the company’s overall strategy and ensures that our customers are getting the highest level of service.</p>
            </div>
            <div className="text-center">
              <img src="/path/to/team-member2.jpg" alt="Team Member 2" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900">Jane Smith</h3>
              <p className="text-lg text-gray-600">Chief Operations Officer</p>
              <p className="mt-4 text-gray-500">Jane is responsible for the company's day-to-day operational functions and maintaining the efficiency of business processes.</p>
            </div>
            <div className="text-center">
              <img src="/path/to/team-member3.jpg" alt="Team Member 3" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900">Mike Johnson</h3>
              <p className="text-lg text-gray-600">Head of Customer Support</p>
              <p className="mt-4 text-gray-500">Mike ensures that our support team delivers the highest standard of service to all of our valued customers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900">How can I contact customer support?</h3>
              <p className="text-lg text-gray-600 mt-2">You can reach our customer support team by phone, email, or through the contact form on this page. We’re available Monday to Friday from 9 AM to 6 PM.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900">What is your response time for support requests?</h3>
              <p className="text-lg text-gray-600 mt-2">Our team typically responds to email inquiries within 24 hours during business days. For urgent issues, we recommend giving us a call.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900">Can I visit your office?</h3>
              <p className="text-lg text-gray-600 mt-2">Yes! We welcome visitors during business hours. Please schedule an appointment in advance by calling our office.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Send Us a Message</h2>
          <div className="bg-gray-100 p-12 rounded-lg shadow-xl">
            <form className="space-y-8">
              <div className="flex flex-wrap -mx-4">
                <div className="w-full md:w-1/2 px-4">
                  <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Your Name" required />
                </div>
                <div className="w-full md:w-1/2 px-4">
                  <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Your Email" required />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-2">Message</label>
                <textarea id="message" rows="5" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Your Message" required></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </section>

     
    </Layout>
  );
};

export default ContactPage;

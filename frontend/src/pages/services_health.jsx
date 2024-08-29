import React from 'react';
import { FaBitcoin, FaChartLine, FaHandHoldingUsd, FaShieldAlt, FaUserMd, FaWallet } from 'react-icons/fa';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import 'tailwindcss/tailwind.css';
import Layout from '../components/UI/layout';

const ServicePage = () => {
  return (
    <Layout>
      <div className="bg-gray-50 text-gray-900">
        
        {/* Section 1: Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-700 to-purple-600 text-white py-16">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4 tracking-wide uppercase" style={{ letterSpacing: '3px', transform: 'rotate(-1deg)' }}>
              Welcome to BlockVesta Financial & Healthcare Services
            </h1>
            <p className="text-lg mb-6 max-w-2xl mx-auto transform skew-y-1">Your gateway to world-class healthcare and innovative cryptocurrency solutions, all under one roof.</p>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-16 bg-white transform skew-y-2"></div>
        </section>

        {/* Section 2: About Us */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 uppercase tracking-wide transform rotate-1">Who We Are</h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-700 transform rotate-[-1deg]">BlockVesta combines the best of healthcare services with cutting-edge financial solutions. Whether you're looking for quality medical care or innovative cryptocurrency investments, we have you covered. Our team of professionals is dedicated to delivering excellence across the board.</p>
          </div>
        </section>

        {/* Section 3: Our Services */}
        <section className="py-16 bg-gray-100 transform rotate-1">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 tracking-wider transform rotate-[-1deg]">Our Comprehensive Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Cryptocurrency Wallets', desc: 'Secure and manage your digital assets with confidence.', icon: <FaWallet className="text-purple-600 w-10 h-10 mx-auto mb-4" /> },
                { title: 'Market IRAs', desc: 'Innovative retirement investment solutions with high market returns.', icon: <FaChartLine className="text-blue-600 w-10 h-10 mx-auto mb-4" /> },
                { title: 'Health Insurance', desc: 'Affordable plans that cover your healthcare needs.', icon: <FaShieldAlt className="text-blue-600 w-10 h-10 mx-auto mb-4" /> },
                { title: 'Primary Care', desc: 'General health services to keep you in optimal shape.', icon: <FaUserMd className="text-red-600 w-10 h-10 mx-auto mb-4" /> },
                { title: 'Crypto Investments', desc: 'Grow your portfolio with expert-backed cryptocurrency investments.', icon: <FaBitcoin className="text-yellow-500 w-10 h-10 mx-auto mb-4" /> },
                { title: 'Financial Planning', desc: 'Comprehensive plans for your future financial success.', icon: <FaHandHoldingUsd className="text-blue-500 w-10 h-10 mx-auto mb-4" /> },
              ].map((service, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center border-t-4 border-indigo-500 transform hover:rotate-1 hover:shadow-xl transition-all duration-300">
                  {service.icon}
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 tracking-wide">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Financial Services */}
        <section className="py-16 px-4 transform skew-y-[-1deg] bg-gray-50">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 uppercase tracking-wide">Our Cryptocurrency & Financial Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'Bitcoin Wallet', desc: 'Your secure portal to store and manage your Bitcoins with peace of mind.' },
                { title: 'Market IRAs', desc: 'Our IRAs are designed to help you retire in style with high returns through stock and crypto investments.' },
                { title: 'Crypto Loans', desc: 'Access quick loans by leveraging your cryptocurrency as collateral without liquidating your assets.' },
                { title: 'Health Savings Accounts', desc: 'Tax-advantaged accounts designed to help you save for future healthcare expenses.' },
              ].map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-blue-200 transform hover:skew-y-1 transition-all duration-300">
                  <h3 className="text-2xl font-semibold text-blue-600 mb-4">{service.title}</h3>
                  <p className="text-lg text-gray-700">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Elevating Healthcare & Finance */}
        <section className="py-16 bg-gradient-to-r from-white to-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 tracking-wider uppercase">Elevating Healthcare & Finance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 transform rotate-1">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">Our Vision for the Future</h3>
                <p className="text-lg text-gray-700 mb-6">We aim to lead the way in integrating healthcare and financial services, offering solutions that cater to the whole person. With our innovations in cryptocurrency and market IRAs, we're shaping a future where your health and wealth grow together.</p>
              </div>
              <div className="p-6 transform rotate-[-1deg]">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">Commitment to Excellence</h3>
                <p className="text-lg text-gray-700 mb-6">At BlockVesta, we're committed to providing exceptional service, staying ahead of market trends, and delivering cutting-edge healthcare solutions that make a real difference in our clients' lives.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Carousel Section */}
        
      </div>
    </Layout>
  );
};

export default ServicePage;

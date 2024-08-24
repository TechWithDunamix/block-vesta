import React from "react";
import { FaCheckCircle } from "react-icons/fa"; // For checkmark icons
import Image1 from "../../assets/3d1.jpg"
const CryptoIRAsSection = () => {
  return (
    <section className="w-full max-w-screen-xl mx-auto py-16 px-4 lg:px-0">
      <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
        {/* Left Column - Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <img
            src={Image1}
            alt="Crypto and IRAs"
            className="rounded-lg shadow-md w-10/12 h-auto object-cover"
          />
        </div>

        {/* Right Column - Text */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-800 mb-4">
            Secure Your Future with Crypto IRAs
          </h2>
          <p className="text-gray-700 mb-4">
            Invest in your retirement with confidence by combining the power of
            cryptocurrency and traditional IRAs. Our platform allows you to
            diversify your portfolio and grow your wealth securely.
          </p>

          {/* Feature List */}
          <div className="space-y-4">
            <div className="flex items-start">
              <FaCheckCircle className="text-green-600 mt-1 mr-2" />
              <p className="text-gray-700">
                Flexible IRA options with a mix of traditional and crypto assets.
              </p>
            </div>
            <div className="flex items-start">
              <FaCheckCircle className="text-green-600 mt-1 mr-2" />
              <p className="text-gray-700">
                Top-tier security to protect your investments.
              </p>
            </div>
            <div className="flex items-start">
              <FaCheckCircle className="text-green-600 mt-1 mr-2" />
              <p className="text-gray-700">
                Expert support to guide you through the investment process.
              </p>
            </div>
          </div>

          {/* Button */}
          <button className="mt-6 bg-blue-800 text-white py-3 px-6 rounded-md shadow hover:bg-blue-900 transition duration-300">
            Learn More
          </button>
        </div>
      </div>

      {/* Additional Content */}
      <div className="mt-16 space-y-12">
        {/* Testimonials */}
        <div className="bg-gray-100 py-8 px-4 rounded-md shadow-lg text-center">
          <h3 className="text-2xl font-bold text-blue-800 mb-4">What Our Customers Say</h3>
          <p className="text-gray-700 italic mb-4">
            "BlockVesta made the process of integrating crypto into my IRA so simple. I now feel more confident in my retirement planning!"
          </p>
          <p className="text-blue-800 font-semibold">- James T., Satisfied Customer</p>
        </div>

        {/* Stats */}
        <div className="text-center">
          <h3 className="text-3xl lg:text-4xl font-bold text-blue-800 mb-8">
            Why Choose BlockVesta?
          </h3>
          <div className="flex flex-wrap justify-around">
            <div className="w-1/3 lg:w-1/4">
              <h4 className="text-4xl font-bold text-blue-800">99%</h4>
              <p className="text-gray-700">Customer Satisfaction</p>
            </div>
            <div className="w-1/3 lg:w-1/4">
              <h4 className="text-4xl font-bold text-blue-800">$2M+</h4>
              <p className="text-gray-700">Managed Crypto Assets</p>
            </div>
            <div className="w-1/3 lg:w-1/4">
              <h4 className="text-4xl font-bold text-blue-800">24/7</h4>
              <p className="text-gray-700">Support Availability</p>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <h3 className="text-2xl lg:text-3xl font-bold text-blue-800 text-center py-6">
            Crypto IRA vs. Traditional IRA
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto text-left text-gray-700">
              <thead>
                <tr className="bg-blue-800 text-white">
                  <th className="py-4 px-6">Feature</th>
                  <th className="py-4 px-6">Crypto IRA</th>
                  <th className="py-4 px-6">Traditional IRA</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4 px-6">Diversification</td>
                  <td className="py-4 px-6">Crypto + Traditional Assets</td>
                  <td className="py-4 px-6">Stocks, Bonds, etc.</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6">Potential for Growth</td>
                  <td className="py-4 px-6">High, but volatile</td>
                  <td className="py-4 px-6">Moderate</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6">Risk Level</td>
                  <td className="py-4 px-6">Moderate to High</td>
                  <td className="py-4 px-6">Low to Moderate</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6">Management</td>
                  <td className="py-4 px-6">Self-Managed or Expert Support</td>
                  <td className="py-4 px-6">Typically Self-Managed</td>
                </tr>
                <tr>
                  <td className="py-4 px-6">Security</td>
                  <td className="py-4 px-6">High - Blockchain Technology</td>
                  <td className="py-4 px-6">Standard Security Measures</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CryptoIRAsSection;

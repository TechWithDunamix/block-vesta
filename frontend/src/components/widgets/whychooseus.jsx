import React from "react";
import { FaRocket, FaShieldAlt, FaHandshake, FaChartLine } from "react-icons/fa";

const WhyChooseUsSection = () => {
  return (
    <section className="w-full max-w-screen-xl mx-auto py-16 px-4 lg:px-0 bg-gradient-to-r from-blue-900 to-blue-600 text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Why Choose BlockVesta?</h2>
        <p className="text-lg mb-8">
          Discover the unique benefits of investing in your future with BlockVesta. Our platform offers unparalleled advantages for securing and growing your retirement assets.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Feature 1 */}
        <div className="bg-white text-blue-800 p-6 rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:scale-105 duration-300">
          <FaRocket className="text-5xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Innovative Solutions</h3>
          <p className="text-gray-700">
            Stay ahead of the curve with cutting-edge technology and strategies for crypto IRA management.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white text-blue-800 p-6 rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:scale-105 duration-300">
          <FaShieldAlt className="text-5xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Top Security</h3>
          <p className="text-gray-700">
            Our platform uses advanced security protocols to ensure your assets are protected around the clock.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white text-blue-800 p-6 rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:scale-105 duration-300">
          <FaHandshake className="text-5xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
          <p className="text-gray-700">
            Receive personalized assistance from our team of experts who are dedicated to your financial success.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="bg-white text-blue-800 p-6 rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:scale-105 duration-300">
          <FaChartLine className="text-5xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Growth Opportunities</h3>
          <p className="text-gray-700">
            Take advantage of high-growth opportunities with our comprehensive investment strategies.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h3 className="text-2xl font-bold mb-4">Ready to Secure Your Future?</h3>
        <p className="text-lg mb-8">
          Join thousands of satisfied investors who have transformed their retirement planning with BlockVesta. Start your journey today!
        </p>
        <a
          href="#"
          className="bg-yellow-500 text-blue-800 py-3 px-6 rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
        >
          Get Started Now
        </a>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;

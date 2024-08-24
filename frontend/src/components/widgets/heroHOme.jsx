import React, { useState, useEffect } from "react";
import Image1 from "../../assets/indian.jpg"
import Image2 from  "../../assets/traders.jpg"
import Image3 from "../../assets/3d3.jpg"
const CarouselHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Invest in Crypto with Confidence",
      description:
        "At BlockVesta, we provide the tools and insights you need to confidently invest in cryptocurrency. From Bitcoin to Ethereum, diversify your portfolio with digital assets that can yield high rewards. Start with us today and explore the future of decentralized finance.",
      details:
        "Our experts offer real-time data, secure wallet solutions, and personalized advice to help you make the most of your crypto investments. Join thousands of investors who trust BlockVesta to guide them through the complexities of the crypto world.",
      image: Image1
    },
    {
      title: "Maximize Your Retirement Savings with IRAs",
      description:
        "Prepare for your future with tax-advantaged retirement accounts. Our IRA plans offer flexibility and growth potential, whether you prefer traditional, Roth, or self-directed IRAs. Secure your retirement by choosing the account that fits your financial goals.",
      details:
        "With BlockVesta's IRA offerings, you can diversify into digital assets while taking advantage of tax benefits. Let us help you plan for a prosperous retirement through smart investment strategies.",
      image: Image2
    },
    {
      title: "Crypto IRA - The Future of Retirement",
      description:
        "Crypto IRAs allow you to add Bitcoin and other cryptocurrencies to your retirement portfolio. Hedge against inflation and market volatility while benefiting from tax-deferred or tax-free growth.",
      details:
        "Our platform allows seamless integration of cryptocurrency investments into your IRA, offering expert guidance to ensure compliance with IRS regulations. Future-proof your retirement with a diversified portfolio that includes digital assets.",
      image: Image3
    },
    {
      title: "Comprehensive Investment Solutions",
      description:
        "BlockVesta offers a range of investment services, from traditional stocks and bonds to cutting-edge crypto assets. Whatever your investment strategy, we have the tools to help you succeed.",
      details:
        "Our platform is built with transparency and security in mind. Get real-time data, advanced trading tools, and a dedicated team to support you every step of the way.",
      image: Image2
    },
    {
      title: "Secure Your Financial Future",
      description:
        "BlockVesta is more than just an investment platform—it's your partner in achieving financial freedom. Build a solid foundation for your future with our expert guidance and secure, state-of-the-art platform.",
      details:
        "Stay ahead of the market with access to the latest research, market analysis, and risk management strategies tailored to your unique needs. We're here to help you grow and protect your wealth.",
      image: Image1
    },
  ];

  // Automatic slide transition every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto py-16 px-4 lg:px-0">
      <div className="relative flex flex-col items-center justify-center space-y-12">
        {/* Carousel Content */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between bg-gradient-to-r from-blue-600 via-blue-800 to-blue-900 shadow-lg p-6 lg:p-12">
          {/* Image */}
          <div
            className={`lg:w-1/2 ${
              currentSlide % 2 === 0 ? "lg:order-last" : "lg:order-first"
            } mb-8 lg:mb-0 mx-12`}
          >
            <img
              src={slides[currentSlide].image}
              alt="Carousel Slide"
              className="w-full h-80 object-cover shadow-md"
            />
          </div>

          {/* Text */}
          <div className="lg:w-1/2 text-center lg:text-left text-white space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              {slides[currentSlide].title}
            </h2>
            <p className="text-lg lg:text-xl mb-4">
              {slides[currentSlide].description}
            </p>
            <p className="text-md lg:text-lg opacity-90">
              {slides[currentSlide].details}
            </p>
            <button className="bg-white text-blue-800 font-semibold py-2 px-6 rounded-md shadow-md hover:bg-blue-200 transition duration-300 mt-4">
              Learn More
            </button>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex space-x-6">
          <button
            onClick={prevSlide}
            className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-md hover:bg-blue-900 transition duration-300"
          >
            &larr;
          </button>
          <button
            onClick={nextSlide}
            className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-md hover:bg-blue-900 transition duration-300"
          >
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarouselHero;

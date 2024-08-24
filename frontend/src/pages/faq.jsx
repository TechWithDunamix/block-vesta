import React, { useState } from 'react';
import Layout from '../components/UI/layout';

const FaqPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { 
      question: 'What is BlockVesta and what sets it apart in the cryptocurrency and IRA market?',
      answer: `BlockVesta is a cutting-edge financial technology firm dedicated to revolutionizing the way individuals and institutions interact with cryptocurrency and retirement planning. Our primary goal is to deliver innovative, secure, and highly efficient solutions tailored to the evolving needs of today’s investors.

      **In Cryptocurrency:** BlockVesta offers a comprehensive trading platform that supports a diverse range of digital assets. What sets us apart is our focus on advanced trading features, real-time analytics, and user-centric design. Our platform integrates top-notch security measures, ensuring the safety of your assets and transactions. We cater to both experienced traders and newcomers, offering educational resources, in-depth market analysis, and robust trading tools.

      **In IRA Management:** Our IRA services are designed to facilitate strategic retirement planning and asset growth. BlockVesta provides a seamless experience for managing various IRA accounts, including Traditional, Roth, and SEP IRAs. We offer personalized financial guidance, flexible investment options, and tools for effective portfolio management. Our aim is to support individuals in achieving their retirement goals through tailored strategies and comprehensive support.

      At BlockVesta, our commitment to innovation, security, and client satisfaction establishes us as a leader in both cryptocurrency trading and retirement planning solutions.`
    },
    { 
      question: 'How do I start using BlockVesta’s cryptocurrency platform?',
      answer: `To start using BlockVesta’s cryptocurrency platform, follow these steps:

      1. **Sign Up:** Go to our website and select “Register.” Provide your personal details and create a secure password. We follow rigorous KYC (Know Your Customer) standards to ensure the security and integrity of our user base.

      2. **Account Verification:** After registration, verify your identity by submitting the required documents, such as a government-issued ID and proof of address. This step ensures regulatory compliance and enhances account security.

      3. **Deposit Funds:** Once your account is verified, you can fund it using various methods, including bank transfers, credit/debit cards, or cryptocurrency deposits. We support multiple payment options to facilitate a smooth funding process.

      4. **Explore Trading Features:** Access our trading platform to explore the available cryptocurrencies. Utilize our advanced trading tools, charts, and market indicators to make informed trading decisions. Our platform provides real-time data and analytical features to support your trading strategy.

      5. **Leverage Educational Resources:** Use our educational resources, including tutorials, webinars, and market analysis reports, to enhance your understanding of cryptocurrency trading and improve your investment strategies.

      6. **Customer Support:** If you have any issues or questions, our customer support team is available 24/7 to assist you. Contact us via email, live chat, or phone for prompt and professional support.

      By following these steps, you can begin trading cryptocurrencies with BlockVesta and take advantage of our comprehensive platform and resources.`
    },
    { 
      question: 'What security measures does BlockVesta implement to ensure the safety of user data and assets?',
      answer: `At BlockVesta, the security of user data and assets is our top priority. We use a multi-layered security approach, including the following measures:

      **Encryption:** We implement advanced encryption protocols, such as AES-256, to protect data transmitted between our platform and users. This ensures that sensitive information, including personal details and transaction data, is secure from unauthorized access.

      **Multi-Factor Authentication (MFA):** For enhanced account security, we require multi-factor authentication. This additional security layer involves verifying your identity through multiple methods, such as a secure code sent to your mobile device or email.

      **Cold Storage:** The majority of our users’ cryptocurrency holdings are stored in cold storage, which is offline and less susceptible to hacking attempts. Only a small portion of assets is kept in hot wallets for operational purposes, reducing risk.

      **Regular Security Audits:** We perform regular security audits and vulnerability assessments to identify and address potential weaknesses in our systems. Our security team stays updated with the latest threats and implements necessary updates to maintain a secure environment.

      **Real-Time Monitoring:** Our platform includes real-time monitoring tools to detect unusual activities and potential security breaches. Our security operations center is staffed 24/7 to respond promptly to any alerts or incidents.

      **Data Privacy:** We adhere to strict data privacy policies to ensure that your personal and financial information is handled with the highest level of care. Our privacy policy details how we collect, use, and protect your data.

      BlockVesta is committed to maintaining a secure and reliable platform for cryptocurrency trading and IRA management. We continually invest in security measures and technology to safeguard your assets and information.`
    },
    { 
      question: 'What cryptocurrencies are available for trading on BlockVesta’s platform?',
      answer: `BlockVesta offers a broad selection of cryptocurrencies to meet diverse user needs. Our platform includes:

      **Major Cryptocurrencies:** We support leading digital assets such as Bitcoin (BTC), Ethereum (ETH), and Bitcoin Cash (BCH). These well-known cryptocurrencies are favored for their liquidity and widespread adoption, making them popular for trading.

      **Altcoins:** In addition to major cryptocurrencies, we provide access to various altcoins, including Ripple (XRP), Cardano (ADA), and Chainlink (LINK). These altcoins offer unique features and growth potential, providing diverse investment opportunities.

      **Emerging Projects:** BlockVesta strives to stay at the forefront of the cryptocurrency market. We regularly review and list emerging projects with promising technologies and innovations. Our goal is to provide users with access to new and potentially lucrative opportunities.

      **Stablecoins:** To offer stability in trading and investment, we include stablecoins such as Tether (USDT) and USD Coin (USDC). These digital assets are pegged to fiat currencies, reducing volatility and providing a stable store of value.

      **Market Insights:** Our platform provides detailed information and analysis for each cryptocurrency, including historical performance, market trends, and technical indicators. This helps users make informed decisions based on comprehensive data.

      BlockVesta is dedicated to offering a well-rounded selection of cryptocurrencies, catering to various trading and investment preferences. For a complete list of available cryptocurrencies and their trading pairs, please visit our platform.`
    },
    { 
      question: 'How does BlockVesta support retirement planning through its IRA services?',
      answer: `BlockVesta offers a comprehensive suite of services to support effective retirement planning through Individual Retirement Accounts (IRAs). Our IRA services include:

      **Account Types:** We offer various IRA options, including Traditional IRAs, Roth IRAs, and SEP IRAs. Each account type provides different tax advantages and contribution limits, allowing you to select the best option for your retirement goals.

      **Personalized Investment Strategies:** Our platform enables you to choose from a wide range of investment options, including stocks, bonds, mutual funds, and cryptocurrencies. We provide tools and resources to help you build a diversified portfolio tailored to your retirement objectives.

      **Automated Portfolio Management:** BlockVesta offers automated portfolio management features to help maintain your desired asset allocation. Our platform can automatically rebalance your portfolio based on predefined criteria, ensuring that your investments align with your retirement goals.

      **Regular Performance Reports:** Access detailed performance reports and statements for your IRA account. Our platform provides regular updates on account activity, investment performance, and portfolio changes, allowing you to track your progress and make informed decisions.

      **Financial Planning Tools:** Utilize our financial planning tools to project future retirement savings, estimate required contributions, and evaluate various retirement scenarios. These tools assist in effective planning and adjustments as needed.

      **Expert Guidance:** BlockVesta offers access to experienced financial advisors who provide personalized guidance on retirement planning. Whether you need help with asset allocation, tax strategies, or retirement projections, our advisors are here to support you.

      BlockVesta is committed to helping you achieve a secure and prosperous retirement. Our IRA services are designed to simplify retirement planning and support your long-term financial success. For more information or to get started, please contact our support team or visit our website.`
    },
    { 
      question: 'What are the advantages of using BlockVesta for cryptocurrency trading and IRA management?',
      answer: `BlockVesta provides numerous advantages for cryptocurrency trading and IRA management, offering a comprehensive and effective solution for your financial needs:

      **Advanced Technology:** Our platform leverages state-of-the-art technology to deliver a seamless trading and investment experience. With high-performance trading engines, real-time data feeds, and intuitive interfaces, BlockVesta ensures you have access to the necessary tools and features for successful trading and investment management.

      **User-Centric Design:** BlockVesta’s platform is crafted with the user in mind. We prioritize ease of use, accessibility, and functionality, creating an environment suited for both novice and experienced users. Our user-friendly interface and streamlined processes enhance the overall experience.

      **Comprehensive Support:** We provide extensive support to assist you with any questions or issues. Our customer support team is available 24/7 to offer help via email, live chat, or phone. We also offer educational resources and market analysis to aid in decision-making.

      **Diverse Investment Options:** BlockVesta offers a wide range of investment options for both cryptocurrency and IRA accounts. Whether you are interested in trading major cryptocurrencies or exploring new investment opportunities, our platform accommodates various preferences and strategies.

      **Security and Compliance:** Our commitment to security ensures that your data and assets are protected. We adhere to industry-leading security practices and regulatory standards, providing a safe and compliant environment for your financial activities.

      **Flexibility and Customization:** BlockVesta supports personalized investment strategies and portfolio management. Our platform allows for customization, enabling you to tailor your investments according to your goals and risk tolerance.

      **Innovative Features:** We continuously develop and integrate innovative features to enhance the user experience. From automated trading tools to advanced analytics, BlockVesta is dedicated to providing cutting-edge solutions for your financial success.

      By choosing BlockVesta, you gain access to a sophisticated platform designed to support your cryptocurrency trading and retirement planning needs. Explore the benefits of our services and experience the advantages of a comprehensive financial solution tailored to your requirements.`
    }
  ];

  const handleToggle = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <h1 className="text-3xl font-light text-slate-800 mb-6">Company Overview and Mission</h1>
          <p className="text-slate-600 mb-6">
            BlockVesta is dedicated to redefining the landscape of cryptocurrency trading and retirement planning. Our mission is to empower individuals and institutions with innovative tools and solutions that simplify financial management and enhance investment opportunities. 
          </p>
          <p className="text-slate-600 mb-6">
            At BlockVesta, we believe in the transformative power of technology and its ability to drive financial success. Our platform combines advanced technology with user-centric design to offer a seamless and secure experience for all users. We are committed to delivering exceptional service, supporting your financial goals, and helping you achieve long-term success.
          </p>
          <p className="text-slate-600">
            Join us on our journey to revolutionize the financial industry. Explore our cutting-edge solutions and experience the benefits of a comprehensive platform designed to meet your needs. At BlockVesta, we are dedicated to providing you with the tools and support required to thrive in the dynamic world of cryptocurrency and retirement planning.
          </p>
        </section>

        <section className="mb-8">
          <h1 className="text-3xl font-light text-slate-800 mb-6">Frequently Asked Questions</h1>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white shadow-md rounded-md overflow-hidden">
                <button
                  className="w-full px-4 py-3 text-left bg-slate-100 text-slate-700 focus:outline-none"
                  onClick={() => handleToggle(index)}
                >
                  <h2 className="text-lg font-light">{faq.question}</h2>
                </button>
                {activeIndex === index && (
                  <div className="px-4 py-3 text-slate-600">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-100 py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-light text-slate-800 mb-6">Why Choose BlockVesta?</h2>
            <p className="text-slate-600">
              BlockVesta stands out in the financial technology landscape due to our commitment to innovation, security, and user satisfaction. We offer a sophisticated platform designed to meet the diverse needs of cryptocurrency traders and IRA investors. Our cutting-edge technology, user-centric design, and comprehensive support ensure a seamless experience for all users. Choose BlockVesta for a reliable and advanced solution to your financial goals.
            </p>
          </div>
        </section>

        <section className="my-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-light text-slate-800 mb-6">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 shadow-md rounded-md">
                <h3 className="text-xl font-light text-slate-800 mb-4">Cryptocurrency Trading</h3>
                <p className="text-slate-600">
                  Experience a comprehensive cryptocurrency trading platform with real-time analytics, advanced trading tools, and extensive asset support. Whether you are a seasoned trader or new to cryptocurrency, BlockVesta offers the features and support you need to succeed.
                </p>
              </div>
              <div className="bg-white p-6 shadow-md rounded-md">
                <h3 className="text-xl font-light text-slate-800 mb-4">IRA Management</h3>
                <p className="text-slate-600">
                  Simplify your retirement planning with BlockVesta’s IRA services. Choose from a variety of IRA accounts, manage your portfolio with ease, and receive expert guidance to achieve your retirement goals effectively.
                </p>
              </div>
              <div className="bg-white p-6 shadow-md rounded-md">
                <h3 className="text-xl font-light text-slate-800 mb-4">Innovative Tools</h3>
                <p className="text-slate-600">
                  Leverage our advanced tools and features for a better trading and investment experience. From automated portfolio management to detailed market analysis, BlockVesta provides the technology you need to stay ahead.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-100 py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-light text-slate-800 mb-6">Our Commitment</h2>
            <p className="text-slate-600">
              At BlockVesta, we are dedicated to delivering exceptional service and innovative solutions. Our commitment to security, customer satisfaction, and continuous improvement drives us to provide a platform that meets the highest standards of excellence. We are here to support your financial journey with reliable, user-focused solutions and unwavering dedication.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default FaqPage;

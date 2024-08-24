import React, { useState, useEffect } from "react";
import { FaStar, FaUserAlt, FaUserAltSlash } from "react-icons/fa"; // Importing icons for user avatars

const TestimonialCarousel = () => {
  const testimonials = [
    {
      name: "János Kovács",
      review:
        "BlockVesta helped me diversify my portfolio with cryptocurrency investments. The platform is secure, and their team is incredibly supportive!",
      rating: 5,
      gender: "male",
      country: "Hungary",
    },
    {
      name: "Mary Johnson",
      review:
        "I was hesitant to invest in crypto for my retirement, but BlockVesta made it easy to set up a crypto IRA. Highly recommend!",
      rating: 4,
      gender: "female",
      country: "America",
    },
    {
      name: "Juan Pérez",
      review:
        "I’m impressed with the depth of resources available at BlockVesta. They helped me make informed decisions about my retirement savings.",
      rating: 5,
      gender: "male",
      country: "Venezuela",
    },
    {
      name: "Fiona O'Leary",
      review:
        "The seamless integration of crypto assets into my IRA is fantastic. BlockVesta has been an excellent partner for my financial growth.",
      rating: 4,
      gender: "female",
      country: "Ireland",
    },
    {
      name: "Shakib Ahmed",
      review:
        "Great experience with BlockVesta! Their experts provide real-time insights that are invaluable for crypto investments.",
      rating: 5,
      gender: "male",
      country: "Bangladesh",
    },
    {
      name: "Ngozi Okeke",
      review:
        "BlockVesta's support team guided me through every step of setting up my IRA with crypto investments. Couldn’t be happier with the service!",
      rating: 4,
      gender: "female",
      country: "Nigeria",
    },
    {
      name: "Robert Green",
      review:
        "BlockVesta helped me diversify my IRA by adding crypto, and their platform makes it easy to track and manage everything.",
      rating: 5,
      gender: "male",
      country: "America",
    },
    {
      name: "Emma Walsh",
      review:
        "I feel much more confident about my retirement with BlockVesta's IRA options. The combination of traditional and crypto investments is a game-changer.",
      rating: 5,
      gender: "female",
      country: "Ireland",
    },
    {
      name: "Miguel Rodríguez",
      review:
        "BlockVesta’s platform is intuitive and easy to use. It’s perfect for those looking to diversify their retirement savings.",
      rating: 4,
      gender: "male",
      country: "Venezuela",
    },
    {
      name: "Fatima Bello",
      review:
        "I love the security features of BlockVesta. They have made investing in crypto much more reassuring for me.",
      rating: 5,
      gender: "female",
      country: "Nigeria",
    },
    {
      name: "Bálint Nagy",
      review:
        "BlockVesta made it easy to invest in crypto as part of my retirement plan. Their tools are user-friendly and effective.",
      rating: 5,
      gender: "male",
      country: "Hungary",
    },
    {
      name: "Lisa Thompson",
      review:
        "Setting up my crypto IRA was quick and easy with BlockVesta. Highly recommend their services!",
      rating: 4,
      gender: "female",
      country: "America",
    },
    {
      name: "Amina Rahman",
      review:
        "BlockVesta has excellent customer support. They walked me through every step of the process, making it very easy.",
      rating: 5,
      gender: "female",
      country: "Bangladesh",
    },
    {
      name: "Patrick O'Connor",
      review:
        "I am impressed by the transparency and reliability of BlockVesta’s crypto IRA offerings.",
      rating: 5,
      gender: "male",
      country: "Ireland",
    },
    {
      name: "Nkem Iwu",
      review:
        "With BlockVesta, I feel confident that my crypto investments are secure and well managed.",
      rating: 4,
      gender: "female",
      country: "Nigeria",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000); // Change slide every 4 seconds for smoother transition

    return () => clearInterval(interval); // Cleanup on unmount
  }, [testimonials.length]);

  return (
    <div className="w-full max-w-screen-xl mx-auto py-16 px-4 lg:px-0">
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-[1500ms] ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100 / testimonials.length}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full lg:w-1/3 p-6"
            >
              <div className="bg-white shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">
                    {testimonial.gender === "male" ? (
                      <FaUserAlt className="text-blue-600" />
                    ) : (
                      <FaUserAltSlash className="text-pink-600" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-blue-800">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.country}</p>
                    <div className="flex text-yellow-500">
                      {Array(testimonial.rating)
                        .fill()
                        .map((_, i) => (
                          <FaStar key={i} />
                        ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;

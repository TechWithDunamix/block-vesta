import React from 'react';
import Layout from '../components/UI/layout.jsx';
import { FiBriefcase, FiBook, FiCode, FiSettings, FiTrendingUp, FiUsers } from 'react-icons/fi';
import '../index.css';
import Image1 from "../assets/3d1.jpg"
import Image2 from "../assets/3d2.jpg"
import Image3 from "../assets/3d3.jpg"
import Image4 from "../assets/indian.jpg"




const departments = [
  { name: "Engineering", description: "Engineering focuses on technical innovations.", icon: <FiCode /> },
  { name: "Marketing", description: "Marketing handles advertising and branding.", icon: <FiTrendingUp /> },
  { name: "Human Resources", description: "HR manages recruitment and staff well-being.", icon: <FiUsers /> },
  { name: "Operations", description: "Operations ensures efficient business processes.", icon: <FiSettings /> },
  { name: "Sales", description: "Sales drives revenue by building client relationships.", icon: <FiBriefcase /> },
  { name: "Research & Development", description: "R&D creates innovative products.", icon: <FiBook /> },
];

const testimonials = [
  { name: "Jane Doe", position: "Software Engineer", text: "Working in the Engineering department has been a career-defining experience for me. The collaboration and growth opportunities are endless!" },
  { name: "John Smith", position: "Marketing Manager", text: "The Marketing department truly embodies creativity and strategy. It’s amazing to see how we impact the company's brand on a daily basis." },
];

const faqs = [
  { question: "How do I apply for a job in your departments?", answer: "Visit our careers page and fill out the application form for the department of your choice." },
  { question: "What are the main responsibilities of the Engineering team?", answer: "The Engineering team is responsible for product development, coding, and technical innovation." },
  { question: "How do the departments collaborate?", answer: "We prioritize cross-departmental collaboration through regular meetings, project management tools, and team-building activities." },
];

const stats = [
  { label: "Projects Completed", value: "120+" },
  { label: "Happy Clients", value: "95%" },
  { label: "Team Members", value: "250+" },
  { label: "Offices Worldwide", value: "15" },
];

const blogPosts = [
  { title: "The Future of Engineering", date: "August 2024", excerpt: "Explore the latest trends in engineering and how our team is adapting to the future of technology." },
  { title: "Marketing in the Digital Age", date: "July 2024", excerpt: "Our Marketing team discusses how they are leveraging digital platforms to grow our brand." },
];

const DepartmentsPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-screen flex items-center justify-center bg-blue-500 bg-hero-pattern" style={{backgroundImage:Image4}}>
        <div className="text-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Departments</h1>
          <p className="text-xl mb-8">Where innovation meets excellence across all our teams.</p>
          <a href="#departments" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-lg">
            Explore Departments
          </a>
        </div>
      </section>

      {/* Jumbotron */}
      <section className="bg-gray-800 text-white py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Building the Future Together</h2>
        <p className="text-lg max-w-2xl mx-auto">Our departments are dedicated to innovation, teamwork, and excellence. We’re driving progress in every area of our organization to create a brighter future for our clients and communities.</p>
      </section>

      {/* Departments Section */}
      <div id="departments" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Departments</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((department, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
                <div className="flex items-center justify-center mb-4 text-4xl text-blue-600">
                  {department.icon}
                </div>
                <h2 className="text-xl font-semibold text-gray-800 text-center mb-2">{department.name}</h2>
                <p className="text-gray-600 text-center">{department.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Gallery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Department Highlights</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <img className="w-full h-64 object-cover rounded-lg shadow-lg" src={Image1} alt="Department Image 1" />
            <img className="w-full h-64 object-cover rounded-lg shadow-lg" src={Image2} alt="Department Image 2" />
            <img className="w-full h-64 object-cover rounded-lg shadow-lg" src={Image3} alt="Department Image 3" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">What Our Team Says</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-600 italic mb-4">“{testimonial.text}”</p>
                <h3 className="text-lg font-bold text-gray-800">{testimonial.name}</h3>
                <p className="text-gray-600">{testimonial.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">By The Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-blue-600 text-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-2">{stat.value}</h3>
                <p className="text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog/News Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{post.date}</p>
                <p className="text-gray-600">{post.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </Layout>
  );
};

export default DepartmentsPage;

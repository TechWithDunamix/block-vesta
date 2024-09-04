import React, { useState } from "react";
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState({
    services: false,
    news: false,
  });

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleDropdown = (menu) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const closeDropdowns = () => {
    setDropdownOpen({ services: false, news: false });
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      {/* Header */}
      <header className="bg-white text-blue-600 py-4 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold uppercase tracking-wider">
            Block-Vesta
          </h1>
          <p className="text-sm mt-2">Invest now and plan for the future</p>
          <button
            onClick={toggleSidebar}
            className="lg:hidden text-blue-600 text-2xl focus:outline-none"
          >
            {sidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      {/* Primary Nav (Desktop) */}
      <nav className="bg-blue-600 text-white shadow-md hidden lg:block">
        <div className="container mx-auto px-4">
          <ul className="flex space-x-6 py-4 justify-end">
            <li>
              <Link to="/" className="hover:text-gray-200 transition-colors">
                Home
              </Link>

             

            </li>
            <li>

            <Link to="/faq" className="hover:text-gray-200 transition-colors">
                FAQs
              </Link>
            </li>
            <li>
            <Link to="/plans" className="hover:text-gray-200 transition-colors">
                Plans
              </Link>
            </li>
            <li className="relative">
              <button
                onClick={() => toggleDropdown("services")}
                className="flex items-center space-x-2 hover:text-gray-200 transition-colors focus:outline-none"
              >
                <span>Services</span>
                {dropdownOpen.services ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {dropdownOpen.services && (
                <ul
                  className="absolute left-0 mt-2 w-48 bg-white text-blue-600 shadow-lg rounded-lg py-2 z-10 transition-transform transform scale-95"
                  onMouseLeave={closeDropdowns}
                >
                  <li>
                    <Link
                      to="/services"
                      className="block px-4 py-2 hover:bg-blue-100 transition-colors"
                    >
                      Passport Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services"
                      className="block px-4 py-2 hover:bg-blue-100 transition-colors"
                    >
                      Healthcare
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services"
                      className="block px-4 py-2 hover:bg-blue-100 transition-colors"
                    >
                      Tax Services
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/departments" className="hover:text-gray-200 transition-colors">
                Departments
              </Link>
            </li>
            <li className="relative">
              <button
                onClick={() => toggleDropdown("news")}
                className="flex items-center space-x-2 hover:text-gray-200 transition-colors focus:outline-none"
              >
                <span>News</span>
                {dropdownOpen.news ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {dropdownOpen.news && (
                <ul
                  className="absolute left-0 mt-2 w-48 bg-white text-blue-600 shadow-lg rounded-lg py-2 z-10 transition-transform transform scale-95"
                  onMouseLeave={closeDropdowns}
                >
                  <li>
                    <Link
                      to="/news"
                      className="block px-4 py-2 hover:bg-blue-100 transition-colors"
                    >
                      Press Releases
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/news"
                      className="block px-4 py-2 hover:bg-blue-100 transition-colors"
                    >
                      Announcements
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/news"
                      className="block px-4 py-2 hover:bg-blue-100 transition-colors"
                    >
                      Policy Updates
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-200 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Sidebar (Mobile) */}
      <div
        className={`fixed inset-0 bg-blue-800 bg-opacity-90 z-50 transform ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="w-64 bg-white text-blue-600 h-full flex flex-col">
          <button
            onClick={toggleSidebar}
            className="text-2xl p-4 focus:outline-none"
          >
            <FaTimes />
          </button>
          <ul className="flex flex-col p-4 space-y-4">
            <li>
              <Link to="/" className="hover:text-blue-400 transition-colors" onClick={toggleSidebar}>
                Home
              </Link>
              <Link to="/faq" className="hover:text-gray-200 transition-colors">
                FAQs
              </Link>
              <Link to="/plans" className="hover:text-gray-200 transition-colors">
                Plans
              </Link>
            </li>
            <li>
              <button
                onClick={() => toggleDropdown("services")}
                className="flex items-center space-x-2 hover:text-blue-400 transition-colors w-full text-left"
              >
                <span>Services</span>
                {dropdownOpen.services ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {dropdownOpen.services && (
                <ul className="bg-blue-100 mt-2 space-y-2">
                  <li>
                    <Link
                      to="/services"
                      className="block px-4 py-2 hover:bg-blue-200 transition-colors"
                      onClick={toggleSidebar}
                    >
                      Passport Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services"
                      className="block px-4 py-2 hover:bg-blue-200 transition-colors"
                      onClick={toggleSidebar}
                    >
                      Healthcare
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services"
                      className="block px-4 py-2 hover:bg-blue-200 transition-colors"
                      onClick={toggleSidebar}
                    >
                      Tax Services
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                to="/departments"
                className="hover:text-blue-400 transition-colors"
                onClick={toggleSidebar}
              >
                Departments
              </Link>
            </li>
            <li>
              <button
                onClick={() => toggleDropdown("news")}
                className="flex items-center space-x-2 hover:text-blue-400 transition-colors w-full text-left"
              >
                <span>News</span>
                {dropdownOpen.news ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {dropdownOpen.news && (
                <ul className="bg-blue-100 mt-2 space-y-2">
                  <li>
                    <Link
                      to="/news"
                      className="block px-4 py-2 hover:bg-blue-200 transition-colors"
                      onClick={toggleSidebar}
                    >
                      Press Releases
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/news"
                      className="block px-4 py-2 hover:bg-blue-200 transition-colors"
                      onClick={toggleSidebar}
                    >
                      Announcements
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/news"
                      className="block px-4 py-2 hover:bg-blue-200 transition-colors"
                      onClick={toggleSidebar}
                    >
                      Policy Updates
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-blue-400 transition-colors"
                onClick={toggleSidebar}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

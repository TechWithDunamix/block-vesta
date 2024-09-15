import React, { useState } from 'react';
import { FiMail, FiUser, FiPhone, FiLock } from 'react-icons/fi';
import Layout from '../components/UI/layout.jsx';
import '../index.css';
import { countries,callMainApi } from '../utils.js';
import { toQueryString } from '@zayne-labs/callapi';
import { message } from 'antd';
const SignupForm = () => {
  const getParams = new URLSearchParams(window.location.search)
  const [formData, setFormData] = useState({
    "referal_id": getParams.get("ref")
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.username) newErrors.username = 'Full name is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.country) newErrors.country = 'Country selection is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsLoading(false);
      return;
    }

    e.preventDefault()
    
    const request = await callMainApi('/auth/register',{
      body:toQueryString(formData),
      method:'POST'
    })
    if(!request.error){
        message.success("Submited");
        localStorage.setItem("token",request.data.token)
        // localStorage.setItem("user_email",request.data)
        localStorage.removeItem("userEmail")

        console.log(request)
        window.location.href  = '/dashboard'
        return ;

    }
  };

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg mx-5 md:max-w-3xl lg:max-w-4xl">
          
          {/* Welcome Message */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Create Your Account</h2>
            <p className="text-gray-600 mt-2">Join our platform and unlock exclusive content, features, and more.</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Progress Bar */}
            <div className="bg-gray-200 h-2 w-full rounded-md mb-4">
              <div className="bg-blue-600 h-2 rounded-md" style={{ width: '50%' }}></div>
            </div>

            {/* Form Fields */}
            <div className="md:grid md:grid-cols-2 md:gap-6 space-y-6 md:space-y-0">
              {/* Email */}
              <div className="relative">
                <FiMail className="absolute left-3 top-3 text-blue-600" style={{ fontSize: '20px' }} />
                <input
                  type="email"
                  name="email"
                  required
                  onChange={handleChange}
                  placeholder="Email"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                {errors.email && <p className="text-red-500 font-light mt-1">{errors.email}</p>}
              </div>

              {/* Full Name */}
              <div className="relative">
                <FiUser className="absolute left-3 top-3 text-blue-600" style={{ fontSize: '20px' }} />
                <input
                  type="text"
                  name="username"
                  required
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                {errors.username && <p className="text-red-500 font-light mt-1">{errors.username}</p>}
              </div>

              {/* Phone Number */}
              <div className="relative">
                <FiPhone className="absolute left-3 top-3 text-blue-600" style={{ fontSize: '20px' }} />
                <input
                  type="text"
                  name="phone"
                  required
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                {errors.phone && <p className="text-red-500 font-light mt-1">{errors.phone}</p>}
              </div>

              {/* Password */}
              <div className="relative">
                <FiLock className="absolute left-3 top-3 text-blue-600" style={{ fontSize: '20px' }} />
                <input
                  type="password"
                  name="password"
                  required
                  onChange={handleChange}
                  placeholder="Password"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                {errors.password && <p className="text-red-500 font-light mt-1">{errors.password}</p>}
              </div>

              <div className="relative">
                <FiLock className="absolute left-3 top-3 text-blue-600" style={{ fontSize: '20px' }} />
                <input
                  type="text"
                  name="referal_id"
                  // required
                  onChange={handleChange}
                  value={formData.referal_id}
                  placeholder="Referal code"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                {errors.password && <p className="text-red-500 font-light mt-1">{errors.password}</p>}
              </div>

              {/* Country */}
              <div className="relative">
              <select
              required
              name='country'
              onChange={handleChange}
              className="pl-3 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
              defaultValue=""
            >
              <option value="" disabled>Select your country</option>
              {countries.map((country) => (
                <option key={country.value} value={country.value}>{country.label}</option>
              ))}
            </select>
                {errors.country && <p className="text-red-500 font-light mt-1">{errors.country}</p>}
              </div>
            </div>

            {/* Additional Content for Larger Screens */}
            <div className="hidden md:grid md:grid-cols-2 md:gap-6">
              {/* Company Name */}
              <div className="relative">
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name (Optional)"
                  className="pl-4 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                  onChange={handleChange}
                />
              </div>

              {/* Website */}
              <div className="relative">
                <input
                  type="text"
                  name="website"
                  placeholder="Website (Optional)"
                  className="pl-4 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="mt-6">
              <input type="checkbox" required />{" "}
              <span className="text-gray-600 text-sm">
                I agree to the{" "}
                <a href="/terms" className="text-blue-600">Terms of Service</a> and{" "}
                <a href="/privacy" className="text-blue-600">Privacy Policy</a>.
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
              disabled={isLoading}
            >
              {isLoading ? 'Signing Up...' : 'Sign Up'}
            </button>

            {/* Spinner */}
            {isLoading && <div className="mt-5 p-4 animate-spin border-t-4 border-blue-500 w-[20px] h-[20px] rounded-full"></div>}
          </form>

          {/* Footer Content */}
          <div className="mt-6 text-center">
            <p className="text-gray-700">Already have an account? <a href="/login" className="text-blue-600">Login</a></p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignupForm;

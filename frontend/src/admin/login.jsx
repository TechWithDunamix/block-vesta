import React, { useState } from 'react';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { message } from 'antd';
import { callMainApi } from '../utils.js';

const AdminLoginForm = () => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();

    const request = await callMainApi('/admin/login', {
      body: JSON.stringify(formData),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(request)

    if (!request.error) {
      message.success('Login successful');
      localStorage.setItem('admin_token', request.data.token);
      localStorage.removeItem("userEmail")
      window.location.href = '/admin';
      return;
    }

    setIsLoading(false);
    message.error('Login failed');
    setErrors(request.error.errorData);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-5">
        <h2 className="text-2xl font-bold text-center mb-8 text-blue-600">Login</h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative">
            <MailOutlined className="absolute left-3 top-3 text-blue-600" style={{ fontSize: '20px' }} />
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
              placeholder="Email"
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            {errors.email && <p className="text-red-500 font-light">Email is required</p>}
          </div>

          <div className="relative">
            <LockOutlined className="absolute left-3 top-3 text-blue-600" style={{ fontSize: '20px' }} />
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              required
              onChange={handleChange}
              placeholder="Password"
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button
              type="button"
              onClick={toggleShowPassword}
              className="absolute right-3 top-3 text-blue-600"
              style={{ fontSize: '20px' }}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
            {errors.password && <p className="text-red-500 font-light">Password is required</p>}
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            Login
          </button>
        </form>

        <div className="text-center mt-4">
          <a href="/forgot-password" className="text-blue-600 hover:underline">
            Forgot Password?
          </a>
        </div>

        {isLoading && (
          <div className="mt-5 p-4 animate-spin border-t-4 border-blue-500 w-[20px] h-[20px] rounded-full"></div>
        )}
      </div>
    </div>
  );
};

export default AdminLoginForm;

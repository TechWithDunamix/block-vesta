import React, { useState } from 'react';
import { MailOutlined, LockOutlined, MessageFilled } from '@ant-design/icons';
import { message } from 'antd';
import { toQueryString } from '@zayne-labs/callapi';
import { callMainApi } from '../utils.js';
import '../index.css';

const SetPasswordPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [otp, setOTP] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const requestOTP = async () => {
    setOTP(false);
    setIsLoading(true);
    const request = await callMainApi('/otp/get', {
      method: 'POST',
      body: toQueryString({ purpose: 'set_password', email: formData.email }),
    });
    if (!request.error) {
      message.success('OTP has been sent to your Email');
      setIsLoading(false);
      return;
    }
    message.error('An error occurred');
    setIsLoading(false);
  };

  const checkOTP = async (e) => {
    const otp = e.target.value;
    if (otp.length > 7) {
      const request = await callMainApi(`/otp/check/${otp}?purpose=set_password`);
      if (!request.error) {
        setOTP(true);
        setConfirmed(true);
        message.success('OTP Confirmed');
        return;
      }
      message.error('Invalid OTP');
    }
  };

  const setPassword = async (e) => {
    e.preventDefault();
    const request = await callMainApi('/set-password', {
      method: 'POST',
      body: toQueryString(formData),
    });
    if (!request.error) {
      message.success('Your password has been set');
      setTimeout(() => {
        window.location.href = '/login';
      }, 500);
      return;
    }
    setConfirmed(true);
    setFormErrors(request.error.errorData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-5">
        <h2 className="text-2xl font-bold text-center mb-8 text-blue-600">Set Password</h2>

        <form className="space-y-6" onSubmit={setPassword}>
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
            {formErrors.email && <p className="text-red-500 font-light">{formErrors.email}</p>}
          </div>

          <div className="flex justify-between mt-10">
            <p>Enter OTP</p>
            {!otp && (
              <button
                type="button"
                onClick={requestOTP}
                className="items-center flex hover:bg-blue-600 bg-blue-700 text-slate-200 p-2 rounded-lg drop-shadow-sm"
              >
                <MessageFilled />
                {isLoading ? (
                  <div className="mx-12 p-1 animate-spin border-t-4 border-blue-100 w-[20px] h-[20px] rounded-full"></div>
                ) : (
                  'Request OTP'
                )}
              </button>
            )}
          </div>
          <input
            disabled={otp}
            onChange={checkOTP}
            className="p-3 mt-4 border-2 rounded-lg w-full"
            placeholder="Enter OTP"
          />
          <p className="text-slate-500">OTP will be sent to your email when you request</p>

          {confirmed && (
            <>
              <div className="relative mt-4">
                <LockOutlined className="absolute left-3 top-3 text-blue-600" style={{ fontSize: '20px' }} />
                <input
                  type="password"
                  name="password"
                  required
                  onChange={handleChange}
                  placeholder="New Password"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                {formErrors.password && <p className="text-red-500 font-light">{formErrors.password}</p>}
              </div>

              <div className="relative mt-4">
                <LockOutlined className="absolute left-3 top-3 text-blue-600" style={{ fontSize: '20px' }} />
                <input
                  type="password"
                  name="confirm_password"
                  required
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                {formErrors.confirm_password && (
                  <p className="text-red-500 font-light">{formErrors.confirm_password}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 mt-6"
              >
                Set Password
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default SetPasswordPage;

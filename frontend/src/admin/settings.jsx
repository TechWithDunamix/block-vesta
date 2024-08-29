// src/components/SettingsPage.js
import React, { useState } from 'react';
import AdminLayout from './layout';
import { callMainApi } from '../utils';
import { toQueryString } from '@zayne-labs/callapi';
const SettingsPage = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
        const fetchData = async () => {
            const req = await callMainApi("/admin/login",{
                body:toQueryString({"password":password}),
                method:"PUT"
            })
            console.log(req)
            localStorage.setItem("admin_token",req.data.token)
            window.location.href = '/admin'
        }
        fetchData()
        
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <AdminLayout>
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <h2 className="text-center text-2xl font-bold mb-4">Admin Settings</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              New Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
              Confirm New Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Change Password
            </button>
          </div>
        </form>
      </div>
    </div>
    </AdminLayout>
  );
};

export default SettingsPage;

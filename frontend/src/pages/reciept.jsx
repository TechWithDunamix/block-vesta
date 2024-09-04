import React, { useState } from 'react';
import { CheckCircleOutlined, CopyOutlined, PlusOutlined } from '@ant-design/icons';
import DashboardLayout from '../components/dashboard_layout';

const RecPage = () => {
  const [copied, setCopied] = useState(false);
  const params = new URLSearchParams(window.location.search);
   
  const handleCopy = () => {
    navigator.clipboard.writeText('11LpXmkQXWtKuLYhjTkPWD25kkMC71aMi').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handlePaymentCompleted = () => {
    // Implement your payment completion logic here
        window.location.href = '/dashboard'
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
        <div className="w-full max-w-4xl p-6 mt-10 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-center">Confirm Investment</h3>
          <div className="mt-8">
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <div className="p-2 text-white bg-blue-500 rounded-full">01</div>
                <div>
                  <h4 className="text-lg font-semibold">Investment Amount</h4>
                  <p>Select schema and enter amount</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="p-2 text-white bg-blue-500 rounded-full">02</div>
                <div>
                  <h4 className="text-lg font-semibold">Success</h4>
                  <p>Confirm Your Investment Process</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center p-4 mb-6 text-blue-500 bg-blue-100 rounded-full">
                <CheckCircleOutlined style={{ fontSize: '24px' }} />
              </div>
              <h2 className="text-xl font-semibold">
                Deposit of ${params.get("price").toLocaleString()} via BITCOIN
                <br />
                For {params.get("name")} Plan{' '}
                <span className="px-2 py-1 ml-2 text-yellow-800 bg-yellow-200 rounded">Pending</span>
              </h2>

              <div className="flex flex-col sm:flex-row items-center justify-center mt-6 space-y-4 sm:space-y-0 sm:space-x-4">
                <input
                  type="text"
                  value="11LpXmkQXWtKuLYhjTkPWD25kkMC71aMi"
                  readOnly
                  className="px-4 py-2 text-center border rounded w-full sm:w-auto"
                />
                <button
                  onClick={handleCopy}
                  className="flex items-center px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 w-full sm:w-auto"
                >
                  <CopyOutlined />
                  <span className="ml-2">{copied ? 'Copied!' : 'Copy Wallet'}</span>
                </button>
              </div>

              <div className="mt-8">
                <img
                  src="https://chart.googleapis.com/chart?chs=200x200&chld=L|2&cht=qr&chl=11LpXmkQXWtKuLYhjTkPWD25kkMC71aMi"
                  alt="qr-code"
                  className="mx-auto"
                />
              </div>

              <p className="mt-4">Once this payment is completed, click on the button below</p>
              <p>Transaction ID: {params.get("trsx")}</p>
              <button
                onClick={handlePaymentCompleted}
                className="flex items-center px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-700 w-full sm:w-auto"
              >
                <PlusOutlined />
                <span className="ml-2">Payment completed</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default RecPage;

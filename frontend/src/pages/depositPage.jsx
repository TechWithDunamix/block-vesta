import DashboardLayout from "../components/dashboard_layout";
import { useState } from "react";
import { toQueryString } from "@zayne-labs/callapi";
import { callMainApi } from "../utils.js";
import { message } from "antd";
import { CopyOutlined } from "@ant-design/icons";

const btcAddress = "11LpXmkQXWtKuLYhjTkPWD25kkMC71aMi";
const usdtAddress = "0x6c3a2656d9dfc5088e8d644e7d0ec0bb3fef045f";
const etherum = "0x6c3a2656d9dfc5088e8d644e7d0ec0bb3fef045f"
const usdt2 = "TSwJuxgSDYmRCYqaw8Bm6tBWkdFsmXQM6y"
const DepositPage = () => {
  const [amount, setAmount] = useState(0);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleDepositRequest = async () => {
    setIsLoading(true);
    const request = await callMainApi("/account/deposit", {
      method: "POST",
      body: toQueryString({ amount: amount }),
    });
    if (!request.error) {
      message.success("Your Deposit request has been sent !");
      setIsLoading(false);
      window.location.href = "/dashboard";
      return;
    }
    message.error("An error occurred");
    console.log(request)
    setIsLoading(false);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    message.success("Address copied to clipboard!");
  };

  return (
    <DashboardLayout>
      <div className="min-h-full px-4 sm:px-6 lg:px-8">
        <div className="border-2 rounded-xl py-5 px-4 w-full max-w-2xl mx-auto">
          <div className="rounded-xl bg-blue-200 p-2 ">
            <div className="flex items-center">
              <p className="bg-blue-900 text-slate-100 rounded-xl p-1">
                Your payment method
              </p>
              <p className="px-3" style={{ fontFamily: "Rubik" }}>
                {"Tether USD (TRC 20) >"}
              </p>
            </div>
          </div>
          <input
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="p-3 mt-16 border-2 rounded-lg w-full"
            placeholder="Enter Amount"
          />
          <p className="text-slate-500 mt-8">
            You are to make payment ${amount} using one of the addresses below
          </p>
          <hr className="my-6" />
          <p className="text-slate-500 mt-8">BTC Wallet Address</p>
          <div className="flex items-center mt-2">
            <p className="bg-slate-300 rounded-lg border-2 p-4 text-xs w-full overflow-x-auto">
              {btcAddress}
            </p>
            <button
              onClick={() => copyToClipboard(btcAddress)}
              className="ml-2 text-blue-500 hover:text-blue-700"
            >
              <CopyOutlined />
            </button>
          </div>
          <p className="text-slate-500 mt-8">USDT (TRC 20) Wallet Address</p>
          <div className="flex items-center mt-2">
            <p className="bg-slate-300 rounded-lg border-2 p-4 text-xs w-full overflow-x-auto">
              {usdtAddress}
            </p>
            <button
              onClick={() => copyToClipboard(usdtAddress)}
              className="ml-2 text-blue-500 hover:text-blue-700"
            >
              <CopyOutlined />
            </button>
          </div>
          <p className="text-slate-500 mt-8">Usdt (ERC20)  Wallet Address</p>
          <div className="flex items-center mt-2">
            <p className="bg-slate-300 rounded-lg border-2 p-4 text-xs w-full overflow-x-auto">
              {usdt2}
            </p>
            <button
              onClick={() => copyToClipboard(btcAddress)}
              className="ml-2 text-blue-500 hover:text-blue-700"
            >
              <CopyOutlined />
            </button>
          </div>
          <button
            onClick={handleDepositRequest}
            className="cursor-pointer mt-10 hover:bg-blue-600 bg-blue-700 text-slate-200 p-2 rounded-lg drop-shadow-sm w-full"
          >
            Complete Request
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DepositPage;

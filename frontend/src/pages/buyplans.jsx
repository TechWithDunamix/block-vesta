import React from 'react';
import DashboardLayout from '../components/dashboard_layout';
import { callMainApi } from '../utils';
import { toQueryString } from '@zayne-labs/callapi';
const BuyPlanPage = () => {
    const params = new URLSearchParams(window.location.search);
    console.log(params.get("plans"))
    const name = params.get("name")
    const price = params.get("amount")
    const handleSUbmit = async (e) => {
      e.preventDefault()
      const req = await callMainApi(`/invest/${params.get("id")}`,{
        body:toQueryString({"name":name,"price":price}),
        method:"POST"
      })
      console.log(req)
      if (req.data){
        window.location.href=   `/buy-plan/r?price=${price}&name=${price}&trsx=${req.data.trsx_code}` 
      } 
    }
    return (
      <DashboardLayout>
        <div className="container mx-auto p-5">
            <div className="bg-white rounded-lg  p-8">
                <h3 className="text-2xl font-bold mb-6 text-blue-600">Review and Confirm Investment</h3>
                <div className="space-y-6">
                    <div className="space-y-4">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <span className="font-light"><strong>Selected Schema:</strong></span>
                            <select className="border rounded p-2 w-full md:w-1/2" id="select-schema" name="schema_id" required>
                                <option value="1" selected>{params.get("name")}</option>
                            </select>
                        </div>
                        <hr className="border-gray-300 my-2" />
                        
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <span className="font-light"><strong>Amount:</strong></span>
                            <span className="font-light">Minimum 100 USD - Maximum 1,499 USD</span>
                        </div>
                        <hr className="border-gray-300 my-2" />
                        
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <span className="font-light"><strong>Enter Amount:</strong></span>
                            <div className="flex w-full md:w-1/2 overflow-x-hidden">
                                <input 
                                    value={params.get("amount")} 
                                    type="text" 
                                    className="border rounded-l p-2 flex-grow" 
                                    placeholder="Enter Amount" 
                                    id="amt" 
                                    required 
                                    disabled={true}
                                />
                                <span className="border rounded-r p-2">USD</span>
                            </div>
                        </div>
                        <hr className="border-gray-300 my-2" />
                        
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <span className="font-light"><strong>Select Wallet:</strong></span>
                            <select className="border rounded p-2 w-full md:w-1/2" name="wallet" id="method" required>
                                <option value="bal">Total Balance (0 USD)</option>
                                <option value="0">Deposit From Bitcoin Wallet</option>
                                <option value="1">Deposit From Ethereum Wallet</option>
                                <option value="2">Deposit From USDT (trc20) Wallet</option>
                                <option value="3">Deposit From Tron (trc20) Wallet</option>
                                <option value="4">Deposit From BNB (bep20) Wallet</option>
                            </select>
                        </div>
                        <hr className="border-gray-300 my-2" />
                    </div>
                    
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="font-light"><strong>Return of Interest:</strong></span>
                            <span className="font-light">{params.get("int")}%</span>
                        </div>
                        <hr className="border-gray-300 my-2" />
                        
                        <div className="flex justify-between items-center">
                            <span className="font-light"><strong>Number of Period:</strong></span>
                            <span className="font-light">{params.get("period")}</span>
                        </div>
                        <hr className="border-gray-300 my-2" />
                        
                        <div className="flex justify-between items-center">
                            <span className="font-light"><strong>Capital Back:</strong></span>
                            <span className="font-light">Yes</span>
                        </div>
                        <hr className="border-gray-300 my-2" />
                    </div>
                    
                    <div className="mt-6 flex flex-col md:flex-row justify-between">
                        <button 
                            onClick={(e) => {handleSUbmit}}
                            
                            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
                        >
                             Invest Now
                        </button>
                        <button onClick={handleSUbmit}>submit</button>
                        <a 
                            href="invest" 
                            className="bg-gray-300 py-2 px-4 rounded hover:bg-gray-400 transition duration-200 mt-4 md:mt-0"
                        >
                            <i className="anticon anticon-stop"></i> Cancel & Restart
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </DashboardLayout>
    );
};

export default BuyPlanPage;

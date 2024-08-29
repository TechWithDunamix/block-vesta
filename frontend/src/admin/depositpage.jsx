// src/pages/DepositsPage.jsx
import React, { useEffect, useState } from 'react';
import AdminLayout from './layout';
import { callMainApi } from '../utils';
import { message } from 'antd';
import DepositCard from './components/depositcard';
import { toQueryString } from '@zayne-labs/callapi';
const AdminDepositPage = () => {
  const [deposits, setDeposits] = useState([]);
  const [flag, setFlag] = useState(true);
  

  useEffect(() => {
    const fetchDeposits = async () => {
      const response = await callMainApi('/admin/deposits');
      setDeposits(response.data);
      console.log(response)
    };

    fetchDeposits();
  }, [flag]);

  const handleConfirm = async (depositId) => {
    const response = await callMainApi(`/admin/deposits/${depositId}`, {
      method: 'POST',
    //   body:toQueryString({"pendig":True})
    });

    if (response.error) {
      message.error('Failed to confirm withdrawal');
    } else {
      message.success('Withdrawal confirmed');
      setDeposits(deposits.filter(deposit => deposit.id !== depositId));
      setFlag(!flag)
    }
  };

  return (
    <AdminLayout>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Deposits</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {deposits && deposits.map((deposit) => (
            <DepositCard key={deposit.id} deposit={deposit} onConfirm={handleConfirm} />
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDepositPage;

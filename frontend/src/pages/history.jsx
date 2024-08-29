import DashboardLayout from "../components/dashboard_layout";
import { useState, useEffect } from "react";
import { callMainApi } from '../utils.js';
import { message, Table, Tag } from "antd";

const History = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const callAPI = async () => {
      try {
        const request = await callMainApi("/account/transaction");
        if (!request.error) {
          setData(request.data);
        } else {
          message.error('Failed to fetch transactions');
        }
      } catch (error) {
        console.error('Failed to fetch transactions:', error);
        message.error('An error occurred while fetching transactions');
      }
    };
    callAPI();
  }, []);

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      className: 'hidden md:table-cell', // Hide on smaller devices
      render: (text) => <p className="truncate max-w-xs">{text}</p>,
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (amount) => <p>${amount}</p>,
    },
    {
      title: 'Transaction Type',
      dataIndex: 'transaction_type',
      key: 'transaction_type',
      render: (text) => <p className="truncate max-w-xs">{text}</p>,
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Status',
      dataIndex: 'pending',
      key: 'pending',
      render: (pending) => (
        <Tag color={pending ? 'red' : 'blue'}>
          {pending ? 'Pending' : 'Completed'}
        </Tag>
      ),
    },
  ];

  return (
    <DashboardLayout>
      <div className="px-4 py-8 md:px-8">
        <p className="text-xl font-semibold mb-4">Transaction History</p>
        <div className="overflow-x-auto">
          <Table
            columns={columns}
            dataSource={data}
            rowKey='id'
            rowClassName={(record) => (record.pending ? 'bg-red-100' : 'bg-blue-100')}
            pagination={{ pageSize: 10 }}
            scroll={{ x: 'max-content' }} // To enable horizontal scrolling if needed
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default History;

import { UserOutlined, DollarOutlined, HomeOutlined, BankOutlined, HistoryOutlined, ProfileOutlined, MenuOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import { Drawer, Button } from 'antd';
import { callMainApi } from '../utils.js';
import { Link } from 'react-router-dom';

const DashboardLayout = ({ children }) => {
  const [userEmail, setUserEmail] = useState(localStorage.getItem("userEmail"));
  const [drawerVisible, setDrawerVisible] = useState(false);

  const fetchUserEmail = async () => {
    const request = await callMainApi('/user/profile');
    if (!request.error) {
      localStorage.setItem("userEmail",request.data.email)
      setUserEmail(request.data.email);
      console.log(userEmail)
    }
  };

  useEffect(() => {
    !localStorage.getItem("userEmail") && fetchUserEmail();
  }, []);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onClose = () => {
    setDrawerVisible(false);
  };

  return (
    <div className='flex'>
      <div className='hidden md:block w-[20%] bg-slate-200 fixed px-5 py-1 h-screen overflow-y-auto'>
        <h1 className='text-blue-500 text-[2rem] font-light'>
          Block <span className='text-red-600'>-Vesta</span>
        </h1>
        <div className='flex flex-col justify-left mt-20'>
          <a href='/dashboard' className='p-3 bg-slate-400 rounded-lg my-5 flex items-center' style={{ fontFamily: "Rubik" }}>
            <HomeOutlined className='mr-2' /> Home
          </a>
          <a href='/deposit' className='p-3 bg-slate-400 rounded-lg my-5 flex items-center' style={{ fontFamily: "Rubik" }}>
            <BankOutlined className='mr-2' /> Deposit
          </a>
          <a href='/withdraw' className='p-3 bg-slate-400 rounded-lg my-5 flex items-center' style={{ fontFamily: "Rubik" }}>
            <DollarOutlined className='mr-2' /> Withdraw
          </a>
          <a href= '/history' className='p-3 bg-slate-400 rounded-lg my-5 flex items-center' style={{ fontFamily: "Rubik" }}>
            <HistoryOutlined className='mr-2' /> Transaction History
          </a>
          <a className='p-3 bg-slate-400 rounded-lg my-5 flex items-center' style={{ fontFamily: "Rubik" }}>
            <ProfileOutlined className='mr-2' /> Plans
          </a>
        </div>
      </div>
      <div className='w-full bg-slate-100 md:ml-[20%]'>
        <div className='w-ful flex h-[50px] justify-between px-10 items-center font-bold'>
          <h1 className='text-slate-800'>Dashboard</h1>
          <Button className='md:hidden' onClick={showDrawer}>
            <MenuOutlined />
          </Button>
          <p className='hidden md:block font-light bg-white rounded-[20px] p-[5px] border-4 cursor-pointer'>
            <UserOutlined className='text-blue-500' /> {userEmail}
          </p>
        </div>
        <div className='p-4 min-h-[100vh]'>
          {children}
        </div>
      </div>
      <Drawer title="Menu" placement="left" onClose={onClose} visible={drawerVisible}>
      <p className='font-light bg-white rounded-[20px] p-[5px] border-4 cursor-pointer'>
            <UserOutlined className='text-blue-500' /> {userEmail}
          </p>
        <a href='/dashboard' className='block p-3 text-blue-500 my-5 flex items-center' style={{ fontFamily: "Rubik" }}>
          <HomeOutlined className='mr-2' /> Home
        </a>
        <a href='/deposit' className='block p-3 text-blue-500 my-5 flex items-center' style={{ fontFamily: "Rubik" }}>
          <BankOutlined className='mr-2' /> Deposit
        </a>
        <a href='/withdraw' className='block p-3 text-blue-500 my-5 flex items-center' style={{ fontFamily: "Rubik" }}>
          <DollarOutlined className='mr-2' /> Withdraw
        </a>
        <a href = '/history' className='block p-3 text-blue-500 my-5 flex items-center' style={{ fontFamily: "Rubik" }}>
          <HistoryOutlined className='mr-2' /> Transaction History
        </a>
        <a href='/plans' className='block p-3 text-blue-500 my-5 flex items-center' style={{ fontFamily: "Rubik" }}>
          <ProfileOutlined className='mr-2' /> Plans
        </a>
        
      </Drawer>
    </div>
  );
}

export default DashboardLayout;

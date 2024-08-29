// src/components/Layout.jsx
import React from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined, HomeOutlined, UserOutlined, SettingOutlined, KeyOutlined } from '@ant-design/icons';
import { BarChartOutlined,ArrowDownOutlined ,ArrowUpOutlined,FullscreenOutlined} from '@ant-design/icons';

const AdminLayout = ({ children }) => {
  const [collapsed, setCollapsed] = React.useState(true);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`bg-gray-800 text-white ${collapsed ? 'w-16' : 'w-full md:w-64'} transition-all duration-300`}>
        <div className="p-4 flex items-center justify-between">
          <span className="text-xl font-semibold">{collapsed ? 'A' : 'Admin'}</span>
          <button onClick={toggleCollapse}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </button>
        </div>
        <nav className="mt-4">
          <ul>
            <li className="p-4 hover:bg-gray-700">
              <HomeOutlined className="inline-block mr-2" />
              <a href='/admin'><span className={`${collapsed ? 'hidden' : 'inline-block'}`}>Home</span></a>
            </li>
            <li className="p-4 hover:bg-gray-700">
              <UserOutlined className="inline-block mr-2" />

              <a href='/admin/users' ><span className={`${collapsed ? 'hidden' : 'inline-block'}`}>Users</span></a>
            </li>
            <li className="p-4 hover:bg-gray-700">
              <SettingOutlined className="inline-block mr-2" />
           <a href='/admin/settings'>   <span className={`${collapsed ? 'hidden' : 'inline-block'}`}>Settings</span></a>
            </li>

            <li className="p-4 hover:bg-gray-700">
              <ArrowDownOutlined className="inline-block mr-2" />
              <a href='/admin/deposits'><span className={`${collapsed ? 'hidden' : 'inline-block'}`}>Deposits</span></a>
            </li>

            <li className="p-4 hover:bg-gray-700">
              <ArrowUpOutlined className="inline-block mr-2" />
              <a href='/admin/withdrawals'><span className={`${collapsed ? 'hidden' : 'inline-block'}`}>Withdrawals</span></a>
            </li>
        
            <li className="p-4 hover:bg-gray-700">
              <KeyOutlined className="inline-block mr-2" />
              <a href='/admin/otps'><span className={`${collapsed ? 'hidden' : 'inline-block'}`}>OTP</span></a>
            </li>

            <li className="p-4 hover:bg-gray-700">
              <FullscreenOutlined className="inline-block mr-2" />
              <a href='/admin/plans'><span className={`${collapsed ? 'hidden' : 'inline-block'}`}>Plans</span></a>
            </li>

            <li className="p-4 hover:bg-gray-700">
              <BarChartOutlined className="inline-block mr-2" />
              <a href='/admin/investments'><span className={`${collapsed ? 'hidden' : 'inline-block'}`}>Investments</span></a>
            </li>
        


          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow p-4">
          <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
        </header>
        <main className="flex-1 p-4 overflow-y-auto">
          {children}
        </main>
        <footer className="bg-white text-center p-4 shadow">
          <span>&copy; 2024 block-vesta. All rights reserved.</span>
        </footer>
      </div>
    </div>
  );
};

export default AdminLayout;

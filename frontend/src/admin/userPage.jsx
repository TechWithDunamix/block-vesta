// src/pages/UsersPage.jsx
import React, { useEffect, useState } from 'react';
// import DashboardLayout from '../components/DashboardLayout';
import AdminLayout from './layout';
import UserCard from './components/userCard';
import UserDetailModal from './components/userDetailModal';
import { callMainApi } from '../utils';

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const handleFetchUser = async () => {
        const req = await callMainApi("/admin/users/")
        console.log(req)
        if (req.data){
            setUsers(req.data)
        }
    };
    handleFetchUser()
    
  },[])

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setIsModalVisible(true);
  };

  const handleModalClose = (updated) => {
    setIsModalVisible(false);
    if (updated) {
      const handleFetchUser = async () => {
        const req = await callMainApi("/admin/users/")
        console.log(req)
        if (req.data){
            setUsers(req.data)
        }
    };
    handleFetchUser()
    }
  };

  return (
    <AdminLayout>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Users</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {users && users.map((user) => (
            <UserCard key={user.id} user={user} onClick={handleUserClick} />
          ))}
        </div>
      </div>
      {selectedUser && (
        <UserDetailModal
          user={selectedUser}
          visible={isModalVisible}
          onClose={handleModalClose}
        />
      )}
    </AdminLayout>
  );
};

export default UsersPage;


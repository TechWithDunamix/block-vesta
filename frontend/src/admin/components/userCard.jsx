// src/components/UserCard.jsx
import React from 'react';
import { UserOutlined } from '@ant-design/icons';

const UserCard = ({ user, onClick }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl cursor-pointer" onClick={() => onClick(user)}>
      <UserOutlined className="text-blue-600" style={{ fontSize: '40px' }} />
      <h3 className="mt-2 text-lg font-semibold">{user.username}</h3>
      <p className="text-gray-500">{user.email}</p>
      <p>Refered by {user.ref_by}</p>
    </div>
  );
};

export default UserCard;

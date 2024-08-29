// src/components/UserDetailModal.jsx
import React, { useState , useEffect} from 'react';
import { Modal, message } from 'antd';
import { callMainApi } from '../../utils';
import { toQueryString } from '@zayne-labs/callapi';
const UserDetailModal = ({ user, visible, onClose }) => {
  const [formData, setFormData] = useState(user);
  const [isLoading, setIsLoading] = useState(false);
  console.log(user)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(()=>{
      setFormData(user)
  },[user,visible])

  const handleSave = async () => {
    delete formData.last_login
    setIsLoading(true);
    console.log(user.id)

    const response = await callMainApi(`/admin/users/${user.id}/`, {
      method: 'PUT',
      body: toQueryString(formData)
    });
    console.log(response)
    if (response.error) {
      message.error('Failed to update user!!');
    } else {
      message.success('User updated successfully');
      onClose(true);
    }
    setIsLoading(false);
  };

  return (
    <Modal
      title="User Details"
      visible={visible}
      onCancel={() => onClose(false)}
      onOk={handleSave}
      confirmLoading={isLoading}
    >
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-700">Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-700">Country</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block text-gray-700">Total Balance</label>
          <input
            type="text"
            name="total_balance"
            value={formData.total_balance}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block text-gray-700">Total Bonus</label>
          <input
            type="text"
            name="total_bonuses"
            value={formData.total_bonuses}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block text-gray-700">Total Deposit</label>
          <input
            type="text"
            name="total_deposit"
            value={formData.total_deposit}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block text-gray-700">Total WIthdraw</label>
          <input
            type="text"
            name="total_withdraw"
            value={formData.total_withdraw}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>


      </div>
    </Modal>
  );
};

export default UserDetailModal;

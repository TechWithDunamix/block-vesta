import React from 'react';
import {PhoneOutlined ,MailOutlined, UserOutlined, LockOutlined } from '@ant-design/icons';
import {message} from 'antd'
import {countries,callMainApi} from '../utils.js'
import {useState,useEffect} from 'react'
import { toQueryString } from "@zayne-labs/callapi"
import '../index.css'
const EditProfileForm = () => {
  const [formData,setFormData] = useState({})
  const [errors,setErrors] = useState({})
  const [isLoading,setIsLoading] = useState(false)
  useEffect(() => {
        const fetchUserData = async () => {
            const request = await callMainApi("/user/profile")
            if (!request.error){
                // console.log('the data',request.data)
                setFormData(request.data)
            }
            
        }
        fetchUserData()
  },[])
  const handleChange = (e) => {
    const {name,value} = e.target
    setFormData({...formData,[name]:value})
  }
  const handleSubmit = async (e)=> {
    setIsLoading(true)
    e.preventDefault()
    
    const request = await callMainApi('/user/profile',{
      body:toQueryString(formData),
      method:'PUT'
    })
    if(!request.error){
        message.success("Sbmited");
        console.log(request)
        window.location.href  = '/dashboard'
        return ;

    }
    setIsLoading(false)
    message.error("Error !")
    setErrors(request.error.errorData)
    console.log(errors)

    
  }
  return (
    
        
        <form className="w-[90%]" onSubmit = {handleSubmit}>
          <div className="relative my-16">
            <MailOutlined className="absolute left-3 top-3 text-blue-600" style={{ fontSize: '20px' }} />
            <input
              value = {formData.email}
              type="email"
              name='email'
              required
              onChange = {handleChange}
              placeholder="Email"
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            {errors.email && <p className='text-red-500 font-light'>Email is already taken by another user </p>}
          </div>

          <div className="relative my-16">
            <UserOutlined className="absolute left-3 top-3 text-blue-600" style={{ fontSize: '20px' }} />
            <input
              onChange = {handleChange}
              value = {formData.username}

              required
              type="text"
              name='username'
              placeholder="Full Name"
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

           <div className="relative my-16">
            <PhoneOutlined className="absolute left-3 top-3 text-blue-600" style={{ fontSize: '20px' }} />
            <input
              onChange = {handleChange}
              value = {formData.phone}
              required
              type="text"
              name='phone'
              placeholder="Phone Number"
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          

          <div className="relative my-16">
            <select
              required
              name='country'
              onChange={handleChange}
              className="pl-3 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
              defaultValue={formData.country}
              value={formData.country}
            >
              <option value="" disabled>Select your country</option>
              {countries.map((country) => (
                <option key={country.value} value={country.value}>{country.label}</option>
              ))}
            </select>
          </div>
         
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            Update Profile
          </button>
        {isLoading && <div className='mt-5 mr-20 p-4 animate-spin-infinte border-t-4 border-blue-500 w-[20px] h-[20px] rounded-[200px]'></div>}

        </form>


  );
};

export default EditProfileForm;

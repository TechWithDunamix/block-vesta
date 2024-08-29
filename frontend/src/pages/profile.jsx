import DashboardLayout from '../components/dashboard_layout.jsx'
import {PhoneOutlined ,MailOutlined, UserOutlined, LockOutlined } from '@ant-design/icons';
import EditProfileForm from '../components/editProfileForm.jsx';


import {useState} from 'react'



const ProfilePage = () => {

  const [formData,setFormData] = useState()

  const [errors,setErrors] = useState({})

  const [isLoading,setIsLoading] = useState(false)
  const handleChange = (e) => {
    const {name,value} = e.target
    setFormData({...formData,[name]:value})
  }
 

    
  
	return (<DashboardLayout>
				<div className='flex flex-col md:flex-row justify-between md:mx-2 w-full'>
					<div className='md:flex flex-col max-w-[50%] items-center'>
						<div className='mt-32'>
						<h1 className='text-block' style={{fontFamily:"Rubik"}}>Public Profile</h1>
						<p className='text-slate-600'>
							Your Public Profile data can be used to share with anyone to
						</p>
						</div>

						<div className='mt-16'>
						<h1 className='text-block' style={{fontFamily:"Rubik"}}>Private Profile</h1>
						<p className='text-slate-600'>
							Your Public Profile data can be used to share with anyone to
						</p>
						</div>
					</div>

					<div className='w-full md:ml-28'>
						<EditProfileForm />
					</div>
					

				</div>

			</DashboardLayout>
	)
}

export default ProfilePage
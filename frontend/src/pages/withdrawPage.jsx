import DashboardLayout from '../components/dashboard_layout.jsx'
import { MessageFilled } from '@ant-design/icons'
import {useState} from 'react'
import {message} from 'antd'
import { toQueryString } from "@zayne-labs/callapi"
import {callMainApi} from '../utils.js'

const WithdrawPage  = () => {
    const [isLoading,setIsLoading] = useState(false)
    const [otp,setOTP] = useState(false)
    const [confirmed,setConfirmed] = useState(false)
    const [formData,setFormData] = useState()
    const [formErrors,setFormErrors] = useState({})

    const handleChange = (e) => {
        const {name,value} = e.target
        setFormData({...formData,[name]:value})
    }
    const requestOTP = async () => {
        setOTP(false)
        setIsLoading(true)
        const request = await callMainApi('/otp/get',{
            method:'POST',
            body:toQueryString({"purpose":'withdrawal'})
          })
        if (!request.error){
            message.success("OTP has been sent to your Email")
            setIsLoading(false)
            return ;
        }
        message.error("An error occured")
        setIsLoading(false)
    }
    const checkOTP = async (e) => {
        const otp = e.target.value
        if (otp.length > 7 ){
            const request = await callMainApi(`/otp/check/${otp}?purpose=withdrawal`)
            console.log(request)
            if (!request.error){
                setOTP(true)
                setConfirmed(true)
                message.success("OTP Confirmed")
                return ;
            }
            message.error("Invalid OTP")
            console.log(request)

        }
        

    }
    const completeWithdrawal = async (e) =>{
        setConfirmed(false)
        const request = await callMainApi("/account/withdraw",{
            method:"POST",
            body:toQueryString(formData)
        })
        if (!request.error){
            message.success("Your withdraw order has been placed")
            setTimeout(() => {
                window.location.href = '/dashboard'
            },500)
            return ;
        }
        setConfirmed(true)
        setFormErrors(request.error.errorData)

        
        console.log(request)
    }
    return (
        <DashboardLayout>
            <div className='min-h-full w-full flex items-center justify-center'>
                <div className='border-2 rounded-xl py-5 px-4'>
                    <div className='rounded-xl bg-blue-200 p-2 '>
                        <div className='flex items-center'>
                        <p className='bg-blue-900 text-slate-100 rounded-xl p-1'>
                            Your payement method 
                        </p>
                        <p className='px-3' style={{fontFamily:"Rubik"}}>{'Tether USD (TRC 200)   >'}</p>
                        </div>

                    </div>

                    <p className='mt-4' style={{fontFamily:"Rubik"}}>Enter the Amount to withdraw ($)</p>
                    <input 
                        name='amount'
                        onChange={handleChange}
                        className='p-3 mt-4 border-2 rounded-lg w-full ' 
                        placeholder='Enter Amount'
                        />
                    <p className='text-red-700'>{formErrors.amount}</p>
                    <div className='flex justify-between mt-10'>
                        <p>Enter OTP</p>
                        {!otp && <button onClick={requestOTP} className='items-center flex hover:bg-blue-600 bg-blue-700 text-slate-200 p-2 rounded-lg drop-shadow-sm'>
                        <MessageFilled />   
                        {isLoading ? <div className='mx-12 p-q animate-spin-infinte border-t-4 border-blue-100 w-[20px] h-[20px] rounded-[200px]'></div>:'Request OTP'}

                        </button>
                        }


                    </div>
                    <input 
                    disabled={otp}
                    onChange = {checkOTP}className='p-3 mt-4 border-2 rounded-lg w-full ' placeholder='Enter OTP'/>
                    <p className='text-slate-500'>OTP will be sent to to your EMail when you request</p>

                    <p className='mt-9'>Enter Tether USD (TRC 20) Address</p>
                    <input name = 'address' onChange={handleChange} className='p-3 mt-4 border-2 rounded-lg w-full ' placeholder='Enter Tether USD (TRC 20) Address'/>
                    <p className='text-slate-400 mt-10'>Tether USD (TRC 20) is out default withdrawal option pls,enter the correct wallet address to recieve your funds</p>

                    {confirmed && <button 
                    
                    onClick={completeWithdrawal}
                    className='cursor-pointer mt-10 hover:bg-blue-600 bg-blue-700 text-slate-200 p-2 rounded-lg drop-shadow-sm'>Complete Request </button> }



                </div>

                


            </div>
        </DashboardLayout>
    )
}

export default WithdrawPage
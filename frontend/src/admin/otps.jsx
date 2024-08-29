import AdminLayout from "./layout"
import { useEffect,useState } from "react"
import { callMainApi } from '../utils';
import OTPCard from "./components/otpcards";
const OtpPage = () => {
    const [otp,setOTP] = useState([])
    useEffect(() => {
       const fetch = async ()  => {
        const req = await callMainApi("/admin/otps")
        console.log(req)
        req.data && setOTP(req.data)
       }
       fetch()
    },[])
    return (
        <AdminLayout>
            Otp Page
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {otp.map(data => {
                return (
                    <OTPCard otp={data}/>
                )
            })}
            </div>
        </AdminLayout>
    )
}

export default OtpPage
import { CopyOutlined } from '@ant-design/icons';
import DashboardLayout from '../components/dashboard_layout.jsx'
import { ArrowUpOutlined, ArrowDownOutlined} from '@ant-design/icons';
import {useState,useEffect} from'react'
import {Table} from 'antd'
import {callMainApi} from '../utils.js'
const Dashboard = () =>{
	const [hasPlan,setHasPlan] = useState(false)
	const [userData,setUserData] = useState()
	const [transactions,setTransaction] = useState([])
	useEffect(() => {
		const fetchAPI = async () => {
			const request = await callMainApi('/user/profile')
			// console.log(request)
			if (!request.error){
				setUserData(request.data)
				setTransaction(request.data.transaction)
				console.log(transactions)

			}
		};

		fetchAPI()
	},[])
	const transaction_columns = [
		{
		title: 'Type',
		dataIndex: 'transaction_type',
		key: 'transaction_type',
		},
		{
		title: 'Amount',
		dataIndex: 'amount',
		key: 'amount',
		},
		{
		title: 'Date',
		dataIndex: 'date',
		key: 'date',
		},
		{
		title: 'Pending',
		dataIndex: 'pending',
		key: 'pending',
		},

		];
	return (
       

		<DashboardLayout>
			<div className='py-10'>
				<div className='flex justify-between'>
					<div className='flex'>
						<p className='cursor-pointer bg-white px-2 py-2 rounded-[5px] mx-2 hover:bg-slate-200' ><ArrowDownOutlined className='text-red-500'/> Deposit</p>
						<p className='cursor-pointer bg-transparent border-2 px-2 py-2 rounded-[5px] mx-2 hover:bg-slate-200' ><ArrowUpOutlined className='text-blue-500'/>Withdraw</p>
					</div>
				</div>

				<div className='h-[200px] w-full bg-slate-800 my-10 rounded-md block 
				md:flex justify-center justify-between md:px-20 items-center p-3'>
					<div>
						<p className='text-white text-[1.4rem] text-[#d59704]' style={{fontFamily:"Rubik"}}>Total Deposit </p>
						<p className='text-slate-400 font-italic'>
							${userData ? userData.total_deposit.toLocaleString() : 

								<div className='mt-5 mr-20 p-2 animate-spin-infinte border-t-4 border-blue-500 w-[20px] h-[20px] rounded-[200px]'></div>}

						</p>
					</div>
					<div>
						<p className='text-white text-[1.4rem] text-[#d59704]' style={{fontFamily:"Rubik"}}>Total Withdraw </p>
						<p className='text-slate-400 font-italic'>
							<p className='text-slate-400 font-italic'>
							${userData ? userData.total_withdraw.toLocaleString() : 

								<div className='mt-5 mr-20 p-2 animate-spin-infinte border-t-4 border-blue-500 w-[20px] h-[20px] rounded-[200px]'></div>}

						</p>
						</p>

					</div>

					<div className>
						<p className='text-white text-[1.4rem] text-[#d59704]' style={{fontFamily:"Rubik"}}>Total Balance </p>
						<p className='text-slate-400 font-italic'>
						<p className='text-slate-400 font-italic'>
							${userData ? userData.total_balance.toLocaleString() : 

								<div className='mt-5 mr-20 p-2 animate-spin-infinte border-t-4 border-blue-500 w-[20px] h-[20px] rounded-[200px]'></div>}

						</p></p>

					</div>

				</div>
				<h1 style={{fontFamily:"Rubik"}} className='text-[1.3rem] text-slate-700 font-light'> Active  Plan(s) (0)</h1>

				<div className={`h-[200px] w-full bg-slate-100 my-10 rounded-md block 
				md:flex justify-center md:px-20 items-center p-3 border-2 shadow-lg`}>
					<div className='text-center'>
						<p style={{fontFamily:"Rubik"}} className='mb-5 text-slate-500'>Start making it  </p>
						<a href = '/plans' style={{fontFamily:"Rubik"}} className='p-4 bg-blue-600 mt-5 rounded-lg 
						text-white cursor-pointer shadow-md shadow-blue-900'>Buy a plan </a>
					</div>

				</div>

				<h1 style={{fontFamily:"Rubik"}} className='text-[1.3rem] text-slate-700 font-light'>Recent Transaction</h1>

				<div className={`h-[200px] w-full bg-slate-100 my-10 rounded-md block 
				md:flex justify-center md:px-20 items-center p-3 overflow-y-auto border-2 shadow-lg`}>
					<Table className='w-full' 
					dataSource={transactions.slice(0,5)}
					pagination = {false}
					columns={transaction_columns}/>

				</div>


				<h1 style={{fontFamily:"Rubik"}} className='text-[1.3rem] text-slate-700 font-light'>Referal</h1>

				<div className={`h-[200px] w-full bg-slate-100 my-10 rounded-md block 
				md:block p-3`}>
					<h1 style={{fontFamily:"Rubik"}}>Refer us and earn </h1 >
					<p  style={{fontFamily:"Rubik"}} className='mt-2 text-slate-400'>Use the below link to invite your friends.</p>
					<div  style={{fontFamily:"Rubik"}}>
						<div className="flex items-center mt-2">
						<p className="bg-slate-300 rounded-lg border-2 p-4 text-xs w-full overflow-x-auto">
						https://block-vesta.vercel.app?referal=
						</p>
						<button
						onClick={() => copyToClipboard('btcAddress')}
						className="ml-2 text-blue-500 hover:text-blue-700"
						>
						<CopyOutlined />
						</button>
						</div>
					</div>

				</div>

			</div>
		</DashboardLayout>

		)
}


export default  Dashboard

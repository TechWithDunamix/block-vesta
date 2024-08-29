import Layout from "../components/layouts"
import Image from '../assets/images/btc-image2.jfif'
import {UserOutlined,MoneyCollectOutlined,LineChartOutlined} from '@ant-design/icons'
const AboutPage = () => {
    return (
    <Layout>
	    <div className='flex flex-col items-center'>
			 <div className='min-h-[35vh] flex justify-center items-center bg-slate-100 w-full'>
			    <p className='text-[2rem] text-blue-500'>About Us</p>
			</div>
			<div className='-mt-5 px-3 border-2 border-black rounded-lg py-2 animate-slide-fade'>
			<p ><span className = 'text-blue-500'>block-vesta</span>   > About Us </p>
			</div>

			<div className='md:flex justify-center p-5' onScroll={console.log("done")}>
				<div className='min-w-[50%] md:p-4 md:mx-5'>
					<img src={Image} className='rounded-r-lg rounded-t-lg' />
				</div>
				<div className='flex items-center animate-slide-down'>
				<div>
					<p className = 'text-[2rem]'>Who we are</p>
					<p className='text-slate-500 mt-4 mb-16'>
						block-vesta inc. is a solution for creating an investment management platform. It is suited for hedge or mutual fund managers and also Forex, stocks, bonds and cryptocurrency traders who are looking at runing pool trading system. Onlinetrader simplifies the investment, monitoring and management process. With a secure and compelling mobile-first design, together with a default front-end design, it takes few minutes to setup your own investment management or pool trading platform.


					</p>

					<a className='px-4 py-3 text-white bg-blue-500 rounded-t-lg rounded-r-lg mt-5'>Invest Now </a>
				</div>
				</div>


			</div>

			<div className='text-center mt-5'>
				<p>Getting Started ! </p>
				<p className='text-[2rem]'>How to get started ? </p>
				<div className='flex  justify-center flex-col md:flex-row items-center mt-24 mb-16'>
					<div className='mx-5'>
						<UserOutlined className='px-3 bg-blue-300 text-blue-600 rounded-lg text-[2rem] p-3'/>
						<p className='text-[1.4rem]'>Create An Account </p>
						<p className='mt-4 text-slate-500 w-[250px]'>Create an account with us using your preffered email/username</p>
					</div>

					<div className='mx-5'>
						<MoneyCollectOutlined className='px-3 bg-blue-300 text-blue-600 rounded-lg text-[2rem] p-3'/>
						<p className='text-[1.4rem]'>Make a Deposit </p>
						<p className='mt-4 text-slate-500 w-[250px]'>
						Make A deposit with any of the described urrency
						</p>
					</div>


					<div className='mx-5'>
						<LineChartOutlined className='px-3 bg-blue-300 text-blue-600 rounded-lg text-[2rem] p-3'/>
						<p className='text-[1.4rem]'>Start Trading/Investing</p>
						<p className='mt-4 text-slate-500 w-[250px]'>
						Start trading with Indices commodities e.tc
						</p>
					</div>

				</div>

				
			</div>

			<div className='mx-8  md:mx-16 bg-blue-800 text-white md:flex p-5 rounded-r-[5px] rounded-t-[5px] w-[80%] my-12'>
  			<div>
  				<p style={{fontFamily:'Roboto'}} className='text-[2.2rem]'>The Better Way to Trade & Invest</p>
  				<p className='font-light md:w-[430px]'>block-vesta helps over 2 million customers achieve 
  				their financial goals by helping them trade all cryptocurrency and invest with ease...
  				</p>
  			</div>
  			<div className='mx-5 md:mt-24 my-4'>
  					<a className='px-4 py-3 text-blue-600 bg-white rounded-[5px]'> Create a free Account</a>

  			</div>
  		</div>

	    </div>  

    </Layout>

    )
}

export default AboutPage
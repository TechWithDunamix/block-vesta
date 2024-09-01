import Layout from "../components/layouts";
import Image from '../assets/images/btc-image2.jfif';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const ContactPage = () => {
    return (
        <Layout>
            <div className='items-center flex flex-col'>
                <div className='flex flex-col items-center w-full'>
                    <div className='min-h-[35vh] flex justify-center items-center bg-slate-100 w-full'>
                        <p className='text-[2rem] text-blue-500'>Contact Us</p>
                    </div>
                    <div className='-mt-5 px-3 border-2 border-black rounded-lg py-2 animate-slide-fade'>
                        <p><span className='text-blue-500'>block-vesta</span> > Contact Us</p>
                    </div>
                </div>

                <div className='flex justify-center flex-col md:flex-row items-center mt-24 mb-16'>
                    <div className='mx-5 text-center'>
                        <PhoneOutlined className='px-3 bg-blue-300 text-blue-600 rounded-lg text-[2rem] p-3' />
                        <p className='text-[1.4rem]'>Phone Numbers</p>
                        <p className='mt-4 text-slate-500 w-[250px]'>
                            <a href="tel:+16292513701">+1 (629) 251-3701</a><br />
                            <a href="tel:+15406769802">+1 (540) 676-9802</a>
                        </p>
                    </div>

                    <div className='mx-5 text-center'>
                        <MailOutlined className='px-3 bg-blue-300 text-blue-600 rounded-lg text-[2rem] p-3' />
                        <p className='text-[1.4rem]'>Email</p>
                        <p className='mt-4 text-slate-500 w-[250px]'>
                            <a href="mailto:block-vesta7@gmail.com">block-vesta7@gmail.com</a>
                        </p>
                    </div>

                    <div className='mx-5 text-center'>
                        <EnvironmentOutlined className='px-3 bg-blue-300 text-blue-600 rounded-lg text-[2rem] p-3' />
                        <p className='text-[1.4rem]'>Address</p>
                        <p className='mt-4 text-slate-500 w-[250px]'>
                            Start trading with Indices commodities e.tc
                        </p>
                    </div>
                </div>

                <div className='p-4 border-2 rounded-lg md:mx-24 md:w-[60%] mx-4'>
                    <p>Get in Touch</p>
                    <div className='flex md:flex-row flex-col'>
                        <div className='mx-5'>
                            <p>Your Email</p>
                            <div className="relative">
                                <MailOutlined className="absolute left-3 top-3 text-blue-600" style={{ fontSize: '20px' }} />
                                <input
                                    type="email"
                                    name='email'
                                    required
                                    // onChange = {handleChange}
                                    placeholder="Email"
                                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                                />
                            </div>
                        </div>

                        <div className='mx-5'>
                            <p>Your Name</p>
                            <div className="relative">
                                <UserOutlined className="absolute left-3 top-3 text-blue-600" style={{ fontSize: '20px' }} />
                                <input
                                    type="text"
                                    name='name'
                                    required
                                    // onChange = {handleChange}
                                    placeholder="Name"
                                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                                />
                            </div>
                        </div>
                    </div>
                    <div className='flex-1 mt-5 md:w-[80%]'>
                        <div className='mx-5'>
                            <p>Your Message</p>
                            <div className="relative">
                                <LockOutlined className="absolute left-3 top-3 text-blue-600" style={{ fontSize: '20px' }} />
                                <textarea
                                    type="text"
                                    rows="5"
                                    name='message'
                                    required
                                    // onChange = {handleChange}
                                    placeholder="Your message"
                                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default ContactPage;

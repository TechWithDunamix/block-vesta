import React, { useState } from 'react';

const Layout = ({ children }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='min-h-screen flex flex-col'>
            <header className="bg-white shadow-md w-full">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center py-4">
                        <div className="text-2xl font-bold text-blue-600">
                            EX<span className='text-red-800'>change</span>
                        </div>
                        <nav className="hidden md:flex space-x-4">
                            <a href="/" className="text-gray-700 hover:text-blue-600 transition duration-300">Home</a>
                            <a href="/about" className="text-gray-700 hover:text-blue-600 transition duration-300">About</a>
                            <a href="#" className="text-gray-700 hover:text-blue-600 transition duration-300">FAQs</a>
                            <a href="/contact-us" className="text-gray-700 hover:text-blue-600 transition duration-300">Contact</a>
                        </nav>
                        <div className='hidden md:flex'>
                            <a href='/login'
                            className='shadow-md shadow-blue-900 py-2 px-4 bg-blue-600 mx-2 text-white rounded-[5px]'>Login</a>

                            <a href='/signup' className='py-2 px-4 bg-blue-300 mx-2 rounded-[5px]'>SignUp</a>
                        </div>

                        <div className="md:hidden flex items-center">
                            <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 focus:outline-none focus:text-blue-600">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {menuOpen && (
                    <div className="md:hidden animate-slide-fade">
                        <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-600 hover:text-white transition duration-300">Home</a>
                        <a href="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-600 hover:text-white transition duration-300">About</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-600 hover:text-white transition duration-300">FAQs</a>
                        <a href="/contact-us" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-600 hover:text-white transition duration-300">Contact</a>
                    </div>
                )}
            </header>

            <main className="flex-1 overflow-x-hidden">
                {children}
            </main>

            <footer className="bg-gray-900 text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between mb-8">
                        <div className="flex flex-col md:w-1/3 mb-8 md:mb-0">
                            <h2 className="text-2xl font-bold text-blue-400 mb-4">EX<span className='text-red-800'>change</span></h2>
                            <p className="text-gray-400 mb-4">Your trusted partner for trading in indices, commodities, and more.</p>
                            <p className="text-gray-400 mb-4">Btc wallet address: <span className="text-blue-400">bc1q70luh4hg3afvjzgr8mf03l9f0u2r4vay4wry7q</span></p>
                        </div>
                        <div className="flex flex-col md:w-1/3 mb-8 md:mb-0">
                            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                            <a href="/" className="text-gray-400 hover:text-blue-400 mb-2 transition duration-300">Home</a>
                            <a href="/about" className="text-gray-400 hover:text-blue-400 mb-2 transition duration-300">About</a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 mb-2 transition duration-300">FAQs</a>
                            <a href="/contact-us" className="text-gray-400 hover:text-blue-400 mb-2 transition duration-300">Contact</a>
                        </div>
                        <div className="flex flex-col md:w-1/3 mb-8 md:mb-0">
                            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                            <p className="text-gray-400 mb-2">Phone: <a href="tel:+16292513701" className="text-blue-400">+1 (629) 251-3701</a>, <a href="tel:+15406769802" className="text-blue-400">+1 (540) 676-9802</a></p>
                            <p className="text-gray-400 mb-2">Email: <a href="mailto:exhchange7@gmail.com" className="text-blue-400">block-vesta7@gmail.com</a></p>
                            <p className="text-gray-400">Address: Start trading with Indices commodities e.tc</p>
                        </div>
                    </div>
                    <div className="border-t border-gray-700 pt-4 text-center">
                        <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} EX<span className='text-red-800'>change</span>. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;

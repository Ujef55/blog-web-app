import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <Logo width="100px" className="mb-4" />
                        <p className="text-sm">
                            &copy; {new Date().getFullYear()} DevUI. All Rights Reserved.
                        </p>
                    </div>
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h3 className="text-lg font-semibold mb-4">Company</h3>
                        <ul>
                            {['Features', 'Pricing', 'Affiliate Program', 'Press Kit'].map((item) => (
                                <li key={item} className="mb-2">
                                    <Link to="/" className="hover:text-gray-300 transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h3 className="text-lg font-semibold mb-4">Support</h3>
                        <ul>
                            {['Account', 'Help', 'Contact Us', 'Customer Support'].map((item) => (
                                <li key={item} className="mb-2">
                                    <Link to="/" className="hover:text-gray-300 transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4">
                        <h3 className="text-lg font-semibold mb-4">Legal</h3>
                        <ul>
                            {['Terms & Conditions', 'Privacy Policy', 'Licensing'].map((item) => (
                                <li key={item} className="mb-2">
                                    <Link to="/" className="hover:text-gray-300 transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
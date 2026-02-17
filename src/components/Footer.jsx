const Footer = () => {
    return (
        <footer className="bg-gray-950 text-gray-300 py-16">
            <div className="section-container px-6">

                <div className="grid md:grid-cols-3 gap-12 mb-12">

                    {/* Brand Section */}
                    <div>
                        <h2 className="text-2xl font-semibold text-white mb-4">
                            Sport <span className="text-yellow-500">Squad</span>
                        </h2>
                        <p className="text-gray-400 leading-relaxed">
                            Simplifying stadium bookings with real-time availability,
                            transparent pricing, and seamless scheduling.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">
                            Quick Links 
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#features" className="hover:text-white transition">
                                    Features 
                                </a>
                            </li>
                            <li>
                                <a href="#testimonials" className="hover:text-white transition">
                                    Testimonials 
                                </a>
                            </li>
                            <li>
                                <a href="#booking" className="hover:text-white transition">
                                    Book Now 
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">
                            Contact 
                        </h3>
                        <p className="mb-3">
                            support@sportsquad.com 
                        </p>
                        <div className="flex gap-4 mt-4">
                            <span className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition cursor-pointer">
                                F 
                            </span>
                            <span className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition cursor-pointer">
                                T 
                            </span>
                            <span className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition cursor-pointer">
                                I 
                            </span>
                        </div>
                    </div>

                </div>

                {/* Bottom Line */}
                <div className="border-t border-gray-800 Pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>
                        © {new Date().getFullYear()} SportSquad. All rights reserved.
                    </p>

                    <a href="#" className="hover:text-white transition mt-4 md:mt-0">
                        Privacy Policy 
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
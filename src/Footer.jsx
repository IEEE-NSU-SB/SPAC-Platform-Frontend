import ieeensusb from './assets/collaborator-logo/collab2.png';

const Footer = () => {
    // Links data structure
    const quickLinks = [
        { label: "IEEE SPAC 2025 Registration", href: "/registration" },
        { label: "IEEE SPAC 2025 Timeline", href: "/timeline" },
        { label: "IEEE NSU SB", href: "https://ieeensusb.org/" },
        { label: "Contact", href: "/contact" },
    ];

    return (
        <footer className="bg-ieee-darkblue text-white pt-10 pb-6">
            <div className="max-w-5xl mx-auto">
                {/* Top Section: Logo and Links */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-400 pb-8 mb-4">

                    {/* Logo/Identity Area */}
                    <div className="md:w-50 w-40 max-md:mx-auto max-md:mb-6">
                        {/* Mock Logo Text - use a white text for visibility */}
                        <img src={ieeensusb} alt="IEEE NSU Student Branch" className='w-full h-full' />
                    </div>

                    {/* Quick Links Area */}
                    <div className="w-full md:w-auto text-center md:text-left">
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>

                        {/* Links Grid: Stacks vertically on mobile, uses grid on medium screens */}
                        <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-medium">
                            {quickLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-center md:text-left"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Copyright */}
                <div className="text-center text-xs text-gray-200">
                    © {new Date().getFullYear()} IEEE NSU SB - All rights reserved. Developed by 
                    <a 
                        href="https://ieeensusb.org/team/website-development/" 
                        className="text-gray-300 hover:text-blue-400 transition-colors duration-200 ml-1 underline"
                    >
                        IEEE NSU SB Web Development Team
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer

import React, {useState} from 'react';

function Navbar() {
    const navItems = ["Dashboard", "Team", "Projects", "Calendar"];
    const [profileClicked, setProfileClicked] = useState(false);
    const toggleProfile = () => {setProfileClicked(!profileClicked)};
    return (
        <div>
            <nav className="bg-[#2d3a52] shadow">
                <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
                    <div className="flex h-16 justify-between">
                        <div className="lg:hidden"/>
                        <div className="flex px-2 lg:px-0">
                            <div className="flex flex-shrink-0 items-center">
                                <img className="h-8 w-auto lg:h-12"
                                     src="https://www.sti-consulting.de/wp-content/uploads/2018/11/STI-Consulting_Logo-Straight_White_Padding.png"
                                     alt=""/>
                            </div>
                            <div className="hidden lg:ml-6 lg:flex">
                                {navItems.map(item => <a
                                    className="ml-8 inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out hover:border-gray-300 focus:border-white focus:outline-none"
                                    href="#">{item}</a>)}
                            </div>
                        </div>
                        {/* Burger Menu (hidden on lg and upwards) */}
                        <div className="flex items-center lg:hidden">
                            <button
                                className="inline-flex items-center justify-center rounded-md p-2 text-white transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"
                                aria-label="Main menu" aria-expanded="false">
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M4 6h16M4 12h16M4 18h16"/>
                                </svg>
                                <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            </button>
                        </div>
                        {/* Notifcation Bell (hidden on small) */}
                        <div className="hidden lg:ml-4 lg:flex lg:items-center">
                            <button
                                className="flex-shrink-0 rounded-full border-2 border-transparent p-1 text-white transition duration-150 ease-in-out hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"
                                aria-label="Notifications">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                                </svg>
                            </button>
                            <div className="relative ml-4 flex-shrink-0">
                                <div>
                                    <button
                                        onClick={toggleProfile}
                                        className="flex rounded-full border-2 border-transparent text-sm transition duration-150 ease-in-out focus:border-gray-300 focus:outline-none"
                                        id="user-menu" aria-label="User menu" aria-haspopup="true">
                                        <img className="h-8 w-8 rounded-full"
                                             src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                             alt=""/>
                                    </button>
                                </div>
                                <div className={"absolute right-0 mt-2 z-10 w-48 origin-top-right rounded-md shadow-lg " + (profileClicked ? 'block' : 'hidden')}>
                                    <div className="shadow-xs rounded-md bg-white py-1" role="menu"
                                         aria-orientation="vertical" aria-labelledby="user-menu"><a
                                        className="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                                        href="#" role="menuitem">Your Profile</a><a
                                        className="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                                        href="#" role="menuitem">Settings</a><a
                                        className="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                                        href="#" role="menuitem">Sign out</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:hidden">
                    <div className="pt-2 pb-3"><a
                        className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700 transition duration-150 ease-in-out focus:border-indigo-700 focus:bg-indigo-100 focus:text-indigo-800 focus:outline-none"
                        href="#">Dashboard</a><a
                        className="mt-1 block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 transition duration-150 ease-in-out hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 focus:border-gray-300 focus:bg-gray-50 focus:text-gray-800 focus:outline-none"
                        href="#">Team</a><a
                        className="mt-1 block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 transition duration-150 ease-in-out hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 focus:border-gray-300 focus:bg-gray-50 focus:text-gray-800 focus:outline-none"
                        href="#">Projects</a><a
                        className="mt-1 block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 transition duration-150 ease-in-out hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 focus:border-gray-300 focus:bg-gray-50 focus:text-gray-800 focus:outline-none"
                        href="#">Calendar</a></div>
                    <div className="border-t border-gray-200 pt-4 pb-3">
                        <div className="flex items-center px-4">
                            <div className="flex-shrink-0">
                                <img className="h-10 w-10 rounded-full"
                                     src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                     alt=""/>
                            </div>
                            <div className="ml-3">
                                <div className="text-base font-medium leading-6 text-gray-800">Tom Cook</div>
                                <div className="text-sm font-medium leading-5 text-gray-500">tom@example.com</div>
                            </div>
                        </div>
                        <div className="mt-3"><a
                            className="block px-4 py-2 text-base font-medium text-gray-500 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-800 focus:bg-gray-100 focus:text-gray-800 focus:outline-none"
                            href="#">Your Profile</a><a
                            className="mt-1 block px-4 py-2 text-base font-medium text-gray-500 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-800 focus:bg-gray-100 focus:text-gray-800 focus:outline-none"
                            href="#">Settings</a><a
                            className="mt-1 block px-4 py-2 text-base font-medium text-gray-500 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-800 focus:bg-gray-100 focus:text-gray-800 focus:outline-none"
                            href="#">Sign out</a></div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
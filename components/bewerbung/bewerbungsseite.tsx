import React from 'react';

function Bewerbungsseite() {
    const prop = "Assessment Center";
    return (
        <div>
            <div className="relative bg-white overflow-hidden">
                <div className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full">
                    <div className="relative h-full max-w-screen-xl mx-auto">
                        <svg
                            className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
                            width="404" height="784" fill="none" viewBox="0 0 404 784">
                            <defs>
                                <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20"
                                         patternUnits="userSpaceOnUse">
                                    <rect className="text-gray-200" x="0" y="0" width="4" height="4"
                                          fill="currentColor"/>
                                </pattern>
                            </defs>
                            <rect width="404" height="784" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"/>
                        </svg>
                        <svg
                            className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
                            width="404" height="784" fill="none" viewBox="0 0 404 784">
                            <defs>
                                <pattern id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b" x="0" y="0" width="20" height="20"
                                         patternUnits="userSpaceOnUse">
                                    <rect className="text-gray-200" x="0" y="0" width="4" height="4"
                                          fill="currentColor"/>
                                </pattern>
                            </defs>
                            <rect width="404" height="784" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"/>
                        </svg>
                    </div>
                </div>
                <div className="relative pt-6 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
                    <div className="max-w-screen-xl mx-auto px-4 sm:px-6">

                    </div>
                    <div className="hidden absolute top-0 inset-x-0 p-2 transition transform origin-top-right">
                        <div className="rounded-lg shadow-md">
                            <div className="rounded-lg bg-white shadow-xs overflow-hidden" role="menu"
                                 aria-orientation="vertical" aria-labelledby="main-menu">
                                <div className="px-5 pt-4 flex items-center justify-between">
                                    <div>
                                        <img className="h-8 w-auto"
                                             src="https://tailwindui.com/img/logos/v1/workflow-mark-on-white.svg"
                                             alt=""/>
                                    </div>
                                    <div className="-mr-2">
                                        <button
                                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                                            type="button" aria-label="Close menu">
                                            <svg className="h-6 w-6" stroke="currentColor" fill="none"
                                                 viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                      d="M6 18L18 6M6 6l12 12"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="px-2 pt-2 pb-3">
                                    <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                                       href="#" role="menuitem">Product</a><a
                                    className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                                    href="#" role="menuitem">Features</a><a
                                    className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                                    href="#" role="menuitem">Marketplace</a><a
                                    className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                                    href="#" role="menuitem">Company</a>
                                </div>
                                <div><a
                                    className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out"
                                    href="#" role="menuitem">Log in</a></div>
                            </div>
                        </div>
                    </div>
                    <main className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
                        <div className="text-center">
                            <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                                <span className="mr-1">Willkommen zu der Bewerbung zum</span>
                                <br/>
                                <span className="text-indigo-600">{prop}
                                </span>
                            </h2>
                            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">Anim
                                aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                                Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                                <div className="rounded-md shadow"><a
                                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10 bg-indigo-600"
                                    href="#">Bewerbung starten</a></div>
                                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3"><a
                                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                                    href="#">Mehr Infos</a></div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default Bewerbungsseite;
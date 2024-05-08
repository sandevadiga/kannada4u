import React from 'react';
import Link from 'next/link';

function Footer() {
    return (
        <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" /> */}
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Kannada4U.com</span>
                    </Link>

                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <Link href="/about" className="hover:underline me-4 md:me-6">About
                            </Link>
                        </li>

                        <li>
                            <Link href="/privacy-policy" className="hover:underline me-4 md:me-6">Privacy Policy
                            </Link>
                        </li>

                        <li>
                            <Link href="/terms-and-conditions" className="hover:underline me-4 md:me-6">terms and conditions
                            </Link>
                        </li>

                        <li>
                            <Link href="/contact-us" className="hover:underline me-4 md:me-6">contact us
                            </Link>
                        </li>

                        <li>
                            <Link href="/disclaimer" className="hover:underline me-4 md:me-6">disclaimer
                            </Link>
                        </li>

                        <li>
                            <Link href="/advertize-with-us" className="hover:underline me-4 md:me-6">Advertise with Us
                            </Link>
                        </li>
                        <a  href="https://icons8.com/icon/80981/share">Share</a> icon by <a href="https://icons8.com">Icons8</a>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link href="/" className="hover:underline">Kannada4u.com™</Link>. All Rights Reserved.</span>
        </div>
    </footer >
  );
}

export default Footer;

import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import logo from '../assest/logo.png'

const Footer4 = () => {
    return (
        <div className="mx-auto container xl:px-20 lg:px-12 sm:px-6 bg-white  px-4 py-12">
            <div className="flex flex-col items-center justify-center">
                <div>
                <img src={logo} className='object-cover' alt="ezStore" width={200} height={45} />

                </div>
                <div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-8">
                    <p className="hover:text-gray-500 text-base cursor-pointer leading-4 text-gray-800">About</p>
                    <p className="hover:text-gray-500 text-base cursor-pointer leading-4 text-gray-800">Contact us</p>
                    <p className="hover:text-gray-500 text-base cursor-pointer leading-4 text-gray-800">Terms of Service</p>
                    <p className="hover:text-gray-500 text-base cursor-pointer leading-4 text-gray-800">Privacy Policy</p>
                </div>
                <div className="flex items-center gap-x-8 mt-6 ">
                    <div className="cursor-pointer ">
                        <CiFacebook className="w-7 h-7 hover:bg-sky-700 hover:rounded-full hover:text-white" />
                    </div>
                    <div className="cursor-pointer">
                        <IoLogoInstagram  className="w-7 h-7 hover:bg-rose-500 hover:rounded-full hover:text-white"/>
                    </div>
                    <div className="cursor-pointer">
                        <CiTwitter className="w-7 h-7 hover:bg-sky-400 hover:rounded-full hover:text-white" />
                    </div>
                </div>
                <div className="flex items-center mt-6">
                    <p className="text-base leading-4 text-gray-800">
                        2024 <span className="font-semibold">EZSHOP</span>
                    </p>
                    <div className="border-l border-gray-800 pl-2 ml-2">
                        <p className="text-base leading-4 text-gray-800">Inc. All rights reserved</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer4;

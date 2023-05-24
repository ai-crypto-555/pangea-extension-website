import React from "react";

import mainLogo from '../assets/images/main-logo.svg';

export default function Price() {
    return (
        <div className="flex flex-col">
            <div className="flex p-[30px] sm:p-[40px]">
                <div className="w-[150px] sm:w-[200px]">
                    <img src={mainLogo} alt="main logo" />
                </div>
            </div>
            <div className="flex flex-col items-center p-[20px]">
                <span className="text-[24px] sm:text-[40px] text-white font-semibold text-center">
                    Select a <span className="text-[#50EFC0]">price</span> plan that suits you best
                </span>
                <div className="flex flex-col md:flex-row gap-[10px] ">
                    <div className="flex flex-col bg-white items-center rounded-[4px] w-[300px] p-[45px]">
                        <span className="text-[#0B2110] text-[28px] font-semibold">Starter</span>
                        <span className="text-[#2E3630] text-[16px] font-medium mt-[10px] h-[100px]">Generate text on the fly, unlimited words</span>
                        <span className="text-[#0B2110] text-[40px] font-bold">Free</span>
                        <span className="border border-[#0B2110] rounded-[8px] px-[17px] py-[8px] text-[18px] font-semibold text-[#0B2110] mt-[40px]">Selected</span>
                    </div>
                    <div className="flex flex-col bg-white items-center rounded-[4px] w-[300px] p-[45px]">
                        <span className="text-[#0B2110] text-[28px] font-semibold">Starter</span>
                        <span className="text-[#2E3630] text-[16px] font-medium mt-[10px] h-[100px]">Generate text on the fly, unlimited words</span>
                        <span className="text-[#0B2110] text-[40px] font-bold">Free</span>
                        <span className="border border-[#0B2110] rounded-[8px] px-[17px] py-[8px] text-[18px] font-semibold text-[#0B2110] mt-[40px]">Selected</span>
                    </div>
                    <div className="flex flex-col bg-white items-center rounded-[4px] w-[300px] p-[45px]">
                        <span className="text-[#0B2110] text-[28px] font-semibold">Business+</span>
                        <span className="text-[#2E3630] text-[16px] font-medium mt-[10px] h-[100px]">For those who want to get a little more in depth with their work using pangea</span>
                        <span className="text-[#0B2110] text-[40px] font-bold"><span className="text-[20px]">$</span>49.99</span>
                        <span className="border border-[#0B2110] rounded-[8px] px-[17px] py-[8px] text-[18px] font-semibold text-[#0B2110] mt-[40px]">Get Started</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
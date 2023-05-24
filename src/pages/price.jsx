import React, { useState } from "react";

import mainLogo from '../assets/images/main-logo.svg';

export default function Price() {

    const [month, setMonth] = useState(true);

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
                <div className="flex justify-center items-center gap-8 bg-white p-2 rounded-3xl relative transition-all duration-500 mt-[40px]">
                    <div className={`cursor-pointer z-10 relative text-[16px] font-bold text-[#353535] pl-[10px]`} onClick={() => setMonth(true)}>
                        Monthly
                    </div>
                    <div className={`z-10 relative cursor-pointer text-[16px] font-bold text-[#353535] pr-[10px]`} onClick={() => setMonth(false)}>
                        Yearly&nbsp;
                    </div>
                    <div className={`absolute bg-[#50EFC0] p-[15px] rounded-3xl w-[87px] transition-all duration-500 z-0 left-2 ${month ? "translate-x-0" : "translate-x-20"}`} style={{}}></div>
                </div>
                {
                    month ?
                        <div className="flex flex-col md:flex-row gap-[50px] sm:gap-[10px] mt-[150px]">
                            <div className="flex flex-col bg-white items-center rounded-[4px] w-[300px] p-[45px]">
                                <span className="text-[#0B2110] text-[28px] font-semibold">Starter</span>
                                <span className="text-[#2E3630] text-[16px] font-medium mt-[10px] h-[100px]">Generate text on the fly, unlimited words</span>
                                <span className="text-[#0B2110] text-[35px] font-bold">Free</span>
                                <span className="border border-[#0B2110] rounded-[8px] px-[17px] py-[8px] text-[18px] font-semibold text-[#0B2110] mt-[40px]">Selected</span>
                            </div>
                            <div className="flex flex-col bg-[#00000042] items-center rounded-[4px] w-[300px] p-[45px] relative">
                                <div className="w-full flex bg-[#50EFC0] items-center justify-center absolute top-[-30px] py-[4px] rounded-t-lg">
                                    <span className="text-[#353535] text-[16px] font-semibold">Recommended</span>
                                </div>
                                <span className="text-white text-[28px] font-semibold">Pro</span>
                                <span className="text-white text-[16px] font-medium mt-[10px] h-[100px]">Enhanced features with everything you need to make pangea serve you best</span>
                                <div className="text-white text-[35px] font-bold flex flex-row gap-x-[5px] items-center"><span className="text-[20px]">$</span>9.99 <span className="text-[20px] font-medium">/ month</span> </div>
                                <span className="border border-[#0B2110] rounded-[8px] px-[17px] py-[8px] text-[18px] font-semibold text-[#0B2110] mt-[40px] bg-[#50EFC0]">Select Plan</span>
                            </div>
                            <div className="flex flex-col bg-white items-center rounded-[4px] w-[300px] p-[45px]">
                                <span className="text-[#0B2110] text-[28px] font-semibold">Business+</span>
                                <span className="text-[#2E3630] text-[16px] font-medium mt-[10px] h-[100px]">For those who want to get a little more in depth with their work using pangea</span>
                                <div className="text-[#0B2110] text-[35px] font-bold flex flex-row gap-x-[5px] items-center"><span className="text-[20px]">$</span>49.99 <span className="text-[20px] font-medium">/ month</span> </div>
                                <span className="border border-[#0B2110] rounded-[8px] px-[17px] py-[8px] text-[18px] font-semibold text-[#0B2110] mt-[40px]">Get Started</span>
                            </div>
                        </div> :
                        <div className="flex flex-col md:flex-row gap-[50px] sm:gap-[10px] mt-[150px]">
                            <div className="flex flex-col bg-white items-center rounded-[4px] w-[300px] p-[45px]">
                                <span className="text-[#0B2110] text-[28px] font-semibold">Starter</span>
                                <span className="text-[#2E3630] text-[16px] font-medium mt-[10px] h-[100px]">Generate text on the fly, unlimited words</span>
                                <span className="text-[#0B2110] text-[35px] font-bold">Free</span>
                                <span className="border border-[#0B2110] rounded-[8px] px-[17px] py-[8px] text-[18px] font-semibold text-[#0B2110] mt-[40px]">Selected</span>
                            </div>
                            <div className="flex flex-col bg-[#00000042] items-center rounded-[4px] w-[300px] p-[45px] relative">
                                <div className="w-full flex bg-[#50EFC0] items-center justify-center absolute top-[-30px] py-[4px] rounded-t-lg">
                                    <span className="text-[#353535] text-[16px] font-semibold">Recommended</span>
                                </div>
                                <span className="text-white text-[28px] font-semibold">Pro</span>
                                <span className="text-white text-[16px] font-medium mt-[10px] h-[100px]">Enhanced features with everything you need to make pangea serve you best</span>
                                <div className="text-white text-[35px] font-bold flex flex-row gap-x-[5px] items-center"><span className="text-[20px]">$</span>79.99 <span className="text-[20px] font-medium">/ year</span> </div>
                                <span className="border border-[#0B2110] rounded-[8px] px-[17px] py-[8px] text-[18px] font-semibold text-[#0B2110] mt-[40px] bg-[#50EFC0]">Select Plan</span>
                            </div>
                            <div className="flex flex-col bg-white items-center rounded-[4px] w-[300px] p-[45px]">
                                <span className="text-[#0B2110] text-[28px] font-semibold">Business+</span>
                                <span className="text-[#2E3630] text-[16px] font-medium mt-[10px] h-[100px]">For those who want to get a little more in depth with their work using pangea</span>
                                <div className="text-[#0B2110] text-[35px] font-bold flex flex-row gap-x-[5px] items-center"><span className="text-[20px]">$</span>399.99 <span className="text-[20px] font-medium">/ year</span> </div>
                                <span className="border border-[#0B2110] rounded-[8px] px-[17px] py-[8px] text-[18px] font-semibold text-[#0B2110] mt-[40px]">Get Started</span>
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}
import React from "react";
import mainLogo from '../assets/images/main-logo.svg';
import searchLogo from '../assets/images/search.svg';
import bellLogo from '../assets/images/bell.svg';

export default function Dashboard() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row bg-[#474747] px-[70px] py-[15px] justify-between items-center">
                <div className="flex flex-row gap-x-[100px] justify-between items-center">
                    <div className="w-[130px]">
                        <img src={mainLogo} alt="main logo" />
                    </div>
                    <div className="bg-[#F1F5F9] w-[320px] h-[32px] rounded-full relative flex flex-row items-center">
                        <input type="text" className="w-full bg-transparent outline-none pl-[35px] pr-[10px] text-[13px] placeholder:text-[#94A3B8]" placeholder="Press / to search" />
                        <div className="w-[15px] absolute left-[10px]">
                            <img src={searchLogo} alt="search logo" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-x-[100px] justify-between items-center">
                    <div className="w-[16px]">
                        <img src={bellLogo} alt="bell logo" />
                    </div>
                    <div className="flex flex-row items-center gap-x-[20px]">
                        <div className="w-[20px]">
                            <img src={bellLogo} alt="bell logo" />
                        </div>
                        {/* <div className="w-[15px] absolute left-[10px]">
                            <img src={searchLogo} alt="search logo" />
                        </div> */}
                        <span className="text-white text-[14px]">Pangea Admin</span>
                    </div>
                </div>
            </div>
            <div className="fixed"></div>
        </div>
    )
}
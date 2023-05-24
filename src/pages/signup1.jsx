import React, { useState } from "react";

import mainLogo from '../assets/images/main-logo.svg';
import emailGreyIcon from '../assets/images/email-grey-icon.svg';
import lockIcon from '../assets/images/lock.svg';
import eyeIcon from '../assets/images/eye.svg';
import eyeHideIcon from '../assets/images/eye-hide.svg';
import userIcon from '../assets/images/user.svg';

export default function SignupByEmail() {

    const [password, setPassword] = useState('password');

    return (
        <div className="flex flex-col items-center">
            <div className="w-[200px] mt-[80px] sm:mt-[200px]">
                <img src={mainLogo} alt="main logo" />
            </div>
            <div className="mt-[60px] sm:mt-[100px] w-full sm:w-[400px] flex flex-col gap-y-[10px] p-[10px]">
                <div className="flex flex-col items-start gap-y-[5px]">
                    <span className="text-[#E1E1E6] text-[16px] font-bold">Name</span>
                    <div className="flex flex-row items-center w-full h-[45px] relative">
                        <input type="text" className="w-full h-full bg-[#202024] text-[14px] font-medium text-[#7C7C8A] rounded-[8px] focus:outline outline-2 outline-[#50EFC0] pl-[40px]" placeholder="Enter Name" />
                        <div className="w-[14px] absolute left-[14px]">
                            <img src={userIcon} alt="user icon" className="" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-y-[5px]">
                    <span className="text-[#E1E1E6] text-[16px] font-bold">Email Address</span>
                    <div className="flex flex-row items-center w-full h-[45px] relative">
                        <input type="text" className="w-full h-full bg-[#202024] text-[14px] font-medium text-[#7C7C8A] rounded-[8px] focus:outline outline-2 outline-[#50EFC0] pl-[40px]" placeholder="Enter Email" />
                        <div className="w-[22px] absolute left-[10px]">
                            <img src={emailGreyIcon} alt="email grey icon" className="" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-y-[5px]">
                    <span className="text-[#E1E1E6] text-[16px] font-bold">Password</span>
                    <div className="flex flex-row items-center w-full h-[45px] relative">
                        <input type="password" className="w-full h-full bg-[#202024] text-[14px] font-medium text-[#7C7C8A] rounded-[8px] focus:outline outline-2 outline-[#50EFC0] pl-[40px]" value={password} onChange={(evt) => setPassword(evt.target.value)} />
                        <div className="w-[22px] absolute left-[10px]">
                            <img src={lockIcon} alt="lock icon" className="" />
                        </div>
                        <div className="absolute right-[10px] flex flex-row gap-x-[5px] items-center">
                            <div className="w-[22px] cursor-pointer">
                                <img src={eyeIcon} alt="eye icon" />
                            </div>
                            <div className="w-[22px] cursor-pointer">
                                <img src={eyeHideIcon} alt="eye hide icon" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-[20px] flex items-center justify-center bg-[#50EFC0] cursor-pointer h-[45px] rounded-[8px] text-black text-[16px] font-bold">Sign Up</div>
                <div className="mt-[30px] flex flex-row items-start gap-x-[10px]">
                    <input type="checkbox" className="mt-[5px]"/>
                    <span className="text-[#C4C4CC] text-[16px] font-bold cursor-pointer text-left">I do not wish to receive email and updates from pangea by email</span>
                </div>
            </div>
            <div className="mt-[30px] flex flex-row items-center gap-x-[5px]">
                <span className="text-[#C4C4CC] text-[14px] font-bold cursor-pointer">Already have an account?</span>
                <span className="text-[#50EFC0] text-[14px] font-bold cursor-pointer">Sign In</span>
            </div>
        </div>
    )
}
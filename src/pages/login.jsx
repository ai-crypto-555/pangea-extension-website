import React from "react";

import mainLogo from '../assets/images/main-logo.svg';
import googleIcon from '../assets/images/google-icon.svg';
import facebookIcon from '../assets/images/facebook-icon.svg';
import emailIcon from '../assets/images/email-icon.svg';

export default function Login() {
    return (
        <div className="flex flex-col items-center">
            <div className="w-[200px] mt-[80px] sm:mt-[200px]">
                <img src={mainLogo} alt="main logo" />
            </div>
            <div className="mt-[60px] sm:mt-[100px] w-full sm:w-[400px] flex flex-col gap-y-[20px] p-[10px]">
                <div className="w-full h-[48px] rounded-[15px] border border-[#7C7C8A] flex flex-row justify-center items-center gap-x-[10px] cursor-pointer">
                    <div className="w-[15px]">
                        <img src={googleIcon} alt="google icon" />
                    </div>
                    <span className="text-[16px] font-bold text-white">Continue With Google</span>
                </div>
                <div className="w-full h-[48px] rounded-[15px] border border-[#7C7C8A] flex flex-row justify-center items-center gap-x-[10px] cursor-pointer">
                    <div className="w-[15px]">
                        <img src={facebookIcon} alt="facebool icon" />
                    </div>
                    <span className="text-[16px] font-bold text-white">Continue With Facebook</span>
                </div>
                <div className="w-full h-[48px] rounded-[15px] border border-[#7C7C8A] flex flex-row justify-center items-center gap-x-[10px] cursor-pointer">
                    <div className="w-[15px]">
                        <img src={emailIcon} alt="email icon" />
                    </div>
                    <span className="text-[16px] font-bold text-white">Continue With Email</span>
                </div>
            </div>
            <div className="mt-[30px] flex flex-row items-center gap-x-[5px]">
                <span className="text-[#C4C4CC] text-[14px] font-bold cursor-pointer">Don’t have an account?</span>
                <span className="text-[#50EFC0] text-[14px] font-bold cursor-pointer">Sign up</span>
            </div>
        </div>
    )
}
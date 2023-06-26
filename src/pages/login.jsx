import React from "react";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
import { usePangeaContext } from "../context";

import { useNavigate } from "react-router-dom";
import mainLogo from '../assets/images/main-logo.svg';
import googleIcon from '../assets/images/google-icon.svg';
import facebookIcon from '../assets/images/facebook-icon.svg';
import emailIcon from '../assets/images/email-icon.svg';


export default function Login() {

    const navigation = useNavigate();
    const [state, {dispatch, makeToast}] = usePangeaContext();

    const googleLogin = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            
        }
    })
    
    // const googleLogin = useGoogleLogin({
    //     onSuccess: async (tokenResponse) => {

    //         alert(123);
            
    //         // let result = await axios.post(process.env.REACT_APP_BASE_URL+'login', {
    //         //     authType: 1, tokenId: tokenResponse, role: 0
    //         // });
    //         // console.log('googlelogin result::', result.data);
    //         // if (result.data.result) {
    //         //     // makeToast('success', 'Success', 'Logged in successfully');
    //         //     dispatch({
    //         //         type: 'user',
    //         //         payload: result.data.user
    //         //     })
    //         //     localStorage.clear();
    //         //     localStorage.setItem('user', JSON.stringify(result.data.user));
    //         //     localStorage.setItem('token', JSON.stringify(result.data.token));
    //         //     setTimeout(() => {
    //         //         navigation('/dashboard');
    //         //     }, 2000)
    //         // } else {
    //         //     makeToast('danger', 'Error signing in', 'Please try again');
    //         // }
    //     }
    // })
    
    return (
        <div className="flex flex-col items-center">
            <div className="w-[200px] mt-[80px] sm:mt-[200px] cursor-pointer" onClick={()=>navigation('/')}>
                <img src={mainLogo} alt="main logo" />
            </div>
            <div className="mt-[60px] sm:mt-[100px] w-full sm:w-[400px] flex flex-col gap-y-[20px] p-[10px]">
                <div onClick={googleLogin} className="w-full h-[48px] rounded-[15px] border border-[#7C7C8A] flex flex-row justify-center items-center gap-x-[10px] cursor-pointer">
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
                <span className="text-[#C4C4CC] text-[14px] font-bold">Don’t have an account?</span>
                <span className="text-[#50EFC0] text-[14px] font-bold cursor-pointer" onClick={()=>navigation('/signup')}>Sign up</span>
            </div>
        </div>
    )
}
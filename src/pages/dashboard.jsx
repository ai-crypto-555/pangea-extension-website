import React from "react";
import mainLogo from '../assets/images/main-logo.svg';
import searchLogo from '../assets/images/search.svg';
import bellLogo from '../assets/images/bell.svg';
import dashLogo from '../assets/images/dashboard.svg';
import avatarLogo from '../assets/images/Avatar.png';
import checkLogo from '../assets/images/check-circle.svg';
import xLogo from '../assets/images/x-circle.svg';
import dotLogo from '../assets/images/3dot.svg';
import trushLogo from '../assets/images/trush.svg';
import cashLogo from '../assets/images/cash.svg';

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
            <div className="flex flex-row">
                <div className="hidden md:block">
                    <div className="fixed w-[200px] h-full">
                        <div className="w-full p-[25px] pr-[25px] flex flex-col">
                            <div className="flex flex-row gap-x-[10px] items-center">
                                <div className="w-[16px]">
                                    <img src={dashLogo} alt="dash logo" />
                                </div>
                                <span className="text-[#7C7C8A] text-[16px]">Dashboards</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-[200px] h-full"></div>
                </div>
                <div className="flex flex-col p-[25px] sm:py-[50px] sm:px-[200px] w-full gap-y-[40px]">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-[15px] md:gap-[30px]">
                        <div className="flex flex-col rounded-md bg-[#474747] pt-[10px] pb-[50px] px-[20px] gap-y-[20px]">
                            <div className="flex flex-row justify-between items-center">
                                <span className="text-[14px] text-white font-bold">Total Revenue</span>
                            </div>
                            <div className="flex flex-row items-center justify-start gap-x-[20px]">
                                <div className="w-[56px] h-[56px] bg-[#50EFC0] rounded-lg flex flex-row items-center justify-center">
                                    <div className="w-[24px]">
                                        <img src={cashLogo} alt="cash logo" />
                                    </div>
                                </div>
                                <span className="text-[36px] font-medium text-white">$9193</span>
                            </div>
                        </div>
                        <div className="flex flex-col rounded-md bg-[#474747] pt-[10px] pb-[50px] px-[20px] gap-y-[20px]">
                            <div className="flex flex-row justify-between items-center">
                                <span className="text-[14px] text-white font-bold">Users</span>
                            </div>
                            <div className="flex flex-row items-center justify-start gap-x-[20px]">
                                <span className="text-[36px] font-medium text-white">43</span>
                            </div>
                        </div>
                        <div className="flex flex-col rounded-md bg-[#474747] pt-[10px] pb-[50px] px-[20px] gap-y-[20px]">
                            <div className="flex flex-row justify-between items-center">
                                <span className="text-[14px] text-white font-bold">User Requests</span>
                            </div>
                            <div className="flex flex-row items-center justify-between gap-x-[20px]">
                                <div className="flex flex-col gap-y-[5px]">
                                    <div className="flex flex-row items-center gap-x-[5px]">
                                        <span className="bg-[#EF4444] w-[8px] h-[8px] rounded-full"></span>
                                        <span className="text-[12px] text-white">Autocompose (42%)</span>
                                    </div>
                                    <div className="flex flex-row items-center gap-x-[5px]">
                                        <span className="bg-[#22C55E] w-[8px] h-[8px] rounded-full"></span>
                                        <span className="text-[12px] text-white">Ask Pangea(21%)</span>
                                    </div>
                                    <div className="flex flex-row items-center gap-x-[5px]">
                                        <span className="bg-[#0EA5E9] w-[8px] h-[8px] rounded-full"></span>
                                        <span className="text-[12px] text-white">Image generation (15%)</span>
                                    </div>
                                    <div className="flex flex-row items-center gap-x-[5px]">
                                        <span className="bg-[#7DD3FC] w-[8px] h-[8px] rounded-full"></span>
                                        <span className="text-[12px] text-white">Templates (12%)</span>
                                    </div>
                                    <div className="flex flex-row items-center gap-x-[5px]">
                                        <span className="bg-[#FCA5A5] w-[8px] h-[8px] rounded-full"></span>
                                        <span className="text-[12px] text-white">Highlighted toolbar (10%)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-y-[10px]">
                        <span className="text-white text-[24px] text-left">Search Users</span>
                        <div className="flex flex-row justify-between items-center">
                            <div className="bg-[#F1F5F9] w-[320px] h-[32px] rounded-full relative flex flex-row items-center">
                                <input type="text" className="w-full bg-transparent outline-none pl-[35px] pr-[10px] text-[13px] placeholder:text-[#94A3B8]" placeholder="Search" />
                                <div className="w-[15px] absolute left-[10px]">
                                    <img src={searchLogo} alt="search logo" />
                                </div>
                            </div>
                            <div className="rounded-md bg-[#50EFC0] w-[110px] h-[36px] flex flex-row justify-center items-center text-[14px] text-[#474747] font-bold cursor-pointer">Export CSV</div>
                        </div>
                    </div>
                    <div className="overflow-x-auto bg-white rounded-md mt-[50px]">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="bg-[#F1F5F9] text-[#64748B]">
                                    {/* <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th> */}
                                    <th>AVATAR</th>
                                    <th>NAME</th>
                                    <th>EMAIL</th>
                                    <th></th>
                                    <th>Free Access</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    {/* <td>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </td> */}
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-[32px]">
                                                    <img src={avatarLogo} alt="Avatar Logo" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Mior Zaki
                                    </td>
                                    <td>mior@nova.laravel.com</td>
                                    <td>
                                        <div className="bg-[#E0F2FE] text-[#0EA5E9] text-[12px] font-bold rounded-full flex flex-row justify-center items-center w-[46px] h-[24px]">FREE</div>
                                    </td>
                                    <td>
                                        <div className="flex flex-row items-center gap-x-[25px]">
                                            <div className="w-[24px]">
                                                <img src={checkLogo} alt="check Logo" />
                                            </div>
                                            <div className="w-[18px] cursor-pointer">
                                                <img src={dotLogo} alt="dot logo" />
                                            </div>
                                            <div className="w-[18px] cursor-pointer">
                                                <img src={trushLogo} alt="trush logo" />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    {/* <td>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </td> */}
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-[32px]">
                                                    <img src={avatarLogo} alt="Avatar Logo" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Mior Zaki
                                    </td>
                                    <td>mior@nova.laravel.com</td>
                                    <td>
                                        <div className="bg-[#DCFCE7] text-[#16A34A] text-[12px] font-bold rounded-full flex flex-row justify-center items-center w-[74px] h-[24px]">PREMIUM</div>
                                    </td>
                                    <td>
                                        <div className="flex flex-row items-center gap-x-[25px]">
                                            <div className="w-[24px]">
                                                <img src={xLogo} alt="check Logo" />
                                            </div>
                                            <div className="w-[18px] cursor-pointer">
                                                <img src={dotLogo} alt="dot logo" />
                                            </div>
                                            <div className="w-[18px] cursor-pointer">
                                                <img src={trushLogo} alt="trush logo" />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    {/* <td>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </td> */}
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-[32px]">
                                                    <img src={avatarLogo} alt="Avatar Logo" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Mior Zaki
                                    </td>
                                    <td>mior@nova.laravel.com</td>
                                    <td>
                                        <div className="bg-[#DCFCE7] text-[#16A34A] text-[12px] font-bold rounded-full flex flex-row justify-center items-center w-[74px] h-[24px]">PREMIUM</div>
                                    </td>
                                    <td>
                                        <div className="flex flex-row items-center gap-x-[25px]">
                                            <div className="w-[24px]">
                                                <img src={xLogo} alt="check Logo" />
                                            </div>
                                            <div className="w-[18px] cursor-pointer">
                                                <img src={dotLogo} alt="dot logo" />
                                            </div>
                                            <div className="w-[18px] cursor-pointer">
                                                <img src={trushLogo} alt="trush logo" />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <div className="">
                                    <span>Previous</span>
                                </div>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}
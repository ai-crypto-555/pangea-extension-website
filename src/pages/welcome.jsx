import chromeImg from '../assets/images/welcome/Frame.svg';
import mainImg from '../assets/images/welcome/Group 1000004138.svg';
import img1 from '../assets/images/welcome/Group 1000004144 1.svg';
import playImg from '../assets/images/welcome/Play.svg';
import questionImg from '../assets/images/welcome/Group 1000004146.svg';
import pImg from '../assets/images/welcome/Group 18602.svg';
import thunderImg from '../assets/images/welcome/thunder 1.svg';
import photoImg from '../assets/images/welcome/image 183.svg';
import img21 from '../assets/images/welcome/Frame1.svg';
import img22 from '../assets/images/welcome/Frame2.svg';
import img23 from '../assets/images/welcome/Frame3.svg';
import vectorArrowImg from '../assets/images/welcome/arrow1.svg';
import img31 from '../assets/images/welcome/img.svg';
import img4 from '../assets/images/welcome/Group 52374.svg';
import arcImg from '../assets/images/welcome/Vector 32.svg';

import priceImg from '../assets/images/welcome/price.svg';
import priceImg1 from '../assets/images/welcome/price1.svg';

import { Menu } from '@mui/material';

import { Squash as Hamburger } from 'hamburger-react';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Welcome() {
    
    const navigation = useNavigate();
    
    //
    const [isOpen, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
        setOpen(false);
    };

    // function
    const login = () => {
        navigation('/login');
    }

    const signup = () => {
        navigation('/signup');
    }

    const price = () => {
        navigation('/price');
    }

    const home = () => {
        navigation('/dashboard');
    }

    return (
        <div className="flex flex-col w-full px-[20px] sm:px-[15%] bg-white py-[20px]">

            <div className="hidden md:block">
                <div className="flex flex-row justify-between items-center py-[20px]">
                    <div className="w-[200px]">
                        <img src={mainImg} alt="main image" />
                    </div>
                    <div className="flex flex-row items-center gap-x-[100px] text-black text-[18px] font-semibold">
                        <div className="flex flex-row items-center gap-x-[20px]">
                            <span className="cursor-pointer" onClick={home}>Home</span>
                            <span className="cursor-pointer" onClick={()=>{}}>Product</span>
                            <span className="cursor-pointer" onClick={price}>Pricing</span>
                            <span className="cursor-pointer" onClick={()=>{}}>Contact Us</span>
                        </div>
                        <div className="flex flex-row items-center gap-x-[20px]">
                            <span className="cursor-pointer" onClick={login}>Login</span>
                            <div className="bg-green px-[12px] py-[9px] rounded-lg cursor-pointer" onClick={signup}>Sign Up</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="block md:hidden">
                <div className="flex flex-row justify-between items-center py-[20px]">
                    <div className="w-[200px] mt-[10px]">
                        <img src={mainImg} alt="main image" />
                    </div>
                    <div className="" onClick={handleClick}>
                        <Hamburger size={20} toggle={setOpen} toggled={isOpen}/>
                    </div>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        className="clearCanvas-wrapper"
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <div className="flex flex-col bg-white w-[180px]">
                            <div className="flex flex-row gap-x-[10px] items-center px-[18px] py-[12px] cursor-pointer border-b border-b-[#ffffff17]">
                                <span className="text-black text-[14px]">Home</span>
                            </div>
                            <div className="flex flex-row gap-x-[10px] items-center px-[18px] py-[12px] cursor-pointer border-b border-b-[#ffffff17]">
                                <span className="text-black text-[14px]">Product</span>
                            </div>
                            <div className="flex flex-row gap-x-[10px] items-center px-[18px] py-[12px] cursor-pointer border-b border-b-[#ffffff17]">
                                <span className="text-black text-[14px]">Pricing</span>
                            </div>
                            <div className="flex flex-row gap-x-[10px] items-center px-[18px] py-[12px] cursor-pointer border-b border-b-[#ffffff17]">
                                <span className="text-black text-[14px]">Contact Us</span>
                            </div>
                            <div className="flex flex-row gap-x-[10px] items-center px-[18px] py-[12px] cursor-pointer border-b border-b-[#ffffff17]">
                                <span className="text-black text-[14px]">Login</span>
                            </div>
                            <div className="flex flex-row gap-x-[10px] items-center px-[18px] py-[12px] cursor-pointer">
                                <span className="text-black text-[14px]">Sign Up</span>
                            </div>
                        </div>
                    </Menu>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 text-black text-left mt-[70px] gap-y-[50px]">

                <div className="flex flex-col gap-y-[30px] w-full 2xl:w-[80%]">
                    <span className="text-[48px] md:text-[60px] font-black text-center md:text-left">Your AI assistant on the Web</span>
                    <img src={arcImg} alt="arc image" />
                    <span className="text-[18px]">Write emails, create blogs, draft tweets, generate images, get answers, and automate your life at the speed of AI</span>
                    <div className="flex flex-col sm:flex-row items-center gap-[50px]">
                        <div className="flex flex-row items-center gap-x-[20px] px-[30px] py-[20px] rounded-full bg-green cursor-pointer">
                            <span className="text-[18px] font-semibold">Add Extension</span>
                            <div className="w-[32px]">
                                <img src={chromeImg} alt="chrome image" />
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-x-[20px] cursor-pointer">
                            <div className="w-[32px]">
                                <img src={playImg} alt="play image" />
                            </div>
                            <span className="text-[18px] font-semibold">View Demo</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row justify-center">
                    <div className="w-[80%] md:w-[50%]">
                        <img src={img1} alt="image 1" />
                    </div>
                </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 text-black text-left py-[50px] gap-y-[80px] ">

                <div className="flex flex-col gap-y-[40px] w-full 2xl:w-[80%]">
                    <span className="text-[48px] md:text-[60px] font-black text-center md:text-left">Get it done faster with Pangea AI</span>
                    <span className="text-[18px]">Pangea is a Generative AI assistant that you can use anywhere on the web. Simply type // and you can compose an email in Gmail, or write a blog in Google Docs. You can generate an image you might need while editing a website or ask Pangea a question and get a precise answer in seconds without having to search through countless websites.</span>
                    <div className="flex flex-row justify-center md:justify-start">
                        <div className="flex rounded-md flex-row items-center justify-center w-[70px] h-[70px] bg-green relative md:ml-[50px]">
                            <div className="w-[30px]">
                                <img src={pImg} alt="image p" />
                            </div>
                            <div className="w-[60px] absolute top-[40px] left-[-80px]">
                                <img src={vectorArrowImg} alt="vector arrow" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-y-[40px]">
                    <div className="flex flex-row gap-x-[30px]">
                        <div className="w-[60px] h-[60px] flex flex-row items-center justify-center bg-green">
                            <div className="w-[35px]">
                                <img src={thunderImg} alt="thunder image" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-[5px] w-full md:w-[70%]">
                            <span className="text-[26px] font-bold">Autocompose</span>
                            <span className="text-[16px] text-grey font-semibold">Quickly write anything leveraging the power of Pangea AI.</span>
                        </div>
                    </div>

                    <div className="flex flex-row gap-x-[30px]">
                        <div className="w-[60px] h-[60px] flex flex-row items-center justify-center bg-green">
                            <div className="w-[25px]">
                                <img src={questionImg} alt="question image" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-[5px] w-full md:w-[70%]">
                            <span className="text-[26px] font-bold">Ask Pangea</span>
                            <span className="text-[16px] text-grey font-semibold">Get answers in real time just by simply opening the Pangea extension on your browser</span>
                        </div>
                    </div>

                    <div className="flex flex-row gap-x-[30px]">
                        <div className="w-[60px] h-[60px] flex flex-row items-center justify-center bg-green">
                            <div className="w-[35px]">
                                <img src={photoImg} alt="photo image" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-[5px] w-full md:w-[70%]">
                            <span className="text-[26px] font-bold">AI Image generator</span>
                            <span className="text-[16px] text-grey font-semibold">Generate images on the fly with Pangea’s built in AI image generator</span>
                        </div>
                    </div>
                </div>

            </div>

            <div className="flex flex-col gap-y-[50px] text-black text-center md:text-left">

                <div className="flex flex-col md:flex-row justify-between items-start gap-y-[50px]">
                    <div className="flex flex-col gap-y-[50px]">
                        <span className="text-[48px] font-bold">Supercharge your browser</span>
                        <span className="text-grey text-[18px] max-w-[500px]">Pangea helps creatives, developers, and executives supercharge productivity</span>
                    </div>
                    <div className="flex flex-row gap-x-[10px] items-center px-[30px] py-[20px] rounded-full bg-green cursor-pointer">
                        <span className="text-[16px] font-semibold">Add Extension</span>
                        <div className="w-[30px]">
                            <img src={chromeImg} alt="chrome image" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-[10%] gap-y-[50px]">
                    <div className="flex flex-col items-center gap-y-[30px]">
                        <div className="w-[70%]">
                            <img src={img21} alt="image 21" />
                        </div>
                        <span className="text-[24px] font-bold">Compose faster</span>
                        <span className="text-[16px] text-grey">Write anything by leveraging the power of artificial intelligence</span>
                    </div>
                    <div className="flex flex-col items-center gap-y-[30px]">
                        <div className="w-[70%]">
                            <img src={img22} alt="image 22" />
                        </div>
                        <span className="text-[24px] font-bold mt-[13%]">Get answers in seconds</span>
                        <span className="text-[16px] text-grey">Real time answers to any of your questions in seconds</span>
                    </div>
                    <div className="flex flex-col items-center gap-y-[30px]">
                        <div className="w-[70%]">
                            <img src={img23} alt="image 23" />
                        </div>
                        <span className="text-[24px] font-bold mt-[10%]">Get images you need</span>
                        <span className="text-[16px] text-grey">We use Stable Diffusion to generate images straight from any text you input</span>
                    </div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 text-black text-left mt-[50px] md:mt-[150px] gap-y-[50px]">

                    <div className="flex flex-col gap-y-[30px] w-full 2xl:w-[80%]">
                        <span className="text-[48px] md:text-[60px] font-black text-center md:text-left">AI Automation for everyone</span>
                        <span className="text-[18px]">Pangea was built to help creators get more done, faster. We're unifying the generative AI experience on the web to help you focus on the things that matter and automate the things that matter less. Whether it's writing a blog outline on Google docs, sending an email, answering a quick question, or finding the right image for that new website, with Pangea you can do it from anywhere on the web in a quarter of the time.</span>
                    </div>

                    <div className="flex flex-row justify-center">
                        <div className="w-[80%] md:w-[70%]">
                            <img src={img31} alt="image 31" />
                        </div>
                    </div>

                </div>

                <div className="flex flex-col items-center gap-y-[30px] text-black mt-[80px]">
                    <span className="text-[40px] md:text-[50px] font-bold">Select the price plan that suits you best</span>
                    <span className="text-[16px] text-grey font-semibold">Choose plan that works best for you, feel free to contact us for enterprise inquiries</span>
                    <div className="w-[70%] my-[100px]">
                        <img src={priceImg} alt="price image" />
                    </div>
                </div>

                {/* <div className="bg-black flex flex-col gap-y-[50px] text-white">
                    <div className="flex flex-col lg:flex-row justify-between">
                        <div className="flex flex-col">
                            <span className="text-[44px] font-semibold">Why people love Pangea</span>
                            <span className="text-grey text-[16px]">It’s never been easier to use AI on the web</span>
                            <span className="text-grey text-[16px]">Pangea has everything I need to free up some time using AI. Although there are tons of AI websites, Pangea makes it easier with the click of a button</span>
                            <span className="text-grey text-[16px]">- Josh McCallum</span>
                        </div>
                    </div>
                </div> */}

            </div>

        </div>
    )
}
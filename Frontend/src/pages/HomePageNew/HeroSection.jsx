import {Img,Button,Text} from "../../components";
import React from "react";
import { useNavigate} from 'react-router-dom';

export default function HeroSection(){

    const navigate = useNavigate();
    const handleRegister = () => {
        navigate('/registrationForm'); 
    };
    return(
        <>
        {/* Hero Section */}

        <div className="mt-16 flex items-center px-14 md:flex-col md:px-">
            <div className="flex w-[40%] justify-center md:w-full">
                <div className="flex w-full flex-col items-start gap-[30px]">
                    <div className="relative h-[298px] self-stretch">
                        <div className="absolute left-0 top-0 m-auto h-[276px] w-[60%] rounded -[148px] border-[1.5px] border-solid border-blue_gray-400_01 bg-gray-50 blur-[4.00px] backdrop-opacity-[0.5]" />
                        <div className="absolute bottom-[-1px] right-0 mr-auto flex flex-col items-start gap-4 md:ml-0">
                            <Text size="text6xl" as="p" className="!font-abhayalibreextrabold !font-extrabold leading-[83px]">
                                <span className="text-black-900">Getting&nbsp;</span>
                                <span className="text-indigo-a400">Quality</span>
                                <span className="text-black-900">
                                    <>
                                    &nbsp;
                                    <br />
                                    Education Is Now <br />
                                    More&nbsp;
                                    </>
                                </span>
                                <span className="text-indigo-a400">Easy</span>
                            </Text>
                            <Text size="textxs" as="p" className="leading-[21px]">
                                <>
                                Provide you with latest online learning system and <br />
                                materials that help your knowledge growing.
                                </>
                            </Text>
                        </div>
                    </div>
                    <Button
                    color="indigo_A400"
                    size="sm"
                    className="ml-[26px] min-w-[244px] rounded-[20px] font-abhayalibreextrabold font-extrabold md:ml-0"
                 onClick={handleRegister} > Register Here </Button>
                </div>
            </div>
            <div className="flex flex-1 items-center justify-end md:self-stretch sm:flex-col">
                <div className="h-[32px] w-[30px] rounded-[50%] bg-indigo-200 shadow-xs" />
                <div className="flex w-[84%] justify-end sm:w-full">
                    <div className="flex w-full flex-col items-start">
                        <div className="relative h-[398px] self-stretch">
                            <div className="absolute right-[12%] top-[25px] m-auto h-[288px] w-[64%] rounded-[154px] bg-indigo-50 blur-[4.00pc] backdrop-opacity-[0.5]" />
                            <div className="absolute left-[30px] top-0 m-auto h-[256px] w-[52%] rounded-[134px] border-[1.5px] border-solid border-blue_gray-400_01 bg-gray-50 blur-[4.00px] backdrop-opacity-[0.5]" />
                            <div className="absolute bottom-0 left-[13%] m-auto h-[226px] w-[52%] rounded-[124px] border border-solid border-indigo-a400 bg-indigo-a400 blur-[4.00px] backdrop-opacity-[0.5]"/>
                            <Img
                            src="images/img1.png" alt="S Image" 
                            className="absolute bottom-0 right-[-1px] top-0 my-auto h-[246px] w-[72] rounded-[10px] object-contain"/>
                            
                            </div>
                            <div className="mr-[132px] h-[24px] w-[24px] rotate-[7deg] self-end rounded-[12px] bg-blue_gray-600 shadow-xs md:mr-0" />
                            <div className="ml-[26px] mt-6 h-[32px] w-[32px] rotate-[38deg] rounded-[16px] bg-blue_gray-200 shadow-xs md:ml-0" />
                            
                            </div>
                            </div>
                            </div>
                            </div>
   
    
        </>
    );
}

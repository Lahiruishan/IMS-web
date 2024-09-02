import {Heading,Text,Img} from "./..";
import React from "react";

export default function UserProfile1({
    userTitle = "Combined Maths",
    userSubtitle = "Combined Maths pure and applied",
    userdescription1=(
        <>
        Chathuranga Dharmadasa 
        <br />
        B.Sc[Hons].Chem(University of Jaffna)
        </>
    ),
    userdescription2=(
        <>
        Chathuranga Dharmadasa 
        <br />
        B.Sc[Hons].Chem(University of Jaffna)
        </>
    ),
    ...props 

}) {
    return (
        <div {...props} className={`${props.className} h-[290px] w-[32%] md:w-full relative`}>
            <Img 
            src="images/img_reactangle_209.png"
            alt="Combined Maths"
            className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[290px] flex-1 rounded-[20px] object-cover"/>
           
           <div className="absolute left-0 right-0 top-[9px] m-auto flex-1">
            <div className="mr-3 flex flex-col gap-[186px]">
                <div className="relative mx-2 h-[34px]">
                    <div className="absolute left-0 right-0 top-0 m-auto flex flex-1 flex-col items-start">
                        <Text size="text6xl" as="p" className="ml-1.5 !font-abel !text-black-900">
                            {userTitle}
                        </Text>
                        <div className="relative mt-[-26px] h-[28px] w-[64%] rounded-[14px] bg-white-a700"/>
                        </div>
                        <Text size="text6xl" as="p" className="absolute bottom-px left-0 m-auto !font-abel !text-black-900">
                            {userSubtitle}
                        </Text>
                    </div>
                    <div className="flex flex-col items-center">
                        <Heading size="headinglg" as="p" className="leading-[18px] !text-black-900">
                            {userdescription1}
                        </Heading>
                        <Heading size="headinglg" as="p" className="leading-[18px] !text-black-900">
                            {userdescription2}
                        </Heading>
                    </div>
                </div>
            </div>
           </div>
       
    );
}

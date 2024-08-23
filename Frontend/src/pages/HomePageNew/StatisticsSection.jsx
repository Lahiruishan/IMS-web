import {Heading,Text,Img} from "../../components";
import React from "react";

export default function StatisticsSection(){
    return(
        <>
        {/* StatisticsSection */}
        <div className="mt-[150px] flex justify-center px-14 md:px-5">
            <div className="flex w-[90%] flex-col items-end md:w-full">
                <div className="flex items-end self-stretch rounded-[30px] bg-indigo-50 p-8 shadow-xs md:flex-col sm:p-5">
                    <div className="flex w-[28%] items-center gap-[49px] self-center md:w-full">
                        <Img src="images/class icon.png" alt="Class Icon" className="h-[82px] w-[34%] object-contain" />
                        <Text size="textxl" as="p" className="w-[38%] !font-actor leading-[34px]">
                            <>
                            {" "}
                            Total 
                            <br />
                            Classses 
                            <br />
                            </>
                        </Text>
                    </div>
                    <div className="mb-1 mt-3.5 flex flex-1 items-start justify-between gap-5 px-[58px] md:self-stretch md:px-5">
                        <Img
                        src="images/teacher icon.jpeg" alt="Teacher Icon" className="ml-1.5 mt-2.5 h[82px] w-[82px] object-cover md:ml-0" />
                        <Text size="textxl" as="p" className="w-[48%] self-center !font-actor leading-[34px]">
                            <>
                            {" "}
                            Expert Teachers 
                            <br />
                            </>
                        </Text>
                    </div>
                    <div className="flex w-[32%] items-start justify-between gap-5 md:w-full">
                        <Img 
                        src="images/student icon.png" alt="Student Icon" className="ml-[54px] mt-1.5 h-[82px] w-[30%] object-contain" />
                        <Text size="textxl" as="p" className="w-[44%] self-center !font-actor leading-[34px]">
                            <>
                            {" "}
                            Total 
                            <br />
                            Student  <br />200
                            </>
                        </Text>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

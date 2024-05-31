import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Button } from "../../components";
import IMA from "../../components/IMA";

export default function Payments() {
  return (
    <>
      <Helmet>
        <title>IMS-web</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full pb-[13px] bg-gradient">
        <div>
          <IMA className="flex md:flex-col justify-between items-start gap-5 bg-indigo-900" />
          <div className="flex md:flex-col justify-center items-start gap-[49px]">
            <div className="h-[825px] w-[17%] md:w-full md:h-auto md:p-5 relative">
              <div className="flex flex-col items-center mt-[65px] ml-[41px] gap-[25px] md:ml-0">
               
              </div>
              <div className="w-full h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                <div>
                  <Button shape="square" className="w-full sm:px-5 z-[1] border-black-900 border border-solid">
                    Home
                  </Button>
                  <div className="h-[52px] mt-[-49px] bg-indigo-100 shadow-bs" />
                </div>
                <div className="flex flex-col mt-[-52px] py-[52px] md:py-5 bg-indigo-300">
                  <Button shape="square" className="w-full sm:px-5">
                    Teachers
                  </Button>
                  <Button shape="square" className="w-full sm:px-5">
                    Student Details
                  </Button>
                  <Button shape="square" className="w-full sm:px-5">
                    Papers
                  </Button>
                  <Button shape="square" className="w-full sm:px-5">
                    TimeTable
                  </Button>
                 <Button 
                 shape="square"className="mb-[408px] w-full border border-solid border-black-900 font-bold sm:px-5">
                    Website Changes
                 </Button>
                 </div>
              </div>
         </div>
        <div className="mt-11 flex w-[47%] items-start justify-between gap-5 md:w-full">
            <div className="mt0[111px] flex flex-col gap-[59px] sm:gap-[29px]">
                <Button size ="20xl" as="p" className="tracking-[0.10px] !text-red-900">
                    1.Teachers
                </Button>

                <Button size ="20xl" as="p" className="tracking-[0.10px] !text-red-900">
                    1.Students
                </Button>
            </div>
            <Heading size="80xl" as= "h2" className="tracking-[.05px] !text-black-900" >Payments</Heading>
        </div>
        </div>
        </div>
        </div>
        </>
  );
}

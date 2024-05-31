import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Button } from "../../components";
import IMA from "../../components/IMA";

export default function StudentsDetails() {
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
              <div className="flex flex-col items-center mt-[65px] ml-[41px] gap-[25px] md:ml-0"></div>
              <div className="w-full h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                <div>
                  <Button
                    shape="square"
                    className="w-full sm:px-5 z-[1] border-black-900 border border-solid"
                  >
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
                    size="s"
                    as="h5"
                    className="flex justify-center items-center h-[52px] px-[35px] py-3 sm:px-5 bg-indigo-100 shadow-bs"
                  >
                    Website Change
                  </Button>
                  <Button
                    shape="square"
                    className="mb-[408px] w-full border border-solid border-black-900 font-bold sm:px-5"
                  >
                    Change to Payments
                  </Button>
                </div>
              </div>
            </div>
            <div className="mt-8 flex items-start gap-[30px] sm:flex-col">
              <div className="mt-[109px] flex flex-col gap-[21px]">
                <Button size="6xl" as="p">
                  1. Chemistry
                </Button>
                <Button size="5xl" as="p">
                  2. Combined Maths
                </Button>
                <Button size="6xl" as="p">
                  3. Physics
                </Button>
                <Button size="6xl" as="p">
                  4. Biology
                </Button>
              </div>
              <Heading size="15xl" as="h3">
                Student's Payments
              </Heading>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Heading, Button } from "../../components";
import IMA from "../../components/IMA";

export default function DashboardPage() {
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
                    size="s"
                    as="h5"
                    className="flex justify-center items-center h-[52px] px-[35px] py-3 sm:px-5 bg-indigo-100 shadow-bs"
                  >
                    Payments
                  </Button>
              
                  <div className="h-[52px] mb-[408px] bg-indigo-100 shadow-bs" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end md:self-stretch mt-[3px] gap-5 md:p-5 flex-1">
              <div className="flex sm:flex-col justify-between items-center w-[79%] md:w-full gap-5">
                <Button size="2xl" as="h3" className="self-end mb-2.5 !text-blue_gray-900">
                  Upcoming Events
                </Button>
                <div className="flex flex-col">
                  <Button
                    as="p"
                    className="flex justify-center items-center h-[35px] pt-[5px] pb-px px-7 sm:px-5 border-black-900 border border-solid bg-blue_gray-100"
                  >
                    My Profile
                  </Button>
                  <Button
                    as="p"
                    className="flex justify-center items-center h-[35px] px-[35px] py-[3px] sm:px-5 border-black-900 border border-solid bg-blue_gray-100"
                  >
                    Settings
                  </Button>
                  <Button
                    as="p"
                    className="flex justify-center items-center h-[35px] px-[35px] py-[3px] sm:px-5 border-black-900 border border-solid bg-blue_gray-100"
                  >
                    Logout
                  </Button>
                </div>
              </div>
              <div className="flex md:flex-col self-stretch justify-end items-center mr-[13px] gap-[49px] md:mr-0">
                <div className="flex flex-col md:self-stretch gap-8 flex-1">
                  <div className="flex justify-between gap-5 bg-indigo-A200 shadow-xs rounded-[15px]">
                    <div className="flex self-end justify-between w-[28%] ml-[31px] gap-5 flex-wrap">
                      <Heading size="lg" as="h4" className="!text-white-A700">
                        Date
                      </Heading>
                      <Heading size="lg" as="h4" className="!text-white-A700">
                        Time
                      </Heading>
                    </div>
                    <Heading size="lg" as="h4" className="self-end mr-[23px] !text-white-A700">
                      Hall No
                    </Heading>
                  </div>
                  <div className="flex sm:flex-col justify-between items-start gap-5 p-1.5 bg-blue-200 shadow-xs rounded-[15px]">
                    <div className="flex justify-between w-[44%] sm:w-full mb-[5px] ml-[19px] gap-5 md:ml-0 flex-wrap">
                      <Text size="s" as="p">
                        10th Feb
                      </Text>
                      <Text size="s" as="p">
                        08.00 AM
                      </Text>
                    </div>
                    <Text size="xs" as="p" className="mr-56 md:mr-0">
                      2025 First Theory Class
                    </Text>
                  </div>
                  <div className="h-[39px] bg-blue-200 shadow-xs rounded-[15px]" />
                  <div className="h-[39px] bg-blue-200 shadow-xs rounded-[15px]" />
                  <div className="h-[39px] bg-blue-200 shadow-xs rounded-[15px]" />
                </div>
                {/* calender i used just an image for the frontend : */}
                <Img src="images/img_calender_1.png" alt="calenderone_one" className="w-[35%] md:w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

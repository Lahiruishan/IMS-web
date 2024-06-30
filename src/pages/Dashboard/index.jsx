import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button } from "../../components";

export default function LoginPage() {
  return (
    <>
      {/* Helmet is used to manage the document head */}
      <Helmet>
        <title>IMS-web</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>

      {/* Main container with full width and gradient background */}
      <div className="w-full bg-gradient pb-3 pr-[59px] md:pr-5">
        {/* Flex container for layout, with items centered and some gap between them */}
        <div className="flex items-center gap-[50px] md:flex-col">
          {/* Left side of the page with text and styles */}
          <div className="flex w-[48%] flex-col items-center justify-center bg-indigo-900 pb-[558px] pl-14 pt-[297px] md:w-full md:p-5 md:py-5 md:pl-5">
            <Text size="vl" as="p" className="mb-4 ml-96 md:ml-0 !text-purple-50 !font-aclonica">
              Institute <br /> Management <br /> System
            </Text>
          </div>

          {/* Right side of the page with login form */}
          <div className="flex flex-1 flex-col items-center justify-center rounded-[10px] bg-blue_gray-100 px-14 pb-[151px] pt-[68px] shadow-xs md:self-stretch md:p-5">
            <div className="flex w-[88%] flex-col items-start gap-[47px] md:w-full">
              <Text size="10xl" as="p" className="!font-actor underline">
                Login to your Account
              </Text>

              {/* Login form */}
              <form action="" className="px-10">
                {/* Username field */}
                <div className="ml-6 flex flex-col items-start self-stretch md:ml-0">
                  <label for="" className="text-neutral-1900 text-base font-normal">User Name :</label>
                  <input type="text" name="" placeholder="Enter your User Name" id=""
                    className="w-full text-neutral-600 placeholder:text-neutral-600 px-4 bg-transparent outline-none" />

                  <div className="mt-4 h-[42px] self-stretch rounded-[15px] bg-blue_gray-100" />
                </div>

                {/* Password field */}
                <div className="mt-7 flex flex-col">
                  <label for="" className="text-neutral-1900 text-base font-normal">Password :</label>
                  <input type="text" name="" placeholder="Enter your Password" id=""
                    className="w-full text-neutral-600 placeholder:text-neutral-600 px-4 bg-transparent outline-none" />

                  <div className="mt-4 h-[42px] self-stretch rounded-[15px] bg-blue_gray-100" />
                </div>

                {/* Login button */}
                <div className="relative mt-[52px] h-[42px] w-[29%] self-center md:h-auto">
                  <a href="#" className="mr-6 md:mr-0">
                    <a href="#" className="mt-[53px] self-center">
                      <Button as="h2">Login</Button>
                    </a>
                  </a>
                  <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[44px] w-full rounded-[15px] bg-blue_gray-100" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

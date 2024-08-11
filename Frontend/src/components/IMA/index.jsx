import React from "react";
import { Heading, Text } from "..";

export default function IMA({ ...props }) {
  return (
    <div {...props}>
      <Text size="lg" as="p" className="mb-4 ml-96 md:ml-0 !text-purple-50 !font-aclonica">
        Learning Management System
      </Text>
      <div className="flex sm:flex-col justify-center items-center w-[27%] md:w-full mb-[15px] mr-[141px] gap-3 md:mr-0">
        <div className="h-[62px] w-[30%] sm:w-full relative">
          <div className="h-[62px] w-full bg-blue_gray-100 absolute rounded-[35px]" />
          <Heading size="md" as="h1" className="w-max top-[14.63px] right-0 left-0 m-auto absolute">
            N
          </Heading>
        </div>
        <Heading size="xl" as="h2" className="self-end mb-[11px] !text-white-A700">
          User
        </Heading>
      </div>
    </div>
  );
}

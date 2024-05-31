import { Helmet } from "react-helmet";
import { Button, Img, Text } from "../../components";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";
import React from "react";
import IMA from "../../components/IMA";


//{/* backend There should be  a loop */}

const table1Data = [
  { rowname: "XXXX", indexno: "XXXX", school: "XXXX", price: "XXXX" }, // dummy data
  { rowname: "XXXX", indexno: "XXXX", school: "XXXX", price: "XXXX" }, // dummy data
];

export default function StudentDetailsThree() {
  const table1Columns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("rowname", {
        cell: (info) => (
          <Text as="p" className="tracking-[0.10px]">
            {info?.getValue?.()}
          </Text>
        ),
        header: () => (
          <div className="flex p-[9px] md:p-5">
            <div className="ml-[25px] flex flex-col md:ml-0">
              <div className="relative z-[1] flex flex-col">
                <Text as="p" className="tracking-[0.10px] !text-white-A700">Name</Text>
                <Text as="p" className="relative mt-[-25px] tracking-[0.10px] !text-white-A700">Name</Text>
              </div>
              <div className="relative z-[1] flex flex-col">
                <Text as="p" className="tracking-[0.10px] !text-white-A700">Name</Text>
                <Text as="p" className="relative mt-[-25px] tracking-[0.10px] !text-white-A700">Name</Text>
              </div>
            </div>
          </div>
        ),
        meta: { width: "206px" },
      }),
      tableColumnHelper.accessor("indexno", {
        cell: (info) => (
          <Text as="p" className="tracking-[0.10px]">
            {info?.getValue?.()}
          </Text>
        ),
        header: () => (
          <Text as="p" className="py-[9px] tracking-[0.10px] !text-white-A700 md:p-5">Index No</Text>
        ),
        meta: { width: "253px" },
      }),
      tableColumnHelper.accessor("school", {
        cell: (info) => (
          <Text as="p" className="tracking-[0.10px]">
            {info?.getValue?.()}
          </Text>
        ),
        header: () => (
          <Text as="p" className="py-[9px] tracking-[0.10px] !text-white-A700 md:p-5">School</Text>
        ),
        meta: { width: "249px" },
      }),
      tableColumnHelper.accessor("price", {
        cell: (info) => (
          <Text as="p" className="tracking-[0.10px]">
            {info?.getValue?.()}
          </Text>
        ),
        header: () => (
          <Text as="p" className="py-[9px] tracking-[0.10px] !text-white-A700 md:p-5">Price</Text> // dummy data
        ),
        meta: { width: "302px" },
      }),
    ];
  }, []);

  return (
    <>
      <Helmet>
        <title>IMS-web</title>
        <meta name="description" content="website created using create-react-app" />
      </Helmet>
      <div className="flex w-full flex-col bg-gradient pb-[13px]">
      <IMA className="flex md:flex-col justify-between items-start gap-5 bg-indigo-900" />

        <div>
        </div>
        <div className="flex w-[91%] md:w-full md:p-5">
          <div className="flex w-full items-start justify-between gap-5 md:flex-col">
            <div className="relative h-[825px] w-[18%] md:h-auto md:w-full">
              <div className="mt-[69px] flex w-full flex-col items-start">
                <Img src="images/img_tutorials.svg" alt="tutorials" className="ml-[63px] h-[16px] w-[53%] md:ml-0" />
                <Img
                  src="images/img_assignments.svg"
                  alt="assignments"
                  className="ml-[41px] mt-[35px] h-[20px] w-[71%] md:ml-0"
                />
                <div className="mt-[15px] flex self-stretch bg-black-900 p-[15px] shadow-bs">
                  <Img src="images/img_papers.svg" alt="papers" className="ml-[55px] h-[19px] w-[69px] md:ml-0" />
                </div>
                <Img
                  src="images/img_timetable.svg"
                  alt="timetable"
                  className="ml-[49px] mt-3.5 h-[16px] w-[58%] md:ml-0"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max w-full">
                <div>
                  <div className="relative z-[1] flex justify-center bg-indigo-100 p-3.5 shadow-bs">
                    <Img src="images/img_home.svg" alt="home" className="mt-1.5 h-[15px] w-[29%]" />
                  </div>
                  <div className="relative mt-[-49px] h-[52px] bg-indigo-100 shadow-bs" />
                </div>
                <div className="flex bg-indigo-100 p-[15px] shadow-bs">
                  <Img
                    src="images/img_teachers.svg"
                    alt="teachers"
                    className="ml-12 h-[15px] w-[62%] self-start md:ml-0"
                  />
                </div>
                <div className="relative h-[52px] bg-indigo-100 shadow-bs md:h-auto">
                  <Img
                    src="images/img_student_details.svg"
                    alt="studentDetails"
                    className="absolute left-0 right-0 top-[15.85px] m-auto h-[16px] w-[68%]"
                  />
                </div>
                <div className="flex bg-indigo-100 p-3.5 shadow-bs"></div>
                <Img src="images/img_papers.svg" alt="papers" className="ml-[55px] h-[19px] w-[48%] md:ml-0" />
              </div>
              <div className="flex bg-indigo-100 p-3.5 shadow-bs">
                <Img
                  src="images/img_timetable.svg"
                  alt="timetable"
                  className="ml-[34px] h-[16px] w-[63%] self-start md:ml-0"
                />
              </div>
              <div className="mb-[460px] h-[52px] bg-indigo-100 shadow-bs" />
            </div>
          </div>
          <div className="mt-[31px] flex w-[77%] flex-col items-start md:w-full">
            <Img
              src="images/img_student_details.svg"
              alt="studentDetails"
              className="ml-[366px] h-[22px] w-[34%] md:ml-0"
            />
            <ReactTable
              size="sm"
              bodyProps={{ className: "" }}
              headerProps={{ className: "bg-blue_gray-600 shadow-xs md:flex-col" }}
              rowDataProps={{ className: "flex-wrap" }}
              className="mt-10 self-stretch"
              columns={table1Columns}
              data={table1Data}
            />
            <Button
              color="red_300"
              shape="square"
              className="ml-[768px] mt-[145px] w-full font-bold md:ml-0 sm:px-5"
            >
              Remove Student
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

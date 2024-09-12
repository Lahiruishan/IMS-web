// import React from "react";
// import { Helmet } from "react-helmet";
// import { Text, Heading, Button } from "../../../components";
// import { ReactTable } from "../../../components/ReactTable";
// import { createColumnHelper } from "@tanstack/react-table";
// import IMA from "../../../components/IMA";


// const tableData = [
//   { class: "Chemistry-Theory-2024 A/L", day: "Saturday", rowfrom: "07.00" },
//   { class: "Chemistry-Paper-2024 A/L", day: "Sunday", rowfrom: "07.00" },
//   { class: "Chemistry-Theory-2025 A/L", day: "Saturday", rowfrom: "07.00" },
//   { class: "Chemistry-Revision-2023 A/L", day: "Sunday", rowfrom: "07.00" },
// ];

// export default function TeachersTwoPage() {
//   const tableColumns = React.useMemo(() => {
//     const tableColumnHelper = createColumnHelper();
//     return [
//       tableColumnHelper.accessor("class", {
//         cell: (info) => (
//           <Text size="s" as="p">
//             {info?.getValue?.()}
//           </Text>
//         ),
//         header: (info) => (
//           <Heading as="h5" className="pt-1.5 pb-2.5 pl-[35px] md:p-5 sm:pl-5 !text-white-A700">
//             Class
//           </Heading>
//         ),
//         meta: { width: "322px" },
//       }),
//       tableColumnHelper.accessor("day", {
//         cell: (info) => (
//           <Text size="md" as="p">
//             {info?.getValue?.()}
//           </Text>
//         ),
//         header: (info) => (
//           <Heading as="h5" className="pl-3 py-2 md:p-5 !text-white-A700">
//             Day
//           </Heading>
//         ),
//         meta: { width: "226px" },
//       }),
//       tableColumnHelper.accessor("rowfrom", {
//         cell: (info) => (
//           <div className="flex justify-between items-end md:self-stretch gap-5 flex-1 flex-wrap">
//             <Text as="p" className="mt-1.5">
//               {info?.getValue?.()}
//             </Text>
//             <Text as="p" className="mr-[9px]">
//               12.00
//             </Text>
//           </div>
//         ),
//         header: (info) => (
//           <div className="flex justify-between items-start md:self-stretch gap-5 md:p-5 flex-1 flex-wrap">
//             <Heading size="md" as="h5" className="mt-1 !text-white-A700">
//               From
//             </Heading>
//             <Heading as="h5" className="h-[26px] mt-1 mb-2 mr-[39px] !text-white-A700">
//               To
//             </Heading>
//           </div>
//         ),
//         meta: { width: "222px" },
//       }),
//     ];
//   }, []);

//   return (
//     <>
//       <Helmet>
//         <title>IMS-Web</title>
//         <meta name="description" content="Web site created using create-react-app" />
//       </Helmet>
//       <div className="flex flex-col w-full pb-[13px] bg-gradient">
//       <IMA className="flex md:flex-col justify-between items-start gap-5 bg-indigo-900" />

//       <div>
//         </div>
//         <div className="flex w-[94%] md:w-full md:p-5">
//           <div className="flex md:flex-col items-start w-full gap-12">
//             <div className="h-[825px] w-[18%] md:w-full md:h-auto relative">
//               <div className="flex flex-col items-center mt-[65px] ml-[41px] gap-[25px] md:ml-0">
               
//               </div>
//               <div className="w-full h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
//                 <div>
//                   <Button shape="square" className="w-full sm:px-5 font-bold z-[1]">
//                     Home
//                   </Button>
//                   <div className="h-[52px] mt-[-49px] bg-indigo-100 shadow-bs" />
//                 </div>
//                 <div className="flex flex-col mt-[-52px] py-[52px] md:py-5 bg-indigo-300">
//                 <Button shape="square" className="w-full sm:px-5">
//                     Teachers
//                   </Button>
//                   <Button shape="square" className="w-full sm:px-5">
//                     Student Details
//                   </Button>
//                   <Button shape="square" className="w-full sm:px-5">
//                     Papers
//                   </Button>
//                   <Button shape="square" className="w-full sm:px-5">
//                     TimeTable
//                   </Button>
//                   <div className="h-[52px] mb-[408px] bg-indigo-100 shadow-bs" />
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-col md:self-stretch mt-[79px] gap-[15px] flex-1">
//               <div className="flex md:flex-col justify-between items-center w-[67%] md:w-full gap-5">
//                 <div className="h-[222px] w-[31%] bg-blue_gray-100 shadow-xs rounded-[15px]" />
//                 <div className="flex flex-col items-start w-[58%] md:w-full gap-[126px] md:gap-[94px] sm:gap-[63px]">
//                   <Heading as="h5" className="w-[82%] md:w-full">
//                     <>
//                     {/* backend part --  dummy data */}
//                       Thamiraherath Jaysinghe 
//                       <br />
//                       BSc.Chem.(U.O.C.).C.Chem.(i)
//                     </>
//                   </Heading>
//                   <Heading as="h5" className="self-end">
//                     TimeTable
//                   </Heading>
//                 </div>
//               </div>
//               <div className="flex md:flex-col items-start gap-[31px]">
//                 <Heading size="md" as="h5" className="w-[26%] md:w-full mt-[33px]">
//                   <span className="text-black-900 text-[23px]">
//                     <>
//                       Contact
//                       <br />
//                     </>
//                   </span>
//                   <span className="text-black-900 font-normal">
//                     <>
//                       <br />
//                       Tel: 033 00 000 00
//                       <br />
//                       Email: xx@gmail.com
//                     </>
//                   </span>
//                 </Heading>
//                 <ReactTable
//                   size="xs"
//                   bodyProps={{ className: "" }}
//                   headerProps={{ className: "bg-cyan-800 md:flex-col rounded-[10px]" }}
//                   rowDataProps={{ className: "md:flex-col" }}
//                   className="md:self-stretch flex-1"
//                   columns={tableColumns}
//                   data={tableData}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Button, Text } from "../../../components";
import IMA from "../../../components/IMA";


export default function TeachersChange() {
  return (
    <>
      <Helmet>
        <title>IMS-web</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col w-full pb-[13px] bg-gradient">
        <div>
          <IMA className="flex md:flex-col justify-between items-start gap-5 bg-indigo-900" />

        </div>
        <div className="flex w-[87%] md:w-full md:p-5">
          <div className="flex md:flex-col justify-between items-start w-full gap-5">
            <div className="h-[825px] w-[18%] md:w-full md:h-auto relative">
              <div className="flex flex-col items-center mt-[65px] ml-[41px] gap-[25px] md:ml-0">
                
              </div>
              <div className="w-full h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                <div>
                  <Button shape="square" className="w-full sm:px-5 font-bold z-[1]">
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
                  <Button shape="square" className="w-full sm:px-5">
                   Change to Payments
                  </Button>
                  <div className="h-[52px] mt-[-1px] mb-[409px] bg-indigo-100 shadow-bs" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start w-[70%] md:w-full mt-[61px] gap-[84px] md:gap-[63px] sm:gap-[42px]">
              <Heading size="7xl" as="h3" className="ml-[327px] md:ml-0">
                Teachers
              </Heading>
              <div className="self-stretch">
                <div className="flex flex-col items-end gap-[31px]">
                  <div className="self-stretch">
                    <div className="flex flex-col items-start">
                      <div className="flex self-stretch bg-cyan-800 rounded-[10px]">
                        <Heading size="6xl" as="h3" className="mt-[6px] ml-[59px] md:ml-0 !text-white-A700">
                          Name
                        </Heading>
                      </div>
                      <Heading size="6xl" as="h3" className="mt-[-24px] ml-[620px] md:ml-0 !text-white-A700">
                        Subject
                      </Heading>
                    </div>
                  </div>

                  {/* Backend part  here  there is dummy frontend*/}
                  <div className="flex self-stretch justify-between gap-5 p-1 bg-blue_gray-500 flex-wrap rounded-[10px]">
                    <Text size="3xl" as="p" className="self-start ml-[21px] md:ml-0">
                      Chathuranga Dharmadasa
                    </Text>
                    <Text size="3xl" as="p" className="self-start mr-[469px] md:mr-0">
                      Chemistry
                    </Text>
                  </div>
                  <div className="flex self-stretch justify-between items-start gap-5 bg-blue_gray-500 flex-wrap rounded-[10px]">
                    <Text size="3xl" as="p" className="ml-[58px]">
                      Kasun Pushpakumara
                    </Text>
                    <Text size="4xl" as="p" className="mt-1.5 mr-[492px]">
                      Biology
                    </Text>
                  </div>
                  <div className="flex self-stretch justify-between gap-5 p-1 bg-blue_gray-500 flex-wrap rounded-[10px]">
                    <Text size="3xl" as="p" className="self-start ml-[57px] md:ml-0">
                      Savindu Lasantha
                    </Text>
                    <Text size="3xl" as="p" className="mr-[486px] md:mr-0">
                      C. Maths
                    </Text>
                  </div>
                  <div className="flex self-stretch justify-between items-start gap-5 bg-blue_gray-500 flex-wrap rounded-[10px]">
                    <Text size="3xl" as="p" className="mb-[11px] ml-[60px]">
                      Dilshan Chathuranga
                    </Text>
                    <Text size="3xl" as="p" className="mr-[488px]">
                      Physics
                    </Text>
                  </div>
                  <div className="flex justify-between w-[33%] md:w-full mr-[22px] gap-5 md:mr-0">
                    {/* <Button color="indigo_900_01" size="xs" shape="square" className="sm:px-5 font-bold min-w-[72px]">
                      Add
                    </Button>
                    <Button color="indigo_900_01" size="xs" shape="square" className="sm:px-5 font-bold min-w-[72px]">
                      Remove
                    </Button> */}
                    <div className="flex justify-center w-[26%]">
                      <div className="flex flex-col items-end w-full">
                      {/* <Button color="indigo_900_01" size="xs" shape="square" className="sm:px-5 font-bold min-w-[72px]">
                      Edit
                    </Button> */}
                        <div className="self-stretch h-[20px] mt-[-18px] bg-indigo-900_01 shadow-xs" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
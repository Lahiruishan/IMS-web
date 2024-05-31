import {Helmet} from "react-helmet";
import {Button,Text,Heading} from "../../components";
import { ReactTable } from "../../components/ReactTable";
import {createColumnHelper} from "@tanstack/react-table";
import React from "react";
import IMA from "../../components/IMA";

const table2Data = [
    {day: "Monday",rowclass:"H1" ,teacher: "xxxxx"},
    {day: "Monday",rowclass:"H1" ,teacher: "xxxxx"},

];

export default function StudentDetailsOne(){
    const table2Columns = React.useMemo(() =>{
        const table2ColumnHelper = createColumnHelper();
        return [
            table2ColumnHelper.accessor("day", {
                cell: (info) =>(
                    <Text as = "p" className="tracking-[0.10px]">
                        {info?.getValue?.()}
                    </Text>
                ),
                header: (info) =>(
                    <Text as="p" className="px-[35px] pb-1.5 pt-3 tracking-[0.10px] !text-white-A700 md:p-5 sm:px-5">Day</Text>
                ),
                meta: {width: "155px"},
            }),
            table2ColumnHelper.accessor("rowclass",{
                cell: (info) =>(
                    <div className="flex items-end justify-between gap-5 sm:flex-col">
                        <div className="mb-[17px] mt-[33px] flex w-[43%] flex-wrap justify-between gap-5 sm:w-full">
                            <Text as="p" className="tracking-[0.10px]">
                                {info?.getValue?.()}
                            </Text>
                           {/* backend part ::loop want */}
                            <Text as="p" className="tracking-[0.10px]">07.00AM -12.00 PM </Text> 
                        </div>
                        <Text as = "p" className="mb-[15px] mr-[97px] tracing-[0.10px] sm:mr-0">
                            Chemistry-Theory- 2024 A/L
                        </Text>
                    </div>
                ),
                header: (info) =>(
                    <div className="flex py-2 pr-2 md:p-5 sm:flex-col">
                        <div className="flex w-L[44%] flex-wrap justify-betweeb gap-5 sm:w-full">
                            <Text as = "p" className="tracking-[0.10px] ! text-white-A700">
                                Hall Number
                            </Text>
                            <Text as = "p" className="tracking-[0.10px] ! text-white-A700">
                                Time 
                            </Text>
                        </div>
                        <Text as = "p" className="mr-[218px] tracking-[0.10px] !text-A700 sm:mr-0">
                            Class
                        </Text>
                    </div>
                ),
                meta: {width: "709px"},
            }),
            table2ColumnHelper.accessor("teacher",{
                cell:(info)=>(
                    <Text as="p" className="tracking-[0.10px]">
                        {info?.getValue?.()}
                    </Text>
                ),
                header: (info) =>(
                    <Text as="p" className="py-[9px] tracking-[0.10px] !text-white-A700 md:p-5">
                        Teacher
                    </Text>
                ),
                meta: {width:"145px"},
            }),
        ];
    }, []);
    return (
        <>
        <Helmet>
        <title>IMS-web</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full pb-[13px] bg-gradient">
      <IMA className="flex md:flex-col justify-between items-start gap-5 bg-indigo-900" />

        <div>
           
            </div>
          <div className="flex md:flex-col justify-between items-start gap-5 bg-indigo-900" />
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
                  <Heading
                        size="4xl"
                        as="h5"
                        className="flex justify-center items-center h-[52px] px-[35px] py-3 sm:px-5 bg-indigo-100 shadow-bs"
                      >
                        Website Change
                      </Heading>
                  <div className="mb-[407px] h-[52px] bg-indigo-100 shadow-bs"/>
                  </div>
                  </div>
                  </div>
            <div className="mt -[25px] flex w-[75%] flex-col items-start gap-[73px] md:w-full md:gap-[54px] sm:gap-9">
                <Heading size="11xl" as ="h3" className="ml-[321px] md:ml-0">
                    Time Table
                </Heading>
                <ReactTable 
                size = "xs"
                bodyProps={{className: ""}}
                headerProps={{className:"bg-blue_gray-600 shadow-xs md:flex-col"}}
                rowDataProps = {{className:"md:flex-col"}}
                className="self-stretch"
                columns = {table2Columns}
                data = {table2Data}
                />

                <Button color = "indigo_900" size="md" shape="square" className="ml-[905px] w-full font-bold md:ml-0">Update</Button> 
            </div>
        </div>    
    </div>
 
    </>
    );
}
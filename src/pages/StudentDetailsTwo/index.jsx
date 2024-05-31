import { Helmet } from "react-helmet";
import { CloseSVG } from "assets/images";
import {Button,Input,Img,Heading,Text} from "../../components";
import React from "react";
import IMA from "../../components/IMA";


export default function StudentDetailsTwo(){
    const [searchBarValue6,setSearchBarValue6] = React.useState("");

      return (
        <>
          <Helmet>
            <title>IMS-web</title>
            <meta name="description" content="Web site created using create-react-app" />
          </Helmet>
          <div className="w-full pb-[13px] bg-gradient">
          <IMA className="flex md:flex-col justify-between items-start gap-5 bg-indigo-900" />

            <div>
              <div className="flex md:flex-col justify-between items-start gap-5 bg-indigo-900" />
              <div className="flex md:flex-col justify-center items-start gap-[49px]">
                <div className="h-[825px] w-[17%] md:w-full md:h-auto md:p-5 relative">
                  <div className="flex flex-col items-center mt-[65px] ml-[41px] gap-[25px] md:ml-0">
                   
                    <Img src="images/img_rectangle_170.png" alt ="image" 
                    className="mt-[66px] h-[52px] w-full object-cover md:h-auto"/>
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
                        size="s"
                        as="h5"
                        className="flex justify-center items-center h-[52px] px-[35px] py-3 sm:px-5 bg-indigo-100 shadow-bs"
                      >
                        Website Change
                      </Heading>
                      <Button 
                     shape="square"
                     className="mb-[408px] w-full border border-solid border-black-900 font-bold sm:px-5">
                        Change to Payments
                     </Button>
                     </div>
                    </div>
                  </div>
                  <div className="mt-8 flex items-start gap-[30px] sm:flex-col">
                    <div className="mt-[109px] flex flex-col gap-[21px]">
                        <Text size="6xl" as="p">
                            1.2024 A/L
                        </Text>
                        <Text size="6xl" as="p">
                            2.2025 A/L
                        </Text>
                        <Text size="6xl" as="p">
                            3.2026 A/L
                        </Text>
                    </div>
                    <div className="mt-[25px] flex w-[53%] flex-col items-end gap-[637px] md:w-full md:gap-[477px] md:p-5 sm:gap-[318px]">
                     <div className="flex items -start justify-between gap-5 self-stretch sm:flex-col">
                        <Heading size="10xl" as="h3">Student Details {" "}</Heading>
                        <Input 
                        color = "blu_gray_100"
                        size = "sm"
                        shape="round"
                        name="search"
                        placeholder = {'Search'}
                        value={searchBarValue6}
                        onChange={(e) => setSearchBarValue6(e)}
                        prefix ={
                            <Img src="images/img_search_1.png" alt = "search 1" className="h-[39px] w-[34px] cursor-pointer"/>
                        }
                        suffix = {
                            searchBarValue6?.length >0? (
                                <CloseSVG onClick={() => setSearchBarValue6("")} height={39} width={34}/>
                            ) : null
                        }
                        className = "mt-[5px] w-[28%] gap-[35px] font-inika text-black-900 sm:w-full sm:pr-5"/>
                        </div>
                        <Button color="red_400" size="3xl" shape="square" className="mr-[52px] min-w-[109px] font-bold md:mr-0">Delete</Button>   
                    </div>
                    <Heading size="11xl" as ="h3">Student's  Payments </Heading> {/* backend  */}
                  </div>
                </div>
            </div>
        </div>
    </>
      );
    }

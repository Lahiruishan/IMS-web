import React from "react";
import { Helmet } from "react-helmet";
import {  Button } from "../../../components";
import IMA from "../../../components/IMA";
import { useNavigate} from 'react-router-dom';

export default function StudentLearningMaterials() {
    const navigate = useNavigate();

    const handleHome = () => {
        navigate('/Dashboard'); 
    };
    const handleTeachers = () => {
        navigate('/TeachersOne')
      };
      const handleStudentLearingMaterials =() => {
        navigate('/StudentLearingMaterials')
      };
        const handlePayment = () => {
          navigate('/Payments'); 
      };
      const handleStudentTimeTable = () => {
        navigate('/StudentTimeTable'); 
      };
      
      
  return (
    <>
    {/* Helmet is used to manage the document head */}
    <Helmet>
        <title>IMS-web</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      {/* Main container with full width and gradient background */}
      <div className="w-full pb-[13px] bg-gradient">
        <div>
           {/* IMA component, styled with flexbox */}
          <IMA className="flex md:flex-col justify-between items-start gap-5 bg-indigo-900" />
          {/* Main content container */}
          <div className="flex md:flex-col justify-center items-start gap-[49px]">
            {/* Sidebar container */}
            <div className="h-[825px] w-[17%] md:w-full md:h-auto md:p-5 relative">
              <div className="flex flex-col items-center mt-[65px] ml-[41px] gap-[25px] md:ml-0">
                 {/* Additional sidebar content can be added here */}
              </div>
               {/* Sidebar buttons */}
              <div className="w-full h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                <div>
                  <Button shape="square" className="w-full sm:px-5 z-[1] border-black-900 border border-solid" onClick={handleHome}>
                    Home
                  </Button>
                  <div className="h-[52px] mt-[-49px] bg-indigo-100 shadow-bs" />
                </div>
                {/* Additional sidebar buttons */}
                <div className="flex flex-col mt-[-52px] py-[52px] md:py-5 bg-indigo-300">

                  <Button shape="square" className="w-full sm:px-5" onClick={handleTeachers}>
                    Teachers
                  </Button>
                  {/* <Button shape="square" className="w-full sm:px-5" onClick={handleStudentDetails}>
                    Student Details
                  </Button> */}
                  <Button shape="square" className="w-full sm:px-5" onClick={handleStudentLearingMaterials}>
                    Learning Materials
                  </Button>
                  <Button shape="square" className="w-full sm:px-5" onClick={handleStudentTimeTable}>
                    StudentTimeTable
                  </Button>
                  <Button shape="square" className="w-full sm:px-5" onClick={handlePayment}>
                   Payments
                  </Button>
                 
                 </div>
              </div>
         </div>
           {/* Main content container */}
        <div className="mt-11 flex w-[47%] items-start justify-between gap-5 md:w-full">
            <div className="mt0[111px] flex flex-col gap-[59px] sm:gap-[29px]">
                <Button size ="20xl" as="p" className="tracking-[0.10px] !text-red-900">
                    1.Tutorials 
                </Button>

                <Button size ="20xl" as="p" className="tracking-[0.10px] !text-red-900">
                    2.Past Papers (G.C.E A/L)
                </Button>

                <Button size ="20xl" as="p" className="tracking-[0.10px] !text-red-900">
                    3.Model Papers
                </Button>
            </div>
          </div>
        </div>
        </div>
        </div>
        </>
  );
}

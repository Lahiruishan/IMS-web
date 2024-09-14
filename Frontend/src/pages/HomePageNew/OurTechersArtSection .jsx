import { Heading, Text } from "../../components";
import UserProfile from "../../components/UserProfile";
import React from "react";

const tutorProfileList = [
    {
        userTitle: "Bussiness Studiess",
        userdescription1: (
            <>
                Palitha Chathuranga 
                <br />
                B.Sc.Bussiness.Mg.(UOJ)
            </>
        ),
        userImage: "images/1.jpg" // Add specific images if needed
    },
    {
        userTitle: "Economics",
        userdescription1: (
            <>
               Chanaka Silva 
                <br />
                M.Sc.Economics (UOM)
            </>
        ),
        userImage: "images/1.jpg"
    },
    {
        userTitle: "Management Studies",
        userdescription1: (
            <>
                Sunil Perera 
                <br />
                B.Sc.Management (UOC)
            </>
        ),
        userImage: "images/1.jpg"
    },
    {
        userTitle: "Accounting",
        userdescription1: (
            <>
                Nimala Jayasena 
                <br />
                PhD.Accounting (USA)
            </>
        ),
        userImage: "images/1.jpg"
    }
];

export default function OurTeachersArtSection() {
    return (
        <>
            <div className="mt-[134px] px-7 sm:px-5">
                <div className="flex flex-col gap-[34px]">
                    <div className="ml-11 flex flex-col items-start gap-[42px] md:ml-0">
                        <Heading 
                            size="xl" 
                            as="h6" 
                            className="ml-[466px] ! font-serif !text-indigo-700 md:ml-0 underline"
                        >
                           
                        </Heading>
                        <div className="relative h-[78px] self-stretch">
                            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[58px] flex-1 bg-indigo-50" />
                            <Text 
                                size="5xl" 
                                as="p" 
                                className="absolute bottom-0 left-[3%] top-0 my-auto h-max ! font-serif !text-blue-900 underline"
                            >
                                COMMERCE
                            </Text>
                        </div>
                    </div>

                    {/* Render the profiles in a 4-column layout */}
                    <div className="ml-[74px] mr-[66px] flex flex-wrap justify-center gap-6 md:mx-0">
                        {tutorProfileList.map((d, index) => (
                            <UserProfile 
                                {...d} 
                                key={"teachersList" + index} 
                                className="mb-2 w-[24%] md:w-full" // Adjust the width for 4 columns
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

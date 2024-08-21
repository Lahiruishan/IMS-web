import { Heading } from "components";
import BiologicalScienceProfile from "components/BiologicalScienceProfile";
import React,{Suspense} from "react";

const scienceSubjectsList =[
    {
        biologicalText: (
            <>
            BIOLOGICAL 
            <br />
            SCIENCE
            </>
        ),
        studentsText: "100 + Students",   
    },
    {
        biologicalText:(
            <>
            PHYSICAL 
            <br />
            SCIENCE
            </>
        ),
        studentsText: "100+ Students",
    },
    {
        biologicalText:(
            <>
            ART &   
            <br />
            COMMERCE
            </>
        ),
        studentsText: "100+ Students",
    },
];

export default function ExploreCoursesSection(){
    return(
        <>
        {/* explore courses section */}
        <div className="mt-[102px] flex-col items-center gap-[72px] px-14 md:gap-[54px] md:px-5 sm:gap-9">
            <Heading size="headingxl" as="h4" className="!font-abhayalibreextrabold !text-indigo-a700">
                Explore Coureses by Category.
            </Heading>
            <div className="flex w-[96%] flex-col items-end md:w-full">
                <div className="flex gap-11 self-stretch md:flex-col">
                    <Suspense fallback={<div> Loading feed...</div>}>
                    {scienceSubjectsList.map((d,index) => {
                        <BiologicalScienceColumn {...d} key={"courseList" + index} className="w-[32%] md:w-full"/>

                    })}
                    </Suspense>
                </div>
            </div>
        </div>
        </>
    )
}
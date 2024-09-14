import React from "react";
import { Heading } from "components";
import BiologicalScienceProfile from "components/BiologicalScienceProfile";

const scienceSubjectsList = [
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
        biologicalText: (
            <>
                PHYSICAL 
                <br />
                SCIENCE
            </>
        ),
        studentsText: "100+ Students",
    },
    {
        biologicalText: (
            <>
                ART &   
                <br />
                COMMERCE
            </>
        ),
        studentsText: "100+ Students",
    },
];

export default function ExploreCoursesSection() {
    return (
        <>
            {/* explore courses section */}
            <div className="mt-[150px] flex-col items-center gap-[78px] px-16 md:gap-[64px] md:px-6 sm:gap-10">
                <Heading size="headingxl" as="h4" className="!font-aclonica !text-indigo-a700">
                    Explore Courses by Category.
                </Heading>
                <div className="flex w-[96%] flex-col items-end md:w-full">
                    <div className="flex gap-11 self-stretch md:flex-col">
                        {scienceSubjectsList.map((d, index) => (
                            <div key={"courseList" + index} className="w-[32%] md:w-full">
                                <div>{d.biologicalText}</div>
                                <div>{d.studentsText}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
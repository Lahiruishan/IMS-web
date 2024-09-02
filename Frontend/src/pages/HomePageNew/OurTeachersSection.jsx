import { Heading, Text } from "../../components";
import UserProfile from "../../components/UserProfile";
import React from "react";

const tutorProfileList = [
    {
        userSubjectText: "Combined Maths",
        userSubjectTextDuplicate: "",
        userDescription: (
            <>
                Dilshan Chathuranga 
                <br />
                B.Sc.Phy.(UOJ)
            </>
        ),
        userDescriptionDuplicate: (
            <>
                Dilshan Chathuranga 
                <br />
                B.Sc.Phy.(UOJ)
            </>
        ),
    },
    {
        userSubjectText: "Combined Maths",
        userSubjectTextDuplicate: "",
        userDescription: (
            <>
                Dilshan Chathuranga 
                <br />
                B.Sc.Phy.(UOJ)
            </>
        ),
        userDescriptionDuplicate: (
            <>
                Dilshan Chathuranga 
                <br />
                B.Sc.Phy.(UOJ)
            </>
        ),
    },
    {
        userSubjectText: "Combined Maths",
        userSubjectTextDuplicate: "Combined Maths",
        userDescription: (
            <>
                Dilshan Chathuranga 
                <br />
                B.Sc.Phy.(UOJ)
            </>
        ),
        userDescriptionDuplicate: (
            <>
                Dilshan Chathuranga 
                <br />
                B.Sc.Phy.(UOJ)
            </>
        ),
    }
];

export default function OurTeachersSection() {
    return (
        <>
            {/* Our teachers section */}
            <div className="mt-[134px] px-7 sm:px-5">
                <div className="flex flex-col gap-[34px]">
                    <div className="ml-11 flex flex-col items-start gap-[42px] md:ml-0">
                        <Heading 
                            size="xl" 
                            as="h6" 
                            className="ml-[466px] !font-aclonica  !text-indigo-700 md:ml-0"
                        >
                            Our Teachers
                        </Heading>
                        <div className="relative h-[78px] self-stretch">
                            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[58px] flex-1 bg-indigo-50" />
                            <Text 
                                size="5xl" 
                                as="p" 
                                className="absolute bottom-0 left-[3%] top-0 my-auto h-max !font-aclonica !text-blue-900 underline"
                            > 
                                SCIENCE
                            </Text>
                        </div>
                    </div>
                    <div className="ml-[74px] mr-[66px] flex flex-col items-end md:mx-0">
                        <div className="flex gap-[162px] self-stretch md:flex-col">
                            {tutorProfileList.map((d, index) => (
                                <UserProfile {...d} key={"teachersList" + index} className="mb-2 md:mb-0" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>       
        </>
    );
}

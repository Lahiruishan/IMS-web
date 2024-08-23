import { Text } from "../../components";
import UserProfile1 from "../../components/UserProfile1";
import React, { Suspense } from "react";

const advancedSubjectsList = [
  {
    combinedMathsText: "Combined Maths",
    econText: "Econ",
    businessStudiesText: "Business Studies",
    accountingText: "Accounting",
    descriptionText1: (
      <>
        Thamira Herath
        <br />
        B.Sc.Chem. (U.O.C) C.Chem(i)
      </>
    ),
    descriptionText2: (
      <>
        Thamira Herath
        <br />
        B.Sc.Chem. (U.O.C) C.Chem(i)
      </>
    ),
    descriptionText3: (
      <>
        Thamira Herath
        <br />
        B.Sc.Chem. (U.O.C) C.Chem(i)
      </>
    ),
    descriptionText4: (
      <>
        Thamira Herath
        <br />
        B.Sc.Chem. (U.O.C) C.Chem(i)
      </>
    ),
  },
];

export default function CommerceSection() {
  return (
    <>
      {/* Commerce section */}
      <div className="mb-[70px] mt-7 px-7 sm:px-5">
        <div className="flex flex-col gap-2.5">
          <div className="relative ml-11 h-[78px] md:ml-0">
            <div className="absolute left-0 right-0 top-[4.61px] m-auto h-[58px] flex-1 bg-indigo-50" />
            <Text
              size="text4xl"
              as="p"
              className="absolute bottom-0 left-[4%] top-0 my-auto h-max !font-koulen !text-green-500 underline"
            >
              Commerce
            </Text>
          </div>
          <div className="ml-[74px] mr-[66px] flex gap-[162px] md:mx-0 md:flex-col">
            <Suspense fallback={<div>Loading feed...</div>}>
              {advancedSubjectsList.map((d, index) => (
                <UserProfile1
                  {...d}
                  key={"commerceList" + index}
                  className="mb-2 md:mb-0"
                />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
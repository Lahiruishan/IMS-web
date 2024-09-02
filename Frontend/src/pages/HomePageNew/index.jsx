import React from "react";
import { Helmet } from "react-helmet";
import { Button, Slider } from "../../components";
import Header1 from "../../components/Header1";
import CommerceSection from "./CommerceSection";
import ExploreCoursesSection from "./ExploreCoursesSection";
import HeroSection from "./HeroSection";
import OurTeachersSection from "./OurTeachersSection";
import StatisticsSection from "./StatisticsSection";

export default function HomePageNewPage() {
  const sliderRef = React.useRef(null);

  const items = [
    <div key="1" className="flex flex-col items-center">
      <img src="/images/0.jpg" alt="Image 1" className="w-full h-auto" />
    </div>,
    <div key="2" className="flex flex-col items-center">
      <img src="/images/1.jpg" alt="Image 2" className="w-full h-auto" />
    </div>,
    // Add more slides if needed
  ];

  return (
    <>
      <Helmet>
        <title>IMS-Web</title>
        <meta
          name="description"
          content="Discover our online education platform offering a variety of courses in Biological Science, Physical Science, and Commerce."
        />
      </Helmet>
      <div className="min-h-screen flex flex-col w-full bg-blue_gray-100">
        <Header1 className="w-full bg-indigo-900" />
        <div className="flex flex-col flex-grow">
          <div className="relative mt-[42px] h-[496px] md:h-auto">
            <div className="relative mx-auto w-full">
              <Slider items={items} ref={sliderRef} />
              <div className="absolute left-0 right-0 top-[36%] m-auto flex justify-between gap-5">
                <Button
                  shape="square"
                  onClick={() => sliderRef?.current?.slidePrev()}
                  className="w-[48px] rotate-[-180deg]"
                >
                </Button>
                <Button
                  shape="square"
                  onClick={() => sliderRef?.current?.slideNext()}
                  className="w-[48px]"
                >
                </Button>
              </div>
            </div>
          </div>
          {/* Sections */}
          <div className="flex flex-col flex-grow">
            <HeroSection />
            <StatisticsSection />
            <ExploreCoursesSection />
            <OurTeachersSection />
            <CommerceSection />
          </div>
        </div>
      </div>
    </>
  );
}

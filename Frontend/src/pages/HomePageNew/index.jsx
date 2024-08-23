import React from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Heading, Slider, Text } from "../../components";
import Header1 from "../../components/Header1";
import CommerceSection from "./CommerceSection";
import ExploreCoursesSection from "./ExploreCoursesSection";
import HeroSection from "./HeroSection";
import OurTeachersSection from "./OurTeachersSection";
import StatisticsSection from "./StatisticsSection";

export default function HomePageNewPage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 300000, // 5 min
    beforeChange: (current, next) => setSliderState(next),
  };

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
              <Slider {...settings} ref={sliderRef}>
                <div className="flex flex-col items-center">
                  <Img src="/images/image1.jpg" alt="Image 1" className="w-full h-auto" />
                </div>
                <div className="flex flex-col items-center">
                  <Img src="/images/image2.jpg" alt="Image 2" className="w-full h-auto" />
                </div>
                {/* Add more slides if needed */}
              </Slider>
              <div className="absolute left-0 right-0 top-[36%] m-auto flex justify-between gap-5">
                <Button
                  shape="square"
                  onClick={() => sliderRef?.current?.slickPrev()}
                  className="w-[48px] rotate-[-180deg]"
                >
                  <Img src="/images/img_slide_arrow_right.png" alt="" />
                </Button>
                <Button
                  shape="square"
                  onClick={() => sliderRef?.current?.slickNext()}
                  className="w-[48px]"
                >
                  <Img src="/images/img_slide_arrow_right_44x48.png" alt="" />
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

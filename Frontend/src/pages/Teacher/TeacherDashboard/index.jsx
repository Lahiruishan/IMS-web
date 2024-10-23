import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import {  Text,  Button } from "../../../components";
import IMA from "../../../components/IMA";
import { useNavigate } from 'react-router-dom';
//import Calendar from 'react-calendar'; 
//import 'react-calendar/dist/Calendar.css'; 
import Calendar from "components/calender/calFunctions";

export default function TeacherDashboard() {
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date()); 
  const [events, setEvents] = useState([]);

  // Simulate fetching events from a backend or API
  useEffect(() => {
    // Example of fetching events (replace with actual API call)
    const fetchEvents = () => {
      const mockEvents = [
        { date: '10th Feb', time: '08:00 AM', eventName: '2025 First Theory Class' },
        { date: '15th Mar', time: '10:00 AM', eventName: 'Second Lecture' },
        { date: '20th Apr', time: '12:00 PM', eventName: 'Practical Lab Session' },
      ];
      setEvents(mockEvents); // Set the fetched events
    };

    fetchEvents();
  }, []);

  const handleProfile = () => {
    navigate('/RegistrationForm'); 
  };
  const handleLogout = () => {
    navigate('/StudentLoginPage'); 
  };
  const handleHome = () => {
    navigate('/StudentDashboardPage'); 
  };
  const handleTeachers = () => {
    navigate('/StudentTeachersDetails');
  };
  const handleStudentLearingMaterials = () => {
    navigate('/StudentLearningMaterials');
  };
  const handlePayment = () => {
    navigate('/PaymentsStudents');
  };
  const handleStudentTimeTable = () => {
    navigate('/StudentTimeTable');
  };

  return (
    <>
      <Helmet>
        <title>IMS-web</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full pb-[13px] bg-gradient">
        <div>
          <IMA className="flex md:flex-col justify-between items-start gap-5 bg-indigo-900" />
          <div className="flex md:flex-col justify-center items-start gap-[49px]">
            <div className="h-[825px] w-[17%] md:w-full md:h-auto md:p-5 relative">
              <div className="flex flex-col items-center mt-[65px] ml-[41px] gap-[25px] md:ml-0"></div>
              <div className="w-full h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                <div>
                  <Button shape="square" className="w-full sm:px-5 z-[1] border-black-900 border border-solid" onClick={handleHome}>
                    Home
                  </Button>
                  <div className="h-[52px] mt-[-49px] bg-indigo-100 shadow-bs" />
                </div>
                <div className="flex flex-col mt-[-52px] py-[52px] md:py-5 bg-indigo-300">
                  <Button shape="square" className="w-full sm:px-5" onClick={handleTeachers}>
                    Teachers
                  </Button>
                  <Button shape="square" className="w-full sm:px-5" onClick={handleStudentLearingMaterials}>
                    Learning Materials
                  </Button>
                  <Button shape="square" className="w-full sm:px-5" onClick={handleStudentTimeTable}>
                    Student TimeTable
                  </Button>
                  <Button shape="square" className="w-full sm:px-5" onClick={handlePayment}>
                    Payments
                  </Button>
                  <div className="h-[52px] mb-[408px] bg-indigo-100 shadow-bs" />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-end md:self-stretch mt-[3px] gap-5 md:p-5 flex-1">
              <div className="flex sm:flex-col justify-between items-center w-[79%] md:w-full gap-5">
                <Button size="2xl" as="h3" className="self-end mb-2.5 !text-blue_gray-900">
                  Upcoming Events
                </Button>
                <div className="flex flex-col">
                  <Button as="p" className="flex justify-center items-center h-[35px] pt-[5px] pb-px px-7 sm:px-5 border-black-900 border border-solid bg-blue_gray-100" onClick={handleProfile}>
                    My Profile
                  </Button>
                  <Button as="p" className="flex justify-center items-center h-[35px] px-[35px] py-[3px] sm:px-5 border-black-900 border border-solid bg-blue_gray-100">
                    Settings
                  </Button>
                  <Button as="p" className="flex justify-center items-center h-[35px] px-[35px] py-[3px] sm:px-5 border-black-900 border border-solid bg-blue_gray-100" onClick={handleLogout}>
                    Logout
                  </Button>
                </div>
              </div>

              <div className="flex md:flex-col self-stretch justify-end items-center mr-[13px] gap-[49px] md:mr-0">
                <div className="flex flex-col md:self-stretch gap-8 flex-1">
                  {/* Display Events Dynamically */}
                  {events.map((event, index) => (
                    <div key={index} className="flex sm:flex-col justify-between items-start gap-5 p-1.5 bg-blue-200 shadow-xs rounded-[15px]">
                      <div className="flex justify-between w-[44%] sm:w-full mb-[5px] ml-[19px] gap-5 md:ml-0 flex-wrap">
                        <Text size="s" as="p">
                          {event.date}
                        </Text>
                        <Text size="s" as="p">
                          {event.time}
                        </Text>
                      </div>
                      <Text size="xs" as="p" className="mr-56 md:mr-0">
                        {event.eventName}
                      </Text>
                    </div>
                  ))}
                </div>

                {/* Calendar */}
                {<div className="bg-white p-1 rounded-lg shadow-md" style={{ backgroundColor: 'white',height: '53vh' }}>
                  <Calendar/>
                </div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

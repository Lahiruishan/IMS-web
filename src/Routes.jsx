import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import LoginPage from "pages/LoginPage";
import Dashboard from "pages/Dashboard";
import WebsiteChanges from "pages/WebsiteChange";
import Payments from "pages/Payments"
import PaymentsStudents from "pages/PaymentsStudents"
import PaymentsTeachers from "pages/PaymentsTeachers";
import StudentDetails from "pages/StudentDetails";
import StudentDetailsOne from "pages/StudentDetailsOne";
import StudentDetailsTwo from "pages/StudentDetailsTwo";
import StudentDetailsThree from "pages/StudentDetailsThree";
import TeachersOne from "pages/TeachersOne";
import TeachersTwo from "pages/TeachersTwo";
import WebsiteChange from "pages/WebsiteChange";
import WebsiteChangesHomePage from "pages/WebsiteChangesHomePage";
import WebsiteChangesContactUs from "pages/WebsiteChangesContactUs";
import WebsiteChangesTeachersPage from "pages/WebsiteChangesTeachersPage";
import WebsiteChangesTeachersPersonalPage from "pages/WebsiteChangesTeachersPersonalPage";
import WebsiteChangesTimetablePage from "pages/WebsiteChangesTimetablePage";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/",
     element: <Home /> },
     ,
     {
      path: "LoginPage",
     element:<LoginPage />,
     }
     ,
    {
      path: "Dashboard",
      element: <Dashboard />,
    },
    {
      path: "WebsiteChanges",
      element: <WebsiteChanges />,
    }
    ,
    {
      path: "Payments",
      element: <Payments />,
    },
    {
      path: "PaymentsStudents",
      element: <PaymentsStudents />,
    },
    {
      path: "PaymentsTeachers",
      element: <PaymentsTeachers />,
    },
    {
      path: "StudentDetails",
      element:<StudentDetails/>,
    },
    {
      path:"StudentDetailsOne",
      element:<StudentDetailsOne/>
    },
    {
      path:"StudentDetailsTwo",
      element:<StudentDetailsTwo/>
    },
    {
      path:"StudentDetailsThree",
      element:<StudentDetailsThree/>
    },
    {
      path:"TeachersOne",
      element:<TeachersOne/>
    },
    {
      path:"TeachersTwo",
      element:<TeachersTwo/>
    },
    {
      path:"WebsiteChange",
      element:<WebsiteChange/>
    },
    {
      path:"WebsiteChangesHomePage",
      element:<WebsiteChangesHomePage/>
    },
    {
      path:"WebsiteChangesContactUs",
      element:<WebsiteChangesContactUs/>
    },
    {
      path:"WebsiteChangesTeachersPage",
      element:<WebsiteChangesTeachersPage/>
    },
    {
      path:"WebsiteChangesTeachersPersonalPage",
      element:<WebsiteChangesTeachersPersonalPage/>
    },
    {
      path:"WebsiteChangesTimetablePage",
      element:<WebsiteChangesTimetablePage/>
    }
    

  ]);

  return element;
};

export default ProjectRoutes;

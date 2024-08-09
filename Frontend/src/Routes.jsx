import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/Teacher/TeacherLoginPage";
import StudentDashboard from "./pages/Student/Dashboard";
import WebsiteChanges from "./pages/Admin/WebsiteChange";
import Payments from "./pages/Admin/Payments"
import PaymentsStudents from "./pages/Admin/PaymentsStudents"
import PaymentsTeachers from "./pages/Admin/PaymentsTeachers";
import StudentDetails from "./pages/Admin/StudentDetails";
import StudentTimeTable from "./pages/Student/StudentTimeTable";
import TeachersOne from "./pages/Admin/TeachersChange";
import TeachersTwo from "./pages/Student/TeacherDetails";
import WebsiteChange from "./pages/Admin/WebsiteChange";
import WebsiteChangesHomePage from "./pages/Admin/WebsiteChangesHomePage";
import WebsiteChangesContactUs from "./pages/Admin/WebsiteChangesContactUs";
import WebsiteChangesTeachersPage from "./pages/Admin/WebsiteChangesTeachersPage";
import WebsiteChangesTeachersPersonalPage from "./pages/Admin/WebsiteChangesTeachersPersonalPage";
import WebsiteChangesTimetablePage from "./pages/Admin/WebsiteChangesTimetablePage";
import RegistrationFee from "./pages/Student/StudentRegistrationFee";
import RegistrationForm from "./pages/Student/RegistrationForm";
const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/",
     element: <Home /> ,}
     ,
     {
      path: "LoginPage",
     element:<LoginPage />,
     }
     ,
     {
      path: "RegistrationForm",
     element:<RegistrationForm />,
     },
     {
      path: "RegistrationFee",
     element:<RegistrationFee />,
     },

    {
      path: "StudentDashboard",
      element: <StudentDashboard />,
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
      path:"StudentTimeTable",
      element:<StudentTimeTable />
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

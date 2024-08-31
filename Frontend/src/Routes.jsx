import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
// Admin
import WebsiteChanges from "./pages/Admin/WebsiteChange";
import Payments from "./pages/Admin/Payments"
import PaymentsStudents from "./pages/Admin/PaymentsStudents"
import PaymentsTeachers from "./pages/Admin/PaymentsTeachers";
import StudentDetails from "./pages/Admin/StudentDetails";
import TeachersOne from "./pages/Admin/TeachersChange";
import WebsiteChange from "./pages/Admin/WebsiteChange";
import WebsiteChangesHomePage from "./pages/Admin/WebsiteChangesHomePage";
import WebsiteChangesContactUs from "./pages/Admin/WebsiteChangesContactUs";
import WebsiteChangesTeachersPage from "./pages/Admin/WebsiteChangesTeachersPage";
import WebsiteChangesTeachersPersonalPage from "./pages/Admin/WebsiteChangesTeachersPersonalPage";
import WebsiteChangesTimetablePage from "./pages/Admin/WebsiteChangesTimetablePage";

//Student
import StudentDashboard from "./pages/Student/StudentDashboard";
import StudentTimeTable from "./pages/Student/StudentTimeTable";
import TeachersTwo from "./pages/Student/TeachersDetails";
import RegistrationFee from "./pages/Student/StudentRegistrationFee";
import RegistrationForm from "./pages/Student/RegistrationForm";
import StudentLearningMaterials from "./pages/Student/StudentLearningMaterials/index";
import StudentLoginPage from "pages/Student/StudentLoginPage";


//Teacher
import TeacherLoginPage from "./pages/Teacher/TeacherLoginPage";
import TeacherDashboard from "./pages/Teacher/TeacherDashboard";
import TeacherStudentDetails from "pages/Teacher/TeacherStudentsDetails";


import HomePageNewPage from "./pages/HomePageNew/index";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/",
     element: <Home /> }
     ,
     {
      path: "HomePageNewPage",
     element:<HomePageNewPage />,
     }
     ,
     {
      path: "StudentLoginPage",
     element:<StudentLoginPage />,
     }
     ,
     {
      path: "TeacherLoginPage",
     element:<TeacherLoginPage />,
     },
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
      path: "TeacherDashboard",
      element: <TeacherDashboard />,
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
      path:"StudentLearningMaterials",
      element:<StudentLearningMaterials/>
    }
    ,
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
    ,
    {
      path:"TeacherStudentDetails",
      element:<TeacherStudentDetails/>
    }
    

  ]);

  return element;
};

export default ProjectRoutes;

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ height: "100vh", padding: "20px", backgroundColor: "#232323", color: "white" }}>
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>IMS-WEB Project Pages</h1>
      <p style={{ fontSize: "18px", marginBottom: "30px" }}>
        This is the 3rd Year Project of UOJ-DCS Team-Alpha 2019/2020
      </p>
      <ul style={{ listStyle: "none", padding: "0" }}>
        <li style={{ marginBottom: "10px" }}>
          <Link to="LoginPage" style={{ color: "#87CEFA", textDecoration: "none" }}>LogInPage</Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="RegistrationFee" style={{ color: "#87CEFA", textDecoration: "none" }}>RegistrationFee</Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="RegistrationForm" style={{ color: "#87CEFA", textDecoration: "none" }}>RegistrationForm</Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="StudentDashboard" style={{ color: "#87CEFA", textDecoration: "none" }}>StudentDashboard</Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="Payments" style={{ color: "#87CEFA", textDecoration: "none" }}>Payments</Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="PaymentsStudents" style={{ color: "#87CEFA", textDecoration: "none" }}>PaymentsStudents</Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="PaymentsTeachers" style={{ color: "#87CEFA", textDecoration: "none" }}>PaymentsTeachers</Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="StudentTimeTable" style={{ color: "#87CEFA", textDecoration: "none" }}>StudentTimeTable</Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="StudentDetails" style={{ color: "#87CEFA", textDecoration: "none" }}>StudentDetails</Link>
        </li>
        
        <li style={{ marginBottom: "10px" }}>
          <Link to="StudentDetailsTwo" style={{ color: "#87CEFA", textDecoration: "none" }}>StudentDetailsTwo</Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="TeachersOne" style={{ color: "#87CEFA", textDecoration: "none" }}>TeachersOne</Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="TeachersTwo" style={{ color: "#87CEFA", textDecoration: "none" }}>TeachersTwo</Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="WebsiteChange" style={{ color: "#87CEFA", textDecoration: "none" }}>WebsiteChange</Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="WebsiteChangesContactUs" style={{ color: "#87CEFA", textDecoration: "none" }}>WebsiteChangesContactUs</Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="WebsiteChangesHomePage" style={{ color: "#87CEFA", textDecoration: "none" }}>WebsiteChangesHomePage</Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="WebsiteChangesTeachersPage" style={{ color: "#87CEFA", textDecoration: "none" }}>WebsiteChangesTeachersPage</Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="WebsiteChangesTeachersPersonalPage" style={{ color: "#87CEFA", textDecoration: "none" }}>WebsiteChangesTeachersPersonalPage</Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="WebsiteChangesTimetablePage" style={{ color: "#87CEFA", textDecoration: "none" }}>WebsiteChangesTimetablePage</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;

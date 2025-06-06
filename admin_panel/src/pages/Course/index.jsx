import React from "react";
import CourseList from "../../components/Courselist";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Courseliststats from "../../components/Courseliststats"
import Filterbarcourses from "../../components/Filterbarcourses";

const Course = () => {
  

  return (
    <div className=" min-h-full mt-20">
      <Sidebar/>
      <Header/>
      <div className="lg:ml-[17.5rem]">
      <Courseliststats/>
     
      <CourseList/>
      </div>
     
    </div>
  );
};

export default Course;

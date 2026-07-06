import React from "react";
import CourseCard from "./CourseCard";
import AllCourses from "./AllCourses";

function Courseslists() {
  return (
    <div className="certaficates-container" dir="rtl">
      <div className="certificates-header">
        <span className="title"> دورات جارية:</span>
      </div>
      <CourseCard />
      <div className="certificates-header" style={{ paddingTop: "40px" }}>
        <span className="title"> جميع الدورات :</span>
      </div>
      <AllCourses />
    </div>
  );
}

export default Courseslists;

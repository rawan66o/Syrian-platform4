import React from "react";
import styles from "./ViewCoursesGrid.module.css";
import timeCircle from "../../assets/icons/Time-Circle.svg";
import star from "../../assets/icons/Star.svg";
import { FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { dummyCourses } from "../../store/CourseState";
const ViewCoursesGrid = () => {
  const navigate = useNavigate();
  const courses = dummyCourses;
  return (
    <>
      {" "}
      {courses.map(course => (
        <div key={course.id} className={styles.course_card}>
          <span className={styles.duration_badge}>
            <img src={timeCircle} style={{ all: "revert" }} alt="" /> {course.duration}
          </span>

          <img src={course.img} alt={course.title} />
          <div className={styles.course_info}>
            <h2>{course.title}</h2>
            <div className={styles.info_star_studentCount}>
              <span> {course.studentsCount.toLocaleString()} طالب</span>
              <span>
                {" "}
                {course.rating}
                <img src={star} style={{ all: "revert" }} alt="" />
              </span>
            </div>
            <button
              className={styles.view_button}
              onClick={() => {
                navigate(`/courses/${course.id}`);
              }}
            >
              {" "}
              <FaChevronRight className={styles.icon} />
              عرض الكورس
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ViewCoursesGrid;

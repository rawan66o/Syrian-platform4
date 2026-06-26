import React from "react";
import { images } from "../assets/images";
import { CourseData } from "../CourseData";
import "../assets/styles/CourseCard.css"; // تأكد من استيراد ملف الـ CSS الخاص بالكورس

function AllCourses() {
  return (
    /* حاوية شبكية تجمع كل الكروت بجانب بعضها */
    <div className="certificates-grid" dir="rtl">
      {CourseData.map((course) => (
        /* إدخال الـ key هنا لمنع تحذيرات React */
        <div className="course-card-container" key={course.id}>
          {/* 1. القسم العلوي: القائمة، العنوان، والصورة الدائرية */}
          <div className="course-card-header" dir="ltr">
            <button className="menu-dots-btn">
              <img src={images.threePoints} alt="Menu" />
            </button>
            <h3 className="course-card-title" dir="rtl">
              {course.title}
            </h3>
            <div className="course-image-circle">
              <img src={course.image} alt="Course" />
            </div>
          </div>

          {/* 2. قسم شريط التقدم */}
          <div className="course-progress-section">
            <div className="progress-text-wrapper">
              <span>نسبة التقدم الحالية </span>
              <span className="progress-percentage" dir="rtl">
                %{course.progress}
              </span>
            </div>
            <div className="progress-bar-bg">
              <div
                className="progress-bar-fill"
                style={{
                  width: `${course.progress}%`,
                  backgroundColor: "#34C759",
                }}
              ></div>
            </div>
          </div>

          {/* 3. قسم الإحصائيات (الدروس والوقت) */}
          <div className="course-stats-row">
            <div className="stat-item">
              <img src={images.courses2} alt="Lessons" className="stat-icon" />
              <span>
                {course.lessonsCompleted} / {course.totalLessons} درس
              </span>
            </div>
            <div className="stat-item">
              <img src={images.clock} alt="Duration" className="stat-icon" />
              <span>{course.duration}</span>
            </div>
          </div>

          {/* 4. القسم السفلي: زر متابعة الدورة */}
          <div className="course-card-footer">
            <button className="view-course-btn">
              <span>عرض الدورة</span>
              <span className="arrow-left">
                <img
                  src={images.vector1}
                  alt="Arrow"
                  className="arrow-left-svg"
                />
              </span>
            </button>
            <span className="status">{course.status}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllCourses;

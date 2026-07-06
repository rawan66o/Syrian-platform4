import React from "react";
import { images } from "../assets/images";
import "../assets/styles/CourseCard.css"; // تأكد من إنشاء الملف وتسميته بشكل صحيح

function CourseCard({ courseData }) {
  // بيانات افتراضية مطابقة للصورة في حال عدم تمريرها
  const data = courseData || {
    title: "كورس تصميم Ui UX للتطبيقات و المواقع الالكترونية.",
    progress: 78,
    lessonsCompleted: 18,
    totalLessons: 25,
    duration: "25 ساعة",
    image: images.voluntaryproject, // استبدلها بصورة الكورس المناسبة
  };

  return (
    <div className="course-card-container" dir="rtl">
      {/* 1. القسم العلوي: القائمة، العنوان، والصورة الدائرية */}
      <div className="course-card-header" dir="ltr">
        <button className="menu-dots-btn">
          <img src={images.threePoints} alt="Menu" />
        </button>
        <h3 className="course-card-title" dir="rtl">
          {data.title}
        </h3>
        <div className="course-image-circle">
          <img src={data.image} alt="Course" />
        </div>
      </div>

      {/* 2. قسم شريط التقدم */}
      <div className="course-progress-section">
        <div className="progress-text-wrapper">
          <span>نسبة التقدم الحالية : </span>
          <span className="progress-percentage" dir="rtl">
            %{data.progress}
          </span>
        </div>
        <div className="progress-bar-bg">
          <div
            className="progress-bar-fill"
            style={{ width: `${data.progress}%` }}
          ></div>
        </div>
      </div>

      {/* 3. قسم الإحصائيات (الدروس والوقت) */}
      <div className="course-stats-row">
        <div className="stat-item">
          <img
            src={images.courses2 || "أيقونة_الدروس"}
            alt="Lessons"
            className="stat-icon"
          />
          <span>
            {data.lessonsCompleted} / {data.totalLessons} درس
          </span>
        </div>
        <div className="stat-item">
          <img
            src={images.clock || "أيقونة_الوقت"}
            alt="Duration"
            className="stat-icon"
          />
          <span>{data.duration}</span>
        </div>
      </div>

      {/* 4. القسم السفلي: زر متابعة الدورة */}
      <div className="course-card-footer">
        <button className="continue-course-btn">
          <span>متابعة الدورة</span>
          <span className="arrow-left">
            <img src={images.vector1} alt="Arrow" className="arrow-left-svg" />
          </span>
        </button>
      </div>
    </div>
  );
}

export default CourseCard;

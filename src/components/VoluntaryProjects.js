import React from "react";
import { voluntaryProjectsData } from "../certaficatesData";
import { images } from "../assets/images";
import { useState } from "react";
import "../assets/styles/Certaficates.css";
import "../assets/styles/VoluntaryProject.css";
import "../index.css";
function VoluntaryProjects() {
  // حالة لمعرفة الفلتر الحالي (الأحدث أو الأقدم) لتغيير ستايل الأزرار العلوية
  const [filter, setFilter] = useState("newest");
  return (
    <div className="certaficates-container" dir="rtl">
      <div className="certificates-header">
        <span className="title">المشاريع التطوعية</span>
        <div className="header-btns">
          <button
            className={`filter-btn ${filter === "newest" ? "active" : ""}`}
            onClick={() => setFilter("newest")}
          >
            من الأحدث
          </button>
          <button
            className={`filter-btn ${filter === "oldest" ? "active" : ""}`}
            onClick={() => setFilter("oldest")}
          >
            الأقدم
          </button>
        </div>
      </div>
      <div className="certificates-grid">
        {voluntaryProjectsData.map((cert) => (
          <div className="certificate-card" key={cert.id}>
            {/* 1. القسم العلوي: العنوان والصورة الدائرية الكبيرة */}
            <div className="card-top" dir="ltr">
              <h3 className="card-title" dir="rtl">
                {cert.title}
              </h3>
              <div className="cert-thumbnail">
                {/* استخدم صورة المشروع القادمة من البيانات أو صورة افتراضية */}
                <img
                  src={cert.image || images.certaficate1}
                  alt="Project Preview"
                />
              </div>
            </div>

            {/* 2. القسم الأوسط: المتطوعون والتاريخ */}
            <div className="card-meta-section">
              {/* حاوية المتطوعين */}
              <div className="volunteers-block" dir="ltr">
                <div className="avatar-group">
                  {cert.volunteers?.slice(0, 3).map((v, index) => (
                    <img
                      key={index}
                      src={v.image}
                      className="avatar-img"
                      alt="volunteer"
                    />
                  ))}
                  <span className="plus-sign">+</span>
                </div>
                <span className="volunteers-count" dir="rtl">
                  <strong>{cert.volunteersCount || 22}</strong> متطوع
                </span>
              </div>

              {/* حاوية التاريخ مع الأيقونة */}
              <div className="date-block">
                <img
                  src={images.calendar}
                  alt="Calendar"
                  className="calendar-icon-svg"
                />
                <span className="date-text-span">{cert.date}</span>
              </div>
            </div>

            {/* 3. القسم السفلي: زر عرض المشروع الشفاف */}
            <div className="card-footer-section">
              <button className="view-project-full-btn">
                <span>عرض المشروع</span>
                <img
                  src={images.vector1}
                  alt="Arrow"
                  className="arrow-left-svg"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VoluntaryProjects;

import React from "react";
import { useState } from "react";
import { images } from "../assets/images";
import { certaficatesData } from "../certaficatesData.js";
import "../assets/styles/Certaficates.css";

function Certaficates() {
  // حالة لمعرفة الفلتر الحالي (الأحدث أو الأقدم) لتغيير ستايل الأزرار العلوية
  const [filter, setFilter] = useState("newest");
  return (
    <div className="certaficates-container" dir="rtl">
      <div className="certificates-header">
        <span className="title">الشهادات</span>
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
        {certaficatesData.map((cert) => (
          <div className="certificate-card" key={cert.id}>
            {/* محتوى البطاقة العلوي (النص والصورة المصغرة للشهادة) */}
            <div className="card-top" dir="ltr">
              <p className="card-title" dir="rtl">
                {cert.title}
              </p>
              <div className="cert-thumbnail">
                {/* استبدل images.certPreview بأيقونة أو صورة الشهادة المصغرة لديك */}
                <img src={images.certaficate1} alt="certificate preview" />
              </div>
            </div>

            {/* تاريخ الشهادة */}
            <div className="card-date">
              <span>{cert.date}</span>
              <img
                src={images.calendar || "أيقونة_التقويم"}
                alt="calendar"
                className="icon-calendar"
              />
            </div>

            {/* أزرار التحكم بالبطاقة في الأسفل */}
            <div className="card-actions">
              <button className="btn-download">
                <span>التنزيل كـ PDF</span>
                <img src={images.download || "أيقونة_التحميل"} alt="download" />
              </button>

              <button className="btn-view">
                <span>عرض الشهادة</span>
                <img src={images.vector1} className="arrow-icon" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="empty"></div>
    </div>
  );
}

export default Certaficates;

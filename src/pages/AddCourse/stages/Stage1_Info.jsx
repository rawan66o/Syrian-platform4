import React, { useRef } from "react";
import { useCourse } from "../context/CourseContext";
import "./stages.css";

const Stage1_Info = () => {
  const { courseData, setCourseData } = useCourse();
  const fileInputRef = useRef(null);

  const handleChange = (field, value) => {
    setCourseData({ ...courseData, [field]: value });
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleChange("coverImage", e.target.files[0]);
    }
  };

  return (
    <div className="stage-container">
      <div className="main-card">
        <div className="form-group">
          <label className="input-label">اسم الدورة</label>
          <span className="input-hint">
            من فضلك يجب أن يكون الاسم معبراً ولا يتجاوز 30 حرف.
          </span>
          <input
            type="text"
            className="custom-input"
            placeholder="دورة لغة انجليزية"
            value={courseData.title}
            onChange={(e) => handleChange("title", e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="input-label">وصف الدورة</label>
          <textarea
            className="custom-textarea"
            placeholder="وصف الدورة كامل ومعبر"
            rows="4"
            value={courseData.description}
            onChange={(e) => handleChange("description", e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="input-label">صورة غلاف الدورة</label>
          <span className="input-hint">
            من فضلك يجب أن تكون الصورة معبرة ومناسبة مع الاسم.
          </span>
          <div className="upload-box" onClick={handleImageClick}>
            <div className="upload-icon">
              <div className="upload-plus-box">
                <span>+</span>
              </div>
            </div>
            {courseData.coverImage && (
              <span className="input-hint" style={{ color: "#6DCDE5" }}>
                {courseData.coverImage.name}
              </span>
            )}
            {!courseData.coverImage && (
              <span className="input-hint">اضغط لرفع الصورة</span>
            )}
          </div>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>

        <div className="form-group">
          <label className="input-label">تصنيف الكورس</label>
          <select
            className="custom-select"
            value={courseData.category}
            onChange={(e) => handleChange("category", e.target.value)}
          >
            <option>UI / UX Designer</option>
            <option>Web Development</option>
            <option>Mobile Development</option>
            <option>Data Science</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Stage1_Info;

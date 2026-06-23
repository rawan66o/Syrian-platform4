import React, { useState, useRef } from "react";
import Navbar from "../../components/layout/Navbar";
import "./AddVolunteerProjectPage.css";

const AddVolunteerProjectPage = ({ onBack }) => {
  const [projectData, setProjectData] = useState({
    title: "",
    volunteersCount: "",
    startDate: "",
    coverImage: null,
    shortDescription: "",
    executorLogo: null,
    fullDescription: "",
  });

  const [errors, setErrors] = useState({});
  const coverInputRef = useRef(null);
  const logoInputRef = useRef(null);

  const handleChange = (field, value) => {
    setProjectData({ ...projectData, [field]: value });
    if (errors[field]) setErrors({ ...errors, [field]: "" });
  };

  const handleCoverClick = () => coverInputRef.current.click();
  const handleLogoClick = () => logoInputRef.current.click();

  const handleCoverChange = (e) => {
    if (e.target.files?.[0]) handleChange("coverImage", e.target.files[0]);
  };

  const handleLogoChange = (e) => {
    if (e.target.files?.[0]) handleChange("executorLogo", e.target.files[0]);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!projectData.title.trim()) newErrors.title = "عنوان المشروع مطلوب";
    else if (projectData.title.length > 30) newErrors.title = "عنوان المشروع لا يتجاوز 30 حرف";
    if (!projectData.volunteersCount) newErrors.volunteersCount = "عدد المتطوعين المطلوبين مطلوب";
    if (!projectData.startDate) newErrors.startDate = "تاريخ بدء المشروع مطلوب";
    if (!projectData.shortDescription.trim()) newErrors.shortDescription = "الوصف القصير مطلوب";
    if (!projectData.fullDescription.trim()) newErrors.fullDescription = "الوصف الكامل للمشروع مطلوب";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      alert("الرجاء تعبئة جميع الحقول المطلوبة بشكل صحيح");
      return;
    }
    console.log("تم نشر المشروع:", projectData);
    alert("✅ تم نشر المشروع بنجاح!");
    setProjectData({
      title: "",
      volunteersCount: "",
      startDate: "",
      coverImage: null,
      shortDescription: "",
      executorLogo: null,
      fullDescription: "",
    });
    setErrors({});
  };

  const dateOptions = [
    "اختر تاريخ",
    "15 كانون الثاني 2025",
    "20 شباط 2025",
    "10 آذار 2025",
    "5 نيسان 2025",
    "22 أيار 2025",
    "1 حزيران 2025",
    "15 تموز 2025",
    "20 آب 2025",
    "10 أيلول 2025",
    "5 تشرين الأول 2025",
    "15 تشرين الثاني 2025",
    "20 كانون الأول 2025",
  ];

  return (
    <div className="add-volunteer-page">
      <Navbar />
      <div className="add-volunteer-container">
        <h1 className="page-title">:إضافة مشروع تطوعي جديد</h1>
        <div className="main-card">
          <div className="form-container">
            {/* عنوان المشروع */}
            <div className="form-group">
              <label className="input-label">عنوان المشروع</label>
              <p className="input-hint">من فضلك يجب أن يكون الاسم معبراً ولا يتجاوز 30 حرف.</p>
              <input type="text" className={`custom-input ${errors.title ? "error" : ""}`} placeholder="دورة لغة انجليزية" value={projectData.title} onChange={(e) => handleChange("title", e.target.value)} maxLength={30} />
              {errors.title && <span className="error-message">{errors.title}</span>}
            </div>

            {/* :عدد المتطوعين المطلوبين */}
            <div className="form-group">
              <label className="input-label">:عدد المتطوعين المطلوبين</label>
              <input type="number" className={`custom-input ${errors.volunteersCount ? "error" : ""}`} placeholder="24" value={projectData.volunteersCount} onChange={(e) => handleChange("volunteersCount", e.target.value)} min="1" />
              {errors.volunteersCount && <span className="error-message">{errors.volunteersCount}</span>}
            </div>

            {/* تحديد موعد بدأ المشروع */}
            <div className="form-group">
              <label className="input-label">تحديد موعد بدأ المشروع</label>
              <select className={`custom-select ${errors.startDate ? "error" : ""}`} value={projectData.startDate} onChange={(e) => handleChange("startDate", e.target.value)}>
                {dateOptions.map((opt, idx) => <option key={idx} value={opt}>{opt}</option>)}
              </select>
              {errors.startDate && <span className="error-message">{errors.startDate}</span>}
            </div>

            {/* صورة الغلاف */}
            <div className="form-group">
              <label className="input-label">صورة الغلاف</label>
              <p className="input-hint">من فضلك يجب أن تكون الصورة معبرة ومناسبة مع الاسم.</p>
              <div className="upload-box" onClick={handleCoverClick}>
                <div className="upload-icon"><div className="upload-plus-box"><span>+</span></div></div>
                {projectData.coverImage && <span className="upload-filename">{projectData.coverImage.name}</span>}
              </div>
              <input type="file" ref={coverInputRef} style={{ display: "none" }} accept="image/*" onChange={handleCoverChange} />
            </div>

            {/* وصف قصير للمشروع */}
            <div className="form-group">
              <label className="input-label">وصف قصير للمشروع</label>
              <p className="input-hint">يجب أن لا يتجاوز 50 حرف.</p>
              <textarea className={`custom-textarea ${errors.shortDescription ? "error" : ""}`} placeholder="وصف الدورة كامل ومعبر" rows="3" maxLength={50} value={projectData.shortDescription} onChange={(e) => handleChange("shortDescription", e.target.value)} />
              <div className="char-counter">{projectData.shortDescription.length}/50 حرف</div>
              {errors.shortDescription && <span className="error-message">{errors.shortDescription}</span>}
            </div>

            {/* :الجهة المنفذة */}
            <div className="form-group">
              <label className="input-label">:الجهة المنفذة</label>
              <p className="input-hint">من فضلك يجب أن تكون الصورة معبرة ومناسبة مع الاسم.</p>
              <div className="upload-box" onClick={handleLogoClick}>
                <div className="upload-icon"><div className="upload-plus-box"><span>+</span></div></div>
                {projectData.executorLogo && <span className="upload-filename">{projectData.executorLogo.name}</span>}
              </div>
              <input type="file" ref={logoInputRef} style={{ display: "none" }} accept="image/*" onChange={handleLogoChange} />
            </div>

            {/* وصف المشروع الكامل */}
            <div className="form-group">
              <label className="input-label">وصف المشروع الكامل</label>
              <textarea className={`custom-textarea ${errors.fullDescription ? "error" : ""}`} placeholder="وصف الدورة كامل ومعبر" rows="8" value={projectData.fullDescription} onChange={(e) => handleChange("fullDescription", e.target.value)} />
              {errors.fullDescription && <span className="error-message">{errors.fullDescription}</span>}
            </div>
          </div>
        </div>
      </div>

      {/* الأزرار السفلية */}
      <div className="fixed-footer">
        <div className="footer-buttons">
          <button className="btn-publish" onClick={handleSubmit}>نشر المشروع</button>
          <button className="btn-prev" onClick={onBack}>السابق</button>
        </div>
      </div>
    </div>
  );
};

export default AddVolunteerProjectPage;
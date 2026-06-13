import React, { useState, useEffect } from "react";
import { useCourse } from "../context/CourseContext";
import "./stages.css";

const Stage3_UnitForm = ({ unitId, onSave, onAddLesson, onAddQuiz }) => {
  const { units, updateUnit } = useCourse();
  const currentUnit = units.find((u) => u.id === unitId);

  const [unitName, setUnitName] = useState(currentUnit?.name || "");
  const [unitDescription, setUnitDescription] = useState(
    currentUnit?.description || "",
  );

  useEffect(() => {
    if (currentUnit) {
      setUnitName(currentUnit.name || "");
      setUnitDescription(currentUnit.description || "");
    }
  }, [currentUnit]);

  const handleSave = () => {
    if (currentUnit) {
      updateUnit(currentUnit.id, "name", unitName);
      updateUnit(currentUnit.id, "description", unitDescription);
    }
    onSave();
  };

  // تحويل الرقم إلى نص عربي (الأولى، الثانية، الثالثة...)
  const getUnitNumberText = (num) => {
    const unitsText = [
      "الأولى",
      "الثانية",
      "الثالثة",
      "الرابعة",
      "الخامسة",
      "السادسة",
    ];
    return unitsText[num - 1] || `رقم ${num}`;
  };

  const unitNumber = units.findIndex((u) => u.id === unitId) + 1;

  return (
    <div className="stage-container">
      {/* البطاقة الرئيسية - منزلة 90 */}
      <div className="main-card unit-form-card">
        <h2 className="unit-title-header-center">
          الوحدة {getUnitNumberText(unitNumber)}
        </h2>

        <div className="form-group">
          <label className="input-label">اسم الوحدة</label>
          <span className="input-hint">
            من فضلك يجب أن يكون الاسم معبراً ولا يتجاوز 30 حرف.
          </span>
          <input
            type="text"
            className="custom-input"
            placeholder="دورة لغة انجليزية"
            value={unitName}
            onChange={(e) => setUnitName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="input-label">وصف الوحدة</label>
          <textarea
            className="custom-textarea"
            placeholder="وصف الدورة كامل ومعبر"
            rows="4"
            value={unitDescription}
            onChange={(e) => setUnitDescription(e.target.value)}
          />
        </div>

        {/* أزرار الإضافة - منزلة 90 حسب التصميم الجديد */}
        <div className="unit-lesson-buttons">
          <button
            className="btn-add-lesson-new"
            onClick={() => {
              handleSave();
              onAddLesson();
            }}
          >
            اضافة درس
          </button>
          <button
            className="btn-add-quiz-new"
            onClick={() => {
              handleSave();
              onAddQuiz();
            }}
          >
            اضافة اختبار
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stage3_UnitForm;
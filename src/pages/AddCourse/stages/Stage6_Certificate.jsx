import React from "react";
import { useCourse } from "../context/CourseContext";
import "./stages.css";
import "./Stage6_Certificate.css";

const Stage6_Certificate = () => {
  const { units, certificate, setCertificate } = useCourse();

  // جمع كل الاختبارات من جميع الوحدات
  const allQuizzes = units.flatMap((unit, unitIdx) =>
    unit.quizzes.map((quiz, quizIdx) => ({
      id: quiz.id,
      name: `الاختبار ${["الأول", "الثاني", "الثالث", "الرابع", "الخامس", "السادس"][quizIdx] || quizIdx + 1}`,
      unitName: unit.name || `الوحدة ${unitIdx + 1}`,
      questionCount: quiz.questions?.length || 0,
    })),
  );

  return (
    <div className="stage-container">
      <div className="main-card">
        {/* رفع شهادة الكورس - بنفس شكل الصورة */}
        <div className="form-group">
          <label className="input-label">رفع شهادة الكورس</label>
          <div
            className="upload-box-certificate"
            onClick={() => document.getElementById("certificate-input").click()}
          >
            <div className="upload-icon-certificate">
              <div className="upload-plus-box">
                <span className="upload-plus">+</span>
              </div>
            </div>
            <span className="upload-hint-text">
              {certificate ? certificate.name : "اضغط لرفع الشهادة"}
            </span>
          </div>
          <input
            type="file"
            id="certificate-input"
            style={{ display: "none" }}
            onChange={(e) => setCertificate(e.target.files[0])}
          />
        </div>

        {/* معاينة الاختبارات - حسب الصورة */}
        <div className="form-group">
          <div className="quizzes-preview-title">معاينة الاختبارات</div>

          {allQuizzes.length === 0 ? (
            <div className="empty-quizzes-message">
              لا توجد اختبارات مضافة بعد
            </div>
          ) : (
            <div className="quizzes-list-container">
              {allQuizzes.map((quiz) => (
                <div key={quiz.id} className="quiz-preview-card">
                  {/* اسم الاختبار (على اليمين مثل الصورة) */}
                  <div className="quiz-name-section">
                    <div className="quiz-icon-box">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M4 2H16C17.1 2 18 2.9 18 4V16C18 17.1 17.1 18 16 18H4C2.9 18 2 17.1 2 16V4C2 2.9 2.9 2 4 2Z"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                        />
                        <path
                          d="M7 6H13"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M7 10H13"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M7 14H10"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <span className="quiz-name-text">{quiz.name}</span>
                  </div>

                  {/* عدد الأسئلة (في المنتصف مثل الصورة) */}
                  <div className="quiz-count-box">
                    <span className="quiz-count-number">
                      {quiz.questionCount}
                    </span>
                    <span className="quiz-count-label">عدد الأسئلة</span>
                  </div>

                  {/* زر تعديل (على اليسار مثل الصورة) */}
                  <button className="quiz-edit-button">
                    <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                      <path
                        d="M12.75 2.25L15.75 5.25L5.25 15.75H2.25V12.75L12.75 2.25Z"
                        stroke="#072127"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                      <path
                        d="M9.75 3.75L14.25 8.25"
                        stroke="#072127"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    تعديل
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Stage6_Certificate;

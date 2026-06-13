import React, { useState } from "react";
import { useCourse } from "../context/CourseContext";
import "./stages.css";

const Stage4_LessonForm = ({ onSave, onAddAnotherLesson, onAddQuiz }) => {
  const {
    units,
    updateLesson,
    addLesson,
    addQuiz,
    updateQuiz,
    addQuestion,
    updateQuestion,
    addQuestionOption,
    updateQuestionOption,
    deleteQuestion,
    addUnit,
  } = useCourse();

  const handleLessonChange = (unitId, lessonId, field, value) => {
    updateLesson(unitId, lessonId, field, value);
  };

  const handleAddNewLesson = (unitId) => {
    addLesson(unitId);
    if (onAddAnotherLesson) onAddAnotherLesson();
  };

  const handleAddQuiz = (unitId) => {
    addQuiz(unitId);
    if (onAddQuiz) onAddQuiz();
  };

  const handleQuizChange = (unitId, quizId, field, value) => {
    updateQuiz(unitId, quizId, field, value);
  };

  const handleAddQuestion = (unitId, quizId) => {
    addQuestion(unitId, quizId);
  };

  const handleQuestionChange = (unitId, quizId, questionId, field, value) => {
    updateQuestion(unitId, quizId, questionId, field, value);
  };

  const handleAddOption = (unitId, quizId, questionId) => {
    addQuestionOption(unitId, quizId, questionId);
  };

  const handleOptionChange = (
    unitId,
    quizId,
    questionId,
    optionIndex,
    value,
  ) => {
    updateQuestionOption(unitId, quizId, questionId, optionIndex, value);
  };

  const handleDeleteQuestion = (unitId, quizId, questionId) => {
    deleteQuestion(unitId, quizId, questionId);
  };

  const handleAddUnit = () => {
    addUnit();
  };

  const getUploadLabel = (lessonType) => {
    switch (lessonType) {
      case "pdf":
        return "رفع (ملف PDF) الدرس";
      case "live":
        return "رفع (رابط البث المباشر) الدرس";
      default:
        return "رفع (فيديو) الدرس";
    }
  };

  const getTitleFieldLabel = (lessonType) => {
    switch (lessonType) {
      case "pdf":
        return "عنوان ملف PDF";
      case "live":
        return "عنوان رابط البث المباشر";
      default:
        return "عنوان الفيديو";
    }
  };

  const handleUploadClick = (lessonId) => {
    document.getElementById(`upload-${lessonId}`).click();
  };

  const handleFileChange = (lessonId, e) => {
    const unit = units.find((u) => u.lessons.some((l) => l.id === lessonId));
    if (unit && e.target.files && e.target.files[0]) {
      updateLesson(unit.id, lessonId, "content", e.target.files[0]);
    }
  };

  return (
    <div className="stage-container">
      <div className="main-card lesson-form-card">
        <h2 className="unit-title-header-center">إدارة الوحدات والدروس</h2>

        {/* عرض جميع الوحدات */}
        {units.map((unit, unitIdx) => (
          <div key={unit.id} className="unit-section">
            <h3 className="unit-title-header-center">
              الوحدة {unitIdx + 1}: {unit.name || "غير محدد"}
            </h3>

            <div className="unit-readonly-info">
              <div className="info-row">
                <span className="info-label">اسم الوحدة:</span>
                <span className="info-value">{unit.name || "غير محدد"}</span>
              </div>
              <div className="info-row">
                <span className="info-label">وصف الوحدة:</span>
                <span className="info-value">
                  {unit.description || "غير محدد"}
                </span>
              </div>
            </div>

            {/* عرض جميع الدروس للوحدة - منزلة 94 */}
            {unit.lessons.map((lesson, idx) => (
              <div key={lesson.id} className="lesson-internal-box">
                <h4 className="lesson-number-title">الدرس {idx + 1}</h4>

                <div className="form-group">
                  <label className="input-label">عنوان الدرس</label>
                  <span className="input-hint">
                    هذا هو العنوان المختصر للدرس (يظهر في القائمة الجانبية)
                  </span>
                  <input
                    type="text"
                    className="custom-input"
                    placeholder="دورة لغة انجليزية"
                    value={lesson.title}
                    onChange={(e) =>
                      handleLessonChange(
                        unit.id,
                        lesson.id,
                        "title",
                        e.target.value,
                      )
                    }
                  />
                </div>

                <div className="form-group">
                  <label className="input-label text-center">
                    اختر نوع الدرس (فيديو / ملف / رابط البث المباشر)
                  </label>
                  <div className="lesson-type-radio-group">
                    <label className="lesson-type-radio-item">
                      <input
                        type="radio"
                        name={`lessonType-${lesson.id}`}
                        checked={lesson.type === "video"}
                        onChange={() =>
                          handleLessonChange(
                            unit.id,
                            lesson.id,
                            "type",
                            "video",
                          )
                        }
                      />
                      <span>فيديو</span>
                    </label>
                    <label className="lesson-type-radio-item">
                      <input
                        type="radio"
                        name={`lessonType-${lesson.id}`}
                        checked={lesson.type === "live"}
                        onChange={() =>
                          handleLessonChange(unit.id, lesson.id, "type", "live")
                        }
                      />
                      <span>رابط بث مباشر</span>
                    </label>
                    <label className="lesson-type-radio-item">
                      <input
                        type="radio"
                        name={`lessonType-${lesson.id}`}
                        checked={lesson.type === "pdf"}
                        onChange={() =>
                          handleLessonChange(unit.id, lesson.id, "type", "pdf")
                        }
                      />
                      <span>ملف PDF</span>
                    </label>
                  </div>
                </div>

                <div className="form-group">
                  <label className="input-label">
                    {getUploadLabel(lesson.type)}
                  </label>
                  <div
                    className="upload-box-cyan"
                    onClick={() => handleUploadClick(lesson.id)}
                  >
                    <div className="upload-icon-cyan">
                      <div className="upload-plus-box">
                        <span>+</span>
                      </div>
                    </div>
                    {lesson.content && (
                      <span className="upload-filename">
                        {lesson.content.name}
                      </span>
                    )}
                  </div>
                  <input
                    type="file"
                    id={`upload-${lesson.id}`}
                    style={{ display: "none" }}
                    accept={
                      lesson.type === "pdf"
                        ? ".pdf"
                        : lesson.type === "live"
                          ? ""
                          : "video/*"
                    }
                    onChange={(e) => handleFileChange(lesson.id, e)}
                  />
                </div>

                <div className="form-group">
                  <label className="input-label">
                    {getTitleFieldLabel(lesson.type)}
                  </label>
                  <input
                    type="text"
                    className="custom-input"
                    placeholder="دورة لغة انجليزية"
                    value={lesson.videoTitle}
                    onChange={(e) =>
                      handleLessonChange(
                        unit.id,
                        lesson.id,
                        "videoTitle",
                        e.target.value,
                      )
                    }
                  />
                </div>

                {lesson.type === "live" && (
                  <>
                    <div className="form-group">
                      <label className="input-label">رابط البث المباشر</label>
                      <input
                        type="text"
                        className="custom-input"
                        placeholder="https://..."
                        value={lesson.liveLink || ""}
                        onChange={(e) =>
                          handleLessonChange(
                            unit.id,
                            lesson.id,
                            "liveLink",
                            e.target.value,
                          )
                        }
                      />
                    </div>
                    <div className="form-group">
                      <label className="input-label">تاريخ البث</label>
                      <input
                        type="date"
                        className="custom-input"
                        value={lesson.liveDate || ""}
                        onChange={(e) =>
                          handleLessonChange(
                            unit.id,
                            lesson.id,
                            "liveDate",
                            e.target.value,
                          )
                        }
                      />
                    </div>
                    <div className="form-group">
                      <label className="input-label">مدة البث (دقائق)</label>
                      <input
                        type="number"
                        className="custom-input"
                        placeholder="60"
                        value={lesson.liveDuration || ""}
                        onChange={(e) =>
                          handleLessonChange(
                            unit.id,
                            lesson.id,
                            "liveDuration",
                            e.target.value,
                          )
                        }
                      />
                    </div>
                  </>
                )}
              </div>
            ))}

            {/* عرض جميع الاختبارات للوحدة */}
            {unit.quizzes.map((quiz, idx) => (
              <div key={quiz.id} className="lesson-internal-box">
                <h4 className="lesson-number-title">الاختبار {idx + 1}</h4>

                <div className="form-group">
                  <label className="input-label">اسم الاختبار</label>
                  <input
                    type="text"
                    className="custom-input"
                    value={quiz.name}
                    onChange={(e) =>
                      handleQuizChange(unit.id, quiz.id, "name", e.target.value)
                    }
                  />
                </div>

                {/* الأسئلة - منزلة 93 */}
                {quiz.questions.map((question, qIdx) => (
                  <div key={question.id} className="question-item-card">
                    <div className="form-group">
                      <label className="input-label">السؤال {qIdx + 1}</label>
                      <input
                        type="text"
                        className="custom-input"
                        placeholder="نص السؤال"
                        value={question.text}
                        onChange={(e) =>
                          handleQuestionChange(
                            unit.id,
                            quiz.id,
                            question.id,
                            "text",
                            e.target.value,
                          )
                        }
                      />
                    </div>

                    <div className="form-group">
                      <label className="input-label">نوع السؤال</label>
                      <select
                        className="custom-input"
                        value={question.type}
                        onChange={(e) =>
                          handleQuestionChange(
                            unit.id,
                            quiz.id,
                            question.id,
                            "type",
                            e.target.value,
                          )
                        }
                      >
                        <option value="multiple">اختيار من متعدد</option>
                        <option value="text">نصي</option>
                      </select>
                    </div>

                    {question.type === "multiple" && (
                      <div className="form-group">
                        <label className="input-label">الخيارات</label>
                        {question.options.map((option, oIdx) => (
                          <div key={oIdx} className="option-row">
                            <input
                              type="text"
                              className="custom-input option-input"
                              placeholder={`خيار ${oIdx + 1}`}
                              value={option}
                              onChange={(e) =>
                                handleOptionChange(
                                  unit.id,
                                  quiz.id,
                                  question.id,
                                  oIdx,
                                  e.target.value,
                                )
                              }
                            />
                            <button
                              type="button"
                              className="btn-delete-option"
                              onClick={() => {
                                if (question.options.length > 2) {
                                  const newOptions = question.options.filter(
                                    (_, idx) => idx !== oIdx,
                                  );
                                  updateQuestion(
                                    unit.id,
                                    quiz.id,
                                    question.id,
                                    "options",
                                    newOptions,
                                  );
                                }
                              }}
                            >
                              حذف
                            </button>
                          </div>
                        ))}
                        <button
                          type="button"
                          className="btn-add-option"
                          onClick={() =>
                            handleAddOption(unit.id, quiz.id, question.id)
                          }
                        >
                          إضافة خيار
                        </button>
                      </div>
                    )}

                    <div className="required-toggle">
                      <input
                        type="checkbox"
                        checked={question.required}
                        onChange={(e) =>
                          handleQuestionChange(
                            unit.id,
                            quiz.id,
                            question.id,
                            "required",
                            e.target.checked,
                          )
                        }
                      />
                      <span>مطلوب</span>
                    </div>

                    <button
                      type="button"
                      className="btn-delete-question"
                      onClick={() =>
                        handleDeleteQuestion(unit.id, quiz.id, question.id)
                      }
                    >
                      حذف السؤال
                    </button>
                  </div>
                ))}

                <button
                  type="button"
                  className="btn-add-question"
                  onClick={() => handleAddQuestion(unit.id, quiz.id)}
                >
                  إضافة سؤال
                </button>
              </div>
            ))}

            {/* أزرار إضافة درس واختبار داخل الوحدة - منزلة 94 */}
            <div className="unit-lesson-buttons">
              <button
                className="btn-add-lesson-new"
                onClick={() => handleAddNewLesson(unit.id)}
              >
                إضافة درس
              </button>
              <button
                className="btn-add-quiz-new"
                onClick={() => handleAddQuiz(unit.id)}
              >
                إضافة اختبار
              </button>
            </div>
          </div>
        ))}

        {/* زر إضافة وحدة جديدة - منزلة 89 */}
        <div className="unit-lesson-buttons" style={{ marginTop: "16px" }}>
          <button className="btn-add-lesson-new" onClick={handleAddUnit}>
            إضافة وحدة
          </button>
        </div>
      </div>

      {/* زر التالي */}
      <div
        className="add-unit-outer-simple"
        onClick={() => {
          onSave();
        }}
      >
        <h3 className="add-unit-title-simple">التالي</h3>
        <button className="add-unit-button-simple">
          التالي
          <div className="add-unit-icon-wrapper-simple">
            <span className="add-unit-icon-simple">→</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Stage4_LessonForm;

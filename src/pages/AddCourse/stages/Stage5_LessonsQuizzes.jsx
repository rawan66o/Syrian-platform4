import React, { useState } from "react";
import { useCourse } from "../context/CourseContext";
import "./stages.css";

const Stage5_LessonsQuizzes = ({
  unitId,
  onAddLesson,
  onAddQuiz,
  onAddUnit,
}) => {
  const {
    units,
    updateUnit,
    updateLesson,
    deleteLesson,
    deleteQuiz,
    addQuestion,
    updateQuestion,
    deleteQuestion,
    addQuestionOption,
    updateQuestionOption,
  } = useCourse();

  const currentUnit = units.find((u) => u.id === unitId);

  const [expandedLessonId, setExpandedLessonId] = useState(null);
  const [expandedQuizId, setExpandedQuizId] = useState(null);

  // حالة إضافة سؤال جديد
  const [newQuestionText, setNewQuestionText] = useState({});
  const [newQuestionType, setNewQuestionType] = useState({});

  if (!currentUnit) {
    return <div className="stage-container">جاري التحميل...</div>;
  }

  const unitNumber = units.findIndex((u) => u.id === unitId) + 1;
  const unitNumberText =
    ["الأولى", "الثانية", "الثالثة", "الرابعة", "الخامسة", "السادسة"][
      unitNumber - 1
    ] || unitNumber;

  // دوال الدروس
  const handleLessonTitleChange = (lessonId, value) => {
    updateLesson(currentUnit.id, lessonId, "title", value);
  };

  const handleLessonTypeChange = (lessonId, value) => {
    updateLesson(currentUnit.id, lessonId, "type", value);
  };

  const handleLessonVideoTitleChange = (lessonId, value) => {
    updateLesson(currentUnit.id, lessonId, "videoTitle", value);
  };

  const handleLessonLiveLinkChange = (lessonId, value) => {
    updateLesson(currentUnit.id, lessonId, "liveLink", value);
  };

  const handleLessonLiveDateChange = (lessonId, value) => {
    updateLesson(currentUnit.id, lessonId, "liveDate", value);
  };

  const handleLessonLiveDurationChange = (lessonId, value) => {
    updateLesson(currentUnit.id, lessonId, "liveDuration", value);
  };

  // دوال الأسئلة
  const handleAddQuestion = (quizId) => {
    addQuestion(currentUnit.id, quizId);
    setNewQuestionText({ ...newQuestionText, [quizId]: "" });
  };

  const handleUpdateQuestionText = (quizId, questionId, value) => {
    updateQuestion(currentUnit.id, quizId, questionId, "text", value);
  };

  const handleUpdateQuestionType = (quizId, questionId, value) => {
    updateQuestion(currentUnit.id, quizId, questionId, "type", value);
  };

  const handleUpdateQuestionRequired = (quizId, questionId, value) => {
    updateQuestion(currentUnit.id, quizId, questionId, "required", value);
  };

  const handleAddOption = (quizId, questionId) => {
    addQuestionOption(currentUnit.id, quizId, questionId);
  };

  const handleUpdateOption = (quizId, questionId, index, value) => {
    updateQuestionOption(currentUnit.id, quizId, questionId, index, value);
  };

  const getLessonTypeText = (type) => {
    switch (type) {
      case "video":
        return "فيديو";
      case "pdf":
        return "ملف PDF";
      case "live":
        return "بث مباشر";
      default:
        return type;
    }
  };

  return (
    <div className="stage-container">
      <div className="main-card lessons-quizzes-card">
        <h2 className="unit-title-header-center">الوحدة {unitNumberText}</h2>

        {/* معلومات الوحدة */}
        <div className="form-group">
          <label className="input-label">اسم الوحدة</label>
          <span className="input-hint">
            من فضلك يجب أن يكون الاسم معبراً ولا يتجاوز 30 حرف.
          </span>
          <input
            type="text"
            className="custom-input"
            value={currentUnit.name || ""}
            onChange={(e) => updateUnit(currentUnit.id, "name", e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="input-label">وصف الوحدة</label>
          <textarea
            className="custom-textarea"
            rows="3"
            value={currentUnit.description || ""}
            onChange={(e) =>
              updateUnit(currentUnit.id, "description", e.target.value)
            }
          />
        </div>

        {/* ========== قسم الدروس - منزلة 93 ========== */}
        <div className="lessons-section">
          <h3 className="section-title">الدروس</h3>

          {currentUnit.lessons.length === 0 && (
            <p className="empty-message">لا توجد دروس مضافة بعد</p>
          )}

          {currentUnit.lessons.map((lesson, lessonIdx) => (
            <div key={lesson.id} className="lesson-item-card">
              <div
                className="lesson-item-header"
                onClick={() =>
                  setExpandedLessonId(
                    expandedLessonId === lesson.id ? null : lesson.id,
                  )
                }
              >
                <div className="lesson-item-title">
                  <span className="lesson-number">الدرس {lessonIdx + 1}</span>
                  <span className="lesson-title-preview">
                    {lesson.title || "بدون عنوان"}
                  </span>
                </div>
                <div className="lesson-item-actions">
                  <button
                    className="delete-lesson-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteLesson(currentUnit.id, lesson.id);
                    }}
                  >
                    حذف
                  </button>
                  <span className="expand-icon">
                    {expandedLessonId === lesson.id ? "▲" : "▼"}
                  </span>
                </div>
              </div>

              {expandedLessonId === lesson.id && (
                <div className="lesson-details-content">
                  <div className="form-group">
                    <label className="input-label">عنوان الدرس</label>
                    <span className="input-hint">
                      هذا هو العنوان المختصر للدرس
                    </span>
                    <input
                      type="text"
                      className="custom-input"
                      value={lesson.title || ""}
                      onChange={(e) =>
                        handleLessonTitleChange(lesson.id, e.target.value)
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label className="input-label">اختر نوع الدرس</label>
                    <div className="lesson-type-radio-group">
                      <label className="lesson-type-radio-item">
                        <input
                          type="radio"
                          checked={lesson.type === "video"}
                          onChange={() =>
                            handleLessonTypeChange(lesson.id, "video")
                          }
                        />
                        <span>فيديو</span>
                      </label>
                      <label className="lesson-type-radio-item">
                        <input
                          type="radio"
                          checked={lesson.type === "pdf"}
                          onChange={() =>
                            handleLessonTypeChange(lesson.id, "pdf")
                          }
                        />
                        <span>ملف PDF</span>
                      </label>
                      <label className="lesson-type-radio-item">
                        <input
                          type="radio"
                          checked={lesson.type === "live"}
                          onChange={() =>
                            handleLessonTypeChange(lesson.id, "live")
                          }
                        />
                        <span>بث مباشر</span>
                      </label>
                    </div>
                  </div>

                  {lesson.type === "video" && (
                    <>
                      <div className="form-group">
                        <label className="input-label">رفع (فيديو) الدرس</label>
                        <div className="upload-box-cyan">
                          <div className="upload-icon-cyan">
                            <div className="upload-plus-box">
                              <span>+</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="input-label">عنوان الفيديو</label>
                        <input
                          type="text"
                          className="custom-input"
                          value={lesson.videoTitle || ""}
                          onChange={(e) =>
                            handleLessonVideoTitleChange(
                              lesson.id,
                              e.target.value,
                            )
                          }
                        />
                      </div>
                    </>
                  )}

                  {lesson.type === "live" && (
                    <>
                      <div className="form-group">
                        <label className="input-label">رابط البث المباشر</label>
                        <input
                          type="url"
                          className="custom-input"
                          value={lesson.liveLink || ""}
                          onChange={(e) =>
                            handleLessonLiveLinkChange(
                              lesson.id,
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
                            handleLessonLiveDateChange(
                              lesson.id,
                              e.target.value,
                            )
                          }
                        />
                      </div>
                      <div className="form-group">
                        <label className="input-label">مدة البث</label>
                        <input
                          type="text"
                          className="custom-input"
                          value={lesson.liveDuration || ""}
                          onChange={(e) =>
                            handleLessonLiveDurationChange(
                              lesson.id,
                              e.target.value,
                            )
                          }
                        />
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          ))}

          <button className="btn-add-lesson-full" onClick={onAddLesson}>
            + اضافة درس جديد
          </button>
        </div>

        {/* ========== قسم الاختبارات مع الأسئلة - منزلة 93 ========== */}
        <div className="quizzes-section">
          <h3 className="section-title">الاختبارات</h3>

          {currentUnit.quizzes.length === 0 && (
            <p className="empty-message">لا توجد اختبارات مضافة بعد</p>
          )}

          {currentUnit.quizzes.map((quiz, quizIdx) => (
            <div key={quiz.id} className="quiz-item-card">
              <div
                className="quiz-item-header"
                onClick={() =>
                  setExpandedQuizId(expandedQuizId === quiz.id ? null : quiz.id)
                }
              >
                <div className="quiz-item-title">
                  <span className="quiz-number">اختبار {quizIdx + 1}</span>
                </div>
                <div className="quiz-item-actions">
                  <button
                    className="delete-quiz-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteQuiz(currentUnit.id, quiz.id);
                    }}
                  >
                    حذف
                  </button>
                  <span className="expand-icon">
                    {expandedQuizId === quiz.id ? "▲" : "▼"}
                  </span>
                </div>
              </div>

              {expandedQuizId === quiz.id && (
                <div className="quiz-item-details">
                  <div className="quiz-questions">
                    <h4 className="sub-section-title">الأسئلة</h4>

                    {quiz.questions.length === 0 && (
                      <p className="empty-message">لا توجد أسئلة مضافة بعد</p>
                    )}

                    {quiz.questions.map((question, qIdx) => (
                      <div key={question.id} className="question-item-card">
                        <div className="question-full-header">
                          <span className="question-number">
                            سؤال {qIdx + 1}
                          </span>
                          <button
                            className="delete-question-btn"
                            onClick={() =>
                              deleteQuestion(
                                currentUnit.id,
                                quiz.id,
                                question.id,
                              )
                            }
                          >
                            حذف
                          </button>
                        </div>

                        <input
                          type="text"
                          className="custom-input question-text-input"
                          placeholder="اكتب السؤال هنا..."
                          value={question.text || ""}
                          onChange={(e) =>
                            handleUpdateQuestionText(
                              quiz.id,
                              question.id,
                              e.target.value,
                            )
                          }
                        />

                        <div className="question-type-row">
                          <label className="radio-label">
                            <input
                              type="radio"
                              name={`type-${question.id}`}
                              checked={question.type === "multiple"}
                              onChange={() =>
                                handleUpdateQuestionType(
                                  quiz.id,
                                  question.id,
                                  "multiple",
                                )
                              }
                            />
                            اختيار من متعدد
                          </label>
                          <label className="radio-label">
                            <input
                              type="radio"
                              name={`type-${question.id}`}
                              checked={question.type === "text"}
                              onChange={() =>
                                handleUpdateQuestionType(
                                  quiz.id,
                                  question.id,
                                  "text",
                                )
                              }
                            />
                            نصي
                          </label>
                        </div>

                        {question.type === "multiple" && (
                          <div className="question-options-full">
                            {question.options.map((opt, optIdx) => (
                              <div key={optIdx} className="option-row">
                                <input
                                  type="text"
                                  className="custom-input option-input"
                                  placeholder={`الاجابة ${optIdx + 1}`}
                                  value={opt}
                                  onChange={(e) =>
                                    handleUpdateOption(
                                      quiz.id,
                                      question.id,
                                      optIdx,
                                      e.target.value,
                                    )
                                  }
                                />
                              </div>
                            ))}
                            <button
                              className="btn-add-option"
                              onClick={() =>
                                handleAddOption(quiz.id, question.id)
                              }
                            >
                              + إضافة اجابة اخرى
                            </button>
                          </div>
                        )}

                        {question.type === "text" && (
                          <div className="text-answer-preview">
                            <span className="text-answer-label">
                              إجابة نصية
                            </span>
                          </div>
                        )}

                        <div className="required-toggle">
                          <input
                            type="checkbox"
                            checked={question.required === true}
                            onChange={(e) =>
                              handleUpdateQuestionRequired(
                                quiz.id,
                                question.id,
                                e.target.checked,
                              )
                            }
                          />
                          <span>مطلوب</span>
                        </div>
                      </div>
                    ))}

                    {/* نموذج إضافة سؤال جديد */}
                    <div className="add-question-form">
                      <h4 className="sub-section-title">إضافة سؤال جديد</h4>
                      <input
                        type="text"
                        className="custom-input"
                        placeholder="اكتب السؤال هنا..."
                        value={newQuestionText[quiz.id] || ""}
                        onChange={(e) =>
                          setNewQuestionText({
                            ...newQuestionText,
                            [quiz.id]: e.target.value,
                          })
                        }
                      />
                      <div className="question-type-row">
                        <label className="radio-label">
                          <input
                            type="radio"
                            name={`new-type-${quiz.id}`}
                            checked={newQuestionType[quiz.id] === "multiple"}
                            onChange={() =>
                              setNewQuestionType({
                                ...newQuestionType,
                                [quiz.id]: "multiple",
                              })
                            }
                          />
                          اختيار من متعدد
                        </label>
                        <label className="radio-label">
                          <input
                            type="radio"
                            name={`new-type-${quiz.id}`}
                            checked={newQuestionType[quiz.id] === "text"}
                            onChange={() =>
                              setNewQuestionType({
                                ...newQuestionType,
                                [quiz.id]: "text",
                              })
                            }
                          />
                          نصي
                        </label>
                      </div>
                      <button
                        className="btn-add-question"
                        onClick={() => handleAddQuestion(quiz.id)}
                      >
                        + إضافة سؤال
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          <button className="btn-add-quiz-full" onClick={onAddQuiz}>
            + اضافة اختبار جديد
          </button>
        </div>
      </div>

      {/* بوكس إضافة وحدة علمية - منزلة 89 */}
      <div className="add-unit-bottom-card">
        <h3 className="add-unit-bottom-title">إضافة وحدة علمية</h3>
        <button className="add-unit-bottom-button" onClick={onAddUnit}>
          اضافة وحدة
          <div className="add-unit-icon-wrapper">
            <span className="add-unit-icon">+</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Stage5_LessonsQuizzes;
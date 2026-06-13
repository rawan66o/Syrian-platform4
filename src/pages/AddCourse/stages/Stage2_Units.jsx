import React from "react";
import { useCourse } from "../context/CourseContext";
import "./stages.css";

// SVG Icons
const SaveIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#072127" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
    <polyline points="17 21 17 13 7 13 7 21" />
    <polyline points="7 3 7 8 15 8" />
  </svg>
);

const DeleteIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff5b5b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <line x1="10" y1="11" x2="10" y2="17" />
    <line x1="14" y1="11" x2="14" y2="17" />
  </svg>
);

const TrashIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff5b5b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <line x1="10" y1="11" x2="10" y2="17" />
    <line x1="14" y1="11" x2="14" y2="17" />
  </svg>
);

const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ff5b5b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const AddOptionIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6DCDE5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="16" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>
);

const Stage2_Units = ({ onAddUnit }) => {
  const {
    units,
    updateUnit,
    updateLesson,
    deleteLesson,
    addLesson,
    addQuiz,
    deleteQuiz,
    updateQuiz,
    addQuestion,
    updateQuestion,
    addQuestionOption,
    updateQuestionOption,
    deleteQuestion,
  } = useCourse();

  const handleLessonTypeChange = (unitId, lessonId, type) => {
    updateLesson(unitId, lessonId, "type", type);
  };

  return (
    <div className="stage-container">
      {units.map((unit, unitIndex) => (
        <div key={unit.id} className="unit-full-card-figma">
          <div className="unit-header-figma">
            <h2 className="unit-title-figma">
              الوحدة{" "}
              {unitIndex === 0
                ? "الأولى"
                : unitIndex === 1
                ? "الثانية"
                : unitIndex === 2
                ? "الثالثة"
                : `${unitIndex + 1}`}
            </h2>
          </div>

          <div className="unit-info-section">
            <div className="form-group">
              <label className="input-label">اسم الوحدة</label>
              <span className="input-hint">
                من فضلك يجب أن يكون الاسم معبراً ولا يتجاوز 30 حرف.
              </span>
              <input
                type="text"
                className="custom-input"
                placeholder="دورة لغة انجليزية"
                value={unit.name || ""}
                onChange={(e) => updateUnit(unit.id, "name", e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="input-label">وصف الوحدة</label>
              <textarea
                className="custom-textarea"
                placeholder="وصف الدورة كامل ومعبر"
                rows="3"
                value={unit.description || ""}
                onChange={(e) =>
                  updateUnit(unit.id, "description", e.target.value)
                }
              />
            </div>
          </div>

          {/* قسم الدروس */}
          <div className="lessons-section-figma">
            {unit.lessons.map((lesson, lessonIndex) => (
              <div key={lesson.id} className="lesson-card-figma">
                <h3 className="lesson-title-figma">الدرس {lessonIndex + 1}</h3>

                <div className="form-group">
                  <label className="input-label">عنوان الدرس</label>
                  <span className="input-hint">
                    هذا هو العنوان المختصر للدرس (يظهر في القائمة الجانبية)
                  </span>
                  <input
                    type="text"
                    className="custom-input"
                    placeholder="عنوان الدرس"
                    value={lesson.title || ""}
                    onChange={(e) =>
                      updateLesson(unit.id, lesson.id, "title", e.target.value)
                    }
                  />
                </div>

                <div className="form-group">
                  <label className="input-label">اختر نوع الدرس</label>
                  <div className="lesson-type-options">
                    <label className="type-option">
                      <input
                        type="radio"
                        name={`lesson-type-${unit.id}-${lesson.id}`}
                        value="video"
                        checked={lesson.type === "video"}
                        onChange={(e) =>
                          handleLessonTypeChange(unit.id, lesson.id, e.target.value)
                        }
                      />
                      <span className="type-label">فيديو</span>
                    </label>
                    <label className="type-option">
                      <input
                        type="radio"
                        name={`lesson-type-${unit.id}-${lesson.id}`}
                        value="pdf"
                        checked={lesson.type === "pdf"}
                        onChange={(e) =>
                          handleLessonTypeChange(unit.id, lesson.id, e.target.value)
                        }
                      />
                      <span className="type-label">ملف PDF</span>
                    </label>
                    <label className="type-option">
                      <input
                        type="radio"
                        name={`lesson-type-${unit.id}-${lesson.id}`}
                        value="live"
                        checked={lesson.type === "live"}
                        onChange={(e) =>
                          handleLessonTypeChange(unit.id, lesson.id, e.target.value)
                        }
                      />
                      <span className="type-label">رابط بث مباشر</span>
                    </label>
                  </div>
                </div>

                {lesson.type === "video" && (
                  <>
                    <div className="form-group">
                      <label className="input-label">رفع ( فيديو ) الدرس</label>
                      <div className="upload-box-certificate">
                        <div className="upload-icon-certificate">
                          <div className="upload-plus-box">
                            <span className="upload-plus">+</span>
                          </div>
                        </div>
                        <span className="upload-hint-text">
                          اضغط لرفع فيديو الدرس
                        </span>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="input-label">عنوان الفيديو</label>
                      <input
                        type="text"
                        className="custom-input"
                        placeholder="عنوان الفيديو"
                        value={lesson.videoTitle || ""}
                        onChange={(e) =>
                          updateLesson(unit.id, lesson.id, "videoTitle", e.target.value)
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
                        type="text"
                        className="custom-input"
                        placeholder="https://..."
                        value={lesson.liveLink || ""}
                        onChange={(e) =>
                          updateLesson(unit.id, lesson.id, "liveLink", e.target.value)
                        }
                      />
                    </div>
                    <div className="form-group">
                      <label className="input-label">بداية البث المباشر</label>
                      <input
                        type="datetime-local"
                        className="custom-input"
                        value={lesson.liveDate || ""}
                        onChange={(e) =>
                          updateLesson(unit.id, lesson.id, "liveDate", e.target.value)
                        }
                      />
                    </div>
                    <div className="form-group">
                      <label className="input-label">مدة البث</label>
                      <input
                        type="text"
                        className="custom-input"
                        placeholder="2 ساعة"
                        value={lesson.liveDuration || ""}
                        onChange={(e) =>
                          updateLesson(unit.id, lesson.id, "liveDuration", e.target.value)
                        }
                      />
                    </div>
                  </>
                )}
              </div>
            ))}

            <div className="unit-lesson-buttons">
              <button className="btn-add-lesson-new" onClick={() => addLesson(unit.id)}>
                اضافة درس
              </button>
              <button className="btn-add-quiz-new" onClick={() => addQuiz(unit.id)}>
                اضافة اختبار
              </button>
            </div>
          </div>

          {/* قسم الاختبارات */}
          <div className="quizzes-section-figma">
            {unit.quizzes.map((quiz, quizIndex) => (
              <div key={quiz.id} className="quiz-card-figma">
                <h3 className="quiz-title-figma">الاختبار {quizIndex + 1}</h3>

                <div className="quiz-name-input">
                  <label className="input-label">اسم الاختبار</label>
                  <input
                    type="text"
                    className="custom-input"
                    placeholder="اسم الاختبار"
                    value={quiz.name || ""}
                    onChange={(e) => updateQuiz(unit.id, quiz.id, "name", e.target.value)}
                  />
                </div>

                {quiz.questions?.map((question, qIndex) => (
                  <div key={question.id} className="question-item-card">
                    <div className="question-header">
                      <span className="question-number">السؤال {qIndex + 1}</span>
                      <div className="question-actions">
                        <button className="icon-btn" title="حفظ">
                          <SaveIcon />
                        </button>
                        <button
                          className="icon-btn"
                          onClick={() => deleteQuestion(unit.id, quiz.id, question.id)}
                          title="حذف السؤال"
                        >
                          <DeleteIcon />
                        </button>
                      </div>
                    </div>

                    <div className="question-text-input">
                      <input
                        type="text"
                        placeholder="اكتب نص السؤال"
                        value={question.text || ""}
                        onChange={(e) =>
                          updateQuestion(unit.id, quiz.id, question.id, "text", e.target.value)
                        }
                      />
                    </div>

                    <div className="question-type-select">
                      <select
                        value={question.type || "multiple"}
                        onChange={(e) =>
                          updateQuestion(unit.id, quiz.id, question.id, "type", e.target.value)
                        }
                      >
                        <option value="multiple">اختيار من متعدد</option>
                        <option value="text">نصي</option>
                      </select>
                    </div>

                    {question.type === "multiple" && (
                      <div className="question-options">
                        {question.options?.map((opt, optIndex) => (
                          <div key={optIndex} className="option-item">
                            <input
                              type="text"
                              placeholder={`الاجابة ${optIndex + 1}`}
                              value={opt}
                              onChange={(e) =>
                                updateQuestionOption(
                                  unit.id,
                                  quiz.id,
                                  question.id,
                                  optIndex,
                                  e.target.value
                                )
                              }
                            />
                            {question.options.length > 1 && (
                              <button
                                className="delete-option-btn"
                                onClick={() => {
                                  const newOptions = question.options.filter(
                                    (_, i) => i !== optIndex
                                  );
                                  updateQuestion(
                                    unit.id,
                                    quiz.id,
                                    question.id,
                                    "options",
                                    newOptions
                                  );
                                }}
                              >
                                <CloseIcon />
                              </button>
                            )}
                          </div>
                        ))}
                        <button
                          className="add-option-btn"
                          onClick={() => addQuestionOption(unit.id, quiz.id, question.id)}
                        >
                          <AddOptionIcon /> إضافة اجابة اخرى
                        </button>
                      </div>
                    )}

                    {question.type === "text" && (
                      <div className="text-answer-preview">إجابة نصية</div>
                    )}

                    <div className="required-row">
                      <span className="required-label">مطلوب</span>
                      <label className="toggle-switch">
                        <input
                          type="checkbox"
                          checked={question.required || false}
                          onChange={(e) =>
                            updateQuestion(
                              unit.id,
                              quiz.id,
                              question.id,
                              "required",
                              e.target.checked
                            )
                          }
                        />
                        <span className="toggle-slider"></span>
                      </label>
                    </div>
                  </div>
                ))}

                <button
                  className="btn-add-question"
                  onClick={() => addQuestion(unit.id, quiz.id)}
                >
                  + إضافة سؤال
                </button>

                <div className="delete-quiz-icon">
                  <button
                    className="delete-quiz-btn"
                    onClick={() => deleteQuiz(unit.id, quiz.id)}
                    title="حذف الاختبار"
                  >
                    <TrashIcon />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

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

export default Stage2_Units;
import React, { createContext, useState, useContext, useMemo } from "react";

const CourseContext = createContext();

export const useCourse = () => useContext(CourseContext);

export const CourseProvider = ({ children }) => {
  // بيانات الدورة الأساسية (المرحلة 1)
  const [courseData, setCourseData] = useState({
    title: "",
    description: "",
    coverImage: null,
    category: "UI / UX Designer",
  });

  // الوحدات (كل وحدة فيها دروس واختبارات)
  const [units, setUnits] = useState([]);

  // شهادة الكورس
  const [certificate, setCertificate] = useState(null);

  // ========== دوال إدارة الوحدات ==========
  const addUnit = () => {
    const newUnit = {
      id: Date.now(),
      name: "",
      description: "",
      lessons: [],
      quizzes: [],
    };
    setUnits([...units, newUnit]);
    return newUnit;
  };

  const updateUnit = (unitId, field, value) => {
    setUnits(
      units.map((unit) =>
        unit.id === unitId ? { ...unit, [field]: value } : unit,
      ),
    );
  };

  const deleteUnit = (unitId) => {
    setUnits(units.filter((unit) => unit.id !== unitId));
  };

  // ========== دوال إدارة الدروس ==========
  const addLesson = (unitId) => {
    const newLesson = {
      id: Date.now(),
      title: "",
      type: "video",
      content: null,
      videoTitle: "",
      // حقول البث المباشر
      liveLink: "",
      liveDate: "",
      liveDuration: "",
    };
    setUnits(
      units.map((unit) =>
        unit.id === unitId
          ? { ...unit, lessons: [...unit.lessons, newLesson] }
          : unit,
      ),
    );
    return newLesson;
  };

  const updateLesson = (unitId, lessonId, field, value) => {
    setUnits(
      units.map((unit) =>
        unit.id === unitId
          ? {
              ...unit,
              lessons: unit.lessons.map((lesson) =>
                lesson.id === lessonId ? { ...lesson, [field]: value } : lesson,
              ),
            }
          : unit,
      ),
    );
  };

  const deleteLesson = (unitId, lessonId) => {
    setUnits(
      units.map((unit) =>
        unit.id === unitId
          ? {
              ...unit,
              lessons: unit.lessons.filter((lesson) => lesson.id !== lessonId),
            }
          : unit,
      ),
    );
  };

  // ========== دوال إدارة الاختبارات ==========
  const addQuiz = (unitId) => {
    const newQuiz = {
      id: Date.now(),
      name: `اختبار ${(units.find((u) => u.id === unitId)?.quizzes.length || 0) + 1}`,
      questions: [],
    };
    setUnits(
      units.map((unit) =>
        unit.id === unitId
          ? { ...unit, quizzes: [...unit.quizzes, newQuiz] }
          : unit,
      ),
    );
    return newQuiz;
  };

  const updateQuiz = (unitId, quizId, field, value) => {
    setUnits(
      units.map((unit) =>
        unit.id === unitId
          ? {
              ...unit,
              quizzes: unit.quizzes.map((quiz) =>
                quiz.id === quizId ? { ...quiz, [field]: value } : quiz,
              ),
            }
          : unit,
      ),
    );
  };

  const deleteQuiz = (unitId, quizId) => {
    setUnits(
      units.map((unit) =>
        unit.id === unitId
          ? {
              ...unit,
              quizzes: unit.quizzes.filter((quiz) => quiz.id !== quizId),
            }
          : unit,
      ),
    );
  };

  // ========== دوال إدارة الأسئلة داخل الاختبار ==========
  const addQuestion = (unitId, quizId) => {
    setUnits(
      units.map((unit) =>
        unit.id === unitId
          ? {
              ...unit,
              quizzes: unit.quizzes.map((quiz) =>
                quiz.id === quizId
                  ? {
                      ...quiz,
                      questions: [
                        ...quiz.questions,
                        {
                          id: Date.now(),
                          text: "",
                          type: "multiple",
                          options: ["", ""],
                          required: true,
                        },
                      ],
                    }
                  : quiz,
              ),
            }
          : unit,
      ),
    );
  };

  const updateQuestion = (unitId, quizId, questionId, field, value) => {
    setUnits(
      units.map((unit) =>
        unit.id === unitId
          ? {
              ...unit,
              quizzes: unit.quizzes.map((quiz) =>
                quiz.id === quizId
                  ? {
                      ...quiz,
                      questions: quiz.questions.map((q) =>
                        q.id === questionId ? { ...q, [field]: value } : q,
                      ),
                    }
                  : quiz,
              ),
            }
          : unit,
      ),
    );
  };

  const addQuestionOption = (unitId, quizId, questionId) => {
    setUnits(
      units.map((unit) =>
        unit.id === unitId
          ? {
              ...unit,
              quizzes: unit.quizzes.map((quiz) =>
                quiz.id === quizId
                  ? {
                      ...quiz,
                      questions: quiz.questions.map((q) =>
                        q.id === questionId
                          ? { ...q, options: [...q.options, ""] }
                          : q,
                      ),
                    }
                  : quiz,
              ),
            }
          : unit,
      ),
    );
  };

  const updateQuestionOption = (
    unitId,
    quizId,
    questionId,
    optionIndex,
    value,
  ) => {
    setUnits(
      units.map((unit) =>
        unit.id === unitId
          ? {
              ...unit,
              quizzes: unit.quizzes.map((quiz) =>
                quiz.id === quizId
                  ? {
                      ...quiz,
                      questions: quiz.questions.map((q) =>
                        q.id === questionId
                          ? {
                              ...q,
                              options: q.options.map((opt, idx) =>
                                idx === optionIndex ? value : opt,
                              ),
                            }
                          : q,
                      ),
                    }
                  : quiz,
              ),
            }
          : unit,
      ),
    );
  };

  const deleteQuestion = (unitId, quizId, questionId) => {
    setUnits(
      units.map((unit) =>
        unit.id === unitId
          ? {
              ...unit,
              quizzes: unit.quizzes.map((quiz) =>
                quiz.id === quizId
                  ? {
                      ...quiz,
                      questions: quiz.questions.filter(
                        (q) => q.id !== questionId,
                      ),
                    }
                  : quiz,
              ),
            }
          : unit,
      ),
    );
  };

  // ========== التحقق من اكتمال المراحل ==========
  const isStep1Complete = () => {
    return (
      courseData.title.trim() !== "" && courseData.description.trim() !== ""
    );
  };

  const isStep2Complete = () => {
    if (units.length === 0) return false;
    return units.some((unit) => unit.lessons.length > 0);
  };

  const value = useMemo(
    () => ({
      courseData,
      setCourseData,
      units,
      setUnits,
      certificate,
      setCertificate,
      addUnit,
      updateUnit,
      deleteUnit,
      addLesson,
      updateLesson,
      deleteLesson,
      addQuiz,
      updateQuiz,
      deleteQuiz,
      addQuestion,
      updateQuestion,
      addQuestionOption,
      updateQuestionOption,
      deleteQuestion,
      isStep1Complete,
      isStep2Complete,
    }),
    [courseData, units, certificate],
  );

  return (
    <CourseContext.Provider value={value}>{children}</CourseContext.Provider>
  );
};

import { useCourse } from "../context/CourseContext";

export const useCourseValidation = () => {
  const { isStep1Complete, isStep2Complete, courseData, units } = useCourse();

  const validateStep1 = () => {
    const errors = [];
    if (!courseData.title.trim()) errors.push("اسم الدورة مطلوب");
    if (!courseData.description.trim()) errors.push("وصف الدورة مطلوب");
    return { isValid: errors.length === 0, errors };
  };

  const validateStep2 = () => {
    const errors = [];
    if (units.length === 0) {
      errors.push("يجب إضافة وحدة تعليمية واحدة على الأقل");
      return { isValid: false, errors };
    }

    for (const unit of units) {
      if (!unit.name.trim()) {
        errors.push(`الوحدة ${units.indexOf(unit) + 1}: اسم الوحدة مطلوب`);
      }
      if (unit.lessons.length === 0) {
        errors.push(
          `الوحدة ${units.indexOf(unit) + 1}: يجب إضافة درس واحد على الأقل`,
        );
      }
      for (const lesson of unit.lessons) {
        if (!lesson.title.trim()) {
          errors.push(`الوحدة ${units.indexOf(unit) + 1}: عنوان الدرس مطلوب`);
        }
      }
    }

    return { isValid: errors.length === 0, errors };
  };

  return { validateStep1, validateStep2 };
};

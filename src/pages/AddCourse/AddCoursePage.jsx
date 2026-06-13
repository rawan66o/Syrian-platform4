import React, { useState } from "react";
import { CourseProvider, useCourse } from "./context/CourseContext";
import { useCourseValidation } from "./hooks/useCourseValidation";
import Navbar from "../../components/layout/Navbar";
import Stage1_Info from "./stages/Stage1_Info";
import Stage2_Units from "./stages/Stage2_Units";
import Stage6_Certificate from "./stages/Stage6_Certificate";
import Stage7_Approval from "./stages/Stage7_Approval";
import Stage8_Success from "./stages/Stage8_Success";
import "./AddCourse.css";

const AddCourseWizard = () => {
  const [mainStep, setMainStep] = useState(1);
  const [subStep, setSubStep] = useState("info");
  const [errorMsg, setErrorMsg] = useState("");

  const { addUnit, units } = useCourse();
  const { validateStep1, validateStep2 } = useCourseValidation();

  const handleNext = () => {
    setErrorMsg("");

    if (mainStep === 1) {
      const result = validateStep1();
      if (!result.isValid) {
        setErrorMsg(result.errors[0]);
        return;
      }
      setMainStep(2);
      setSubStep("units");
    } else if (mainStep === 2) {
      if (subStep === "units") {
        setSubStep("certificate");
      } else if (subStep === "certificate") {
        const result = validateStep2();
        if (!result.isValid) {
          setErrorMsg(result.errors[0]);
          return;
        }
        setSubStep("approval");
      } else if (subStep === "approval") {
        setMainStep(3);
        setSubStep("success");
      }
    }
  };

  const handlePrev = () => {
    setErrorMsg("");

    if (mainStep === 2) {
      if (subStep === "units") {
        setMainStep(1);
        setSubStep("info");
      } else if (subStep === "certificate") {
        setSubStep("units");
      } else if (subStep === "approval") {
        setSubStep("certificate");
      }
    } else if (mainStep === 3) {
      setMainStep(2);
      setSubStep("approval");
    }
  };

  const handleAddUnit = () => {
    addUnit();
  };

  const handleApprovalComplete = () => {
    handleNext();
  };

  const renderContent = () => {
    if (mainStep === 1) {
      return <Stage1_Info />;
    }

    if (mainStep === 2) {
      switch (subStep) {
        case "units":
          return <Stage2_Units onAddUnit={handleAddUnit} />;
        case "certificate":
          return <Stage6_Certificate />;
        case "approval":
          return <Stage7_Approval onComplete={handleApprovalComplete} />;
        default:
          return <Stage2_Units onAddUnit={handleAddUnit} />;
      }
    }

    if (mainStep === 3) {
      return <Stage8_Success />;
    }

    return null;
  };

  const getStepStatus = (step) => {
    if (step === 1) {
      if (mainStep > 1) return "completed";
      if (mainStep === 1) return "active";
    }
    if (step === 2) {
      if (mainStep > 2 || (mainStep === 2 && subStep === "certificate"))
        return "completed";
      if (mainStep === 2) return "active";
    }
    if (step === 3) {
      if (mainStep === 3) return "active";
    }
    return "";
  };

  const showStepper = mainStep !== 3 && subStep !== "approval";

  return (
    <div className="main-layout-container">
      <Navbar />
      <div className="course-page-body">
        {showStepper && (
          <>
            <h2 className="main-page-title">إضافة دورة جديدة :</h2>
            <div className="stepper-header-new">
              <div className={`step-item-new ${getStepStatus(1)}`}>
                <div className="step-circle-new">
                  {getStepStatus(1) === "completed" ? "✓" : "1"}
                </div>
                <div className="step-text-content">
                  <span className="step-number-label">خطوة 1</span>
                  <span className="step-main-label">معلومات الكورس</span>
                </div>
              </div>
              <div
                className={`step-line-new ${mainStep >= 2 ? "filled" : ""}`}
              ></div>
              <div className={`step-item-new ${getStepStatus(2)}`}>
                <div className="step-circle-new">
                  {getStepStatus(2) === "completed" ? "✓" : "2"}
                </div>
                <div className="step-text-content">
                  <span className="step-number-label">خطوة 2</span>
                  <span className="step-main-label">المراحل</span>
                </div>
              </div>
              <div
                className={`step-line-new ${mainStep >= 3 ? "filled" : ""}`}
              ></div>
              <div className={`step-item-new ${getStepStatus(3)}`}>
                <div className="step-circle-new">3</div>
                <div className="step-text-content">
                  <span className="step-number-label">خطوة 3</span>
                  <span className="step-main-label">معاينة الاختبارات</span>
                </div>
              </div>
            </div>
          </>
        )}

        {errorMsg && <div className="error-message">{errorMsg}</div>}

        <div className="step-card-container">{renderContent()}</div>

        {mainStep !== 3 && subStep !== "approval" && (
          <div className="fixed-footer-action">
            <div className="footer-buttons-wrapper">
              <button className="btn-next-main" onClick={handleNext}>
                {subStep === "certificate" ? "إضافة الدورة ونشرها" : "التالي"}
              </button>
              {(mainStep > 1 || (mainStep === 2 && subStep !== "units")) && (
                <button className="btn-prev-main" onClick={handlePrev}>
                  السابق
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const AddCoursePage = () => {
  return (
    <CourseProvider>
      <AddCourseWizard />
    </CourseProvider>
  );
};

export default AddCoursePage;

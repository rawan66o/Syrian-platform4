import React from "react";
import "./stages.css";
import "./Stage8_Success.css";

const Stage8_Success = () => {
  return (
    <div className="stage-container success-page">
      <div className="success-card-figma">
        {/* الأيقونة الدائرية المتدرجة */}
        <div className="success-icon-figma">
          <div className="success-circle-outer">
            <div className="success-circle-middle">
              <div className="success-circle-inner">
                <svg width="35" height="28" viewBox="0 0 35 28" fill="none">
                  <path
                    d="M3 13.5L12.5 23.5L32 3"
                    stroke="white"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* النصوص */}
        <div className="success-text-figma">
          <h2>تمت إضافة الدورة بنجاح !</h2>
          <p>قد اجتزت جميع الدروس بنجاح، يمكنك الآن استلام شهادتك</p>
        </div>

        {/* الأزرار */}
        <div className="success-buttons-figma">
          <button className="success-btn-primary-figma">معاينة الدورة</button>
          <button className="success-btn-outline-figma">العودة للرئيسية</button>
        </div>

        {/* قسم التقييم السفلي */}
        <div className="success-feedback-figma">
          <div className="feedback-question-figma">
            <span className="feedback-label-figma">
              هل واجهت صعوبة في عملية الإضافة
            </span>
            <div className="feedback-buttons-figma">
              <button className="feedback-btn-yes-figma">نعم</button>
              <button className="feedback-btn-no-figma">لا</button>
            </div>
          </div>
          <span className="feedback-thanks-figma">شكراً لك على مجهودك</span>
        </div>
      </div>
    </div>
  );
};

export default Stage8_Success;

import React, { useEffect } from "react";
import "./Stage7_Approval.css";

const stage7Opacities = [
  1, 0.94, 0.88, 0.82, 0.76, 0.7, 0.64, 0.58, 0.52, 0.46, 0.4, 0.36, 0.3, 0.24,
  0.18,
];

const Stage7_Approval = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="stage-container approval-page">
      <div className="approval-card">
        <div className="approval-loader-figma">
          <div className="loader-ring">
            {stage7Opacities.map((opacity, index) => {
              const angle = (index * 360) / stage7Opacities.length;
              return (
                <div
                  key={index}
                  className="loader-line-fade"
                  style={{
                    transform: `rotate(${angle}deg)`,
                    animationDelay: `${index * 0.08}s`,
                    "--final-opacity": opacity,
                  }}
                />
              );
            })}
          </div>
        </div>

        <div className="approval-text-figma">
          <h2>بنتظار موافقة المشرفين</h2>
          <p>
            عندما يتم الموافقة على انشاء هذه الدورة سيتم اضافتها مباشرةو تلقائيا
            !!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stage7_Approval;

import React from "react";
import "../index.css"; // تأكد من استدعاء ملف الـ CSS

function StatusComponent({ status }) {
  return (
    <div>
      {/* هنا يتم فحص النص وتغيير الـ Class بناءً عليه */}
      <span
        className={status === "ممتلئ" ? "full-status" : "incomplete-status"}
      >
        {status}
      </span>
    </div>
  );
}

export default StatusComponent;

import React from "react";
import course2video from "../../assets/images/course2PlayVideo.png";
import stars5Grey from "../../assets/icons/grey5stars.svg";
import greencheck from "../../assets/icons/checkgreen.svg";
import arrowUp from "../../assets/icons/arrowUp.svg";
import arrowDown from "../../assets/icons/arrowDown.svg";
import downloadic from "../../assets/icons/downloadIcon.svg";
import eyeic from "../../assets/icons/eye.svg";
import { useNavigate } from "react-router-dom";
import recipt from "../../assets/icons/receipt.svg";
import diagram from "../../assets/icons/diagram.png";
import eclipseGreen from "../../assets/images/eclipse02.png";
import reciptBlue2 from "../../assets/icons/receipt-2-blue.png";
import squareX from "../../assets/icons/squareX.png";
import stars5evalue from "../../assets/icons/5starsforEvalueateUI10.svg";

import styles from "./StartCourse8.module.css";
import CourseItem2 from "../../components/Courses/CourseItem2";
const StartCourse8 = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.startCourse} dir="rtl">
      <div className={styles.courseContent}>
        <CourseItem2 />{" "}
        <div className={styles.courseItem1}>
          <div
            className="Evaluate-Course"
            style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "center" }}
          >
            <p style={{ fontSize: "24px", fontWeight: "500" }}>قيم الدورة</p>
            <img src={stars5evalue} alt="" />
            <div style={{ padding: "20px", fontSize: "16px", fontWeight: "400" }}>
              {" "}
              <textarea className={styles.custom_input} placeholder="ملاحظاتك حول الدورة" />{" "}
            </div>
          </div>
          <div style={{ border: "1px solid #D9E4E5" }}></div>
          <div
            className="Evaluate-Course"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              alignItems: "center",
            }}
          >
            <p style={{ fontSize: "24px", fontWeight: "500" }}>قيم المدرب</p>
            <img src={stars5evalue} alt="" />
            <div style={{ padding: "20px", fontSize: "16px", fontWeight: "400" }}>
              {" "}
              <textarea className={styles.custom_input} placeholder="ملاحظاتك حول المدرب" />{" "}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "16px",
              alignItems: "center",
              height: "88px",
              borderTop: "0.5px solid #D9E4E5",
              minWidth: "806px",
              justifyContent: "center",
            }}
          >
            <button className={styles.custom_button}>ارسال التقييم</button>
          </div>
        </div>
      </div>
      <div className={styles.nextPrevieus_container}>
        <button
          onClick={() => navigate(-1)}
          className={styles.button}
          style={{
            borderRadius: "100px",
            background: "#ffffff",
            color: "black",
            border: "1px solid #D9E4E5",
          }}
        >
          السابق
        </button>
        <button
          onClick={() => navigate(`${window.location.pathname}/startCourse9`)}
          className={styles.button}
          style={{ borderRadius: "100px", width: "250px" }}
        >
          التالي
        </button>
      </div>
    </div>
  );
};

export default StartCourse8;

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

import styles from "./StartCourse7.module.css";
import CourseItem2 from "../../components/Courses/CourseItem2";
const StartCourse7 = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.startCourse} dir="rtl">
      <div className={styles.courseContent}>
        <CourseItem2 />{" "}
        <div className={styles.courseItem1}>
          <div
            className="certificate-Reqiurements_contanier"
            style={{ display: "flex", flexDirection: "column", gap: "32px" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div className={styles.circle}></div>
              <p style={{ fontSize: "30px", fontWeight: "700" }}>شهادة التدريب</p>
            </div>
            <p style={{ fontSize: "20px", fontWeight: "500" }}>
              لاصدار الشهادة يجب عليك اتمام جميع المراحل والاختبارات التالية :{" "}
            </p>
            <div
              className="the-requirments"
              style={{ display: "flex", flexDirection: "column", gap: "32px" }}
            >
              <div
                className="require-item"
                style={{ display: "flex", gap: "11px", alignItems: "center" }}
              >
                <img src={squareX} alt="" />{" "}
                <p style={{ fontSize: "18px", fontWeight: "500" }}>امتحان الوحدة الاولى</p>
              </div>
              <div
                className="require-item"
                style={{ display: "flex", gap: "11px", alignItems: "center" }}
              >
                <img src={squareX} alt="" />{" "}
                <p style={{ fontSize: "18px", fontWeight: "500" }}>
                  كورس تعلم اللغة اللانجليزية منذ البداية
                </p>
              </div>
              <div
                className="require-item"
                style={{ display: "flex", gap: "11px", alignItems: "center" }}
              >
                <img src={squareX} alt="" />{" "}
                <p style={{ fontSize: "18px", fontWeight: "500" }}>امتحان الوحدة الثانية </p>
              </div>
              <div
                className="require-item"
                style={{ display: "flex", gap: "11px", alignItems: "center" }}
              >
                <img src={squareX} alt="" />{" "}
                <p style={{ fontSize: "18px", fontWeight: "500" }}>
                  كورس تعلم اللغة اللانجليزية منذ البداية
                </p>
              </div>
              <div
                className="require-item"
                style={{ display: "flex", gap: "11px", alignItems: "center" }}
              >
                <img src={squareX} alt="" />{" "}
                <p style={{ fontSize: "18px", fontWeight: "500" }}>امتحان الوحدة الاولى </p>
              </div>
              <div
                className="require-item"
                style={{ display: "flex", gap: "11px", alignItems: "center" }}
              >
                <img src={squareX} alt="" />{" "}
                <p style={{ fontSize: "18px", fontWeight: "500" }}>
                  كورس تعلم اللغة اللانجليزية منذ البداية
                </p>
              </div>
              <div
                className="require-item"
                style={{ display: "flex", gap: "11px", alignItems: "center" }}
              >
                <img src={squareX} alt="" />{" "}
                <p style={{ fontSize: "18px", fontWeight: "500" }}>امتحان الوحدة الاولى </p>
              </div>
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
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "16px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p style={{ fontWeight: "500", fontSize: "16px", color: "var(--text-main)" }}>
                هل كانت هذه الصفحة مفيدة؟{" "}
              </p>
              <button className={styles.button}>نعم</button>
              <button
                className={styles.button}
                style={{ backgroundColor: "#F2F2F2", color: "var(--text-secondary)" }}
              >
                لا
              </button>{" "}
            </div>
            <p
              style={{
                fontWeight: "400",
                fontSize: "16px",
                color: "var(--text-main)",
                fontFamily: "Tajawal",
              }}
            >
              60% من المستخدمين قالوا انها مفيدة
            </p>
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
          onClick={() => navigate(`${window.location.pathname}/startCourse8`)}
          className={styles.button}
          style={{ borderRadius: "100px", width: "250px" }}
        >
          التالي
        </button>
      </div>
    </div>
  );
};

export default StartCourse7;

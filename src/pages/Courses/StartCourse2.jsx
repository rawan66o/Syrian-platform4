import React from "react";
import course2video from "../../assets/images/course2PlayVideo.png";
import stars5Grey from "../../assets/icons/grey5stars.svg";
import greencheck from "../../assets/icons/checkgreen.svg";
import arrowUp from "../../assets/icons/arrowUp.svg";
import arrowDown from "../../assets/icons/arrowDown.svg";
import downloadic from "../../assets/icons/downloadIcon.svg";
import eyeic from "../../assets/icons/eye.svg";
import { useNavigate } from "react-router-dom";

import styles from "./StartCourse2.module.css";
import CourseItem2 from "../../components/Courses/CourseItem2";
const StartCourse2 = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.startCourse} dir="rtl">
      <div className={styles.courseContent}>
        <CourseItem2 />{" "}
        <div className={styles.courseItem1}>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <div className={styles.circle}></div>
            <h1>كيف تعرف عن نفسك بالانجليزية</h1>
          </div>
          <img src={course2video} alt="Play Video" />
          <div style={{ display: "flex", alignItems: "center", gap: "20px", marginTop: "20px" }}>
            <button
              className={styles.button}
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <img src={downloadic} alt="" style={{ display: "inline-block" }} />
              <span>تنزيل ك PDF</span>
            </button>
            <button
              className={styles.button}
              style={{
                background: "#F2F2F2",
                color: "black",
                border: "1px solid #D9E4E5",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <img src={eyeic} alt="" style={{ display: "inline-block" }} />
              <span>عرض كامل</span>
            </button>
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
          onClick={() => navigate(`${window.location.pathname}/startCourse3`)}
          className={styles.button}
          style={{ borderRadius: "100px", width: "250px" }}
        >
          التالي
        </button>
      </div>
    </div>
  );
};

export default StartCourse2;

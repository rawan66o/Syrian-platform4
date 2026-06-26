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
import doneCourse from "../../assets/images/finishcourseCorrect.svg";

import styles from "./StartCourse9.module.css";
import CourseItem2 from "../../components/Courses/CourseItem2";
import CertificateComponent from "../../components/Courses/CertificateComponent";
const StartCourse9 = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.startCourse} dir="rtl">
      <div className={styles.courseContent}>
        <CourseItem2 />{" "}
        <div className={styles.courseItem1}>
          <img
            src={doneCourse}
            alt=""
            style={{
              width: 218.2894744873047,
              height: 218.2894744873047,
              angle: "0 deg",
              opacity: "1",
            }}
          />
          <p style={{ fontSize: "30px", fontWeight: "700" }}> لقد أنهيت الدورة بنجاح !</p>
          <p style={{ fontSize: "20px", fontWeight: "500", color: "var(--text-secondary)" }}>
            قد اجتزت جميع الدروس بنجاح، يمكنك الآن استلام شهادتك
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "24px",
              fontSize: "20px",
              fontWeight: "500",
            }}
          >
            <button className={styles.button} style={{ display: "flex", gap: "8px" }}>
              <img src={downloadic} alt="" />
              تنزيل الشهادة
            </button>
            <CertificateComponent />
          </div>
        </div>
      </div>
      {/* <div className={styles.nextPrevieus_container}>
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
      </div> */}
    </div>
  );
};

export default StartCourse9;

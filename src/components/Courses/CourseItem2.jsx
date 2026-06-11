import React from "react";
import playVideo from "../../assets/images/playVideo.svg";
import stars5Grey from "../../assets/icons/grey5stars.svg";
import greencheck from "../../assets/icons/checkgreen.svg";
import arrowUp from "../../assets/icons/arrowUp.svg";
import arrowDown from "../../assets/icons/arrowDown.svg";
import { useNavigate } from "react-router-dom";
import styles from "./CourseItem2.module.css";
const CourseItem2 = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.courseItem2}>
      <div className={styles.container_contentItem2}>
        <h2>كورس تعلم اللغة الانجليزية من الصفر .</h2>
        <div className={styles.line}></div>
        <p>نسبة التقدم الحالية: 78%</p>
        <div className={styles.outline}>
          <div className={styles.inline}></div>
        </div>
        <div style={{ color: "#708387" }}>تم الانتهاء من 20 / 24 درس</div>
        <div className={styles.showMarks}>اظهار العلامات</div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            justifyContent: "center",
          }}
        >
          {" "}
          <p style={{ display: "inline-block" }}>قيم هذه الدورة</p>
          <img src={stars5Grey} alt="" style={{ display: "inline-block" }} />
        </div>{" "}
        <div className={styles.line}></div>
      </div>
      <div className={styles.firstPhase}>
        <p>
          <span style={{ color: "var(--text-secondary)" }}>المرحلة الاول:</span> ما هي اللغة
          الانجليزية ؟
          <img src={arrowUp} alt="" style={{ display: "inline-block", marginRight: "20px" }} />
        </p>{" "}
        <div className={styles.line} style={{ width: "90%" }}></div>
        <div className={styles.container_radio1}>
          <img src={greencheck} alt="" />
          <span>نبذة عن اللغة الانجليزية</span>
        </div>
        <div className={styles.container_radio2}>
          <div className={styles.circle} style={{ width: "20px", height: "20px" }}></div>
          <span>نبذة عن اللغة الانجليزية</span>
        </div>
        <div className={styles.container_radio3}>
          <div
            className={styles.circle}
            style={{
              width: "20px",
              height: "20px",
              borderColor: "#D9E4E5",
              backgroundColor: "rgba(var(--text-secondary-rgb), 0.1)",
            }}
          ></div>
          <span>نبذة عن اللغة الانجليزية</span>
        </div>
      </div>
      <div className={styles.secondPhase}>
        <p>
          <span style={{ color: "var(--text-secondary)" }}>المرحلة الثانية:</span> اساسيات اللغة
          الانجليزية
          <img
            src={arrowDown}
            alt=""
            style={{ display: "inline-block", marginRight: "20px" }}
          />{" "}
        </p>
      </div>
      <div className={styles.secondPhase}>
        <p>
          <span style={{ color: "var(--text-secondary)" }}>المرحلة الثالثة:</span> ما هي اللغة
          الانجليزية ؟
          <img
            src={arrowDown}
            alt=""
            style={{ display: "inline-block", marginRight: "20px" }}
          />{" "}
        </p>
      </div>
    </div>
  );
};

export default CourseItem2;

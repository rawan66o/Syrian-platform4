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
import eclipseRed from "../../assets/images/circle%red.png";

import styles from "./StartCourse5.module.css";
import CourseItem2 from "../../components/Courses/CourseItem2";
const StartCourse5 = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.startCourse} dir="rtl">
      <div className={styles.courseContent}>
        <CourseItem2 />{" "}
        <div className={styles.courseItem1}>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <div className={styles.circle}></div>
            <h1>نتيجة الاختبار الاول :</h1>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              alignItems: "center",
            }}
          >
            <img src={eclipseRed} alt="" />{" "}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <p style={{ fontSize: "24px", fontWeight: "700", color: "#EC2625" }}>
                20% &#x00028; راسب&#x00029;
              </p>
              <p style={{ fontSize: "16px", fontWeight: "500", color: "var(--text-secondary)" }}>
                نتيجة الاختبار 1/ 5{" "}
              </p>
            </div>
            <button className={styles.button}>اعادة الاختبار</button>
          </div>
          <div className={styles.quiz_container}>
            <p style={{ fontSize: "18px", fontWeight: "500" }}>
              1 : ما هو الفعل باللغة الانجليزية الذيي يشير معناه ل العب ؟
            </p>
            <p style={{ fontSize: "16px", fontWeight: "400", color: "var(--text-secondary)" }}>
              اختر الاجابة الصحيحة ؟{" "}
            </p>
            <div className={styles.check_container}>
              <label className={styles.check_item}>
                <input type="checkbox" />
                <span className="label-text">playing</span>
              </label>
              <label className={styles.check_item}>
                <input type="checkbox" />
                <span className="label-text">go to ckhole</span>
              </label>

              <label className={`${styles.check_item} ${styles.football_option}`}>
                <input type="checkbox" defaultChecked />
                <span className="label-text">football</span>
              </label>

              <label className={styles.check_item}>
                <input type="checkbox" />
                <span className="label-text">gamingss</span>
              </label>
            </div>
            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
              <p style={{ fontSize: "16px", fontWeight: "500", color: "#EC2625" }}>
                اجابتك خطأ الاجابة الصحيحة هي :
              </p>{" "}
              <div className={styles.check_container}>
                <label className={`${styles.check_item} ${styles.gaming_option}`}>
                  {" "}
                  <input type="checkbox" defaultChecked />
                  <span className="label-text">gamingss</span>
                </label>
              </div>
            </div>
          </div>
          <div className={styles.quiz_container}>
            <p style={{ fontSize: "18px", fontWeight: "500" }}>
              1 : ما هو الفعل باللغة الانجليزية الذيي يشير معناه ل العب ؟
            </p>
            <p style={{ fontSize: "16px", fontWeight: "400", color: "var(--text-secondary)" }}>
              اختر الاجابة الصحيحة ؟{" "}
            </p>
            <div className={styles.check_container}>
              <label className={styles.check_item}>
                <input type="checkbox" />
                <span className="label-text">playing</span>
              </label>

              <label className={styles.check_item}>
                <input type="checkbox" />
                <span className="label-text">go to ckhole</span>
              </label>

              <label className={`${styles.check_item} ${styles.football_green_option}`}>
                <input type="checkbox" defaultChecked />
                <span className="label-text">football</span>
              </label>

              <label className={styles.check_item}>
                <input type="checkbox" />
                <span className="label-text">gamingss</span>
              </label>
            </div>
            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
              <p style={{ fontSize: "16px", fontWeight: "500", color: "#34C759" }}>
                اجابتك صحيحة :
              </p>{" "}
              <div className={styles.check_container}>
                <p style={{ fontSize: "16px", fontWeight: "500", color: "var(--text-secondary)" }}>
                  لقد كسبت 2 علامة
                </p>{" "}
              </div>
            </div>
          </div>
          <div className={styles.quiz_container}>
            <p style={{ fontSize: "18px", fontWeight: "500" }}>
              2 : عرف ما هو الفعل باللغة الانجليزية ؟{" "}
            </p>
            <p style={{ fontSize: "16px", fontWeight: "400", color: "var(--text-secondary)" }}>
              املأ الحقل بالجواب المناسب{" "}
            </p>
            <div className={styles.inputText_container}>
              <input type="text" placeholder="الحل:" />
            </div>{" "}
            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
              <p style={{ fontSize: "16px", fontWeight: "500", color: "#34C759" }}>
                اجابتك صحيحة :
              </p>{" "}
              <div className={styles.check_container}>
                <p style={{ fontSize: "16px", fontWeight: "500", color: "var(--text-secondary)" }}>
                  لقد كسبت 2 علامة
                </p>{" "}
              </div>
            </div>
          </div>{" "}
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
          onClick={() => navigate(`${window.location.pathname}/startCourse6`)}
          className={styles.button}
          style={{ borderRadius: "100px", width: "250px" }}
        >
          التالي
        </button>
      </div>
    </div>
  );
};

export default StartCourse5;

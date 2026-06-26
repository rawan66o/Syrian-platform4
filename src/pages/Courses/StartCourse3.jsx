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
import styles from "./StartCourse3.module.css";
import CourseItem2 from "../../components/Courses/CourseItem2";
const StartCourse3 = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.startCourse} dir="rtl">
      <div className={styles.courseContent}>
        <CourseItem2 />{" "}
        <div className={styles.courseItem1}>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <div className={styles.circle}></div>
            <h1>الاختبار الاول:</h1>
          </div>
          <div
            style={{
              display: "flex",
              gap: "20px",
              color: "var(--text-secondary)",
              fontSize: "14px",
            }}
          >
            <img src={recipt} alt="" /> <div>عدد الاسئلة 6</div>
            <img src={diagram} alt="" /> <div>نسبة النجاح بالاختبار 50% بالمية</div>
          </div>
          <div className={styles.quiz_container}>
            <p style={{ fontSize: "18px", fontWeight: "500" }}>
              1 : ما هو الفعل باللغة الانجليزية الذيي يشير معناه ل العب ؟
            </p>
            <p style={{ fontSize: "16px", fontWeight: "400", color: "var(--text-secondary)" }}>
              اختر الاجابة الصحيحة ؟{" "}
            </p>
            <div className={styles.check_container}>
              <label className="check-item">
                <input type="checkbox" />
                <span className="label-text">playing</span>
              </label>

              <label className="check-item">
                <input type="checkbox" />
                <span className="label-text">go to ckhole</span>
              </label>

              <label className="check-item">
                <input type="checkbox" />
                <span className="label-text">football</span>
              </label>

              <label className="check-item">
                <input type="checkbox" />
                <span className="label-text">gamingss</span>
              </label>
            </div>
            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
              <button className={styles.button}>تسليم</button>
              <p style={{ fontSize: "16px", fontWeight: "400", color: "var(--text-secondary)" }}>
                2 علامة على السؤال
              </p>
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
              <button className={styles.button}>تسليم</button>
              <p style={{ fontSize: "16px", fontWeight: "400", color: "var(--text-secondary)" }}>
                2 علامة على السؤال
              </p>
            </div>
          </div>{" "}
          <div className={styles.quiz_container}>
            <p style={{ fontSize: "18px", fontWeight: "500" }}>
              1 : ما هو الفعل باللغة الانجليزية الذيي يشير معناه ل العب ؟
            </p>
            <p style={{ fontSize: "16px", fontWeight: "400", color: "var(--text-secondary)" }}>
              اختر الاجابة الصحيحة ؟{" "}
            </p>
            <div className={styles.check_container}>
              <label className="check-item">
                <input type="checkbox" />
                <span className="label-text">playing</span>
              </label>

              <label className="check-item">
                <input type="checkbox" />
                <span className="label-text">go to ckhole</span>
              </label>

              <label className="check-item">
                <input type="checkbox" />
                <span className="label-text">football</span>
              </label>

              <label className="check-item">
                <input type="checkbox" />
                <span className="label-text">gamingss</span>
              </label>
            </div>
            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
              <button className={styles.button}>تسليم</button>
              <p style={{ fontSize: "16px", fontWeight: "400", color: "var(--text-secondary)" }}>
                2 علامة على السؤال
              </p>
            </div>
          </div>
          <div
            style={{ display: "flex", gap: "16px", alignItems: "center", justifyContent: "center" }}
          >
            <button
              className={styles.button}
              style={{ width: "294px", height: "52px", marginRight: "auto" }}
            >
              تسليم الاختبار
            </button>
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
          onClick={() => navigate(`${window.location.pathname}/startCourse4`)}
          className={styles.button}
          style={{ borderRadius: "100px", width: "250px" }}
        >
          التالي
        </button>
      </div>
    </div>
  );
};

export default StartCourse3;

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

import styles from "./StartCourse6.module.css";
import CourseItem2 from "../../components/Courses/CourseItem2";
const StartCourse6 = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.startCourse} dir="rtl">
      <div className={styles.courseContent}>
        <CourseItem2 />{" "}
        <div className={styles.courseItem1}>
          <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div className={styles.circle}></div>
              <p style={{ fontSize: "30px", fontWeight: "700" }}>العلامات:</p>
            </div>
            <p>يرجى العلم ان العلانة النهائية تحتسب بناء على نتائج ووزن كل اختبار </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              alignItems: "center",
            }}
          >
            <img src={eclipseGreen} alt="" />{" "}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <p style={{ fontSize: "32px", fontWeight: "700", color: "#34C759" }}>
                75% &#x00028; راسب&#x00029;
              </p>
              <p style={{ fontSize: "16px", fontWeight: "500", color: "var(--text-secondary)" }}>
                العلامة النهائية{" "}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                gap: "10px",
                padding: "10px",
                borderRadius: "8px",
                backgroundColor: " #7083871A",
              }}
            >
              <img src={diagram} alt="" />
              <p style={{ fontSize: "16px", fontWeight: "700", color: "#708387" }}>
                نسبة النجاح 50%
              </p>
            </div>{" "}
          </div>
          <div className={styles.quizResult_container}>
            <div className={styles.quizResult_item}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <img src={reciptBlue2} alt="" />
                <p style={{ fontSize: "20px", fontWeight: "500" }}>الاختبار الأول</p>
              </div>
              <div style={{ display: "flex", gap: "24px" }}>
                <div style={{ display: "flex", gap: "24px" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      padding: "10px",
                      backgroundColor: "#F9F9F9",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "8px",
                      color: "#708387",
                      width: "106px",
                      height: "66px",
                    }}
                  >
                    <p style={{ fontSize: "18px", fontWeight: "700", lineHeight: "10px" }}>_</p>
                    <span style={{ fontSize: "14px", fontWeight: "500", lineHeight: "10px" }}>
                      عدد المحاولات
                    </span>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "24px" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      padding: "10px",
                      backgroundColor: "#F9F9F9",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "8px",
                      color: "#708387",
                      width: "106px",
                      height: "66px",
                    }}
                  >
                    <p style={{ fontSize: "18px", fontWeight: "700", lineHeight: "10px" }}>50%</p>
                    <span style={{ fontSize: "14px", fontWeight: "500", lineHeight: "10px" }}>
                      نسبة النجاح{" "}
                    </span>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "24px" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      padding: "10px",
                      backgroundColor: "#F9F9F9",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "8px",
                      color: "#708387",
                      width: "106px",
                      height: "66px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "18px",
                        fontWeight: "700",
                        lineHeight: "24px",
                        color: "var(--text-main)",
                      }}
                    >
                      75%
                    </p>
                    <span style={{ fontSize: "14px", fontWeight: "500", lineHeight: "10px" }}>
                      (العلامة){" "}
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="resultIcon"
                style={{
                  backgroundColor: "#34C759",
                  borderRadius: "8px",
                  padding: "10px",
                  width: "91px",
                  height: "40px",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <p style={{ fontSize: "18px", fontWeight: "700", color: "#FFFFFF" }}>ناجح</p>
              </div>
            </div>
            <div className={styles.quizResult_item}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <img src={reciptBlue2} alt="" />
                <p style={{ fontSize: "20px", fontWeight: "500" }}>الاختبار الثاني</p>
              </div>
              <div style={{ display: "flex", gap: "24px" }}>
                <div style={{ display: "flex", gap: "24px" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      padding: "10px",
                      backgroundColor: "#F9F9F9",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "8px",
                      color: "#708387",
                      width: "106px",
                      height: "66px",
                    }}
                  >
                    <p style={{ fontSize: "18px", fontWeight: "700", lineHeight: "10px" }}>_</p>
                    <span style={{ fontSize: "14px", fontWeight: "500", lineHeight: "10px" }}>
                      عدد المحاولات
                    </span>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "24px" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      padding: "10px",
                      backgroundColor: "#F9F9F9",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "8px",
                      color: "#708387",
                      width: "106px",
                      height: "66px",
                    }}
                  >
                    <p style={{ fontSize: "18px", fontWeight: "700", lineHeight: "10px" }}>50%</p>
                    <span style={{ fontSize: "14px", fontWeight: "500", lineHeight: "10px" }}>
                      نسبة النجاح{" "}
                    </span>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "24px" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      padding: "10px",
                      backgroundColor: "#F9F9F9",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "8px",
                      color: "#708387",
                      width: "106px",
                      height: "66px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "18px",
                        fontWeight: "700",
                        lineHeight: "24px",
                        color: "var(--text-main)",
                      }}
                    >
                      20%
                    </p>
                    <span style={{ fontSize: "14px", fontWeight: "500", lineHeight: "10px" }}>
                      (العلامة){" "}
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="resultIcon"
                style={{
                  backgroundColor: "#EC2625",
                  borderRadius: "8px",
                  padding: "10px",
                  width: "91px",
                  height: "40px",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <p style={{ fontSize: "18px", fontWeight: "700", color: "#FFFFFF" }}>راسب</p>
              </div>
            </div>{" "}
            <div className={styles.quizResult_item}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <img src={reciptBlue2} alt="" />
                <p style={{ fontSize: "20px", fontWeight: "500" }}>الاختبار الأول</p>
              </div>
              <div style={{ display: "flex", gap: "24px" }}>
                <div style={{ display: "flex", gap: "24px" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      padding: "10px",
                      backgroundColor: "#F9F9F9",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "8px",
                      color: "#708387",
                      width: "106px",
                      height: "66px",
                    }}
                  >
                    <p style={{ fontSize: "18px", fontWeight: "700", lineHeight: "10px" }}>_</p>
                    <span style={{ fontSize: "14px", fontWeight: "500", lineHeight: "10px" }}>
                      عدد المحاولات
                    </span>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "24px" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      padding: "10px",
                      backgroundColor: "#F9F9F9",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "8px",
                      color: "#708387",
                      width: "106px",
                      height: "66px",
                    }}
                  >
                    <p style={{ fontSize: "18px", fontWeight: "700", lineHeight: "10px" }}>50%</p>
                    <span style={{ fontSize: "14px", fontWeight: "500", lineHeight: "10px" }}>
                      نسبة النجاح{" "}
                    </span>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "24px" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      padding: "10px",
                      backgroundColor: "#F9F9F9",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "8px",
                      color: "#708387",
                      width: "106px",
                      height: "66px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "18px",
                        fontWeight: "700",
                        lineHeight: "24px",
                        color: "var(--text-main)",
                      }}
                    >
                      75%
                    </p>
                    <span style={{ fontSize: "14px", fontWeight: "500", lineHeight: "10px" }}>
                      (العلامة){" "}
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="resultIcon"
                style={{
                  backgroundColor: "#34C759",
                  borderRadius: "8px",
                  padding: "10px",
                  width: "91px",
                  height: "40px",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <p style={{ fontSize: "18px", fontWeight: "700", color: "#FFFFFF" }}>ناجح</p>
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
          onClick={() => navigate(`${window.location.pathname}/startCourse7`)}
          className={styles.button}
          style={{ borderRadius: "100px", width: "250px" }}
        >
          التالي
        </button>
      </div>
    </div>
  );
};

export default StartCourse6;

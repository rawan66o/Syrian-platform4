import React from "react";
import styles from "./Dashboard.module.css";
import avatarProfile from "../../assets/images/instructoer1.jpg";
import editIIcon from "../../assets/icons/editicon.png";
import nm1 from "../../assets/icons/nm1.svg";
import nm2 from "../../assets/icons/nm2.svg";
import nm3 from "../../assets/icons/nm3.svg";
import img65 from "../../assets/images/close-up-architecture-hands-working-blueprint-wooden-table-office 2.png";
import bookIcon from "../../assets/icons/documentgrey.png";
import clockIcon from "../../assets/icons/clockgey.png";
const Dashboard = () => {
  return (
    <div className={styles.Dashboard}>
      <div className={styles.Dashboard_banner}>
        <div className={styles.Dashboard_banner_profile}>
          <img src={avatarProfile} alt="" className={styles.profile_avatar} />
          <div className={styles.Dashboard_banner_name}>
            <p style={{ fontSize: "24px", fontWeight: "700", color: "#FFFFFF" }}>محمد احمد الشيخ</p>
            <p
              style={{
                fontSize: "20px",
                fontWeight: "500",
                color: "#FFFFFF",
                alignSelf: "baseline",
              }}
            >
              (طالب)
            </p>
          </div>
        </div>
        <button
          className={styles.white_pill_button}
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
        >
          <p style={{ fontSize: "18px", fontWeight: "500" }}>تعديل الملف </p>
          <img src={editIIcon} alt="" />
        </button>
      </div>
      <div className={styles.Dashboard_Statistics}>
        <div className={styles.Statistic_item}>
          <div
            style={{ display: "flex", flexDirection: "column", alignItems: "start", gap: "8px" }}
          >
            <p style={{ fontSize: "29px", fontWeight: "700" }}>14</p>
            <p style={{ fontSize: "16.5px", fontWeight: "500", color: "#A0A6BD" }}>
              الدورات المنجزة
            </p>
          </div>
          <img src={nm1} alt="" />
        </div>
        <div className={styles.Statistic_item}>
          <div
            style={{ display: "flex", flexDirection: "column", alignItems: "start", gap: "8px" }}
          >
            <p style={{ fontSize: "29px", fontWeight: "700" }}>3</p>
            <p style={{ fontSize: "16.5px", fontWeight: "500", color: "#A0A6BD" }}>دورات جارية</p>
          </div>
          <img src={nm2} alt="" />
        </div>
        <div className={styles.Statistic_item}>
          <div
            style={{ display: "flex", flexDirection: "column", alignItems: "start", gap: "8px" }}
          >
            <p style={{ fontSize: "29px", fontWeight: "700" }}>387</p>
            <p style={{ fontSize: "16.5px", fontWeight: "500", color: "#A0A6BD" }}>ساعات مكتملة</p>
          </div>
          <img src={nm3} alt="" />
        </div>
      </div>
      <div className={styles.Current_courses}>
        <div className={styles.Current_courses_header}>
          <p style={{ fontSize: "24px", fontWeight: "700" }}>الدورات الحالية</p>
          <a
            href=""
            style={{
              color: "var(--text-primary)",
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            عرض الكل &#x0003E;
          </a>
        </div>
        <div className={styles.Current_courses_list}>
          <div className={styles.Course_item}>
            <div className={styles.Course_title}>
              <img src={img65} alt="" />
              <p style={{ fontSize: "20px", fontWeight: "500" }}>
                كورس تصميم Ui UX للتطبيقات و المواقع الالكترونية.
              </p>
              <p style={{ fontSize: "40px", fontWeight: "500" }}>&#x022EE;</p>
            </div>
            <div className={styles.Course_progress}>
              <p style={{ fontSize: "14px", fontWeight: "500" }}>نسبة التقدم الحالية: 78%</p>
              <div className={styles.progress_track}>
                <div className={styles.progress_bar}></div>
              </div>
              <div className={styles.progress_info}>
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "var(--text-secondary)",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  <img src={bookIcon} alt="" />
                  18 / 25 درس
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "var(--text-secondary)",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  <img src={clockIcon} alt="" />
                  25 ساعة{" "}
                </p>
              </div>
            </div>
            <button
              className={styles.tinted_bottom_border_button}
              style={{ fontSize: "16px", fontWeight: "700", color: "var(--text-main)" }}
            >
              متابعة الدورة &#x0003E;
            </button>
          </div>
          <div className={styles.Course_item}>
            <div className={styles.Course_title}>
              <img src={img65} alt="" />
              <p style={{ fontSize: "20px", fontWeight: "500" }}>
                كورس تصميم Ui UX للتطبيقات و المواقع الالكترونية.
              </p>
              <p style={{ fontSize: "40px", fontWeight: "500" }}>&#x022EE;</p>
            </div>
            <div className={styles.Course_progress}>
              <p style={{ fontSize: "14px", fontWeight: "500" }}>نسبة التقدم الحالية: 78%</p>
              <div className={styles.progress_track}>
                <div className={styles.progress_bar}></div>
              </div>
              <div className={styles.progress_info}>
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "var(--text-secondary)",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  <img src={bookIcon} alt="" />
                  18 / 25 درس
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "var(--text-secondary)",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  <img src={clockIcon} alt="" />
                  25 ساعة{" "}
                </p>
              </div>
            </div>
            <button
              className={styles.tinted_bottom_border_button}
              style={{ fontSize: "16px", fontWeight: "700", color: "var(--text-main)" }}
            >
              متابعة الدورة &#x0003E;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

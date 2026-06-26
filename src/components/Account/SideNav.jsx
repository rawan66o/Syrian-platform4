import React from "react";
import styles from "./SideNav.module.css";
import { NavLink, useLocation } from "react-router-dom";
import { ReactComponent as DashboardIcon } from "../../assets/icons/dashboardIcon.svg";
import { ReactComponent as ProfileIcon } from "../../assets/icons/user.svg";
import { ReactComponent as CertefctaeIcon } from "../../assets/icons/certifcatesIcon.svg";
import projectsIcon from "../../assets/icons/projectsVoulnterIcon.png";
import coursesIcon from "../../assets/icons/Document Align Left 1.png";
import settingsIcon from "../../assets/icons/linear.png";
import unlockIcon from "../../assets/icons/Unlock 2.svg";
const SideNav = () => {
  const { pathname } = useLocation();

  return (
    <div className={styles.SideNav}>
      <div className={styles.myInfo}>
        <p
          style={{
            fontSize: "16px",
            fontWeight: "500",
            color: "var(--text-secondary)",
            paddingBottom: "10px",
            borderBottom: "1px solid #D9E4E5",
          }}
        >
          معلوماتي
        </p>
        <div className={styles.navSelection} style={{ fontSize: "16px", fontWeight: "500" }}>
          <NavLink
            to="/account/dashboard"
            className={
              pathname === "/account" || pathname.startsWith("/account/dashboard")
                ? styles.active
                : undefined
            }
          >
            <DashboardIcon className={styles.icon} aria-hidden="true" />
            لوحة التحكم
          </NavLink>
          <NavLink
            to="/account/profile"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            <ProfileIcon aria-hidden="true" />
            الملف الشخصي
          </NavLink>
          <NavLink
            to="/account/certificates"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            <CertefctaeIcon aria-hidden="true" />
            الشهادات
          </NavLink>
          <NavLink
            to="/account/volunteer-projects"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            <img src={projectsIcon} alt="Projects" />
            المشاريع التطوعية
          </NavLink>
          <NavLink
            to="/account/courses"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            <img src={coursesIcon} alt="Courses" />
            الكورسات
          </NavLink>
        </div>
      </div>{" "}
      <div className={styles.Others}>
        <p
          style={{
            fontSize: "16px",
            fontWeight: "500",
            color: "var(--text-secondary)",
            paddingBottom: "10px",
            borderBottom: "1px solid #D9E4E5",
          }}
        >
          أخرى
        </p>
        <div className={styles.navSelection} style={{ fontSize: "16px", fontWeight: "500" }}>
          <NavLink to="/account/settings">
            <img src={settingsIcon} alt="Settings" /> الاعدادات{" "}
          </NavLink>
          <NavLink to="/" style={{ color: "#EC2625" }}>
            <img src={unlockIcon} alt="Logout" /> تسجيل الخروج
          </NavLink>
        </div>
      </div>{" "}
    </div>
  );
};

export default SideNav;

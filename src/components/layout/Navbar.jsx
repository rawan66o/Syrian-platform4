import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import profileImg from "../../assets/images/profile-image.jpeg";

// import spLogo from "../../assets/images/sp logo 12.png";

const Navbar = () => {
  return (
    <nav className="custom-navbar">
      {/* القسم الأيمن: اللوغو والصفحة الرئيسية */}
      <div className="navbar-right">
        <div className="logo-section">
          <img src={logo} alt="Syrian Platform" className="main-logo" />
        </div>
        <div className="nav-divider"></div>
        <Link to="/home" className="nav-link-active">الصفحة الرئيسية</Link>
      </div>

      {/* القسم الأيسر: الإشعارات واللغة والبروفايل */}
      <div className="navbar-left">
        {/* أيقونة الجرس مع نقطة الإشعار */}
        <div className="icon-wrapper">
          <i className="fa-regular fa-bell"></i>
          <span className="notification-dot"></span>
        </div>

        {/* أيقونة الكرة الأرضية (اللغة) */}
        <div className="icon-wrapper">
          <i className="fa-solid fa-globe"></i>
        </div>

        {/* الخط الفاصل */}
        <div className="vertical-separator"></div>

        {/* معلومات المستخدم */}
        <div className="user-profile-nav">
          <span className="user-name">المدرب محمد الشيخ</span>
          <img src={profileImg} alt="User" className="user-avatar" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

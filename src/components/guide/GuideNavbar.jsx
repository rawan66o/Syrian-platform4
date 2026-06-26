import React from "react";
import "./GuideNavbar.css";

const GuideNavbar = () => {
  return (
    <nav className="guide-custom-navbar">
      {/* Right section: Logo + Divider + Home */}
      <div className="guide-navbar-right">
        <div className="guide-logo-section">
          <img src="/assets/images/logo.png" alt="Syrian Platform" className="guide-main-logo" />
        </div>
        <div className="guide-nav-divider"></div>
        <span className="guide-nav-link-active">الرئيسية</span>
      </div>

      {/* Center section: Navigation links */}
      <div className="guide-navbar-center">
        <a href="/courses" className="guide-nav-link">الكورسات</a>
        <a href="/forum" className="guide-nav-link">المنتدى</a>
        <a href="/projects" className="guide-nav-link">المشاريع</a>
        <a href="/contact" className="guide-nav-link">اتصل بنا</a>
      </div>

      {/* Left section: Search + Icons + Divider + Profile */}
      <div className="guide-navbar-left">
        {/* Search box */}
        <div className="guide-search-box">
          <input type="text" className="guide-search-input" placeholder="البحث" />
          <div className="guide-search-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#708387" strokeWidth="2">
              <circle cx="10" cy="10" r="7" />
              <line x1="15" y1="15" x2="21" y2="21" />
            </svg>
          </div>
        </div>

        {/* Icons group */}
        <div className="guide-icons-group">
          <div className="guide-icon-wrapper">
            <i className="fa-regular fa-bell"></i>
            <span className="guide-notification-dot"></span>
          </div>
          <div className="guide-icon-wrapper">
            <i className="fa-solid fa-globe"></i>
          </div>
        </div>

        {/* Divider */}
        <div className="guide-vertical-separator"></div>

        {/* User profile */}
        <div className="guide-user-profile">
          <div className="guide-user-avatar-wrapper">
            <img src="/assets/images/profile-image.jpeg" alt="User" className="guide-user-avatar" />
          </div>
          <span className="guide-user-name">المدرب. محمد الشيخ</span>
        </div>
      </div>
    </nav>
  );
};

export default GuideNavbar;
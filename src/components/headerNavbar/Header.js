import React from "react";
import { images } from "../assets/images";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../assets/styles/Header.css";
import { FaBars, FaTimes } from "react-icons/fa";
// import SideNav from "./SideNav";

function Header({ isNavOpen, onToggleNav }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navbar">
      <section className="right-section">
        {/* زر الموبايل يظهر فقط في الشاشات الصغيرة */}
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <img src={images.logo3} alt="logo" className="logo" />
        <img
          src={images.line77}
          alt="Vertical Line"
          className="vertical-line"
        />
        {/* إضافة كلاس active عند فتح القائمة */}
        <div className={`links-navbar ${isOpen ? "active" : ""}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>
            الرئيسية
          </Link>
          <Link to="/الكورسات" onClick={() => setIsOpen(false)}>
            الكورسات
          </Link>
          <Link to="/المنتدى" onClick={() => setIsOpen(false)}>
            المنتدى
          </Link>
          <Link to="/المشاريع" onClick={() => setIsOpen(false)}>
            المشاريع
          </Link>
          <Link to="/اتصل" onClick={() => setIsOpen(false)}>
            اتصل بنا
          </Link>
        </div>
        <div className="search mobile-search">
          <img src={images.search} className="search-icone" alt="search" />
          <input type="text" placeholder="البحث" />
        </div>

        <div className="navbar-icons">
          <div>
            <img
              src={images.notification}
              className="icone"
              alt="notifications"
            />
            <span className="red-dot"></span>
          </div>
          <div>
            <img src={images.vector3} className="icone" alt="global" />
          </div>
        </div>
        <img
          src={images.line77}
          alt="Vertical Line"
          className="vertical-line"
        />
        <div className="auth-id" onClick={onToggleNav}>
          <img src={images.user} alt="Auth-image" className="auth-image" />
          <p className="user-name">المدرب.محمد الشيخ</p>
        </div>
      </section>
      {/* <SideNav isOpen={isNavOpen} /> */}
    </nav>
  );
}

export default Header;

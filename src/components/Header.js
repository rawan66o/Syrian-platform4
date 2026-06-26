import React from 'react'
import earthimg from "../image/f153da0f-4ebc-445f-abb1-6a1b479ba710.png"
import logoimg from "../image/404dec68-ada0-4149-9919-af726b767147.png"
import { NavLink } from 'react-router-dom'
import "./Header.css"

const Header = () => {
  return (
    <header className="header">
      <div className="header-right">
        <img className="header-logo" src={logoimg} alt="logo" />

        <span className="header-divider"></span>

        <NavLink to="/home" className="header-link">
          الصفحة الرئيسية
        </NavLink>
      </div>

      <div className="header-left">
        <NavLink to="/supportandassistance" className="header-link">
          الدعم والمساعدة
        </NavLink>

        <NavLink to="/privacypolicy" className="header-link">
          سياسة الخصوصية
        </NavLink>

        <div className="language">
          <img src={earthimg} alt="earth" />
          <select>
            <option>العربية</option>
            <option>English</option>
            <option>French</option>
          </select>
        </div>
      </div>
    </header>
  )
}

export default Header
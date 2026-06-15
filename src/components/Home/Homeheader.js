import React from 'react'
import { NavLink } from 'react-router-dom'
import logoimg from "../../image/404dec68-ada0-4149-9919-af726b767147.png";
import bellimg from "../../image/bell.png";
import earthimg from "../../image/earth.png";
import profileimg from "../../image/profile.png";
import { FiSearch } from "react-icons/fi";
import "./Homeheader.css";
const Homeheader = () => {
  return (
    <div className='home-header'>
      <div className="home-header-right">
              <img className="home-header-logo" src={logoimg} alt="logo" width="80px" />
              <span className="home-header-divider"></span>
               <div className="home-header-link">
              <NavLink to="/home">الرئيسية</NavLink>
              <NavLink to="/cours">الكورسات</NavLink>
              <NavLink to="/forum">المنتدى</NavLink>
              <NavLink to="/projected">المشاريع</NavLink>
              <NavLink to="/conected">اتصل بنا</NavLink>
              </div>
            </div>
            <div className='home-search'>
               <FiSearch className="search-icon" />
            <input type='text' placeholder='البحث'/>
            </div>
            <div className='home-header-left'>
              <img className='home-header-icons' src={bellimg} alt='bell'/>
              <img className='home-header-icons' src={earthimg} alt='earth'/>
              <span className="home-header-divider"></span>
              <div className="profile-box">
              <img className="home-header-profile" src={profileimg} alt='profile'/>
              <h4>المدرب.محمد الشيخ</h4>
              </div>
            </div>

            


            
    </div>
  )
}

export default Homeheader
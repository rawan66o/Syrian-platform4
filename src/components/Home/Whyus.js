import React from 'react';
import "./Whyus.css";
import babyblueimg from "../../image/babyblue.png";
import circleimg from "../../image/circle.png";
import circle2img from "../../image/circle2.png";
import personimg from "../../image/person.png";
import { LiaGraduationCapSolid } from "react-icons/lia";
import { FiArrowUpLeft } from 'react-icons/fi';
import { FaRegLightbulb } from 'react-icons/fa';
import { VscStarEmpty } from "react-icons/vsc";
import { Link, NavLink } from 'react-router-dom';
import { HiOutlineChatBubbleLeftEllipsis } from "react-icons/hi2";
const Whyus = () => {
  return (
    <div className='why-us'>
        <div className='why-us-images'>
            <img src={babyblueimg} className='babyblue' alt='babyblue'/>
            <img src={circleimg} className='circle' alt='circle'/>
            <img src={circle2img} className='circle2' alt='circle2'/>
            <img src={personimg} className='person' alt='person'/>
            
            <div className='why-us-message-box'>
              <div className='question-mark'>?</div>
              <p>ماذا تنتظر الان؟</p>
              <h3>اتصل بنا</h3>
            </div>
        </div>

        <div className='why-us-content'>
            <NavLink to='/fileforthevolunteer'>
            <h4>لماذا نحن ؟</h4>
            </NavLink>
            <h2>نحن المنصة السورية التي تقدم كافة أنواع الدورات.</h2>
            <p>
                المنصة الوزارية التعليمية هي بوابة رقمية شاملة تهدف إلى دعم التعليم في سوريا تجمع المنصة بين التقنيات الحديثة والمحتوى المحلي لتسهيل الوصول إلى المعرفة في أي وقت ومكان.
            </p>
            
            <div className='why-us-types'>
                <Link to='/typecourses' className='type-card'>
                    <LiaGraduationCapSolid className='card-icon'/>
                    <FiArrowUpLeft className='arrowleft'/>
                    <h5>الكورسات</h5>
                    <p>تقدم افضل انواع الكورسات بميزات عالية جدا وبانظمة جميلة وفعالة وبنظام.</p>
                </Link>
                <Link to='/typeprojects' className='type-card'>
                    <FaRegLightbulb className='card-icon'/>
                    <FiArrowUpLeft className='arrowleft'/>
                    <h5>المشاريع التطوعية</h5>
                    <p>تقدم افضل انواع الكورسات بميزات عالية جدا وبانظمة جميلة وفعالة وبنظام.</p>
                </Link>
                <Link to='/typeexperiences' className='type-card'>
                    <VscStarEmpty className='card-icon'/>
                    <FiArrowUpLeft className='arrowleft'/>
                    <h5>الخبرات</h5>
                    <p>تقدم افضل انواع الكورسات بميزات عالية جدا وبانظمة جميلة وفعالة وبنظام.</p>
                </Link>
                <Link to='/typesystems' className='type-card'>
                    <HiOutlineChatBubbleLeftEllipsis className='card-icon'/>
                    <FiArrowUpLeft className='arrowleft'/>
                    <h5>نظام المنتدى</h5>
                    <p>تقدم افضل انواع الكورسات بميزات عالية جدا وبانظمة جميلة وفعالة وبنظام.</p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Whyus;
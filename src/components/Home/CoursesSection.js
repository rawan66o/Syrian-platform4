import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import card1img from "../../image/Card1.jpeg";
import card2img from "../../image/Card2.jpeg";
import card3img from "../../image/Card3.jpeg";
import { FiArrowLeft, FiClock, FiStar } from 'react-icons/fi';
import {FaStar} from 'react-icons/fa';
import "./CoursesSection.css";
const CoursesSection = () => {
    const courses = {

  languages: [

    {
      image: card1img,
      hours: "35 ساعة",
      title: "تعلم اللغة الانكليزية للمحادثة من الصفر",
      students: "21,000 طالب",
      rating: "4.8"
    },

    {
      image: card2img,
      hours: "35 ساعة",
      title: "تعلم اللغة الانكليزية للمحادثة من الصفر",
      students: "21,000 طالب",
      rating: "4.8"
    },

    {
      image: card3img,
      hours: "35 ساعة",
      title: "تعلم اللغة الانكليزية للمحادثة من الصفر",
      students: "21,000 طالب",
      rating: "4.8"
    }

  ],

  management: [

    {
      image: card1img,
      hours: "28 ساعة",
      title: "كورس تصميم UI/UX للتطبيقات و المواقع الالكترونية",
      students: "17,000 طالب",
      rating: "4.7"
    },

    {
      image: card2img,
      hours: "28 ساعة",
      title: "كورس تصميم UI/UX للتطبيقات و المواقع الالكترونية",
      students: "17,000 طالب",
      rating: "4.7"
    },

    {
      image: card3img,
      hours: "28 ساعة",
      title: "كورس تصميم UI/UX للتطبيقات و المواقع الالكترونية",
      students: "17,000 طالب",
      rating: "4.7"
    }

  ],
  graphicDesign:[
    {
    image:card1img,
    hours:"30 ساعة",
    title:"كورس تعلم الغرافيك ديزاين من الصفر",
    students:"25,000 طالب",
    rating:"4.3"
    },
     {
    image:card2img,
    hours:"30 ساعة",
    title:"كورس تعلم الغرافيك ديزاين من الصفر",
    students:"25,000 طالب",
    rating:"4.3"
    },
     {
    image:card3img,
    hours:"30 ساعة",
    title:"كورس تعلم الغرافيك ديزاين من الصفر",
    students:"25,000 طالب",
    rating:"4.3"
    }
  ],
  arabic:[
    { 
    image:card1img,
    hours:"32 ساعة",
    title:"كورس تعلم العربية من الصفر",
    students:"30,000 طالب",
    rating:"4.2"
    },
     { 
    image:card2img,
    hours:"32 ساعة",
    title:"كورس تعلم العربية من الصفر",
    students:"30,000 طالب",
    rating:"4.2"
    },
     { 
    image:card3img,
    hours:"32 ساعة",
    title:"كورس تعلم العربية من الصفر",
    students:"30,000 طالب",
    rating:"4.2"
    },
  ],
  programming:[
    { 
    image:card1img,
    hours:"38 ساعة",
    title:"كورس تعلم البرمجة من الصفر",
    students:"29,000 طالب",
    rating:"4.6"
    },
     { 
    image:card2img,
    hours:"38 ساعة",
    title:"كورس تعلم البرمجة من الصفر",
    students:"29,000 طالب",
    rating:"4.6"
    },
     { 
    image:card3img,
    hours:"38 ساعة",
    title:"كورس تعلم البرمجة من الصفر",
    students:"29,000 طالب",
    rating:"4.6"
    },
    
  ],
  uiux:[
     { 
    image:card1img,
    hours:"31 ساعة",
    title:"كورس تعلم ui/ux من الصفر",
    students:"23,000 طالب",
    rating:"4.9"
    },
    { 
    image:card2img,
    hours:"31 ساعة",
    title:"كورس تعلم ui/ux من الصفر",
    students:"23,000 طالب",
    rating:"4.9"
    },
    { 
    image:card3img,
    hours:"31 ساعة",
    title:"كورس تعلم ui/ux من الصفر",
    students:"23,000 طالب",
    rating:"4.9"
    },

  ]

}

    const [type, setType] = useState("languages");

  return (
    <div className='courses-section'>

        <div className='courses-section-content'>

            <h3>الكورسات الموصى بها</h3>
            <h2> اكتشف مجموعة واسعة من أكثر من 250 دورة.</h2>

            <div className='courses-section-button'>

                <button className={type === "languages" ? "active" : ""}
                 onClick={() => setType("languages")}>
                    اللغات
                </button>

                <button className={type === "management" ? "active" : ""}
                 onClick={() => setType("management")}>
                    الادارة والقيادة
                </button>

                <button className={type === "graphicDesign" ? "active" : ""}
                 onClick={() => setType("graphicDesign")}>
                    غرافيك ديزاين
                </button>

                <button className={type === "arabic" ? "active" : ""}
                 onClick={() => setType("arabic")}>
                    العربية
                </button>

                <button className={type === "programming" ? "active" : ""}
                 onClick={() => setType("programming")}>
                    البرمجة
                </button>

                <button className={type === "uiux" ? "active" : ""}
                 onClick={() => setType("uiux")}>
                    UI/UX
                </button>

            </div>

            <div className='courses-section-cards'>
                {
                    courses[type]?.map((course,index)=>(
                        <div className='courses-section-card' key={index}>
                            <img src={course.image} alt='course'/>
                            <div className='clock'>
                                <FiClock className='clock-icon'/>
                                <span>{course.hours}</span>
                            </div>
                            <h3>{course.title}</h3>
                            <div className='card-info'>
                            <span className='students'>{course.students}</span>
                            <div className='star'>
                                <FaStar className='star-icon'/>
                                <span>{course.rating}</span>
                                </div>
                            </div>
                            <div className='button'>
                                <Link to="/course-details" className='card-btn'>
                                    عرض الكورس
                                    <FiArrowLeft className='arrow-icon'/>
                                </Link>
                            </div>
                        </div>
                    ))

                }
            </div>

        </div>

        <div className='courses-section-btn'>
            <Link to="/courses">عرض جميع الكورسات</Link>
        </div>

    </div>
  )
}

export default CoursesSection
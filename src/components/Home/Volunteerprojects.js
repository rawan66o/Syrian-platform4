import React from 'react'
import { Link } from 'react-router-dom'
import project1img from "../../image/project1.jpeg";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import student1img from "../../image/student1.png";
import student2img from "../../image/student2.png";
import student3img from "../../image/student3.png";
import { IoIosArrowBack } from "react-icons/io";
import project2img from "../../image/project2.jpeg";
import project3img from "../../image/project3.jpeg";
import "./Volunteerprojects.css";
const Volunteerprojects = () => {
  return (
    <div className='volunteer-projects'>
      <div className='volunteer-projects-content'>
        <h4>المشاريع التطوعية</h4>
        <h3>اكتشف افضل واشمل المشاريع التطوعية</h3>
        <div className='volunteer-projects-cards'>
          <div className='project-card'>
          <img src={project1img} className='project-img' alt='project1img'/>
         <div className='date'>
          <HiOutlineCalendarDateRange className='date-icon' />
          <span>18/8/2025</span>
         </div>
         <p className='project-title'>مشروع تصميم Ui Ux للتطبيقات والمواقع الالكترونية</p>
         <div className='projects-students'>
                         <img src={student1img} alt='student1'/>
                         <img src={student2img} alt='student2'/>
                         <img src={student3img} alt='student3'/>
                         <span>+</span>
                         <p>22 متطوع حالي بالمشروع</p>
                      </div>
                      <Link to='/showproject1' className='showproject-btn'>
                        عرض المشروع
                        <IoIosArrowBack className='arrowback-icon' />
                      </Link>
                          </div> 
                          <div className='project-card'>
                          <img src={project2img} className='project-img' alt='project1img'/>
                          <div className='date'>
                          <HiOutlineCalendarDateRange className='date-icon' />
                         <span>18/8/2025</span>
                        </div>
                          <p className='project-title'>مشروع تصميم Ui Ux للتطبيقات والمواقع الالكترونية</p>
                          <div className='projects-students'>
                         <img src={student1img} alt='student1'/>
                         <img src={student2img} alt='student2'/>
                         <img src={student3img} alt='student3'/>
                         <span>+</span>
                         <p>22 متطوع حالي بالمشروع</p>
                      </div>
                      <Link to='/showproject2' className='showproject-btn'>
                        عرض المشروع
                        <IoIosArrowBack className='arrowback-icon' />
                      </Link>
                          </div> 
                          <div className='project-card'>
          <img src={project3img} className='project-img' alt='project1img'/>
         <div className='date'>
          <HiOutlineCalendarDateRange className='date-icon' />
          <span>18/8/2025</span>
         </div>
         <p className='project-title'>مشروع تصميم Ui Ux للتطبيقات والمواقع الالكترونية</p>
         <div className='projects-students'>
                         <img src={student1img} alt='student1'/>
                         <img src={student2img} alt='student2'/>
                         <img src={student3img} alt='student3'/>
                         <span>+</span>
                         <p>22 متطوع حالي بالمشروع</p>
                      </div>
                      <Link to='/showproject3' className='showproject-btn'>
                        عرض المشروع
                        <IoIosArrowBack className='arrowback-icon' />
                      </Link>
                          </div> 
        </div>
                    <div className='projects-btn'>
                    <Link to="/projects">عرض جميع المشاريع</Link>
                    </div>
      </div>

    </div>
  )
}

export default Volunteerprojects
import React from 'react'
import post1img from "../../image/post1.jpeg";
import post2img from "../../image/post2.jpeg";
import post3img from "../../image/post3.jpeg";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import "./Forum.css";
const Forum = () => {
  return (
    <div className='forum'>
        <div className='forum-content'>
            <h5>المنتدى</h5>
            <h4>آخر الاخبار والمنشورات هذه الفترة</h4>
            <div className='forum-cards'>
                <div className='post'>
                    <img src={post1img} className='post1' alt='post1img'/>
                    <div className='post-info'>
                        <div className='post-date'>
                         <HiOutlineCalendarDateRange className='post-date-icon' />
                         <span>18/8/2025</span>
                         </div>
                         <div className='post-comment'>
                            <span>+100 تعليق</span> 
                         </div>
                    </div>
                    <h4>منشور تصميم UI UX للتطبيقات والمواقع الالكترونية</h4>
                   <p>لقد قمنا بتحسين المحتوى الذي يناسب جمهورك لقد قمنا بتجميع قائمة من الاخبار.</p>
                   <Link to='/post' className='post-btn'>
                    
                        عرض المنشور
                    <IoIosArrowBack className='post-arrowback-icon' />
                    
                   </Link>
                </div>
                 <div className='post'>
                    <img src={post2img} className='post2' alt='post2img'/>
                    <div className='post-info'>
                        <div className='post-date'>
                         <HiOutlineCalendarDateRange className='post-date-icon' />
                         <span>18/8/2025</span>
                         </div>
                         <div className='post-comment'>
                            <span>+100 تعليق</span> 
                         </div>
                    </div>
                    <h4>منشور تصميم UI UX للتطبيقات والمواقع الالكترونية</h4>
                   <p>لقد قمنا بتحسين المحتوى الذي يناسب جمهورك لقد قمنا بتجميع قائمة من الاخبار.</p>
                   <Link to='/post' className='post-btn'>
                    
                        عرض المنشور
                    <IoIosArrowBack className='post-arrowback-icon' />
                    
                   </Link>
                </div>
                 <div className='post'>
                    <img src={post3img} className='post3' alt='post3img'/>
                    <div className='post-info'>
                        <div className='post-date'>
                         <HiOutlineCalendarDateRange className='post-date-icon' />
                         <span>18/8/2025</span>
                         </div>
                         <div className='post-comment'>
                            <span>+100 تعليق</span> 
                         </div>
                    </div>
                    <h4>منشور تصميم UI UX للتطبيقات والمواقع الالكترونية</h4>
                   <p>لقد قمنا بتحسين المحتوى الذي يناسب جمهورك لقد قمنا بتجميع قائمة من الاخبار.</p>
                   <Link to='/post' className='post-btn'>
                        عرض المنشور
                    <IoIosArrowBack className='post-arrowback-icon' />
                   </Link>
                </div>

            </div>
            <Link to='/viewallposts' className='view-all-posts'>
            عرض جميع  المناشير
            </Link>

        </div>


    </div>
  )
}

export default Forum
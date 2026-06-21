import React from 'react'
import student1img from "../../image/student1.png";
import student2img from "../../image/student2.png";
import student3img from "../../image/student3.png";
import ringimg from "../../image/ring.png";
import studentImg from "../../image/student.png";
import arrowimg from "../../image/arrow.png";
import graduationimg from "../../image/graduation.png";
import linesimg from "../../image/lines.png";
import "./Herosection.css";
import { Link } from 'react-router-dom';
const Herosection = () => {
  return (
    <div className='hero-section'>
        <div className='hero-section-content'>
            <Link to='/' className="hero-section-start">ابدأ الآن</Link>
            <h1>منصتك المناسبة للتعلم والتعليم.</h1>
            <p>
                المنصّة الوزارية التعليميّة هي بوابة رقمية شاملة
                  تهدف إلى دعم التعليم في سوريا
                 تجمع المنصّة بين التقنيات الحديثة والمحتوى المحلي
                 لتسهيل الوصول الى المعرفة  في أي وقت ومكان.
                 </p>
             <div className='hero-section-button'>
                <Link to='/courses'>الكورسات</Link>
                <span>أو</span>
                <Link to='/showmore'>عرض المزيد</Link>
             </div>
             <div className='hero-section-stats'>
                <div>
                <h3>220+</h3>
                <span>كورس</span>
                </div>
                <div>
                <h3>500+</h3>
                <span>مدرب</span>
                </div>
                <div>
                <h3>2.5k+</h3>
                <span>طالب</span>
                </div>
             </div>
             <div className='hero-section-students'>
                <img src={student1img} alt='student1'/>
                <img src={student2img} alt='student2'/>
                <img src={student3img} alt='student3'/>
                <span>+</span>
                <p>اكثر من 10000 الاف طالب يتدرب في المنصة  </p>
             </div>
        </div>
        <div className='hero-section-images'>
             <div className="image-wrapper">
            <img src={ringimg} className='ring' alt='ring'/>
            <img src={studentImg} className='student' alt='student'/>
            </div>
            <img src={arrowimg} className='arrow' alt='arrow'/>
            <img src={linesimg} className='lines' alt='lines'/>
            <img src={graduationimg} className='graduation' alt='graduation'/>
            


             <div className="badge badge1">👑 مشاريع تطوعية</div>
              <div className="badge badge2">🔥 كورسات تعليمية</div>
        </div>
       



    </div>
  )
}

export default Herosection
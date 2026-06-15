import React from 'react';
import { FaStar } from 'react-icons/fa';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import commentimg from "../../image/comment.png";

// 1. استيراد المكونات الرئيسية لمكتبة Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// 2. استيراد ملفات الـ CSS الخاصة بالمكتبة (ضرورية للحركة)
import 'swiper/css';
import 'swiper/css/navigation';

import "./Comments.css";

const Comments = () => {
  // مصفوفة بيانات وهمية لتكرار الكروت بسهولة
  const dummyData = [1, 2, 3];

  return (
    <div className='comments'>
      <div className='comments-content'>
        
        {/* الجزء العلوي: العناوين والأسهم */}
        <div className='comments-header'>
          <div className='comments-titles'>
            <h4>التعليقات</h4>
            <h3>فيما يلي بعض التعليقات حول منصتنا</h3>
          </div>

          <div className='comments-arrow-icons'>
            {/* الأسهم المربعة - لاحظ الكلاسات custom-prev و custom-next للربط مع السلايدر */}
            <div className='arrow-box custom-prev'>
              <IoIosArrowRoundForward className='comments-arrow' />
            </div>
            <div className='arrow-box custom-next'>
              <IoIosArrowRoundBack className='comments-arrow' />
            </div>
          </div>
        </div>

        {/* حاوية السلايدر (المحرك الرئيسي) */}
        <Swiper
          modules={[Navigation]} // تفعيل ميزة التنقل
          spaceBetween={25}      // المسافة بين الكروت
          slidesPerView={'auto'} // جعل العرض مرن بناءً على CSS الخاص بك
          centeredSlides={false}
          navigation={{
            nextEl: '.custom-next', // ربط سهم "التالي"
            prevEl: '.custom-prev', // ربط سهم "السابق"
          }}
          className='comments-cards'
        >
          {dummyData.map((item, index) => (
            <SwiperSlide key={index} style={{ width: 'auto' }}>
              
              {/* الكرت الفردي */}
              <div className='comment-item'>
                <div className='comment-top-row'>
                  <div className='comment-user'>
                    <p>محمد احمد الشيخ</p>
                    <span>(طالب)</span>
                  </div>
                  <img src={commentimg} className='commentimg' alt='user' />
                </div>

                <div className='comment-mid-row'>
                  <div className='comments-rating'>
                    <FaStar className='rating' />
                    <FaStar className='rating' />
                    <FaStar className='rating' />
                    <FaStar className='rating' />
                    <FaStar className='rating' />
                  </div>
                  <div className='comments-date'>
                    <span>18 / 8 / 2025</span>
                    <HiOutlineCalendarDateRange className='comment-date-icon' />
                  </div>
                </div>

                <div className='comment-text'>
                  <p>
                    منصة رائعة سهلت علي متابعة الدروس والوصول للمحتوى التجربة التعليمية فيها حديثة وممتعة فعلاً خطوة كبيرة نحو تعليم أفضل في سوريا.
                  </p>
                </div>
              </div>

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Comments;
import React from 'react'
import logoimg from "../../image/404dec68-ada0-4149-9919-af726b767147.png";
import { Link } from 'react-router-dom';
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegCopyright } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-content'>
            <div className='footer-right-center-left'>
            <div className='footer-right'>
              <img className="footer-logo" src={logoimg} alt="logo"/> 
              <p>المنصة الوزارية التعليميّة هي بوابة رقمية شاملة 
                تجمع المنصّة بين التقنيات الحديثة والمحتوى المحلي لتسهيل الوصول إلى المعرفة في أي وقت ومكان.</p> 
            </div>
            
            <div className='footer-main'>
             <h5>الرئيسية</h5>
             <span className='small-footer-line'></span> 
             <Link to='/whoarewe'>من نحن</Link>
             <Link to='/lessons'>الدورات</Link>
             <Link to='/footerproject'>المشاريع</Link>
             <Link to='/footerforum'>المنتدى</Link>
             <Link to='/news'>الأخبار</Link>
             </div>
             <div className='footer-transfers'>
                <h5>التنقلات</h5>
               <span className='small-footer-line'></span> 
               <Link to='/policy'>السياسة</Link>
             <Link to='/partners'>الشركاء</Link>
             <Link to='/footerproject'>المشاريع</Link>
             <Link to='/help'>المساعدة</Link>
             <Link to='/support'>الدعم</Link>
             </div>
             <div className='conect-us'>
                <h5>اتصل بنا</h5>
                <div className='location'>
                <CiLocationOn className='location-icon'/>
                <span>سوريا/جانب مبنى الشيخ احمد الشرع/الشارع10024/الحي رقم 1</span>
                </div>
                <div className='email'>
                    <MdOutlineEmail className='email--icon' />
                    <span>info@yourdomain.com</span>
                </div>
                <div className='conect-number'>
                    <IoCallOutline className='conect-icon' />
                    <span> 888 0000 101 (0) 99+ </span>
                </div>
             </div>
             </div>
             <span className='footer-line'></span>
             <div className='footer-end'>
                <p>
                    جميع الحقوق محفوظة للمنصة السورية 2025  
                    <FaRegCopyright className='copyright-icon' />
                </p>
                <div className='social-midea'>
                <CiTwitter className='twitter' />
                <TiSocialLinkedin className='linkedin' />
                <FaInstagram className='instagram' />
                <FaFacebookF className='facebook' />
                </div>
             </div>
             
        </div>
    

    </div>
  )
}

export default Footer
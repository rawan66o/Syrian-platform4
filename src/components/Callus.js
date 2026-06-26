import React from "react";
import { Link } from "react-router";
import { images } from "../assets/images";
import "../assets/styles/callus.css";

function Callus() {
  return (
    <div className="callus-container">
      <div className="contact-details">
        <div className="first-col-callus">
          <div className="callus-logo">
            <img src={images.logo4} alt="logo" className="logo" />
          </div>
          <div className="intro">
            <p>
              المنصّة الوزاريّة التعليميّة هي بوابة رقمية شاملة تهدف
              <br /> تجمع المنصّة بين التقنيات الحديثة والمحتوى المحلي لتسهيل
              الوصول إلى المعرفة في أي وقتمكان.المنصّة الوزاريّةشاملة تهدف .
            </p>
          </div>
        </div>
        <div className="second-col-callus">
          <div className="main">
            <h3>الرئيسية</h3>
            <img src={images.Frame1171274996} alt="line" />
          </div>
          <div className="footer-links">
            <Link to="">من نحن</Link>
            <Link to="">الدورات</Link>
            <Link to="">المشاريع</Link>
            <Link to="">المنتدى</Link>
            <Link to="">الاخبار</Link>
          </div>
        </div>
        <div className="third-col-callus">
          <div className="main">
            <h3>التنقلات</h3>
            <img src={images.Frame1171274996} alt="line" />
          </div>
          <div className="footer-links">
            <Link to="">السياسة </Link>
            <Link to="">الشركاء</Link>
            <Link to="">المشاريع</Link>
            <Link to="">المساعدة</Link>
            <Link to="">الدعم</Link>
          </div>
        </div>
        <div className="forth-col-callus">
          <div className="main">
            <h3>اتصل بنا</h3>
            <img src={images.Frame1171274996} alt="line" />
          </div>
          <div>
            <div className="location">
              <img src={images.location} alt="location" />
              <p>
                سوريا / جانب مبنى الشيخ احمد الشرع / الشارع 10024 / الحي رقم 1
              </p>
            </div>
            <div className="email">
              <img src={images.email} alt="email" />
              <p>info@yourdomain.com</p>
            </div>
            <div className="call">
              <img src={images.call} alt="call" />
              <p>+99 (0) 101 0000 888</p>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-footer">
        <img src={images.line29} alt="line" />
        <div className="footer-content">
          <div className="sentence">
            <h6> جميع الحقوق محفوظة للمنصة السورية 2025 © </h6>
          </div>
          <div className="icones-links">
            <Link to="">
              <img src={images.path13} alt="facebook-icone" />
            </Link>
            <Link to="">
              <img src={images.Group888} alt="instagram-icone" />
            </Link>
            <Link to="">
              <img src={images.path7} alt="linkedIn-icone" />
            </Link>
            <Link to="" className="twiter-icone">
              <img src={images.path6} alt="twiter-icone" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Callus;

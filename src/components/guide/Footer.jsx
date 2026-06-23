import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="guide-footer">
      <div className="guide-footer-container">
        {/* الصف الأول: 4 أعمدة */}
        <div className="guide-footer-columns">
          {/* العمود 1: وصف المنصة */}
          <div className="guide-footer-col">
            <div className="guide-footer-logo">
              <img
                src="/assets/images/sp logo 12.png"
                alt="Syrian Platform"
                className="guide-footer-logo-img"
              />
            </div>
            <p className="guide-footer-description">
              المنصّة الوزاريّة التعليميّة هي بوابة رقمية شاملة تجمع المنصّة بين
              التقنيات الحديثة والمحتوى المحلي لتسهيل الوصول إلى المعرفة في أي
              وقت ومكان.{" "}
            </p>
          </div>

          {/* العمود 2: روابط سريعة */}
          <div className="guide-footer-col">
            <h3 className="guide-footer-title">الرئيسية</h3>
            <div className="guide-footer-divider"></div>
            <ul className="guide-footer-links">
              <li>
                <a href="/about">من نحن</a>
              </li>
              <li>
                <a href="/courses">الدورات</a>
              </li>
              <li>
                <a href="/projects">المشاريع</a>
              </li>
              <li>
                <a href="/forum">المنتدى</a>
              </li>
              <li>
                <a href="/news">الاخبار</a>
              </li>
            </ul>
          </div>

          {/* العمود 3: التنقلات */}
          <div className="guide-footer-col">
            <h3 className="guide-footer-title">التنقلات</h3>
            <div className="guide-footer-divider"></div>
            <ul className="guide-footer-links">
              <li>
                <a href="/policy">السياسة</a>
              </li>
              <li>
                <a href="/partners">الشركاء</a>
              </li>
              <li>
                <a href="/projects">المشاريع</a>
              </li>
              <li>
                <a href="/help">المساعدة</a>
              </li>
              <li>
                <a href="/support">الدعم</a>
              </li>
            </ul>
          </div>

          {/* العمود 4: معلومات التواصل */}
          <div className="guide-footer-col">
            <h3 className="guide-footer-title">اتصل بنا</h3>
            <div className="guide-footer-divider"></div>

            {/* أيقونة الموقع */}
            <div className="guide-footer-contact-item">
              <div className="guide-footer-icon-svg">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <span className="guide-footer-text">
                سوريا / جانب مبنى الشيخ<br />
                احمد الشرع / الشارع 10024 /<br />
                الحي رقم 1
              </span>
            </div>

            {/* أيقونة البريد الإلكتروني */}
            <div className="guide-footer-contact-item">
              <div className="guide-footer-icon-svg">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 7L2 7" />
                </svg>
              </div>
              <span className="guide-footer-text">info@yourdomain.com</span>
            </div>

            {/* أيقونة الهاتف التقليدية */}
            <div className="guide-footer-contact-item">
              <div className="guide-footer-icon-svg">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.574 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <span className="guide-footer-text">888 0000 101 (0) 99+</span>
            </div>
          </div>
        </div>

        {/* الصف الثاني: أيقونات التواصل الاجتماعي وحقوق النشر */}
        <div className="guide-footer-bottom">
          <div className="guide-footer-copyright">
            جميع الحقوق محفوظة للمنصة السورية 2025 ©
          </div>

          <div className="guide-footer-social">
            {/* Twitter */}
            <div className="guide-social-icon twitter">
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="#ffffff"
                stroke="none"
                strokeWidth="0"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </div>
            {/* Linkedin */}
            <div className="guide-social-icon linkedin">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="none"
                strokeWidth="1.5"
              >
                <text
                  x="12"
                  y="13"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontFamily="Arial Black, Arial, Helvetica, sans-serif"
                  fontSize="25"
                  fontWeight="900"
                  letterSpacing="-0.4"
                  fill="currentColor"
                >
                  in
                </text>
              </svg>
            </div>
            {/* Instagram */}
            <div className="guide-social-icon instagram">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </div>
            {/* Facebook */}
            <div className="guide-social-icon facebook">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="none"
                strokeWidth="1.5"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

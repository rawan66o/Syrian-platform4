import React from "react";
import styles from "./Footer.module.css";
import location from "../../assets/icons/location.svg";
import email0 from "../../assets/icons/email.svg";
import call from "../../assets/icons/call.svg";
import logo from "../../assets/icons/logo-footer.svg";
import facbook from "../../assets/icons/facebook.svg";
import insta from "../../assets/icons/insta.svg";
import linkedin from "../../assets/icons/linked.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icons/twitter.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className={styles.footer_container} dir="rtl">
      <div className={styles.footer_container2}>
        <div className={styles.footer_content}>
          <div className={styles.content_child4}>
            <div className={styles.child}>
              <Link to="/">
                <img className={styles.footer_logo_img} src={logo} alt="" />
              </Link>
            </div>

            <div className={styles.child}>
              <p>
                المنصة الوزارية التعليمية هي بوابة رقمية شاملة، تهدف إلى الجمع
                بين التقنيات الحديثة والمحتوى المحلي لتسهيل الوصول إلى المعرفة
                في أي وقت ومكان.
              </p>
            </div>
          </div>

          <div className={styles.content_child}>
            <div className={styles.child}>
              <h3>الرئيسية</h3>
              <div className={styles.line}></div>
            </div>

            <div className={styles.child}>
              <Link to="/aboutUs">من نحن</Link>
            </div>

            <div className={styles.child}>
              <Link to="/courses">الدورات</Link>
            </div>

            <div className={styles.child}>
              <Link to="/projects">المشاريع</Link>
            </div>

            <div className={styles.child}>
              <Link to="/forum">المنتدى</Link>
            </div>

            <div className={styles.child}>
              <Link to="/news">الأخبار</Link>
            </div>
          </div>

          <div className={styles.content_child}>
            <div className={styles.child}>
              <h3>التنقلات</h3>
              <div className={styles.line}></div>
            </div>

            <div className={styles.child}>
              <Link to="/politics">السياسة</Link>
            </div>

            <div className={styles.child}>
              <Link to="/partners">الشركاء</Link>
            </div>

            <div className={styles.child}>
              <Link to="/projects">المشاريع</Link>
            </div>

            <div className={styles.child}>
              <Link to="/help">المساعدة</Link>
            </div>

            <div className={styles.child}>
              <Link to="/support">الدعم</Link>
            </div>
          </div>

          <div className={styles.content_child}>
            <div className={styles.child}>
              <h3>اتصل بنا</h3>
              <div className={styles.line}></div>
            </div>

            <div className={styles.child}>
              <p>
                <img
                  src={location}
                  alt=""
                  style={{ display: "inline-block" }}
                />{" "}
                {""} سوريا / جانب مبنى الشيخ احمد الشرع / الشارع 10024 / الحي
                رقم 1
              </p>
            </div>

            <div className={styles.child}>
              <p>
                <img src={email0} alt="" style={{ display: "inline-block" }} />
                {""} info@yourdomain.com
              </p>
            </div>

            <div className={styles.child}>
              <p>
                <img src={call} alt="" style={{ display: "inline-block" }} />
                {""} +99 (0) 101 0000 888
              </p>
            </div>
          </div>
        </div>

        <div className={styles.horizontal_divider}></div>
        <div className={styles.footer_bottom} dir="ltr">
          <div className={styles.bottom_icons}>
            <Link>
              {" "}
              <div className={styles.icon}>
                <img src={facbook} alt="" />
              </div>
            </Link>
            <Link>
              {" "}
              <div className={styles.icon}>
                <img src={insta} alt="" />
              </div>
            </Link>
            <Link>
              {" "}
              <div className={styles.icon}>
                <img src={linkedin} alt="" />
              </div>
            </Link>
            <Link>
              {" "}
              <div className={styles.icon}>
                <TwitterIcon style={{ fill: "#072127" }} />{" "}
              </div>
            </Link>
          </div>
          <div className={styles.bottom_text}>
            <p> © جميع الحقوق محفوظة للمنصة السورية 2025 </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;

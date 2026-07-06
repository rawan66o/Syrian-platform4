import { Link } from "react-router-dom";
import { images } from "../assets/images";
import "../assets/styles/SideNav.css";

function SideNav({ isOpen }) {
  return (
    <div className={`side-nav ${isOpen ? "open" : ""}`}>
      <div className="menu-section">
        <span className="section-title">معلوماتي</span>

        <Link className="menu-item active">
          <span>لوحة التحكم</span>
          <img src={images.controlpanel} alt="controlpanel" />
        </Link>

        <Link className="menu-item">
          <span>الملف الشخصي</span>
          <img src={images.userdetails} alt="userdetails" />
        </Link>

        <Link className="menu-item" to="/الشهادات">
          <span>الشهادات</span>
          <img src={images.certaficate} alt="certaficate" />
        </Link>

        <Link className="menu-item" to="/المشاريع-التطوعية">
          <span>المشاريع التطوعية</span>
          <img src={images.lamp} alt="lamp" />
        </Link>

        <Link className="menu-item" to="/الكورسات-الجارية">
          <span>الكورسات</span>
          <img src={images.courses} alt="courses" />
        </Link>

        <span className="section-title divider">أخرى</span>

        <Link className="menu-item">
          <span>الاعدادات</span>
          <img src={images.setting} alt="setting" />
        </Link>

        <Link className="menu-item logout">
          <span>تسجيل الخروج</span>
          <img src={images.logout} alt="logout" />
        </Link>
      </div>
    </div>
  );
}

export default SideNav;

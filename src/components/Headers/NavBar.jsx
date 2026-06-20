import React from "react";
import styles from "./NavBar.module.css";
import avatar from "../../assets/images/account_img.jpg";
import earth from "../../assets/icons/Earth.svg";
import notifcation from "../../assets/icons/Notifaction.svg";
import searchIcon from "../../assets/icons/search-Icon.svg";
import { Link, NavLink } from "react-router-dom";
import syLogo from "../../assets/images/SYplatform-logo.svg";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  return (
    <nav className={styles.NavBar_container}>
      <div className={styles.group_one}>
        <Link to="/account/dashboard" className={styles.account_info}>
            <p>المدرب.محمد الشيخ</p>
          <div className={styles.imageBackground} >
            <img src={avatar} alt="" />
          </div>
        </Link>
        <div className={styles.verticalDivider}></div>
        <div className={styles.hugContainer}>
          <button>
            <img src={earth} alt="" />
          </button>
          <button>
            <img src={notifcation} alt="" />
          </button>
        </div>
      </div>
      <div className={styles.searchInput}>
        <input type="text" placeholder="البحث" />
        <span className={styles.iconWrapper}>
          <img src={searchIcon} alt="" />
        </span>
      </div>
      <button className={styles.burger} onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={`${styles.group_two} ${open ? styles.open : ""}`}>
        {" "}
        <div className={styles.NavBar_groupTwo}>
          <NavLink to={"/contact"}>
            <span>اتصل بنا</span>
          </NavLink>
          <NavLink to={"/projects"}>
            {" "}
            <span>المشاريع</span>
          </NavLink>
          <NavLink to={"/forum"}>
            {" "}
            <span>المنتدى</span>
          </NavLink>
          <NavLink to={"/courses"}>
            {" "}
            <span>الكورسات</span>
          </NavLink>
          <NavLink to={"/"}>
            {" "}
            <span>الرئيسية</span>
          </NavLink>
          <div className={styles.verticalDivider}></div>
          <img
            src={syLogo}
            alt=""
            onClick={() => navigate("/home")}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

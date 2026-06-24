import React from "react";
import styles from "./Account.module.css";
import SideNav from "../../components/Account/SideNav";
<<<<<<< HEAD
import Header from "../../components/Headers/Header";
import Footer from "../../components/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
=======
import { Outlet } from "react-router-dom";
import Header from "../../components/Headers/Header";
import Footer from "../../components/Footer/Footer";
>>>>>>> 4b824660b2e9eeae079cfce6e9109d95c0640bf8

const Account = () => {
  const location = useLocation();
  const showHeaderFooter = ["/account/dashboard", "/account/profile"].includes(location.pathname);

  return (
    <>
<<<<<<< HEAD
      {showHeaderFooter && <Header />}
      <div className={styles.Account_page}>
        <div className={styles.Account_container} dir="rtl">
          <SideNav />
          <div className={styles.Account_content}>
            <Outlet />
          </div>
        </div>
      </div>
      {showHeaderFooter && <Footer />}
=======
      <Header />
      <div className={styles.Account_container} dir="rtl">
        <SideNav />
        <Outlet />
      </div>
      <Footer />
>>>>>>> 4b824660b2e9eeae079cfce6e9109d95c0640bf8
    </>
  );
};

export default Account;

import React from "react";
import styles from "./Account.module.css";
import SideNav from "../../components/Account/SideNav";
import Header from "../../components/Headers/Header";
import Footer from "../../components/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";

const Account = () => {
  const location = useLocation();
  const showHeaderFooter = ["/account/dashboard", "/account/profile"].includes(location.pathname);

  return (
    <>
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
    </>
  );
};

export default Account;

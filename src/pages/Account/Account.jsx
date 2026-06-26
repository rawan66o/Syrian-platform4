import React from "react";
import styles from "./Account.module.css";
import SideNav from "../../components/Account/SideNav";
import { Outlet } from "react-router-dom";
import Header from "../../components/Headers/Header";
import Footer from "../../components/Footer/Footer";

const Account = () => {
  return (
    <>
      <Header />
      <div className={styles.Account_container} dir="rtl">
        <SideNav />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Account;

import React from "react";
import styles from "./MainLayout.module.css";
import Header from "../components/Headers/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <div className={styles.app_wrapper}>
      <Header />
      <main className={styles.main_content}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;

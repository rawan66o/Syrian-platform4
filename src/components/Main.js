import React from "react";
import { Link } from "react-router";
import Content from "./Content";
import { images } from "../assets/images";
import "../assets/styles/main.css";
import Callus from "./Callus";
import { homeData } from "../data.js";

function Main() {
  return (
    <>
      <div className="main-section">
        <div className="content-main">
          <div className="no-content"></div>
          <div className="title-main">
            <h2>المنتدى</h2>
          </div>
          <div className="btn-open-topic">
            <button>
              <p className="open-topic">فتح موضوع</p>
              <img
                src={images.addsquare}
                alt="Add Square"
                className="add-square"
              />
            </button>
          </div>
        </div>
        <nav className="topics-navbar">
          <div className="topics">
            <Link to="/">الرئيسية</Link>
            <Link to="/اخبار">اخبار</Link>
            <Link to="/مقالات">مقالات</Link>
            <Link to="/قصص نجاح">قصص نجاح</Link>
            <Link to="/مقالات"> مقالات</Link>
          </div>
        </nav>
      </div>
      <Content pageData={homeData} />
      <Callus />
    </>
  );
}

export default Main;

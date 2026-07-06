import React from "react";
import { Link } from "react-router";
import Content from "./Content";
import { images } from "../assets/images";
import "../index.css";
import Callus from "./Callus";
import { projectData } from "../data.js";
function Projects() {
  return (
    <>
      <div className="main-section">
        <div className="content-main">
          <div className="no-content"></div>
          <div className="title-main">
            <h2>المشاريع التطوعية</h2>
          </div>
          <div className="btn-open-topic">
            <button>
              <p className="open-topic">اضافة مشروع </p>
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
      <Content pageData={projectData} />
      <Callus />
    </>
  );
}

export default Projects;

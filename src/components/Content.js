import React from "react";
import Post from "./Post";
import "../assets/styles/content.css";
// import { homeData } from "../data.js";
// import Categories from "./CategoryFilter.js";
import CategoryFilter from "./CategoryFilter.js";
import { useState } from "react";
import Articles from "./Articles.js";
import Pagination from "./Pagination.js";

function Content({ pageData }) {
  const [activeCategory, setActiveCategory] = useState("");

  return (
    <>
      <div className="content-page">
        <div className="posts-section">
          <div className="posts-columns-container">
            <div className="first-col">
              {pageData.map((item) => (
                <Post key={item.id} pageData={item} />
              ))}
              {pageData.map((item) => (
                <Post key={item.id} pageData={item} />
              ))}
            </div>
            <div className="second-col">
              {pageData
                .slice()
                .reverse()
                .map((item) => (
                  <Post key={item.id} pageData={item} />
                ))}
              {pageData
                .slice()
                .reverse()
                .map((item) => (
                  <Post key={item.id} pageData={item} />
                ))}
            </div>
          </div>
          <Pagination />
        </div>
        <div className="third-col">
          <CategoryFilter
            activeCategory={activeCategory}
            setCategory={setActiveCategory}
          />
          <Articles limit={3} />
        </div>
      </div>
    </>
  );
}

export default Content;

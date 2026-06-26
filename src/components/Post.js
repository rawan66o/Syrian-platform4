import React from "react";
import { images } from "../assets/images";
import "../assets/styles/post.css";
import { Link } from "react-router";
import StatusComponent from "./StatusComponent";

function Post({ pageData }) {
  return (
    <div className="post-container">
      <div className="image-Post">
        <img src={pageData.image} alt="post" />
      </div>
      <div className="post-content">
        <div className="post-date">
          <div>
            <img src={images.calendar} alt="calendar" className="calender" />
            <p className="thedate">{pageData.date}</p>
          </div>

          {pageData.volunteers ? (
            <StatusComponent status={pageData.comment} />
          ) : (
            <span className="comment"> {pageData.comment}</span>
          )}
        </div>
        <div className="post-title">
          <h2>{pageData.title}</h2>
        </div>
        <div className="post-description">
          <p>{pageData.desc}</p>
        </div>
        {/* قسم الفوتر الذكي (التوجيه الشرطي) */}
        <div className="post-auth">
          {pageData.volunteers ? (
            /* 1. شكل صفحة مشاريع الفرق (إذا وجدت مصفوفة المتطوعين) */
            <div className="volunteers-section">
              <span className="volunteers-count">
                {pageData.volunteers.length} متطوع حالي بالمشروع
              </span>

              <div className="avatar-group">
                {pageData.volunteers.slice(0, 3).map((v, index) => (
                  <img
                    key={index}
                    src={v.image}
                    className="avatar-img"
                    alt="volunteer"
                  />
                ))}
                <span className="plus-sign">+</span>
              </div>
            </div>
          ) : (
            /* 2. شكل الصفحة الأساسية (إذا لم توجد مصفوفة متطوعين) */
            <div className="author-section">
              <img
                src={pageData.authimage}
                className="author-img"
                alt={pageData.authName}
              />
              <div className="author-info">
                <span className="author-name">{pageData.auth}</span>
                <span className="period">{pageData.period}</span>
              </div>
            </div>
          )}
        </div>
        <div className="btns-container">
          {pageData.volunteers /* شكل الزر الجديد الخاص بصفحة مشاريع الفرق (نص وتحته خط وسهم) */ ? (
            <div className="post-btn">
              {" "}
              <Link
                to={`/details/project/${pageData.id}`}
                className="view-project-link fixed-width-btn"
              >
                {" "}
                <img
                  src={images.vector1}
                  alt="toright"
                  className="arrow-icon"
                />
                عرض المشروع
              </Link>
            </div>
          ) : (
            <div className="post-footer">
              <Link to={`/details/post/${pageData.id}`}>
                عرض المنشور
                <img src={images.vector1} alt="toright" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Post;

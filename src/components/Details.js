import React from "react";
import { images } from "../assets/images";
import { Link, useParams } from "react-router-dom";
import { homeData, projectData, content } from "../data.js";
import { testimonials } from "../commentsdata.js";
import CommentCard from "./CommentCard.js";
import Articles from "./Articles.js";
import AddComment from "./AddComment.js";
import Callus from "./Callus.js";
import StatusComponent from "./StatusComponent.js";
import "../assets/styles/details.css";
import Volunteers from "./Volunteers.js";

function Details({ pageData }) {
  /* 
  ملاحظة للمستقبل: عندما تجهز الـ API، ستقوم بجلب البيانات هنا:
  useEffect(() => {
    fetch('https://example.com')
      .then(res => res.json())
      .then(data => setComments(data));
  }, []);
  */
  // const [comments, setComments] = useState(testimonials);
  const paragraphs = content.split(/\n\s*\n/);

  const { id } = useParams();
  // 1. تحديد مصفوفة البيانات بناءً على الـ Props الممررة
  const dataSource = pageData === "projectData" ? projectData : homeData;
  const card = dataSource.find((item) => item.id === parseInt(id));
  // const card = projectData.find((item) => item.id === parseInt(id));
  if (!card) return <h2>هذا المحتوى غير موجود!</h2>;
  return (
    <>
      <div className="details-page">
        <div className="post-details">
          <div className="title-post">
            {pageData === "projectData" ? (
              <div className="title-with-back">
                <img
                  src={images.arrowleft}
                  alt="arrowleft"
                  className="arrowLeft"
                />
                <h2>{card.title}</h2>
              </div>
            ) : (
              <h2>{card.title}</h2>
            )}
          </div>
          <div className="post-content">
            <div className="post-date">
              <div className="date-and-share">
                {pageData === "projectData" ? (
                  <StatusComponent status={card.comment} />
                ) : (
                  <div>
                    <img
                      src={images.calendar}
                      alt="calendar"
                      className="calender"
                    />
                    <p className="thedate">{card.date}</p>
                  </div>
                )}
                <button>
                  <span>مشاركة</span>
                  <img src={images.vector2} alt="share" />
                </button>
              </div>
              <div>
                {pageData === "projectData" ? (
                  <Link to="/تسجيل-متطوع" className="login-volunteer">
                    طلب الدخول كمتطوع
                  </Link>
                ) : (
                  <></>
                )}
              </div>
            </div>

            <div className="image-Post">
              <img src={card.image} alt="post" />
            </div>
            {pageData === "projectData" ? (
              <div className="project-details">
                <div className="start-date">
                  <h5>موعد البدأ</h5>
                  <div>
                    <span className="day">الأحد </span>
                    <div className="date">
                      <img
                        src={images.calendar}
                        alt="calendar"
                        className="calender"
                      />
                      <span>22 ايار / 2025</span>
                    </div>
                  </div>
                </div>
                <div className="organiztion">
                  <h2>الجهة المنفذة :</h2>
                  <img
                    src={images.syrianflag}
                    alt="syrianflag"
                    className="syrianflag"
                  />
                </div>
              </div>
            ) : (
              <></>
            )}

            <div className="post-description">
              {pageData === "projectData" ? <h2>وصف المشروع</h2> : <></>}
              {paragraphs.map((p, i) => (
                <p key={i}>{p.trim()}</p>
              ))}
            </div>
            {pageData === "projectData" ? (
              <Volunteers />
            ) : (
              <div className="images">
                <h3 className="title-images">صور وملحقات اخرى :</h3>

                <div className="images-container">
                  {/* الصورة الأولى المغلفة */}
                  <div className="card">
                    <img src={card.image} alt="image" />
                  </div>

                  {/* الصورة الثانية المغلفة */}
                  <div className="card">
                    <img src={card.image} alt="image" />
                  </div>

                  {/* الصورة الثالثة التي تحتوي على الطبقة المظلمة والعداد */}
                  <div className="card">
                    <img src={card.image} alt="image" />
                    <div className="overlay">
                      <div className="text">
                        <span className="count">+20</span>
                        <span className="label">صورة</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="comments-section">
              <div className="title-comments">
                <h3>التعليقات :</h3>
                <h6>( 122 تعليق ) </h6>
              </div>
              <div className="comments-content">
                {testimonials.map((item) => (
                  <CommentCard key={item.id} data={item} />
                ))}
              </div>
              <AddComment />
            </div>
          </div>
        </div>
        <div className="articals">
          <Articles limit={5} />
        </div>
      </div>
      <Callus />
    </>
  );
}

export default Details;

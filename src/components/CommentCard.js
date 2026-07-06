import React from "react";
import { contentcomment } from "../commentsdata.js";
import { useState } from "react";
import "../assets/styles/commentcard.css";

function CommentCard({ data }) {
  const comments = contentcomment.split(/\n/);
  // حالة للتحكم في إظهار وإخفاء قسم الردود
  const [showReplies, setShowReplies] = useState(false);

  // التأكد من وجود ردود في البيانات
  const hasReplies = data.replies && data.replies.length > 0;

  return (
    <div className="cardStyle">
      {/* القسم العلوي للتعليق الأساسي */}
      <div className="header">
        <div>
          <img src={data.avatar} alt={data.name} />
          <div>
            <h4>{data.name}</h4>
            <small>({data.role})</small>
          </div>
        </div>
        <span>
          {data.date} <text>(منذ يومين)</text>
        </span>
      </div>

      {/* محتوى التعليق الأساسي */}
      <div className="content">
        {comments.map((p, i) => (
          <p key={i}>{p.trim()}</p>
        ))}
        {/* <p>{data.text}</p> */}
      </div>

      <div className="footer">
        {/* أزرار التحكم */}
        <div className="buttons">
          {/* الزر يتغير نصه بناءً على الحالة وعدد الردود */}
          {hasReplies ? (
            <button
              className="hidden-comments"
              onClick={() => setShowReplies(!showReplies)}
            >
              {showReplies
                ? "إخفاء الردود"
                : `${data.replies.length} من الردود`}
            </button>
          ) : (
            <div /> // فراغ للحفاظ على توزيع الجوانب (Space-between)
          )}

          <button className="call-comments">رد على التعليق</button>
        </div>

        {/* قسم الردود: يظهر فقط عند الضغط على الزر */}
        {showReplies && hasReplies && (
          <div className="replies-wrapper" style={{ width: "100%" }}>
            {data.replies.map((reply) => (
              <div className="response" key={reply.id}>
                <div className="header">
                  <div>
                    <img src={reply.avatar} alt={reply.name} />
                    <div>
                      <h4>{reply.name}</h4>
                      <small>({reply.role})</small>
                    </div>
                  </div>
                  <span>
                    {reply.date} <text>(منذ يومين)</text>
                  </span>
                </div>
                <div className="content">
                  {comments.map((p, i) => (
                    <p key={i}>{p.trim()}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CommentCard;

import React from "react";

function AddComment() {
  return (
    <div className="add-comment-container">
      <input
        type="text"
        placeholder="أضف ردك هنا..."
        className="add-comment-input"
      />
      <button className="add-comment-button">إرسال</button>
    </div>
  );
}

export default AddComment;

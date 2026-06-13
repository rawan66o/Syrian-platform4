import React, { useState, useRef } from "react";
import Navbar from "../../components/layout/Navbar";
import "./AddForumPage.css";

const AddForumPage = ({ onBack }) => {
  // حالة بيانات المنشور
  const [postData, setPostData] = useState({
    title: "",
    category: "مقالة",
    coverImage: null,
    shortDescription: "",
    attachments: [],
    fullDescription: "",
  });

  const coverInputRef = useRef(null);
  const attachmentsInputRef = useRef(null);

  const handleChange = (field, value) => {
    setPostData({ ...postData, [field]: value });
  };

  const handleCoverImageClick = () => {
    coverInputRef.current.click();
  };

  const handleCoverImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleChange("coverImage", e.target.files[0]);
    }
  };

  const handleAttachmentsClick = () => {
    attachmentsInputRef.current.click();
  };

  const handleAttachmentsChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const filesArray = Array.from(e.target.files);
      handleChange("attachments", [...postData.attachments, ...filesArray]);
    }
  };

  const removeAttachment = (index) => {
    const newAttachments = [...postData.attachments];
    newAttachments.splice(index, 1);
    handleChange("attachments", newAttachments);
  };

  const handleSubmit = () => {
    if (!postData.title.trim()) {
      alert("الرجاء إدخال عنوان المنشور");
      return;
    }
    if (!postData.shortDescription.trim()) {
      alert("الرجاء إدخال وصف قصير للمنشور");
      return;
    }
    if (!postData.fullDescription.trim()) {
      alert("الرجاء إدخال وصف كامل للمنشور");
      return;
    }

    console.log("تم نشر المنشور:", postData);
    alert("✅ تم نشر المنشور بنجاح!");

    setPostData({
      title: "",
      category: "مقالة",
      coverImage: null,
      shortDescription: "",
      attachments: [],
      fullDescription: "",
    });

    if (onBack) onBack();
  };

  return (
    <div className="addforum-page-wrapper">
      <Navbar />

      <div className="addforum-main-card">
        <div className="addforum-header">
          <h1 className="addforum-title">إضافة منشور جديدة :</h1>
        </div>

        <div className="addforum-content-card">
          <div className="addforum-form">
            {/* عنوان المنشور */}
            <div className="addforum-form-group">
              <label className="addforum-input-label">عنوان المنشور</label>
              <p className="addforum-input-hint">
                من فضلك يجب أن يكون الاسم معبراً ولا يتجاوز 30 حرف.
              </p>
              <input
                type="text"
                className="addforum-custom-input"
                placeholder="دورة لغة انجليزية"
                value={postData.title}
                onChange={(e) => handleChange("title", e.target.value)}
                maxLength={30}
              />
            </div>

            {/* تصنيف المنشور */}
            <div className="addforum-form-group">
              <label className="addforum-input-label">تصنيف المنشور</label>
              <select
                className="addforum-custom-select"
                value={postData.category}
                onChange={(e) => handleChange("category", e.target.value)}
              >
                <option>مقالة</option>
                <option>خبر</option>
                <option>إعلان</option>
                <option>فعالية</option>
              </select>
            </div>

            {/* صورة الغلاف */}
            <div className="addforum-form-group">
              <label className="addforum-input-label">صورة الغلاف</label>
              <p className="addforum-input-hint">
                من فضلك يجب أن تكون الصورة معبرة ومناسبة مع الاسم.
              </p>
              <div
                className="addforum-upload-box"
                onClick={handleCoverImageClick}
              >
                <div className="addforum-upload-icon">
                  <div className="addforum-upload-plus-box">
                    <span>+</span>
                  </div>
                </div>
                {postData.coverImage && (
                  <span className="addforum-upload-filename">
                    {postData.coverImage.name}
                  </span>
                )}
                {!postData.coverImage && (
                  <span className="addforum-upload-hint">اضغط لرفع الصورة</span>
                )}
              </div>
              <input
                type="file"
                ref={coverInputRef}
                style={{ display: "none" }}
                accept="image/*"
                onChange={handleCoverImageChange}
              />
            </div>

            {/* وصف قصير */}
            <div className="addforum-form-group">
              <label className="addforum-input-label">وصف قصير</label>
              <p className="addforum-input-hint">يجب أن لا يتجاوز 50 حرف.</p>
              <textarea
                className="addforum-custom-textarea addforum-textarea-small"
                placeholder="وصف قصير للمنشور"
                rows="3"
                maxLength={50}
                value={postData.shortDescription}
                onChange={(e) =>
                  handleChange("shortDescription", e.target.value)
                }
              />
              <div className="addforum-char-counter">
                {postData.shortDescription.length}/50 حرف
              </div>
            </div>

            {/* ملحقات (صور او فيديوهات) */}
            <div className="addforum-form-group">
              <label className="addforum-input-label">
                ملحقات (صور او فيديوهات)
              </label>
              <p className="addforum-input-hint">
                من فضلك يجب أن تكون الصورة معبرة ومناسبة مع الاسم.
              </p>
              <div
                className="addforum-upload-box"
                onClick={handleAttachmentsClick}
              >
                <div className="addforum-upload-icon">
                  <div className="addforum-upload-plus-box">
                    <span>+</span>
                  </div>
                </div>
                {postData.attachments.length > 0 && (
                  <div className="addforum-attachments-list">
                    {postData.attachments.map((file, idx) => (
                      <div key={idx} className="addforum-attachment-item">
                        <span>{file.name}</span>
                        <button
                          type="button"
                          className="addforum-remove-attachment"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeAttachment(idx);
                          }}
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                )}
                {postData.attachments.length === 0 && (
                  <span className="addforum-upload-hint">
                    اضغط لرفع الملفات
                  </span>
                )}
              </div>
              <input
                type="file"
                ref={attachmentsInputRef}
                style={{ display: "none" }}
                accept="image/*,video/*"
                multiple
                onChange={handleAttachmentsChange}
              />
            </div>

            {/* وصف المنشور الكامل */}
            <div className="addforum-form-group">
              <label className="addforum-input-label">وصف المنشور الكامل</label>
              <textarea
                className="addforum-custom-textarea"
                placeholder="وصف المنشور كامل ومعبر"
                rows="8"
                value={postData.fullDescription}
                onChange={(e) =>
                  handleChange("fullDescription", e.target.value)
                }
              />
            </div>
          </div>
        </div>
      </div>

      {/* الأزرار السفلية */}
      <div className="addforum-fixed-footer">
        <div className="addforum-footer-buttons">
          <button className="addforum-btn-next" onClick={handleSubmit}>
            نشر المنشور
          </button>
          <button className="addforum-btn-prev" onClick={onBack}>
            السابق
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddForumPage;

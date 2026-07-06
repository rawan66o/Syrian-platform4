import React, { useState } from "react";
import "../assets/styles/logvolunteer.css";
import { images } from "../assets/images";

const LogVolunteer = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "9637260312",
    availableTime: "",
    contribution: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Volunteer Data Submitted:", formData);
  };

  return (
    <div className="log-volunteer-component">
      <main className="main-container">
        <h1 className="page-title">اضافة معلوماتك للانتساب للمشروع :</h1>

        <div className="form-card">
          <form onSubmit={handleSubmit}>
            {/* الاسم الكامل */}
            <div className="form-group">
              <label htmlFor="fullName">الاسم الكامل</label>
              <span className="help-text">
                من فضلك يجب ان يكون الاسم مطابقاً للهوية الشخصية
              </span>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="form-control"
                placeholder="دورة لغة انجليزية"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            {/* رقم الهاتف */}
            <div className="form-group">
              <div className="form-group">
                <label>رقم الهاتف</label>
                <div className="phone-input-wrapper">
                  {/* قسم اختيار الدولة والكود يظهر على اليسار */}
                  <div className="country-selector">
                    <img src={images.syriaflag} alt="سوريا" />
                    <img src={images.down} className="arrow" alt="down" />
                    <div className="divider"></div>
                    <span className="code">+963</span>
                  </div>

                  {/* حقل إدخال الرقم يظهر على اليمين ومحاذاته لليمين */}
                  <input
                    type="tel"
                    name="phone"
                    className="phone-input"
                    placeholder="9xxxxxxxx"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {/* الأيام والساعات المتاحة */}
            <div className="form-group">
              <label htmlFor="availableTime">
                اكتب لنا الايام المتاح بها والساعات المتاحة
              </label>
              <textarea
                id="availableTime"
                name="availableTime"
                className="form-control"
                placeholder="دورة لغة انجليزية"
                value={formData.availableTime}
                onChange={handleChange}
              ></textarea>
            </div>

            {/* ماذا يمكن أن تقدم للمشروع */}
            <div className="form-group">
              <label htmlFor="contribution">
                ماذا يمكن ان تقدم لهذا المشروع ؟
              </label>
              <textarea
                id="contribution"
                name="contribution"
                className="form-control"
                placeholder="دورة لغة انجليزية"
                value={formData.contribution}
                onChange={handleChange}
              ></textarea>
            </div>
          </form>
        </div>
      </main>

      {/* شريط الأزرار السفلي الثابت خارج الـ main */}
      <footer className="footer-actions">
        <button type="button" className="btn-back">
          السابق
        </button>
        <button type="submit" onClick={handleSubmit} className="btn-submit">
          طلب الدخول كمتطوع
        </button>
      </footer>
    </div>
  );
};

export default LogVolunteer;

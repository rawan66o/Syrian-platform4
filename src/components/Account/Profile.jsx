import React, { useState } from "react";
import styles from "./Profile.module.css";
// removed unused react-icons imports
import PhoneInput from "react-phone-input-2";
import user from "../../assets/icons/Account_form1/user.png";
import gmailicn from "../../assets/icons/Account_form1/gmail.png";
import birthicn from "../../assets/icons/Account_form1/calendar.png";
import phoneicn from "../../assets/icons/Account_form1/call.png";
import docicn from "../../assets/icons/Account_form1/Document Align Left 1.png";
import syria from "../../assets/icons/Account_form1/syria.png";
import cvicon from "../../assets/icons/account_form2/Vector.png";
import "react-phone-input-2/lib/style.css";

const Profile = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [studentDescription, setStudentDescription] = useState("");
  const [cvDescription, setCvDescription] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    const data = { fullName, email, dob, phone, studentDescription, cvDescription };
    console.log("Profile data:", data);
  };
  const [fileName, setFileName] = useState("");

  const handleFileChange = e => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name); // تخزين اسم الملف لعرضه للمستخدم
    }
  };
  return (
    <div className={styles.Personal_profile}>
      <div className={styles.Account_info}>
        <div className={styles.Account_title}>
          <p style={{ fontSize: "22px", fontWeight: "500" }}>معلومات الحساب الاساسية</p>
          <p style={{ fontSize: "16px", fontWeight: "500", color: "var(--text-secondary)" }}>
            تتضمن هذه الإعدادات معلومات أساسية عن حسابك.
          </p>
        </div>
        <div className={styles.Account_form1}>
          <div className={styles.item1 + " " + styles.grid_item}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <img src={user} alt="" style={{ width: "20px", height: "20px" }} />
              <p style={{ fontSize: "16px", fontWeight: "500", color: "var(--text-main)" }}>
                الاسم الكامل
              </p>
            </div>
            <input
              type="text"
              name="fullName"
              id=""
              value={fullName}
              placeholder="Moahhedmajf 13hd@Gmail.com"
              onChange={e => setFullName(e.target.value)}
            />
          </div>
          <div className={styles.item2 + " " + styles.grid_item}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <img src={gmailicn} alt="" style={{ width: "20px", height: "20px" }} />
              <p style={{ fontSize: "16px", fontWeight: "500", color: "var(--text-primary)" }}>
                البريد الإلكتروني
              </p>
            </div>
            <input
              type="email"
              name="email"
              id=""
              placeholder="Moahhedmajf 13hd@Gmail.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.item3 + " " + styles.grid_item}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <img src={birthicn} alt="" style={{ width: "20px", height: "20px" }} />
              <p style={{ fontSize: "16px", fontWeight: "500", color: "var(--text-main)" }}>
                تاريخ الميلاد
              </p>
            </div>
            <input
              type="date"
              name="dob"
              id=""
              value={dob}
              onChange={e => setDob(e.target.value)}
            />
          </div>
          <div className={styles.item4 + " " + styles.grid_item}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <img src={phoneicn} alt="" style={{ width: "20px", height: "20px" }} />
              <p style={{ fontSize: "16px", fontWeight: "500", color: "var(--text-main)" }}>
                رقم الهاتف
              </p>
            </div>
            <div className={styles.phoneWrapper}>
              <img src={syria} alt="syria" className={styles.syriaFlag} />
              <PhoneInput
                country={"sy"}
                value={phone}
                onChange={phone => setPhone(phone)}
                disableDropdown={true}
                inputStyle={{ width: "100%", height: 48, paddingLeft: 52 }}
                buttonStyle={{ border: "none" }}
                inputProps={{ name: "phone", required: false }}
              />
            </div>
          </div>
          <div className={styles.item5 + " " + styles.grid_item}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <img src={docicn} alt="" style={{ width: "20px", height: "20px" }} />
              <p style={{ fontSize: "16px", fontWeight: "500", color: "var(--text-main)" }}>
                وصف الطالب
              </p>
            </div>
            <div className={styles.textarea_container}>
              {/* حقل الوصف المفرغ من الحدود */}
              <textarea
                name="cvDescription"
                className={styles.custom_textarea}
                placeholder="2025 / 05 / 02"
                value={cvDescription}
                onChange={e => setCvDescription(e.target.value)}
              />

              {/* السطر السفلي لزر رفع الملف */}
            </div>{" "}
          </div>
        </div>
      </div>{" "}
      <div className={styles.Account_title}>
        <p style={{ fontSize: "22px", fontWeight: "500" }}>معلومات اضافية</p>
      </div>
      <div className={styles.Account_form2}>
        <div className={styles.item1 + " " + styles.grid_item}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <p style={{ fontSize: "16px", fontWeight: "500", color: "var(--text-main)" }}>الجنس </p>
          </div>
          <div className={styles.select_container}>
            <select className={styles.custom_select}>
              {/* الخيار الافتراضي الباهت كـ Placeholder */}
              <option value="" disabled hidden>
                اختر الجنس...
              </option>
              <option value="male">ذكر</option>
              <option value="female">أنثى</option>
            </select>
          </div>
        </div>
        <div className={styles.item2 + " " + styles.grid_item}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <img src={gmailicn} alt="" style={{ width: "20px", height: "20px" }} />
            <p style={{ fontSize: "16px", fontWeight: "500", color: "var(--text-primary)" }}>
              بلد الاقامة{" "}
            </p>
          </div>
          <div className={styles.select_container}>
            <select className={styles.custom_select}>
              {/* الخيار الافتراضي الباهت كـ Placeholder */}
              <option value="" disabled hidden></option>
              <option value="syria">
                <img src={syria} alt="Syria" className={styles.syriaFlag} />
                سوريا
              </option>
            </select>
          </div>
        </div>
        <div className={styles.item5 + " " + styles.grid_item}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <img src={birthicn} alt="" style={{ width: "20px", height: "20px" }} />
            <p style={{ fontSize: "16px", fontWeight: "500", color: "var(--text-main)" }}>
              المرحلة الدراسية{" "}
            </p>
          </div>
          <div className={styles.select_container}>
            <select className={styles.custom_select}>
              {/* الخيار الافتراضي الباهت كـ Placeholder */}
              <option value="" disabled hidden></option>
              <option value="syria">
                <img src={syria} alt="Syria" className={styles.syriaFlag} />
                خريج / طالب جامعي / بكلوريا{" "}
              </option>
            </select>
          </div>
        </div>
        <div className={styles.item5 + " " + styles.grid_item}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <p style={{ fontSize: "16px", fontWeight: "500", color: "var(--text-main)" }}>
                السيرة الذاتية (CV){" "}
              </p>{" "}
              <p style={{ fontSize: "12px", fontWeight: "400", color: "var(--text-secondary)" }}>
                من فضلك يجب أن يكون الملف معبر واحترافي
              </p>
            </div>
          </div>
          <div
            className={styles.textarea_container}
            style={{ justifyContent: "center", gap: "12px", backgroundColor: "#6DCDE50D" }}
          >
            {/* حقل الوصف المفرغ من الحدود */}
            {/* <textarea
              name="cvDescription"
              className={styles.custom_textarea}
              value={cvDescription}
              onChange={e => setCvDescription(e.target.value)}
            /> */}

            {/* السطر السفلي لزر رفع الملف */}
            <div className={styles.action_row}>
              <label className={styles.icon_circle_wrapper}>
                {/* حقل الرفع الفعلي المخفي */}
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
                <img src={cvicon} alt="" />
              </label>
            </div>
          </div>{" "}
        </div>
      </div>{" "}
      <div className={styles.Account_title}>
        <p style={{ fontSize: "22px", fontWeight: "500" }}>حذف الحساب</p>

        <p style={{ fontSize: "16px", fontWeight: "500", color: "var(--text-secondary)" }}>
          يُأسفنا أن نراك تغادر!
        </p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <p style={{ fontSize: "16px", fontWeight: "500", color: "var(--text-secondary)" }}>
          يرجى الملاحظة: حذف حسابك وبياناتك الشخصية دائم ولا يمكن التراجع عنه. لن تتمكن منصة ادراك
          من استعادة حسابك أو البيانات التي تم حذفها.
        </p>
        <p style={{ fontSize: "16px", fontWeight: "500", color: "var(--text-secondary)" }}>
          قد تفقد أيضًا الوصول إلى الشهادات الموثّقة وبيانات اعتماد البرنامج الأخرى مثل شهادات
          التخصصات. إذا كنت ترغب بعمل نسخة من السجلات الخاصة بك قبل متابعة الحذف ، قم باتّباع
          الإرشادات الخاصة بـ طباعة أو تنزيل شهادة .
        </p>
        <button className={styles.delete_account_btn}>حذف الحساب</button>
      </div>
    </div>
  );
};

export default Profile;

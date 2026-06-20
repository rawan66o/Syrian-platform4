import React, { useState } from 'react';
import { RxDashboard } from "react-icons/rx";
import { IoPersonOutline } from "react-icons/io5";
import { LiaCertificateSolid } from "react-icons/lia";
import { FaRegLightbulb } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { CiUnlock } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { IoCallOutline } from "react-icons/io5";
import syriaimages from "../image/syria-images.jpeg";
import { GrNotes } from "react-icons/gr";
import { Link, NavLink } from 'react-router-dom';
import { CiLocationOn } from "react-icons/ci";
import "./Fileforthevolunteer.css";

const Fileforthevolunteer = () => {
    const [activeSection, setActiveSection] = useState("dashboard");

    return (
        <div className='file-forthe-volunteer'>
            {/* القائمة الجانبية (Sidebar) */}
            <div className='my-information'>
                <div className='my-information-content'>
                    <h4>معلوماتي</h4>
                    <span className="my-information-divider"></span>
                    <div className='my-information-buttons'>
                        <button 
                            onClick={() => setActiveSection("dashboard")} 
                            className={`sidebar-btn ${activeSection === "dashboard" ? "active" : ""}`}
                        >
                            <RxDashboard className='sidebar-icon' />
                            لوحة التحكم
                        </button>
                        
                        <button 
                            onClick={() => setActiveSection("profile")} 
                            className={`sidebar-btn ${activeSection === "profile" ? "active" : ""}`}
                        >
                            <IoPersonOutline className='sidebar-icon' />
                            الملف الشخصي
                        </button>
                        
                        <button 
                            onClick={() => setActiveSection("certificate")} 
                            className={`sidebar-btn ${activeSection === "certificate" ? "active" : ""}`}
                        >
                            <LiaCertificateSolid className='sidebar-icon' />
                            الشهادات
                        </button>
                        
                        <button 
                            onClick={() => setActiveSection("volunteerproject")} 
                            className={`sidebar-btn ${activeSection === "volunteerproject" ? "active" : ""}`}
                        >
                            <FaRegLightbulb className='sidebar-icon' />
                            المشاريع التطوعية
                        </button>
                        
                        <button 
                            onClick={() => setActiveSection("courses")} 
                            className={`sidebar-btn ${activeSection === "courses" ? "active" : ""}`}
                        >
                            <IoDocumentTextOutline className='sidebar-icon' />
                            الكورسات 
                        </button>
                    
                        <h4>أخرى</h4>
                        <span className="my-information-divider"></span>
                        
                        <button 
                            onClick={() => setActiveSection("setting")} 
                            className={`sidebar-btn ${activeSection === "setting" ? "active" : ""}`}
                        >
                            <IoSettingsOutline className='sidebar-icon' />
                            الاعدادات
                        </button>
                        
                        <NavLink to='/' className='logout-link'>
                            <CiUnlock className='sidebar-icon' />
                            تسجيل الخروج
                        </NavLink>
                    </div>
                </div>
            </div>

            {/* المحتوى الرئيسي */}
            <div className='content'>
                {activeSection === "dashboard" && (
                    <div className='dashboard'>
                        
                        {/* معلومات الحساب الأساسية */}
                        <div className='basic-account-information'>
                            <h3>معلومات الحساب الأساسية</h3>
                            <p>تتضمن هذه الإعدادات معلومات أساسية عن حسابك</p>
                            
                            <div className='account-information'>
                                <div className="form-group">
                                    <label>
                                        <IoPersonOutline className='profile-icon'/>
                                        الاسم الكامل
                                    </label>
                                    <input type='text' placeholder='Moahhedmajf13hd@Gmail.com' className='full-name'/>
                                </div>

                                <div className="form-group">
                                    <label>
                                        <MdOutlineEmail className='email-icon'/>
                                        البريد الالكتروني
                                    </label>
                                    <input type='email' placeholder='Moahhedmajf13hd@Gmail.com' className='email'/>
                                </div>

                                <div className="form-group">
                                    <label>
                                        <HiOutlineCalendarDateRange className='date-icon' />
                                        تاريخ الميلاد
                                    </label>
                                    {/* حقل تاريخ مع تهيئة القيمة الافتراضية المنسقة لليمين عبر الـ CSS */}
                                    <input type='date' className='date' defaultValue="2025-05-02"/>
                                </div>

                                <div className="form-group">
    <label>
        <IoCallOutline className='call-icon' />
        رقم الهاتف
    </label>
    <div className="phone-input">
        {/* القائمة مقتصرة الآن على سوريا، الأردن، ولبنان */}
        <select className="country-code-select" defaultValue="+963">
            <option value="+963">🇸🇾 +963</option>
            <option value="+962">🇯🇴 +962</option>
            <option value="+961">🇱🇧 +961</option>
        </select>
        <input type="tel" placeholder="9637260312" name="phone" />
    </div>
</div>

                                <div className="form-group full-width">
                                    <label>
                                        <GrNotes className='notes-icon'/>
                                        وصف الطالب
                                    </label>
                                    <textarea placeholder="اكتب وصف الطالب" className="student-description" />
                                </div>
                            </div>
                        </div>

                        {/* معلومات التطوع */}
                        <div className='volunteer-information'>
                            <h3>معلومات التطوع</h3>
                            <p>تتضمن هذه الإعدادات معلومات التطوع الاساسية والمهمة</p>
                            <div className="form-group full-width">
                                <label>اكتب لنا الايام المتاح بها والساعات المتاحة</label>
                                <textarea placeholder="اكتب لنا الايام المتاح بها والساعات المتاحة" className="days-hours" /> 
                            </div>
                        </div>

                        {/* معلومات إضافية */}
                        <div className='additional-information'>
                            <h3 className="full-width">معلومات إضافية</h3>
                            
                            <div className="form-group">
                                <label>الجنس</label>
                                <select name="gender">
                                    <option value="male">ذكر</option>
                                    <option value="female">أنثى</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>
                                    <CiLocationOn className='country-icon' />
                                    بلد الإقامة
                                </label>
                                <select name="country">
                                    <option value="syria">سوريا</option>
                                    <option value="jordan">الأردن</option>
                                    <option value="lebanon">لبنان</option>
                                </select>
                            </div>

                            <div className="form-group full-width">
                                <label>المرحلة الدراسية</label>
                                <select name='study'>
                                    <option value="graduate">خريج / طالب جامعي / بكالوريا</option>
                                    <option value="university-student">طالب جامعي</option>
                                    <option value="baccalaureate">بكالوريا</option>
                                </select>
                            </div>

                            <div className="form-group full-width">
                                <label className="cv-title">السيرة الذاتية (CV)</label>
                                <p style={{ fontSize: '12px', color: '#94a3b8', margin: '0 0 8px 0' }}>من فضلك يجب أن يكون الملف متميز واحترافي</p>
                                <div className="cv-upload">
                                    <label htmlFor="cv-file" className="upload-btn">+</label>
                                    <input id="cv-file" type="file" accept=".pdf,.doc,.docx" />
                                </div>
                            </div>
                        </div>

                        {/* حذف الحساب */}
                        <div className='delete-account'>
                            <h4>حذف الحساب</h4>
                            <p>
                                يؤسفنا ان نراك تغادر! <br />
                                يرجى الملاحظة: حذف حسابك وبياناتك الشخصية دائم ولا يمكن التراجع عنه. 
                                لن تتمكن منصة ادراك من استعادة حسابك أو البيانات التي تم حذفها. <br />
                                قد تفقد أيضًا الوصول إلى الشهادات الموثّقة وبيانات اعتماد البرنامج الأخرى مثل شهادات التخصصات. <br />
                                إذا كنت ترغب بعمل نسخة من السجلات الخاصة بك قبل متابعة الحذف ، قم باتّباع الإرشادات الخاصة بـ <span style={{color: '#61cbdc', cursor: 'pointer'}}>طباعة أو تنزيل شهادة</span>.
                            </p>
                            <Link to='/'>حذف الحساب</Link>
                        </div>
                        
                    </div>
                )}

                {/* بقية الأقسام */}
                {activeSection === "profile" && <div className='profile'></div>}
                {activeSection === "certificate" && <div className='certificate'></div>}
                {activeSection === "volunteerproject" && <div className='volunteerproject'></div>}
                {activeSection === "courses" && <div className='courses'></div>}
                {activeSection === "setting" && <div className='setting'></div>}
            </div>
        </div>
    );
};

export default Fileforthevolunteer;
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/GlobalContext';
import {FcGoogle} from "react-icons/fc";
import {FaApple} from "react-icons/fa";
import {FiEye,FiEyeOff} from "react-icons/fi"
import "./Register.css";

const Register = () => {
    const {dispatch}=useAuth();
    const navigate=useNavigate();
    const[error,seterror]=useState("");
    const[showPassword,setShowPassword]=useState(false);
    const[FormData,setFormData]=useState({
        name:"",
        email:"",
        password:""
    });
    const handleSubmit=(e)=>{
        //يعني لا تعمل اعادة تحميل للصفحة
        e.preventDefault();
        seterror("");
        if(!FormData.name||!FormData.email||!FormData.password){
        seterror("يرجى تعبئة جميع الحقول")
        return;
        }
        if(FormData.password.length<6){
            seterror("كلمة المرور يجب ان تكون 6 احرف على الاقل")
            return;
        }
        dispatch({
            type:"REGISTER",
             payload:FormData,

        });
        navigate('/home');
    };
  return (
    <div className='register'>
        <h1>انشاء حساب جديد</h1>
        <p>هل لديك حساب على المنصة السورية؟
            <Link to={'/'}>سجل دخولك</Link>
        </p>
        <div className='register-button'>
            <button>
              <FcGoogle className="social-icons"/>  
                انشاء حساب عبر جوجل
                </button>
            <button>
              <FaApple className="social-icons apple-icons"/>  
                انشاء حساب عبر أبل
                </button>
        </div>
        <p className='OR'>or</p>
        {/*حطيت التابع بالفورم مشان وقت المستخدم يضغط انتر او زر انشاء الحساب يشتغل */}
        <form className='form-register' onSubmit={handleSubmit}>
            {error && <p style={{color: "red"}}>{error}</p>}
            <label>الاسم</label>
            <input type='text' value={FormData.name} onChange={(e)=>{
                setFormData({...FormData, name:e.target.value})
                seterror("") }} placeholder='ادخل اسمك الكامل'/>
            <label>البريد الالكتروني</label>
            <input type='email' value={FormData.email} onChange={(e)=>{
                setFormData({...FormData, email:e.target.value})
                seterror("")
            }} placeholder='ادخل البريد الالكتروني'/>
            <label>
  كلمة المرور
  <span>6 أحرف على الأقل من فضلك يجب ان تحتوي على رموز أيضا</span>
</label>

<div className="password-field">
  <input
    type={showPassword ? "text" : "password"}
    value={FormData.password}
    onChange={(e) => {
      setFormData({ ...FormData, password: e.target.value })
      seterror("")
    }}
    placeholder="أدخل كلمة المرور"
  />

  {showPassword ? (
    <FiEye
      className="eye-icon"
      onClick={() => setShowPassword(false)}
    />
  ) : (
    <FiEyeOff
      className="eye-icon"
      onClick={() => setShowPassword(true)}
    />
  )}
</div>
<div className='checkbox'>
  <input type='checkbox' />
  <label>قبول سياسة الخصوصية والشروط</label>
</div>
            <button type='submit' className='submit-btn-register'>انشاء حساب</button>

        </form>

    </div>
  )
}

export default Register
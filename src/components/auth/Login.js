import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/GlobalContext'
import {FcGoogle} from "react-icons/fc";
import {FaApple} from "react-icons/fa";
import {FiEye,FiEyeOff} from "react-icons/fi";
import"./Login.css";

const Login = () => {
    const{dispatch}=useAuth();
    const navigate=useNavigate();
    const[error,seterror]=useState("");
     const[showPassword,setShowPassword]=useState(false);
        const[FormData,setFormData]=useState({
            email:"",
            password:"",
        });
        const handleSubmit=(e)=>{
            e.preventDefault();
            seterror("");
            if(!FormData.email||!FormData.password){
                seterror("يرجى تعبئة جميع الحقول")
                return;
            }
             if(FormData.password.length<6){
            seterror("كلمة المرور يجب ان تكون 6 احرف على الاقل")
            return;
        }
            dispatch({
                type:"LOGIN",
                payload:FormData,
            });
            navigate('/home');
        }
    
    
  return (
    <div className='login'>
        <h1>تسجيل الدخول</h1>
        <p>ليس لديك حساب بالمنصة السورية؟
            <Link to={'/register'}>انشاء حساب</Link>
        </p>
        <div className='login-button'>
            <button>
                 <FcGoogle className="social-icons-login"/>
             تسجيل عبر جوجل
                </button>
            <button>
            <FaApple className="social-icons-login apple-icons-login"/>
                        تسجيل عبر أبل
                </button>
        </div>
        <p className='or'>أو</p>
        <form className='form-login' onSubmit={handleSubmit}>
            {error && <p style={{color: "red"}}>{error}</p>} 
            <label>البريد الالكتروني</label>
            <input type='email'value={FormData.email} onChange={(e)=>{setFormData({...FormData,email:e.target.value })
             seterror("")}} 
             placeholder='ادخل البريد الالكتروني'/>
            <label>كلمة المرور
                <span>6 احرف على الاقل من فضلك يجب ان تحتوي على رموز ايضا</span>
            </label>
            <div className="password-field-login">
            <input
                type={showPassword ? "text" : "password"}value={FormData.password} onChange={(e)=>{setFormData({...FormData,password:e.target.value})
             seterror("")}} 
             placeholder='ادخل كلمة السر'/>
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
            <NavLink to={'/forgetpassword'}>هل نسيت كلمة السر؟</NavLink>
            <button type='submit' className='submit-btn'>تسجيل الدخول</button>
        </form>


    </div>
  )
}

export default Login
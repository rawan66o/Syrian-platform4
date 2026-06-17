import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./ForgetPassword.css";

const ForgetPassword = () => {
    const navigate=useNavigate()
    const[email,setemail]=useState("");
    const[error,seterror]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault()
        seterror("");
        if(!email){
            seterror("يرجى إدخال البريد الإلكتروني")
            return;
        }
        navigate('/resetpassword')
    }

  return (
    <div className='forget-password'>
        <h1>هل نسيت كلمة المرور الخاصة بك؟</h1>
        <p>أدخل بريدك الإلكتروني الشخصي لإكمال العملية الآن!</p>
        <form className='form-forgetpassword' onSubmit={handleSubmit}>
              {error && <p style={{ color: 'red' }}>{error}</p>}
            <label>البريد الالكتروني</label>
            <input type='email' value={email} onChange={(e)=>{setemail(e.target.value) 
             seterror("")}} placeholder='ادخل البريد الالكتروني'/>
            <div className='forget-actions'>
           <button type='button' onClick={() => navigate('/')}>الغاء</button>
           <button type='submit'>التالي</button>
            </div>
        </form>

    </div>
  )
}

export default ForgetPassword
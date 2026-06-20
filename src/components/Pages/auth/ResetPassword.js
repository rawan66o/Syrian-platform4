import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiEye, FiEyeOff } from "react-icons/fi";
import "./ResetPassword.css";

const ResetPassword = () => {
    const navigate=useNavigate();
    const[error,seterror]=useState("");
    const [showPassword, setShowPassword] = useState(false);
     const [showConfirm, setShowConfirm] = useState(false);
    const[formData,setformData]=useState({
        password:"",
        confirmpasword:"",

    });
    const handleSubmit=(e)=>{
        e.preventDefault()
        seterror("");
        if(!formData.password||!formData.confirmpasword){
            seterror("يرجى تعبئة جميع الحقول")
            //return هون معناها وقف تنفيذ الكود اذا في خطأ
            return;
        }
        if(formData.password.length<6){
            seterror("كلمة المرور يجب ان تكون 6 أحرف على الاقل")
            return;
        }
        if(formData.password!==formData.confirmpasword){
            seterror("كلمتا المرور غير متطابقتين")
            return;
        }
        alert("تم إنشاء كلمة المرور بنجاح")
        navigate('/')

    }
  return (
    <div className='reset-password'>
      <h1>انشاء كلمة مرور جديدة</h1>  
      <p>يجب ان تكون كلمة المرور الجديدة مختلفة عن كلمات المرور الأخرى</p>
      <form className='form-resetpassword' onSubmit={handleSubmit}>
        {error && <p style={{color:"red" , fontSize: "15px"}}>{error}</p>}
       <label>كلمة المرور</label>
       <p>6 أحرف على الأقل من فضلك يجب أن تحتوي على رموز ايضا</p>
       <div className='reset-password-field'>
       <input  type={showPassword ? "text" : "password"} value={formData.password} onChange={(e)=>{
        setformData({...formData, password:e.target.value})
        seterror("")
       }} placeholder='ادخل كلمة السر'/>
        {showPassword ? (
    <FiEye
      className="reset-eye-icon"
      onClick={() => setShowPassword(false)}
    />
  ) : (
    <FiEyeOff
      className="reset-eye-icon"
      onClick={() => setShowPassword(true)}
    />
  )}
  </div>
       <label>تأكيد كلمة المرور</label>
       <p>6 أحرف على الأقل من فضلك يجب أن تحتوي على رموز ايضا</p>
       {/*إذا الشرط صحيح → خذ value1
                                 إذا غلط → خذ value2*/}
          <div className='reset-password-field'>                        
       <input   type={showConfirm ? "text" : "password"} value={formData.confirmpasword} onChange={(e)=>{
        setformData({...formData, confirmpasword:e.target.value})
        seterror("")
       }} placeholder='ادخل كلمة السر'/>
       {/*إذا كلمة السر ظاهرة → حط عين مفتوحة وخليها تخفيها
                        إذا مخفية → حط عين مسكرة وخليها تظهرها*/}
        {showConfirm ? (
    <FiEye
      className="reset-eye-icon"
      onClick={() => setShowConfirm(false)}
    />
  ) : (
    <FiEyeOff
      className="reset-eye-icon"
      onClick={() => setShowConfirm(true)}
    />
  )}
       </div>
        <div className='reset-actions'>
       <button type='button' onClick={()=>navigate('/')}>الغاء</button>
         <button type='submit'>انشاء كلمة مرور جديدة</button>
       </div>
      </form>

    </div>
  )
}

export default ResetPassword
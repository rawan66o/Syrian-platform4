import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import "./AuthLayout.css";
//اي صفحة جواد هاد الملف لح يظهر في ال header
const AuthLayout = () => {
  return (
    <div className='auth-layout'>
        <Header/>
        {/*يعني حط الصفحة الحالية هون*/}
        <Outlet/>
    </div>
  )
}

export default AuthLayout
import React from 'react'
import Homeheader from './Home/Homeheader'
import Footer from './Home/Footer'
import { Outlet } from 'react-router-dom'

const AuthLayout2 = () => {
  return (
    <div className='auth-layout2'>
        <Homeheader/>
        <Outlet/>
        <Footer/>
        

    </div>
  )
}

export default AuthLayout2
import React from 'react'
import { Link } from 'react-router-dom'
import "./ComingSoon.css"

const ComingSoon = () => {
  return (
    <div className='coming-soon'>

      <p className='coming-title'>
        Coming Soon...
      </p>

      <div className='btn'>
        <Link to="/home" className='home-link'>
          الرجوع للصفحة الرئيسية
        </Link>
      </div>

    </div>
  )
}

export default ComingSoon
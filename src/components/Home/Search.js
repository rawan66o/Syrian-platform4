import React from 'react'
import { FiSearch } from "react-icons/fi";
import "./Search.css";
const Search = () => {
  return (
    <div className='search'>
        <div className='search-content'>
        <h2>اكتشف أكثر من 260 دورة تدريبية مجانية وبافضل الخبرات على المنصة السورية</h2>
        <div className='search-bar'>
            <FiSearch className="search-bar-icon" />
            <input type='text' placeholder='ابحث عن الدورة التي تحتاجها'/>
            <div className='search-bar-btn'>
                <button>ابحث هنا</button>
            </div>

        </div>
        </div>

    </div>
  )
}

export default Search
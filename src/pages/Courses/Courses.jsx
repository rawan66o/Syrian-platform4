import React from "react";
import styles from "./Courses.module.css";
import { Link } from "react-router-dom";
import searchIcon from "../../assets/icons/search-Icon.svg";
import SortMenu from "../../components/Courses/SortMenu";
import { dummyCourses } from "../../store/CourseState";
import ViewCoursesGrid from "../../components/Courses/ViewCoursesGrid";
const Courses = () => {
  const courses = dummyCourses;
  return (
    <div className={styles.Courses_container} dir="rtl">
      <aside className={styles.sidebar}>
        <div className={styles.sidebar_inner}>
          <div className={styles.inner_title}>
            <h2>التصنيفات</h2>
          </div>
          <div className={styles.inner_nav}>
            <Link>
              <p>كل الكورسات</p>
            </Link>
          </div>
          <div className={styles.inner_nav}>
            <Link>اللغات</Link>
          </div>
          <div className={styles.inner_nav}>
            <Link>غرافيك ديزاين</Link>
          </div>
          <div className={styles.inner_nav}>
            <Link>العربية</Link>
          </div>
          <div className={styles.inner_nav}>
            <Link>الإدارة والقيادة</Link>
          </div>
          <div className={styles.inner_nav}>
            <Link>تصميم UX/UI</Link>
          </div>
          <div className={styles.inner_nav}>
            <Link>الإدارة والقيادة</Link>
          </div>
          <div className={styles.inner_nav}>
            <Link>غرافيك ديزاين</Link>
          </div>
        </div>
      </aside>

      <main className={styles.courses_grid_wrapper}>
        <div className={styles.wrapper_header}>
          <div className={styles.header_sort_title}>
            <div className={styles.title_courses}>
              <h2>جميع الكورسات</h2>
            </div>
            <SortMenu />
          </div>
          <div className={styles.header_searchInput}>
            <img src={searchIcon} alt="" />
            <input type="text" placeholder="أبحث عن الكورس" />
            <button className={styles.search_buttn}>
              <span style={{ color: "white" }}>بحث</span>
            </button>
          </div>
        </div>
        <div className={styles.courses_grid}>
          {/* <div>f</div>
          <div>f</div>
          <div>f</div> */}
          <ViewCoursesGrid />
          <ViewCoursesGrid />
          <ViewCoursesGrid />
        </div>
        <div className={styles.wrapper_pagination}>
          {/* في التصميم العربي السهم الذي يشير لليمين هو "التالي" واليسار هو "السابق" */}
          <button> {"<"} </button>

          <button>10</button>
          <span>...</span>
          <button>3</button>
          <button>2</button>
          <button className={styles.active}>1</button>

          <button> {">"} </button>
        </div>{" "}
      </main>
    </div>
  );
};

export default Courses;

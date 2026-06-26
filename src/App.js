import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Courses from "./pages/Courses/Courses";
import CourseView from "./pages/Courses/CourseView";
import StartCourse from "./pages/Courses/StartCourse";
import StartCourse2 from "./pages/Courses/StartCourse2";
import StartCourse3 from "./pages/Courses/StartCourse3";
import StartCourse4 from "./pages/Courses/StartCourse4";
import StartCourse5 from "./pages/Courses/StartCourse5";
import StartCourse6 from "./pages/Courses/StartCourse6";
import StartCourse7 from "./pages/Courses/StartCourse7";
import StartCourse8 from "./pages/Courses/StartCourse8";
import StartCourse9 from "./pages/Courses/StartCourse9";
import Partners from "./pages/Partners/Partners";
import Account from "./pages/Account/Account";
import Dashboard from "./components/Account/Dashboard";
import Profile from "./components/Account/Profile";
import React from "react";
import Register from "./components/Pages/auth/Register";
import Login from "./components/Pages/auth/Login";
import AuthLayout from "./components/AuthLayout";
import ForgetPassword from "./components/Pages/auth/ForgetPassword";
import ResetPassword from "./components/Pages/auth/ResetPassword";
import "./App.css";
import Homeheader from "./components/Home/Homeheader";
import Herosection from "./components/Home/Herosection";
import CoursesSection from "./components/Home/CoursesSection";
import ComingSoon from "./components/Home/ComingSoon";
import Whyus from "./components/Home/Whyus";
import Volunteerprojects from "./components/Home/Volunteerprojects";
import Comments from "./components/Home/Comments";
import Search from "./components/Home/Search";
import Forum from "./components/Home/Forum";
import Footer from "./components/Home/Footer";
import AuthLayout2 from "./components/AuthLayout2";
import Fileforthevolunteer from "./components/Fileforthevolunteer";

import AddCoursePage from "./pages/AddCourse/AddCoursePage";
import AddForumPage from "./pages/AddForum/AddForumPage";
import AddVolunteerProjectPage from "./pages/AddVolunteerProject/AddVolunteerProjectPage";
import GuideLifePage from "./pages/Guides/GuideLifePage";
import GuideVolunteerPage from "./pages/Guides/GuideVolunteerPage";
import GuideTrainerPage from "./pages/Guides/GuideTrainerPage";

function App() {
  return (
    <div className="App">
      <Routes>

        {/* 1. صفحات تسجيل الدخول والـ Auth وتظهر مباشرة في الـ Root "/" */}
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgetpassword" element={<ForgetPassword />} />
          <Route path="resetpassword" element={<ResetPassword />} />
          <Route path="privacypolicy" element={<h1>page not found</h1>} />
          <Route path="supportandassistance" element={<h1>not found </h1>} />
        </Route>

        {/* 2. صفحة الـ Home الرئيسية (بدون لوحة التحكم الجانبية لـ MainLayout) */}
        <Route
          path="/home"
          element={
            <>
              <Homeheader />
              <Herosection />
              <CoursesSection />
              <Whyus />
              <Volunteerprojects />
              <Comments />
              <Search />
              <Forum />
              <Footer />
            </>
          }
        />

        {/* 3. صفحات التطبيق والـ Dashboard التي تظهر داخل الـ MainLayout بعد تسجيل الدخول */}
        {/* تم جعل المسار يبدأ بـ /app أو يمكنك تركه فارغاً، هنا جعلناه يندرج تحت /dashboard أو مسارات نسبية */}

        <Route path="account" element={<Account />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route element={<MainLayout />}>
          <Route path="courses" element={<Courses />} />
          <Route path="partners" element={<Partners />} />

          {/* مسارات الحساب المتداخلة */}

        <Route element={<AuthLayout />}>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/privacypolicy" element={<h1>page not found</h1>} />
          <Route path="/supportandassistance" element={<h1>page not found</h1>} />
        </Route>

        <Route element={<AuthLayout2 />}>
          <Route path="/fileforthevolunteer" element={<Fileforthevolunteer />} />
        </Route>


        <Route element={<MainLayout />}>
          <Route path="courses" element={<Courses />} />
          <Route path="partners" element={<Partners />} />

          <Route path="account" element={<Account />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
          </Route>

          {/* مسارات الكورسات المتداخلة (تم إزالة السلاش / لتصبح نسبية وصحيحة) */}
          <Route path="courses/:id" element={<CourseView />} />
          <Route path="courses/:id/startCourse" element={<StartCourse />} />
          <Route path="courses/:id/startCourse/startCourse2" element={<StartCourse2 />} />

          <Route
            path="courses/:id/startCourse/startCourse2/startCourse3"
            element={<StartCourse3 />}
          />
          <Route
            path="courses/:id/startCourse/startCourse2/startCourse3/startCourse4"
            element={<StartCourse4 />}
          />
          <Route
            path="courses/:id/startCourse/startCourse2/startCourse3/startCourse4/startCourse5"
            element={<StartCourse5 />}
          />
          <Route
            path="courses/:id/startCourse/startCourse2/startCourse3/startCourse4/startCourse5/startCourse6"
            element={<StartCourse6 />}
          />
          <Route
            path="courses/:id/startCourse/startCourse2/startCourse3/startCourse4/startCourse5/startCourse6/startCourse7"
            element={<StartCourse7 />}
          />
          <Route
            path="courses/:id/startCourse/startCourse2/startCourse3/startCourse4/startCourse5/startCourse6/startCourse7/startCourse8"
            element={<StartCourse8 />}
          />
          <Route
            path="courses/:id/startCourse/startCourse2/startCourse3/startCourse4/startCourse5/startCourse6/startCourse7/startCourse8/startCourse9"
            element={<StartCourse9 />}
          />
        </Route>

        {/* 4. صفحات قريباً (Coming Soon) والصفحات الأخرى */}

          <Route path="partners" element={<Partners />} />
          <Route path="courses/:id" element={<CourseView />} />
          <Route path="courses/:id/startCourse" element={<StartCourse />} />
          <Route path="courses/:id/startCourse/startCourse2" element={<StartCourse2 />} />

          <Route
            path="courses/:id/startCourse/startCourse2/startCourse3"
            element={<StartCourse3 />}
          />
          <Route
            path="courses/:id/startCourse/startCourse2/startCourse3/startCourse4"
            element={<StartCourse4 />}
          />
          <Route
            path="courses/:id/startCourse/startCourse2/startCourse3/startCourse4/startCourse5"
            element={<StartCourse5 />}
          />
          <Route
            path="courses/:id/startCourse/startCourse2/startCourse3/startCourse4/startCourse5/startCourse6"
            element={<StartCourse6 />}
          />
          <Route
            path="courses/:id/startCourse/startCourse2/startCourse3/startCourse4/startCourse5/startCourse6/startCourse7"
            element={<StartCourse7 />}
          />
          <Route
            path="courses/:id/startCourse/startCourse2/startCourse3/startCourse4/startCourse5/startCourse6/startCourse7/startCourse8"
            element={<StartCourse8 />}
          />
          <Route
            path="courses/:id/startCourse/startCourse2/startCourse3/startCourse4/startCourse5/startCourse6/startCourse7/startCourse8/startCourse9"
            element={<StartCourse9 />}
          />
          <Route path="guide-life" element={<GuideLifePage />} />
          <Route path="guide-volunteer" element={<GuideVolunteerPage />} />
          <Route path="guide-trainer" element={<GuideTrainerPage />} />
        </Route>

        <Route path="add-course" element={<AddCoursePage />} />
        <Route path="add-forum" element={<AddForumPage />} />
        <Route path="add-volunteer-project" element={<AddVolunteerProjectPage />} />

        <Route path="/cours" element={<ComingSoon />} />
        <Route path="/forum" element={<ComingSoon />} />
        <Route path="/projected" element={<ComingSoon />} />
        <Route path="/conected" element={<ComingSoon />} />
        <Route path="/course-details" element={<ComingSoon />} />
        <Route path="/coursessection" element={<ComingSoon />} />
        <Route path="/typecourses" element={<ComingSoon />} />
        <Route path="/typeprojects" element={<ComingSoon />} />
        <Route path="/typeexperiences" element={<ComingSoon />} />

        <Route path="typesystems" element={<ComingSoon />} />

        <Route path="/typesystems" element={<ComingSoon />} />

        <Route path="/showproject1" element={<ComingSoon />} />
        <Route path="/showproject2" element={<ComingSoon />} />
        <Route path="/showproject3" element={<ComingSoon />} />
        <Route path="/projects" element={<ComingSoon />} />
        <Route path="/post" element={<ComingSoon />} />
        <Route path="/viewallposts" element={<ComingSoon />} />
        <Route path="/whoarewe" element={<ComingSoon />} />
        <Route path="/lessons" element={<ComingSoon />} />
        <Route path="/footerproject" element={<ComingSoon />} />
        <Route path="/footerforum" element={<ComingSoon />} />
        <Route path="/news" element={<ComingSoon />} />
        <Route path="/policy" element={<ComingSoon />} />

        <Route path="/partners-coming" element={<ComingSoon />} />
        <Route path="/help" element={<ComingSoon />} />
        <Route path="/support" element={<ComingSoon />} />
        <Route path="/profile-coming" element={<ComingSoon />} />
        <Route path="/certificate" element={<ComingSoon />} />
        <Route path="/volunteerproject" element={<ComingSoon />} />
        <Route path="/setting" element={<ComingSoon />} />

        {/* 5. صفحات المتطوعين */}
        <Route element={<AuthLayout2 />}>
          <Route path="/fileforthevolunteer" element={<Fileforthevolunteer />} />
        </Route>

        <Route path="/help" element={<ComingSoon />} />
        <Route path="/support" element={<ComingSoon />} />
        <Route path="/profile" element={<ComingSoon />} />
        <Route path="/certificate" element={<ComingSoon />} />
        <Route path="/volunteerproject" element={<ComingSoon />} />
        <Route path="/setting" element={<ComingSoon />} />
        <Route
          path="/home"
          element={
            <>
              <Homeheader />
              <Herosection />
              <CoursesSection />
              <Whyus />
              <Volunteerprojects />
              <Comments />
              <Search />
              <Forum />
              <Footer />
            </>
          }
        />


      </Routes>
    </div>
  );
}

export default App;

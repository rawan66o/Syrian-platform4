import logo from "./logo.svg";
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
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/courses" element={<Courses />} />
          <Route path="/account" element={<Account />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="/partners" element={<Partners />} />
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
            path="courses/:id/startCourse/startCourse2/startCourse3/startCourse4/startCourse5/startCourse6/startCourse7/startCourse8"
            element={<StartCourse8 />}
          />
          <Route
            path="courses/:id/startCourse/startCourse2/startCourse3/startCourse4/startCourse5/startCourse6/startCourse7/startCourse8/startCourse9"
            element={<StartCourse9 />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

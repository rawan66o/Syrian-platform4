import React from "react";
import styles from "./CourseView.module.css";
import { useParams, useLocation } from "react-router-dom";
import { dummyCourses } from "../../store/CourseState";
import avatar from "../../assets/images/instructoer1.jpg";
import avatar2 from "../../assets/images/instructor2.jpg";
import arrowLeft from "../../assets/icons/Arrow - Left (1).svg";
import arrowRight from "../../assets/icons/Arrow - Right.svg";
import reviewer from "../../assets/images/reviewer1.jpg";
import star from "../../assets/icons/Star.svg";
import calender from "../../assets/icons/calendar.svg";
import { useNavigate } from "react-router-dom";
const CourseView = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const courses = dummyCourses;
  const course = courses.find(item => item.id === id);
  if (!course) {
    return <h2>الكورس غير موجود</h2>;
  }

  return (
    <div className={styles.courseView_container}>
      <div className={styles.heroSection_container}>
        <div className={styles.heroSection_title}>
          <div className={styles.title_icon}>دورة</div>
          <div className={styles.Course_title}>
            <p>{course.title}</p>
          </div>
          <div>
            <p className={styles.heroTitle_text}>
              المنصّة الوزاريّة التعليميّة هي بوابة رقمية شاملة تهدف إلى دعم التعليم في سوريا تجمع
              المنصّة بين التقنيات الحديثة والمحتوى المحلي لتسهيل الوصول إلى المعرفة في أي وقت
              ومكان.
            </p>
          </div>
        </div>
        <div className={styles.Features_card}>
          <img src={course.img} alt="" />
          <div className={styles.Features_card_text} dir="rtl">
            <h3> المميزات</h3>

            {course.features.map(feature => (
              <div key={feature.id} className={styles.feature_item}>
                <span className={styles.dot}></span>

                <p>{feature.text}</p>
              </div>
            ))}
            <div className={styles.Features_card_buttun}>
              <button onClick={() => navigate(`${location.pathname}/startCourse`)}>
                طلب الدورة
              </button>
              <p>انضم إلى آلاف الطلاب</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.main_container} dir="rtl">
        <div className={styles.descreption_container}>
          {" "}
          <h2>الوصف</h2>
          <p>
            درس تصميم واجهات المستخدم (UI Design) هو رحلة متكاملة لتعلّم كيفية تحويل الأفكار إلى
            تصاميم جذابة وسهلة الاستخدام. يبدأ بشرح أساسيات التصميم، الألوان، الخطوط، وتناسق العناصر
            على الشاشة.تعرّف الطالب على مبادئ التصميم الجيد وكيفية بناء تجربة بصرية مريحة
            وواضحة.يشمل الكورس تطبيقات عملية باستخدام أدوات احترافية مثل Figma وAdobe XD.سيتعلم
            الطالب كيفية تصميم صفحات لتطبيقات الموبايل والمواقع بشكل احترافي. يتم شرح الأخطاء
            الشائعة في التصميم وكيفية تجنبها بأسلوب بسيط ومباشر لتطبيقات الموبايل والمواقع احتراف في
            نهاية الكورس، ينفّذ الطالب مشروع تصميم حقيقي ليضيفه إلى ملفه الشخصي (Portfolio). يحصل
            المتدرّب على تقييم وملاحظات لتحسين مستواه وتطوير مهاراته أكثر.
          </p>
          <button className={styles.showMore_bttn}>اظهار المزيد</button>
        </div>
        <hr className={styles.horizontal_line} />
        <div className={styles.lessonsList_container}>
          <h2>قائمة الدروس</h2>
          <div className={styles.lesson_continer}>
            <h3>الوحدة الأولى : مقدمة في قواعد البيانات</h3>
            <p>
              ورس تصميم واجهات المستخدم (UI Design) هو رحلة متكاملة لتعلّم كيفية تحويل الأفكار إلى
              تصاميم جذابة وسهلة الاستخدام.يبدأ بشرح أساسيات التصميم، الألوان، الخطوط، وتناسق
              العناصر على الشاشة.تعرّف الطالب على مبادئ{" "}
            </p>
          </div>
          <div className={styles.lesson_continer}>
            <h3>الوحدة الثانية : مقدمة في UI / UX</h3>
            <p>
              ورس تصميم واجهات المستخدم (UI Design) هو رحلة متكاملة لتعلّم كيفية تحويل الأفكار إلى
              تصاميم جذابة وسهلة الاستخدام.يبدأ بشرح أساسيات التصميم، الألوان، الخطوط، وتناسق
              العناصر على الشاشة.تعرّف الطالب على مبادئ{" "}
            </p>
          </div>
          <div className={styles.lesson_continer}>
            <h3>الوحدة الثانية : مقدمة في UI / UX</h3>
            <p>
              ورس تصميم واجهات المستخدم (UI Design) هو رحلة متكاملة لتعلّم كيفية تحويل الأفكار إلى
              تصاميم جذابة وسهلة الاستخدام.يبدأ بشرح أساسيات التصميم، الألوان، الخطوط، وتناسق
              العناصر على الشاشة.تعرّف الطالب على مبادئ{" "}
            </p>
          </div>
          <button className={styles.showMore_bttn}>إظهار كل الوحدات</button>
        </div>{" "}
        <hr className={styles.horizontal_line} />
        <div className={styles.courseTrainers_container}>
          <div className={styles.trainerCourse_conatiner}>
            <div className={styles.trainerNameInfo_container}>
              <img src={avatar} alt="" />
              <p>
                {" "}
                <h3>خليل شركة تيكنوفا</h3>
                24 دورة
              </p>
            </div>
            <div className={styles.trainerInfo_container}>
              <p>
                ورس تصميم واجهات المستخدم (UI Design) هو رحلة متكاملة لتعلّم كيفية تحويل الأفكار إلى
                تصاميم جذابة وسهلة الاستخدام. يبدأ بشرح أساسيات التصميم، الألوان، الخطوط، وتناسق
                العناصر على الشاشة.تعرّف الطالب على مبادئ التصميم الجيد وكيفية بناء تجربة بصرية
                مريحة وواضحة.يشمل الكورس تطبيقات عملية باستخدام أدوات احترافية مثل Figma وAdobe{" "}
              </p>
            </div>
          </div>
          <div className={styles.trainerCourse_conatiner}>
            <div className={styles.trainerNameInfo_container}>
              <img src={avatar2} alt="" />
              <p>
                {" "}
                <h3>خليل شركة تيكنوفا</h3>
                24 دورة
              </p>
            </div>
            <div className={styles.trainerInfo_container}>
              <p>
                ورس تصميم واجهات المستخدم (UI Design) هو رحلة متكاملة لتعلّم كيفية تحويل الأفكار إلى
                تصاميم جذابة وسهلة الاستخدام. يبدأ بشرح أساسيات التصميم، الألوان، الخطوط، وتناسق
                العناصر على الشاشة.تعرّف الطالب على مبادئ التصميم الجيد وكيفية بناء تجربة بصرية
                مريحة وواضحة.يشمل الكورس تطبيقات عملية باستخدام أدوات احترافية مثل Figma وAdobe{" "}
              </p>
            </div>
          </div>
        </div>{" "}
        <hr className={styles.horizontal_line} />
      </div>
      <div className={styles.commentsSection_container}>
        <div className={styles.commentsSection_child1}>
          <div className={styles.arrow_buttons}>
            <button>
              <img src={arrowLeft} alt="" />
            </button>
            <button>
              <img src={arrowRight} alt="" />
            </button>
          </div>
          <h2>تعليقات الطلاب</h2>
        </div>
        <div className={styles.commentsSection_child2} dir="rtl">
          <div className={styles.commentsSection_child2_childs}>
            <div className={styles.studentNameInfo_container}>
              <img src={reviewer} alt="" />
              <p style={{ color: "#4A5568" }}>
                {" "}
                <h3 style={{ color: "black" }}>محمد أحمد الشيخ</h3>
                &#x00028; طالب&#x00029;
              </p>
            </div>
            <div className={styles.studentEvaluation_container}>
              <div className={styles.starsEvaluation}>
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
              <span>
                <img src={calender} alt="" />
                2025/8/18
              </span>
            </div>
            <p style={{ color: "#708387" }}>
              منصة رائعة، سهلت علي متابعة الدروس والوصول للمحتوى "التجربة التعليمية فيها حديثة
              وممتعة، فعلاً خطوة كبيرة نحو تعليم أفضل في سوريا.
            </p>
          </div>
          <div className={styles.commentsSection_child2_childs}>
            <div className={styles.studentNameInfo_container}>
              <img src={reviewer} alt="" />
              <p style={{ color: "#4A5568" }}>
                {" "}
                <h3 style={{ color: "black" }}>محمد أحمد الشيخ</h3>
                &#x00028; طالب&#x00029;
              </p>
            </div>
            <div className={styles.studentEvaluation_container}>
              <div className={styles.starsEvaluation}>
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
              <span>
                <img src={calender} alt="" />
                2025/8/18
              </span>
            </div>
            <p style={{ color: "#708387" }}>
              منصة رائعة، سهلت علي متابعة الدروس والوصول للمحتوى "التجربة التعليمية فيها حديثة
              وممتعة، فعلاً خطوة كبيرة نحو تعليم أفضل في سوريا.
            </p>
          </div>
          <div className={styles.commentsSection_child2_childs}>
            <div className={styles.studentNameInfo_container}>
              <img src={reviewer} alt="" />
              <p style={{ color: "#4A5568" }}>
                {" "}
                <h3 style={{ color: "black" }}>محمد أحمد الشيخ</h3>
                &#x00028; طالب&#x00029;
              </p>
            </div>
            <div className={styles.studentEvaluation_container}>
              <div className={styles.starsEvaluation}>
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
              <span>
                <img src={calender} alt="" />
                2025/8/18
              </span>
            </div>
            <p style={{ color: "#708387" }}>
              منصة رائعة، سهلت علي متابعة الدروس والوصول للمحتوى "التجربة التعليمية فيها حديثة
              وممتعة، فعلاً خطوة كبيرة نحو تعليم أفضل في سوريا.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseView;

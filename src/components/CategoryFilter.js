import "../assets/styles/category.css";
function CategoryFilter({ activeCategory, setCategory }) {
  // const categories = [
  //   "مقالات متنوعة",
  //   "مقالات متنوعة",
  //   "مقالات متنوعة",
  //   "مقالات متنوعة",
  // ];
  const categories = ["الكل", "مقالات متنوعة", "أخبار", "تقنية"];

  return (
    <div className="filter-sidebar">
      <h3>التصنيفات</h3>
      {categories.map((cat, index) => (
        <label key={index} className="category-item">
          {/* 1. العدد سيظهر في أقصى اليسار بفضل الـ space-between */}
          <div>
            <span className="count">{Math.floor(Math.random() * 50)}</span>
          </div>

          {/* 2. حاوية تجمع النص والدائرة ليكونوا بجانب بعض على اليمين */}
          <div className="text-with-radio">
            <span className="cat-name">{cat}</span>
            <input
              type="radio"
              name="category"
              checked={activeCategory === cat}
              onChange={() => setCategory(cat)}
            />
            <span className="custom-checkmark"></span>
          </div>
        </label>
      ))}
    </div>
  );
}
export default CategoryFilter;

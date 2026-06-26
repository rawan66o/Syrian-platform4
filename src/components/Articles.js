import { useState } from "react";
import { articlesData } from "../articlesData.js";
import ArticlesCard from "./ArticlesCard.js";
import "../assets/styles/articles.css";

function Articles({ limit }) {
  //  const handlePageClick = (data) => {
  //   let selectedPage = data.selected;
  //   console.log("الصفحة المختارة:", selectedPage + 1);
  //   // هنا مستقبلاً ستطلب بيانات الصفحة الجديدة من الـ API
  // };
  // حالياً البيانات ثابتة، لاحقاً ستضع نتيجة الـ API هنا
  const [articles, setArticles] = useState(articlesData);
  const displayedArticles = limit ? articles.slice(0, limit) : articles;

  return (
    <section className="latest-articles">
      <h2 className="section-title">أحدث المقالات</h2>
      <div className="articles-container">
        {displayedArticles.map((article) => (
          <ArticlesCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}

export default Articles;

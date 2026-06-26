import { Link } from "react-router-dom";

function ArticlesCard({ article }) {
  return (
    <div className="article-card">
      <div className="article-content">
        <p>{article.description}</p>
      </div>
      <div className="article-image">
        <img src={article.image} alt={article.title} />
      </div>
    </div>
  );
}
export default ArticlesCard;

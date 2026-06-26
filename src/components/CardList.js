import { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import CardItem from "./CardItem";
import { cardsData } from "./data.js";

function CardList() {
  const [activeCategory, setActiveCategory] = useState("");

  const filteredData = cardsData.filter((item) =>
    activeCategory === "الكل" ? true : item.category === activeCategory,
  );

  return (
    <div style={{ display: "flex", direction: "rtl" }}>
      <CategoryFilter
        activeCategory={activeCategory}
        setCategory={setActiveCategory}
      />

      <div className="cards-grid">
        {filteredData.map((item) => (
          <CardItem key={item.id} info={item} />
        ))}
      </div>
    </div>
  );
}
export default CardList;

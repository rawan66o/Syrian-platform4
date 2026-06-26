import { useState } from "react";
import styles from "./SortMenu.module.css";
import { FaChevronDown } from "react-icons/fa"; // أيقونة السهم

const SortMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("ترتيب حسب");

  return (
    <div className={styles.sort_container}>
      <button className={styles.sort_button} onClick={() => setIsOpen(!isOpen)}>
        <span>{selected}</span>
        <FaChevronDown
          className={`${styles.icon} ${isOpen ? styles.rotate : ""}`}
        />
      </button>

      {isOpen && (
        <ul className={styles.dropdown_menu}>
          <li
            onClick={() => {
              setSelected("الأحدث");
              setIsOpen(false);
            }}
          >
            الأحدث
          </li>
          <li
            onClick={() => {
              setSelected("الأعلى تقييماً");
              setIsOpen(false);
            }}
          >
            الأعلى تقييماً
          </li>
          <li
            onClick={() => {
              setSelected("السعر: من الأقل");
              setIsOpen(false);
            }}
          >
            السعر: من الأقل
          </li>
        </ul>
      )}
    </div>
  );
};
export default SortMenu;

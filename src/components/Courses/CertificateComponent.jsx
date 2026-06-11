import { useState } from "react";
import styles from "./CertificateComponent.module.css"; // تأكد من اسم ملف الـ CSS الخاص بك
import certifecate from "../../assets/images/certifecate.svg";
import downloadic from "../../assets/icons/downloadIcon.svg";

function CertificateComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* الزر الخاص بك مع إضافة حدث الضغط onClick */}
      <button
        className={styles.button}
        style={{ display: "flex", gap: "8px" }}
        style={{ backgroundColor: "#F2F2F280", color: "var(--text-primary)" }}
        onClick={() => setIsOpen(true)}
      >
        عرض الشهادة
      </button>

      {/* النافذة المنبثقة: تظهر فقط عندما تكون قيمة isOpen تساوي true */}
      {isOpen && (
        <div className={styles.overlay} onClick={() => setIsOpen(false)}>
          <div className={styles.modal_content} onClick={e => e.stopPropagation()}>
            {/* زر الإغلاق X */}
            <button className={styles.close_btn} onClick={() => setIsOpen(false)}>
              &times;
            </button>

            {/* الصورة المراد عرضها */}
            <img src={certifecate} alt="الشهادة" className={styles.certificate_img} />
          </div>
        </div>
      )}
    </>
  );
}
export default CertificateComponent;

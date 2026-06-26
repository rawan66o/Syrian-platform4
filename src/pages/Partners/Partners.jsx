import React from "react";
import styles from "./Partners.module.css";
import amzonLogo from "../../assets/images/AMzonTradeMark.svg";
import MsLogo from "../../assets/images/MsTradeMark.svg";
import GoogleLogo from "../../assets/images/GoogleTradeMrk.svg";

const Partners = () => {
  const partners = [
    { logo: amzonLogo, alt: "Amazon", url: "https://www.amazon.com" },
    { logo: MsLogo, alt: "Microsoft", url: "https://www.microsoft.com" },
    { logo: GoogleLogo, alt: "Google", url: "https://www.google.com" },
    { logo: MsLogo, alt: "Microsoft", url: "https://www.microsoft.com" },
    { logo: amzonLogo, alt: "Amazon", url: "https://www.amazon.com" },
    { logo: MsLogo, alt: "Microsoft", url: "https://www.microsoft.com" },
    { logo: GoogleLogo, alt: "Google", url: "https://www.google.com" },
    { logo: MsLogo, alt: "Microsoft", url: "https://www.microsoft.com" },
    { logo: amzonLogo, alt: "Amazon", url: "https://www.amazon.com" },
    { logo: MsLogo, alt: "Microsoft", url: "https://www.microsoft.com" },
    { logo: GoogleLogo, alt: "Google", url: "https://www.google.com" },
    { logo: MsLogo, alt: "Microsoft", url: "https://www.microsoft.com" },
    { logo: amzonLogo, alt: "Amazon", url: "https://www.amazon.com" },
    { logo: MsLogo, alt: "Microsoft", url: "https://www.microsoft.com" },
    { logo: GoogleLogo, alt: "Google", url: "https://www.google.com" },
    { logo: MsLogo, alt: "Microsoft", url: "https://www.microsoft.com" },
    { logo: amzonLogo, alt: "Amazon", url: "https://www.amazon.com" },
    { logo: MsLogo, alt: "Microsoft", url: "https://www.microsoft.com" },
    { logo: GoogleLogo, alt: "Google", url: "https://www.google.com" },
    { logo: MsLogo, alt: "Microsoft", url: "https://www.microsoft.com" },
    { logo: amzonLogo, alt: "Amazon", url: "https://www.amazon.com" },
    { logo: MsLogo, alt: "Microsoft", url: "https://www.microsoft.com" },
    { logo: GoogleLogo, alt: "Google", url: "https://www.google.com" },
    { logo: MsLogo, alt: "Microsoft", url: "https://www.microsoft.com" },
    { logo: amzonLogo, alt: "Amazon", url: "https://www.amazon.com" },
    { logo: MsLogo, alt: "Microsoft", url: "https://www.microsoft.com" },
    { logo: GoogleLogo, alt: "Google", url: "https://www.google.com" },
    { logo: MsLogo, alt: "Microsoft", url: "https://www.microsoft.com" },
  ];

  return (
    <div className={styles.partners_container}>
      <div className={styles.banner_partners}>
        <p className={styles.banner_title}>شركاء المنصة</p>
        <p className={styles.banner_subtitle}>
          ( شريك<bdi> 1440 </bdi> )
        </p>
      </div>
      <div className={styles.grid_partners_container}>
        {partners.map((partner, index) => (
          <div key={index} className={styles.grid_item}>
            <a
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.grid_item_link}
            >
              <img src={partner.logo} alt={partner.alt} className={styles.grid_item_img} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;

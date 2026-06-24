import React from "react";
import GuideNavbar from "../../components/guide/GuideNavbar";
import Footer from "../../components/guide/Footer";
import "./GuideLayout.css";

const GuideLayout = ({ title, sections }) => {
  return (
    <div className="guide-page">
      <GuideNavbar />
      <div className="guide-hero">
        <div className="guide-hero-container">
          <h1 className="guide-hero-title">{title}</h1>
        </div>
      </div>

      <div className="guide-content">
        <div className="guide-content-container">
          {sections.map((section, index) => {
            const paragraphs = section.content
              .split("\n")
              .map(paragraph => paragraph.trim())
              .filter(Boolean);

            return (
              <React.Fragment key={index}>
                <div className="guide-section">
                  <div className="guide-section-header">
                    <h2 className="guide-section-title">{section.title}</h2>
                    <div className="guide-section-line"></div>
                  </div>
                  <div className="guide-section-content">
                    {paragraphs.map((paragraph, i) => (
                      <p key={i} className="guide-paragraph">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
                {index < sections.length - 1 && <div className="guide-section-divider"></div>}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GuideLayout;

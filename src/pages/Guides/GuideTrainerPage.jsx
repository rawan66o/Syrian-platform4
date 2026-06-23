import React from "react";
import { trainerGuideData } from "./data/trainerGuideData";
import "./GuideLayout.css";

const GuideTrainerPage = () => {
  return (
    <div className="guide-page">
      <div className="guide-hero">
        <div className="guide-hero-container">
          <h1 className="guide-hero-title">{trainerGuideData.title}</h1>
        </div>
      </div>

      <div className="guide-content">
        <div className="guide-content-container">
          {trainerGuideData.sections.map((section, index) => {
            const paragraphs = section.content
              .split("\n")
              .map((paragraph) => paragraph.trim())
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
                {index < trainerGuideData.sections.length - 1 && (
                  <div className="guide-section-divider"></div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GuideTrainerPage;

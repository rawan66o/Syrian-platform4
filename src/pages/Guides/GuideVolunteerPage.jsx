import React from "react";
import { volunteerGuideData } from "./data/volunteerGuideData";
import "./GuideLayout.css";

const GuideVolunteerPage = () => {
  return (
    <div className="guide-page">
      <div className="guide-hero">
        <div className="guide-hero-container">
          <h1 className="guide-hero-title">{volunteerGuideData.title}</h1>
        </div>
      </div>

      <div className="guide-content">
        <div className="guide-content-container">
          {volunteerGuideData.sections.map((section, index) => {
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
                {index < volunteerGuideData.sections.length - 1 && (
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

export default GuideVolunteerPage;

import React from "react";

export default function SectionDivider() {
  return (
    <div className="section-divider-container">
      <svg className="section-divider" viewBox="0 0 500 50">
        <polygon points="0,0 500,0 250,50" />
      </svg>
    </div>
  );
}

import React from "react";
import { toJpeg } from "html-to-image";

const UniversityCards = ({ universities }) => {
  const handleDownload = (id) => {
    const card = document.getElementById(id);
    toJpeg(card).then((dataUrl) => {
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = `${id}.jpeg`;
      link.click();
    });
  };

  return (
    <div className="cards-container">
      {universities.map((uni, index) => (
        <div key={index} id={`card-${index}`} className="card">
          <h3>{uni.name}</h3>
          <a href={uni.web_pages[0]} target="_blank">
            Visit Website
          </a>
          <button onClick={() => handleDownload(`card-${index}`)}>
            Download
          </button>
        </div>
      ))}
    </div>
  );
};

export default UniversityCards;

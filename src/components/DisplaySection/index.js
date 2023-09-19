import React from "react";

const DisplaySection = ({ triggerPreview }) => {
  return (
    <div className="display-section wrapper">
      <h2 className="title">New</h2>
      <p className="text">Brilliant</p>
      <span className="description">
        A display that's up to 2x brighter in the sun
      </span>
      <button
        className="button"
        onClick={() => {
          triggerPreview();
        }}
      >
        Try Me!
      </button>
      <button className="back-button">Top</button>
    </div>
  );
};

export default DisplaySection;

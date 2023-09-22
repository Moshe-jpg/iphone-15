import React from "react";
import arrow from "../assets/images/arrow.png";

const DisplaySection = ({ triggerPreview }) => {

  const scrollTotop = () => {
    const topSection = document.getElementById('top');
    if (topSection) {
      topSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <section className="display-section wrapper">
      <h2 className="title">New</h2>
      <p className="text">Brilliant</p>
      <span className="description">
        A display that's up to 2x brighter in the sun
      </span>
      <div className="button-container">
        <img className="arrow top-left" src={arrow} alt="arrow"></img>
        <img className="arrow top-right" src={arrow} alt="arrow"></img>
      <button
        className="button"
        onClick={() => {
          triggerPreview();
        }}
      >
        Try Me!
      </button>
      <button className="back-button" onClick={() => {
        scrollTotop();
      }}>Top</button>
      </div>
    </section>
  );
};

export default DisplaySection;

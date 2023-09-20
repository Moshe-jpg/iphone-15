import React from "react";
// import iphone from "../../assets/images/iphone-14.jpg";
import holdingIphone from "../assets/images/iphone-hand.png";

const Jumbotron = () => {
  //   const handleLearnMore = () => {
  //     const element = document.querySelector(".sound-section");
  //     window.scrollTo({
  //       top: element?.getBoundingClientRect,
  //       left: 0,
  //       behavior: "smooth"
  //     });
  //   };

  const scrollToSound = () => {
    const soundSection = document.querySelector('.sound-section');
    if (soundSection) {
      soundSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className="jumbotron-section wrapper">
      <h2 className="title">New</h2>
      <h3 className="title-header">iPhone 15 Pro</h3>
      <p className="text">Big & Bigger</p>
      <span className="description">
        From $1,000.00/mo or $22.00 before trade-in
      </span>
      <ul className="links">
        <li>
          <button className="button">Buy</button>
        </li>
        <li>
          <button className="link" onClick={() => {
            scrollToSound();
          }}>Learn More</button>
        </li>
      </ul>
      <img className="iphone-img" src={holdingIphone} alt="iPhone"></img>
    </div>
  );
};

export default Jumbotron;

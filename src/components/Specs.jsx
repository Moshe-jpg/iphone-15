import React from "react";
import appleChip from "../assets/images/a17.png";
import titaniumIphone from "../assets/images/titanium-iphone.png"
import actionBtn from "../assets/images/action-button.png";
import usbc from "../assets/images/usbc.png";
import BuyIphone from "./BuyIphone";

const Specs = () => {
    
  const specsArray = [
    {
      spanText: "Enter A17 Pro.",
      textLineOne: "Game‑changing chip.",
      textLineTwo: "Groundbreaking performance.",
      imgSrc: appleChip,
      altTag: "A17 Pro info",
      side: "left",
    },
    {
      spanText: "Titanium.",
      textLineOne: "So light.",
     textLineTwo: "So Pro.",
      imgSrc: titaniumIphone,
      altTag: "Titanium casing",
      side: "right",
    },
    {
      spanText: "All-new Action button.",
      textLineOne: "What will",
      textLineTwo: "yours do?",
      imgSrc: actionBtn,
      altTag: "Action button",
      side: "left",
    },
    {
      spanText: "USB‑Convenient.",
      textLineOne: "Connect USB‑C gear",
      textLineTwo: "Charge up to 50% in around 30 minutes",
      imgSrc: usbc,
      altTag: "USBC Connectivity",
      side: "right",
    },
  ];

  return (
    <section className="specs-section wrapper">
      <ul className="specs-outer-container">
      {specsArray.map((specs, index) => (
          <li key={index} className={`specs-container ${specs.side}`}>
             <div className="content">
            <h3>
              <span>{specs.spanText}</span>
              <br></br>
              {specs.textLineOne}<br></br>
              {specs.textLineTwo}
            </h3>
          </div>
          <div className="img-container">
            <img src={specs.imgSrc} alt={specs.altTag}></img>
          </div>
          </li>
        ))}
      </ul>
      <BuyIphone />
    </section>
  );
};

export default Specs;

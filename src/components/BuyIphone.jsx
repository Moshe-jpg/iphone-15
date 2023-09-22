import React, { Component } from "react";
import naturalTitanium from "../assets/images/natural-titanium.png";
import whiteTitanium from "../assets/images/white-titanium.png";
import blackTitanium from "../assets/images/black-titanium.png";
import blueTitanium from "../assets/images/blue-titanium.png";

class BuyIphone extends Component {
  constructor(props) {
    super(props);

    // Define iPhone colors with associated images
    this.colors = [
      {
        id: "natural-titanium",
        imgSrc: naturalTitanium,
      },
      {
        id: "white-titanium",
        imgSrc: whiteTitanium,
      },
      {
        id: "black-titanium",
        imgSrc: blackTitanium,
      },
      {
        id: "blue-titanium",
        imgSrc: blueTitanium,
      },
    ];

    this.state = {
      selectedColor: this.colors[0], // Default to the first color
    };
  }

  handleColorClick(color) {
    this.setState({ selectedColor: color });
  }

  render() {
    return (
      <div className="buy-iphone">
        <h4 className="section-title">
          <span>Color.</span> Which is best for you?
        </h4>

        <div className="iphone-image">
          <img
            className="iphone-color-image"
            src={this.state.selectedColor.imgSrc}
            alt={`iPhone ${this.state.selectedColor.id}`}
          />
        </div>

        <div className="color-options">
          {this.colors.map((color) => (
            <div
              key={color.id}
              className="color-picker"
              id={`${color.id}`}
              style={{ background: color.id }}
              onClick={() => this.handleColorClick(color)}
            ></div>
          ))}
        </div>
      </div>
    );
  }
}

export default BuyIphone;

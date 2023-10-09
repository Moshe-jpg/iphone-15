import React, { Component } from "react";
import ios17 from "../assets/images/ios-17.png";
import boxContentsAnimation from "../lib/box-contents-animation";
import naturalTitanium from "../assets/images/natural-titanium.png";
import whiteTitanium from "../assets/images/white-titanium.png";
import blackTitanium from "../assets/images/black-titanium.png";
import blueTitanium from "../assets/images/blue-titanium.png";
import boxIphone from "../assets/images/box-contents-iphone.png";
import boxCharger from "../assets/images/box-contents-charger.png";

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
        id: "blue-titanium",
        imgSrc: blueTitanium,
      },
      {
        id: "white-titanium",
        imgSrc: whiteTitanium,
      },
      {
        id: "black-titanium",
        imgSrc: blackTitanium,
      },
    ];

    this.state = {
      selectedColor: this.colors[0],
    };

    this.boxContentsRef = React.createRef();
  }

  handleColorClick(color) {
    this.setState({ selectedColor: color });
  }

  handleSwipeStart = (e) => {
    this.touchStartX = e.touches[0].clientX;
    this.swipeStart = Date.now(); // Record start time
  };

  handleSwipeEnd = (e) => {
    this.touchEndX = e.changedTouches[0].clientX; // Record end position
    this.swipeEnd = Date.now(); // Record end time

    this.detectSwipe(); // Trigger swipe detection
  };

  detectSwipe() {
    const deltaX = this.touchEndX - this.touchStartX; // Horizontal distance traveled
    const deltaTime = this.swipeEnd - this.swipeStart; // Time duration of the swipe

    // Define thresholds
    const minDistance = 50; // Minimum distance traveled to be considered a swipe
    const maxDuration = 500; // Maximum time duration allowed for the swipe

    // Check if the swipe is valid
    if (Math.abs(deltaX) > minDistance && deltaTime < maxDuration) {
      const direction = deltaX < 0 ? "left" : "right";
      this.changeColorOnSwipe(direction);
    }
  }

  changeColorOnSwipe(direction) {
    const currentIndex = this.colors.findIndex(
      (color) => color.id === this.state.selectedColor.id
    );

    let newIndex = direction === "left" ? currentIndex + 1 : currentIndex - 1;

    if (newIndex < 0) {
      newIndex = this.colors.length - 1;
    } else if (newIndex >= this.colors.length) {
      newIndex = 0;
    }

    this.setState({ selectedColor: this.colors[newIndex] });
  }

  componentDidMount() {
    this.imageContainerRef = React.createRef();
    boxContentsAnimation();
  }

  render() {
    return (
      <div className="buy-iphone">
        <div className="ios-container">
          <div className="ios-header">
            <span>iOS 17</span>
            <h4>Every day. More extraordinary.</h4>
          </div>
          <button>Learn More</button>
          <img src={ios17} className="ios-17" alt="ios 17"></img>
        </div>
        <h4 className="section-title">
          <span>Color.</span> Which is best for you?
        </h4>
        <div
          className="iphone-image"
          ref={this.imageContainerRef}
          onTouchStart={this.handleSwipeStart}
          onTouchMove={this.handleSwipeMove}
          onTouchEnd={this.handleSwipeEnd}
        >
          {this.colors.map((color) => (
            <img
              key={color.id}
              className={`iphone-color-image ${
                this.state.selectedColor.id === color.id ? "active" : ""
              }`}
              src={color.imgSrc}
              alt={`iPhone ${color.id}`}
            />
          ))}
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

        <div className="buying-options-container">
          <h4>
            <span>Payment options. </span>
            Select the one that works for you.
          </h4>
          <div className="btn-container">
            <button className="buying-options-btn">
              <header>Buy</header>
              <p>$1,059.00 after trade-in received ($1,199.00 due today)</p>
              <footer>Pay with Apple Pay or other payment methods.</footer>
            </button>
            <button className="buying-options-btn">
              <header>Finance</header>
              <p>
                $44.12/mo.per month for 24 mo. monthsafter trade-in *<br></br>
                <br></br>
                From $21.77/mo.per month over 36 mo.months after trade-in with
                select carrier deals
              </p>
              <footer>Pay over time at 0% APR.</footer>
            </button>
          </div>
        </div>
        <div className="box-contents-container" ref={this.boxContentsRef}>
          <h4>What's in the Box?</h4>
          <div className="contents-container container-1">
            <img src={boxIphone} alt="iPhone 15 Pro"></img>
            <p>iPhone 15 Pro</p>
          </div>
          <div className="contents-container container-2">
            <img src={boxCharger} alt="USB-C Charger Cable"></img>
            <p>USB-C Charge Cable</p>
          </div>
        </div>
      </div>
    );
  }
}

export default BuyIphone;

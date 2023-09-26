import React, { useState, useRef, useEffect } from "react";
import macbook from "../assets/images/buy-more-macbook.png";
import iphone from "../assets/images/buy-more-iphone.png";
import ipad from "../assets/images/buy-more-ipad.png";
import appleWatch from "../assets/images/buy-more-apple-watch.png";
import airpods from "../assets/images/buy-more-airpods.png";
import airtag from "../assets/images/buy-more-airtag.png";
import appleTv from "../assets/images/buy-more-apple-tv.png";
import homepod from "../assets/images/buy-more-homepod.png";
import accessories from "../assets/images/buy-more-accessories.png";
import giftCard from "../assets/images/buy-more-gift-card.png";

const MoreProducts = () => {
  const items = [
    {
      imgSrc: macbook,
      altTag: "MacBook",
      title: "Mac",
    },
    {
      imgSrc: iphone,
      altTag: "iPhone",
      title: "iPhone",
    },
    {
      imgSrc: ipad,
      altTag: "iPad",
      title: "iPad",
    },
    {
      imgSrc: appleWatch,
      altTag: "Apple watch",
      title: "Apple Watch",
    },
    {
      imgSrc: airpods,
      altTag: "AirPods",
      title: "AirPods",
    },
    {
      imgSrc: airtag,
      altTag: "AirTag",
      title: "AirTag",
    },
    {
      imgSrc: appleTv,
      altTag: "Apple TV 4K",
      title: "Apple TV 4K",
    },
    {
      imgSrc: homepod,
      altTag: "HomePod",
      title: "HomePod",
    },
    {
      imgSrc: accessories,
      altTag: "Accessories",
      title: "Accessories",
    },
    {
      imgSrc: giftCard,
      altTag: "Apple Gift Card",
      title: "Apple Gift Card",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const manualDotClick = useRef(false);


  const goToItem = (index) => {
    manualDotClick.current = true;
    setCurrentIndex(index);
    carouselRef.current.scrollLeft = index * carouselRef.current.offsetWidth;
  
    // Re-enable the handleScroll after a delay. This time should be  more than or equal to the time taken for the smooth scroll.
    setTimeout(() => {
      manualDotClick.current = false;
    }, 2000); // This 300ms should match the expected smooth scroll time.
  };
  

  useEffect(() => {
    const handleScroll = () => {
        // Check if this is a manual dot click scroll
        if (manualDotClick.current) return;
      
        const index = Math.round(
          carouselRef.current.scrollLeft / carouselRef.current.offsetWidth
        );
        setCurrentIndex(index);
      };      

    carouselRef.current.addEventListener("scroll", handleScroll);

    return () => {
      carouselRef.current.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="more-products">
      <h5>
        <span>Store. </span>The best way to buy the products you love.
      </h5>
      <div className="carousel-container">
        <ul className="carousel" ref={carouselRef}>
          {items.map((item, index) => (
            <li key={index} className="carousel-item">
              <img src={item.imgSrc} alt={item.altTag}></img>
              <a href="#">{item.title}</a>
            </li>
          ))}
        </ul>
        <div className="dots">
          {items.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndex === index ? "active" : ""}`}
              onClick={() => {
                goToItem(index);
              }}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreProducts;

import React from "react";

const SoundSection = () => {

  const scrollTodisplay = () => {
    const displaySection = document.querySelector('.display-section');
    if (displaySection) {
      displaySection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <section className="sound-section wrapper">
      <div className="body">
        <div className="sound-section-content content">
          <h2 className="title">New Sound System</h2>
          <p className="text">Feel The Base.</p>
          <span className="description">
          From $1,059.00 or $44.12/mo. before trade-in*
          </span>
          <ul className="links">
            <li>
              <button className="button">Buy</button>
            </li>
            <li>
              <button className="link" onClick={() => {
                scrollTodisplay();
              }}>Learn More</button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SoundSection;

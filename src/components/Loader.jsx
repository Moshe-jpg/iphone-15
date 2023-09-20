import React from "react";
import animatedLogo from "../assets/images/logo-animated.gif";

const Loader = () => {
  return (
    <div className="loader">
      <img src={animatedLogo} className="logo" alt="apple-loader"></img>
    </div>
  );
};
export default Loader;

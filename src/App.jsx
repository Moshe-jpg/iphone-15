import React, { useRef } from "react";
import "./App.css";
import Loader from "./components/Loader";
import WebgiViewer from "./components/WebgiViewer";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import SoundSection from "./components/SoundSection";
import DisplaySection from "./components/DisplaySection";
import Specs from "./components/Specs";
import MoreProducts from "./components/MoreProducts";
// import Footer from "./components/Footer";

function App() {
  const WebgiViewerRef = useRef();
  const contentRef = useRef();

  const handlePreview = () => {
    WebgiViewerRef.current.triggerPreview();
  };

  return (
    <>
      <div id="top"></div>
      <div className="App">
        <Loader />
        <div id="content" ref={contentRef}>
          <Navbar />
          <Jumbotron />
          <SoundSection />
          <DisplaySection triggerPreview={handlePreview} />
        </div>
        <WebgiViewer contentRef={contentRef} ref={WebgiViewerRef} />
        <Specs />
        <MoreProducts />
      </div>
    </>
  );
}

export default App;

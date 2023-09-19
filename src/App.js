import React, { useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import SoundSection from "./components/SoundSection";
import DisplaySection from "./components/DisplaySection";
import WebgiViewer from "./components/WebgiViewer";

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
      <div id="content" ref={contentRef}>
        <Navbar />
        <Jumbotron />
        <SoundSection />
        <DisplaySection triggerPreview={handlePreview} />
      </div>
      <WebgiViewer contentRef={contentRef} ref={WebgiViewerRef} />
    </div></>
  );
}

export default App;

import React, { useRef } from "react";
import "./App.css";
import Loader from "./components/Loader";
import WebgiViewer from "./components/WebgiViewer";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import SoundSection from "./components/SoundSection";
import DisplaySection from "./components/DisplaySection";
// import Macbooks from "./components/Products";
// import Ipads from "./components/Products";
// import Airpods from "./components/Products";
// import AppleWatch from "./components/Products";

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
        {/* <Macbooks />
        <Ipads />
        <Airpods />
        <AppleWatch /> */}
      </div>
    </>
  );
}

export default App;

import React, { lazy, useEffect, useState } from "react";

// import "./assets/styles/global.css";
// import "./assets/styles/mobile.css";

const Desktop = lazy(() => import("./layout/Desktop"));
const Mobile = lazy(() => import("./layout/mobile"));

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return <div className="App">{isMobile ? <Mobile /> : <Desktop />}</div>;
};

export default App;

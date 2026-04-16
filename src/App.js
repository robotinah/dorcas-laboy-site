import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./assets/css/margins-paddings.css";
import Version01 from "./components/pages/version-01";


import AOS from "aos";
import { useEffect } from "react";
import "./assets/css/aos.css";
import footerData from "./data/footer.json";
import headerData from "./data/header.json";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
function App() {
  const { header } = headerData;
  const { footer } = footerData;
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="section-wrapper">
      <div id="preLoader"></div>
      <BrowserRouter>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Version01 header={header} footer={footer} />} />
          <Route path="v1" element={<Version01 header={header} footer={footer} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

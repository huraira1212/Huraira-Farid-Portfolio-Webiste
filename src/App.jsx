import { useEffect, useState } from "react";
import {
  Home,
  Layout,
  Portfolio,
  Resume,
  Skill,
  Contact,
} from "./utils/Router";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLoader && (
        <div className="preloader">
          <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <path
              id="preloaderSvg"
              d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"
            ></path>
          </svg>

          <div className="preloader-heading">
            <div className="load-text">
              <span>L</span>
              <span>o</span>
              <span>a</span>
              <span>d</span>
              <span>i</span>
              <span>n</span>
              <span>g</span>
            </div>
          </div>
        </div>
      )}

      {!showLoader && (
        <>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <Layout>
                    <Home />
                  </Layout>
                }
              />
              <Route
                path="/work"
                element={
                  <Layout>
                    <Portfolio />
                  </Layout>
                }
              />
              <Route
                path="/resume"
                element={
                  <Layout>
                    <Resume />
                  </Layout>
                }
              />
              <Route
                path="/skill"
                element={
                  <Layout>
                    <Skill />
                  </Layout>
                }
              />
              <Route
                path="/contact"
                element={
                  <Layout>
                    <Contact />
                  </Layout>
                }
              />
            </Routes>
          </BrowserRouter>
        </>
      )}
    </>
  );
}

export default App;

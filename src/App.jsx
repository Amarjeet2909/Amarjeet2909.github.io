import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "../src/index.css";
import { useState, useEffect } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Gallery,
  Footer,
} from "./components";
import Achievement from "./components/Achievement.jsx";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadApp = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setLoading(false);
    };
    loadApp();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="loader-container">
          <PacmanLoader color={'#915EFF'} loading={loading} size={50} />
        </div>
      ) : (
        <Router>
          <div className="relative z-0 bg-primary">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                      <Navbar />
                      <Hero />
                    </div>
                    <About />
                    <Tech />
                    <div className="relative z-0">
                      <Contact />
                      <StarsCanvas />
                    </div>
                    <Footer />
                  </>
                }
              />
              <Route path="/Gallery" element={<Gallery />} />
              <Route path="/Experience" element={<Experience />} />
              <Route path="/Projects" element={<Works />} />
              <Route path="/Achievement" element={<Achievement />} />
            </Routes>
          </div>
        </Router>
      )}
    </div>
  );
}

export default App;

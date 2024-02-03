import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Navbar } from "./common/components/Navbar";

import CustomParticle from "./CustomParticle";
import PerfectScrollBar from "react-perfect-scrollbar";
import { Artworks } from "./pages/Artworks";
import { PortfolioFooter } from "./common/PortfolioFooter";

export default function App(): JSX.Element {
  return (
    <div>
      <CustomParticle />
      <Router>
        <Navbar />
        <PerfectScrollBar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artworks" element={<Artworks />} />
          </Routes>
        </PerfectScrollBar>
      </Router>
      <PortfolioFooter />
    </div>
  );
}

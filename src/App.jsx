import Main from "./screens/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
import ScrollToTopOnMount from "./components/ScrolToTop";
import AboutUs from "./screens/AboutUs";
import Support from "./screens/Support";
import Contact from "./screens/Contact";
import Media from "./components/Media";

import TransportSuit from "./screens/TransportSuit";

function App() {
  return (
    <>
      <div className=" bg-skin-main">
        <Media />
        <Router>
          <ScrollToTopOnMount />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/products" element={<ProductScreen />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/support" element={<Support />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/transport-suit" element={<TransportSuit />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;

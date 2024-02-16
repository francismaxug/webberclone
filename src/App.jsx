import Main from "./screens/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
import ScrollToTopOnMount from "./components/ScrolToTop";
import AboutUs from "./screens/AboutUs";
import Support from "./screens/Support";
import Contact from "./screens/Contact";
import Media from "./components/Media";

function App() {
  // const [show1, setShow1] = useState(false);
  // const [show, setShow] = useState(false);

  // const displayShow = () => {
  //   console.log(3);
  //   setShow(!show);
  //   setShow1(false);
  // };
  // const change = () => {
  //   console.log(1);
  //   setShow1(!show1);
  //   setShow(false);
  // };
  // const changeAll = () => {
  //   console.log(2);
  //   setShow1(false);
  //   setShow(false);
  // };
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
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;

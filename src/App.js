import React, { useState} from "react";
import "./App.css";
import Title from "./components/Title";
import Breakfast from "./components/Breakfast";
import Burger from "./components/Burger";
import Chicken from "./components/Chicken";
import Cholla from "./components/Cholla";
import Desserts from "./components/Desserts";
import Dossa from "./components/Dossa";
import Drinks from "./components/Drinks";
import Fries from "./components/Fries";
import Gujrati from "./components/Gujrati";
import Idli from "./components/Idli";
import Masala from "./components/Masala";
import Paneer from "./components/Paneer";
import Pizza from "./components/Pizza";
import Salads from "./components/Salads";
import Sandwiches from "./components/Sandwiches";
import Tacos from "./components/Tacos";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Food from "./components/Food";

const App = () => {
  const str = {
    width: "99%",
    display: "flex",
    height: "521px",
    backgroundColor: "#23272f",
  };
  const first = {
    width: "14%",
    maxHeight: "calc(100vh - 100px)",
    overflowY: "auto",
  };
  const second = {
    width: "84%",
    maxHeight: "calc(100vh - 100px)",
    overflowY: "auto",
    backgroundColor: "#23272f",
    paddingLeft: "20px",
    marginLeft: "10px",
  };
  const [foodList, setFoodList] = useState([]);
  const [showLinkComponent, setShowLinkComponent] = useState(true);
 

  return (
    <Router>
      <div>
        <Title
          setFoodList={setFoodList}
          setShowLinkComponent={setShowLinkComponent}
        />

        <div className=" mx-auto " style={str}>
          <div className="first" style={first}>
            <ul>
              <li>
                <Link to={"/"}>Breakfast</Link>
              </li>
              <li>
                <Link to={"/Burger"}>Burger</Link>
              </li>
              <li>
                {" "}
                <Link to={"/Chicken"}>Chicken</Link>
              </li>
              <li>
                <Link to={"/Cholla"}>Cholla</Link>
              </li>
              <li>
                <Link to={"/Desserts"}>Desserts</Link>
              </li>
              <li>
                <Link to={"/Dossa"}>Dossa</Link>
              </li>
              <li>
                <Link to={"/Drinks"}>Drinks</Link>
              </li>
              <li>
                <Link to={"/Fries"}>Fries</Link>
              </li>
              <li>
                <Link to={"/Gujrati"}>Gujrati</Link>
              </li>
              <li>
                <Link to={"/Idli"}>Idli</Link>
              </li>
              <li>
                <Link to={"/Masala"}>Masala</Link>
              </li>
              <li>
                <Link to={"/Paneer"}>Paneer</Link>
              </li>
              <li>
                <Link to={"/Pizza"}>Pizza</Link>
              </li>
              <li>
                <Link to={"/Salads"}>Salads</Link>
              </li>
              <li>
                <Link to={"/Sandwiches"}>Sandwich</Link>
              </li>
              <li>
                <Link to={"/Tacos"}>Tacos</Link>
              </li>
            </ul>
          </div>
          <div className="second" style={second}>
            {showLinkComponent ? (
              <Routes>
                <Route path="/" element={<Breakfast />} default />
                <Route path="/Burger" element={<Burger />} />
                <Route path="/Chicken" element={<Chicken />} />
                <Route path="/Cholla" element={<Cholla />} />
                <Route path="/Desserts" element={<Desserts />} />
                <Route path="/Dossa" element={<Dossa />} />
                <Route path="/Drinks" element={<Drinks />} />
                <Route path="/Fries" element={<Fries />} />
                <Route path="/Gujrati" element={<Gujrati />} />
                <Route path="/Idli" element={<Idli />} />
                <Route path="/Masala" element={<Masala />} />
                <Route path="/Paneer" element={<Paneer />} />
                <Route path="/Pizza" element={<Pizza />} />
                <Route path="/Salads" element={<Salads />} />
                <Route path="/Sandwiches" element={<Sandwiches />} />
                <Route path="/Tacos" element={<Tacos />} />
              </Routes>
            ) : (
              <Food foodList={foodList} />
            )}
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;

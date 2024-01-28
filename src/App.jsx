import { useState } from "react";
import "./App.css";
import PreNavBar from "./components/PreNavBar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import data from "./data/data.json";
import Slider from "./components/Slider";
import Offers from "./components/Offers";
import Heading from "./components/Heading";
import StarProduct from "./components/StarProduct";
import Menu from "./components/Menu";
import HotAccessories from "./components/HotAccessories";
import ProductReview from "./components/ProductReview";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <PreNavBar />
        <NavBar />
        <Slider start={data.banner.start} />
        <Offers offer={data.offer} />
        <Heading text="STAR PRODUCTS" />
        <StarProduct starProduct={data.starProduct} />
        <Heading text="HOT ACCESSORIES" />
        <Menu />

        <Routes>
          <Route
            path="/musicstore"
            element={
              <HotAccessories
                music={data.hotAccessories.music}
                musicCover={data.hotAccessoriesCover.music}
              />
            }
          />
          <Route
            path="/smartdevices"
            element={
              <HotAccessories
                music={data.hotAccessories.smartDevice}
                musicCover={data.hotAccessoriesCover.smartDevice}
              />
            }
          />
          <Route
            path="/home"
            element={
              <HotAccessories
                music={data.hotAccessories.home}
                musicCover={data.hotAccessoriesCover.home}
              />
            }
          />
          <Route
            path="/lifestyle"
            element={
              <HotAccessories
                music={data.hotAccessories.lifeStyle}
                musicCover={data.hotAccessoriesCover.lifeStyle}
              />
            }
          />
          <Route
            path="/mobileaccessories"
            element={
              <HotAccessories
                music={data.hotAccessories.mobileAccessories}
                musicCover={data.hotAccessoriesCover.mobileAccessories}
              />
            }
          />
        </Routes>
        <Heading text="PRODUCT REVIEWS" />
        <ProductReview productReviews = {data.productReviews}/>

        <Footer />

        
      </Router>
    </>
  );
}

export default App;

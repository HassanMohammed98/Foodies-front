import React from "react";
import CategoryList from "./Catg/CategoryList";

const Home = () => {
  console.log("hello home");

  return (
    <div className="home-page">
      <div className="home-layout">
        <div className="home-img-header" id="page-1">
          {/* <img
            className="home-image"
            src="./images/logo.png"
            alt="Home Image Logo"
          ></img> */}
          <div className="home-header">
            <br />
            <br />

            {/* <hr /> */}
            <div className="title-divider"></div>
            <h1>FOODAHOLIC</h1>
            <div className="title-divider"></div>
            <div className="slogan">
              <h2>For the Love of Food</h2>
            </div>

            <a href="#page-2">
              <button
                type="button"
                className="moving"
                // onClick={() => {}}
              >
                moving
              </button>
            </a>
          </div>
        </div>
        <div className="home-img-header" id="page-2"></div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import store from "../stores/Store";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";

const Home = () => {
  console.log("hello home", store.catgFav);

  return (
    <div className="home-page">
      <div className="home-layout">
        <div className="home-img-header">
          <div className="home-header">
            <br />
            <br />

            <div className="title-divider"></div>
            <h1>FOODAHOLIC</h1>
            <div className="title-divider"></div>
            <div className="slogan">
              <h2>For the Love of Food</h2>
            </div>
            <Link to={"/about"} className="test-h3">
              <div className="moving">
                <h3>About Us</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(Home);

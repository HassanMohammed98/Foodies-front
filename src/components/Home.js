import React from "react";
import store from "../stores/Store";
import { observer } from "mobx-react";
// import CategoryDisp from "./Catg/CategoryDisp";
// import IngDisp from "./Ingredients/IngDisp";
// import RecipesDisp from "./Recipes/RecipesDisp";

const Home = () => {
  console.log("hello home", store.catgFav);

  // const categoryFav = store.catgFav.map((catg) => (
  //   <div key={catg._id} className="margin-list">
  //     <CategoryDisp catg={catg.category} />
  //   </div>
  // ));
  // const recipeFav = store.recipeFav.map((rec) => (
  //   <div key={rec._id} className="margin-list">
  //     <RecipesDisp recipe={rec.recipe} />
  //   </div>
  // ));
  // const ingFav = store.ingredientFav.map((ing) => (
  //   <div key={ing._id} className="margin-list">
  //     <IngDisp ingredient={ing.ingredient} />
  //   </div>
  // ));
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
        {/* <div className="home-img-header fav-display" id="page-2">
          <div className="item-display">{categoryFav}</div>
          gg
          <div className="item-display">{recipeFav}</div>
          gg
          <div className="item-display">{ingFav}</div>
        </div> */}
      </div>
    </div>
  );
};

export default observer(Home);

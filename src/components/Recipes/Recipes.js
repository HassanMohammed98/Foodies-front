import React from "react";
import store from "../../stores/Store";
import RecipesDisp from "./RecipesDisp";
import { observer } from "mobx-react";
import CreateRecipeModal from "../Modal/CreateRecipeModal";

const Recipes = () => {
  // if (store.recipeList == null) {
  //   return <p>Loading...</p>;
  // }
  const findRecipes = (catgRecipes) => {
    // store.recipeList;
    // .filter((rec) => catgRecipes.includes(rec._id))
    return catgRecipes.map((rec) => (
      <div key={rec._id} className="margin-list">
        <RecipesDisp recipe={rec} />
      </div>
    ));
  };

  const allRecipes = store.catgList.map((catg) => (
    <div className="recipe-div recipe-add">
      <h3>{catg.name}</h3>
      {findRecipes(catg.recipes)}
    </div>
  ));
  return (
    <div className="recipe-page">
      <div className="recipe-list">
        <div className="recipes">{allRecipes}</div>
      </div>
      <div className="recipe-list">
        <div className="recipes recipe-add">
          <CreateRecipeModal />
        </div>
      </div>
    </div>
  );
};

export default observer(Recipes);

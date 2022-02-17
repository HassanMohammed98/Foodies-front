import React from "react";
import store from "../../stores/Store";
import RecipesDisp from "./RecipesDisp";
import { observer } from "mobx-react";
import CreateRecipeModal from "../Modal/CreateRecipeModal";

const Recipes = () => {
  const findRecipes = (catgRecipes) => {
    return store.recipeList
      .filter((rec) => catgRecipes.includes(rec.id))
      .map((rec) => (
        <div className="margin-list">
          <RecipesDisp key={rec.id} recipe={rec} />
        </div>
      ));
  };

  const allRecipes = store.catgList.map((catg) => (
    <div>
      <h3>{catg.name}</h3>
      {findRecipes(catg.recipes)}
    </div>
  ));
  // const recipesFound = store.recipeList.
  return <div>{allRecipes}</div>;
};

export default Recipes;

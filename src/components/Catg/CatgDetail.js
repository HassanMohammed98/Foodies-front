import React from "react";
import store from "../../stores/Store";
import { useParams } from "react-router-dom";
import RecipesDisp from "../Recipes/RecipesDisp";

const CatgDetail = () => {
  const { slug } = useParams();
  const catg = store.catgList.find((category) => category.slug === slug);
  console.log(catg);

  const foundRecipes = catg.recipes.map((rec) => (
    <div className="margin-list">
      <RecipesDisp key={rec._id} recipe={rec} />
    </div>
  ));
  return <div>{foundRecipes}</div>;
};

export default CatgDetail;

import React from "react";
import store from "../../stores/Store";
import { useParams } from "react-router-dom";
import RecipesDisp from "../Recipes/RecipesDisp";

const CatgDetail = () => {
  const { slug } = useParams();
  const catg = store.catgList.find((category) => category.slug === slug);
  console.log(catg);
  const foundRecipes = catg.recipes.map((rec) => (
    <div key={rec._id} className="margin-list">
      <RecipesDisp recipe={rec} />
    </div>
  ));
  return (
    <div>
      <h1>{}</h1>
      {foundRecipes}
    </div>
  );
};

export default CatgDetail;

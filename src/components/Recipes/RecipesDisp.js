import React from "react";
import { Link } from "react-router-dom";

const RecipesDisp = ({ recipe }) => {
  return (
    <Link to={`/recipes/${recipe.slug}`}>
      <div className="list">
        <img className="list-img" src={recipe.image} alt="..."></img>
      </div>
    </Link>
  );
};

export default RecipesDisp;

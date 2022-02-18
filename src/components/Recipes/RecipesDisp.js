import React from "react";
import { Link } from "react-router-dom";
import instance from "../../stores/instance";

const RecipesDisp = ({ recipe }) => {
  return (
    <Link to={`/recipes/${recipe.slug}`}>
      <div className="list">
        <img
          className="list-img"
          src={`${instance.defaults.baseURL}${recipe.image}`}
          alt="..."
        ></img>
        <div className="overlay">
          <div className="text">{recipe.name}</div>
        </div>
      </div>
    </Link>
  );
};

export default RecipesDisp;

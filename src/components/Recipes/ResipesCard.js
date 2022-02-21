import React from "react";
import { Link } from "react-router-dom";
import instance from "../../stores/instance";
import durationSvg from "../../duration.svg";

const RecipesCard = ({ recipe, catgName }) => {
  const temp = recipe.duration;
  if (temp === 0) {
    temp = "Not available";
  }
  return (
    <div className="recipeCard">
      <Link className="link-card" to={`/recipes/${recipe.slug}`}>
        <div className="recipeCard">
          <div className="recipe-card-image-div">
            <img
              className="recipe-card-image"
              src={`${instance.defaults.baseURL}${recipe.image}`}
              alt="..."
            />
          </div>
          <div>
            <div className="recipe-name-div">
              <div className="recipe-category-name">{catgName}</div>
              <div className="recipe-name">{recipe.name}</div>
            </div>
            <div className="durationSVG-div">
              <img className="durationSVG-img" src={durationSvg} />
              <div className="durationSVG-mins">
                {recipe.duration > 0
                  ? `${recipe.duration} mins`
                  : "Not available"}
              </div>
            </div>
          </div>

          {/* <div className="list">
        <img
          className="list-img"
          src={`${instance.defaults.baseURL}${recipe.image}`}
          alt="..."
        ></img>
        <div className="overlay">
          <div className="text">{recipe.name}</div>
        </div>
      </div> */}
        </div>
      </Link>
      <div className="heart-div">
        <div className="heart"></div>
      </div>
    </div>
  );
};

export default RecipesCard;

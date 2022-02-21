import React from "react";
import { Link } from "react-router-dom";
import instance from "../../stores/instance";

const CategoryCard = ({ catg }) => {
  return (
    <div className="categoryCard">
      <Link className="link-card" to={`/recipes/${catg.slug}`}>
        <div className="categoryCard">
          <div className="categrory-card-image-div">
            <img
              className="recipe-card-image"
              src={`${instance.defaults.baseURL}${catg.image}`}
              alt="..."
            />
          </div>

          <div className="category-name-div">
            <div className="category-name">{catg.name}</div>
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
      <div className="heart-category-div">
        <div class="heart-category"></div>
      </div>
    </div>
  );
};

export default CategoryCard;

import React from "react";
import { Link } from "react-router-dom";
import instance from "../../stores/instance";

const CategoryDisp = ({ catg }) => {
  return (
    <Link to={`/categories/${catg.slug}`}>
      <div className="list">
        <img
          className="list-img"
          src={`${instance.defaults.baseURL}${catg.image}`}
          alt="..."
        ></img>
        <div className="overlay">
          <div className="text">{catg.name}</div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryDisp;

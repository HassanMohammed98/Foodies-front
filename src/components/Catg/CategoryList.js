import React from "react";
import store from "../../stores/Store";
import { observer } from "mobx-react";
import CreateCatgModal from "../Modal/CreateCatgModal";
import CategoryCard from "./CategoryCard";

const CategoryList = () => {
  // if (store.catgList == null) {
  //   return <p>Loading...</p>;
  // }
  // store.fetchCatg();
  const categoriesDisplayed = store.catgList.map((catg) => (
    <div key={catg._id} className="margin-list">
      <CategoryCard catg={catg} />
    </div>
  ));
  return (
    // <div className="home">
    //   <div className="headings">Categories</div>
    //   <div
    //     className={
    //       store.catgList.length > 7
    //         ? "whole-list padding-list-top"
    //         : "whole-list"
    //     }
    //   >
    //     {categoriesDisplayed}
    //     <CreateCatgModal />
    //   </div>
    // </div>
    <div className="recipe-page">
      <div className="recipe-list">
        <div className="recipes">
          <div className="item-display">{categoriesDisplayed}</div>
        </div>
      </div>
      <div className="v-line"></div>
      <div className="recipe-list">
        <div className="recipes recipe-add">
          <CreateCatgModal />
        </div>
      </div>
    </div>
  );
};

export default observer(CategoryList);

import React from "react";
import store from "../../stores/Store";
import CategoryDisp from "./CategoryDisp";
import { observer } from "mobx-react";
import CreateCatgModal from "../Modal/CreateCatgModal";

const CategoryList = () => {
  const categoriesDisplayed = store.catgList.map((catg) => (
    <div className="margin-list">
      <CategoryDisp key={catg.id} catg={catg} />
    </div>
  ));
  return (
    <div className="home">
      <div className="headings">Categories</div>
      <div
        className={
          store.catgList.length > 7
            ? "whole-list padding-list-top"
            : "whole-list"
        }
      >
        {categoriesDisplayed}
        <CreateCatgModal />
      </div>
    </div>
  );
};

export default observer(CategoryList);

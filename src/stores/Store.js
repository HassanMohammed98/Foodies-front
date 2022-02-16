import { makeAutoObservable } from "mobx";
import categories from "../Data/categories";
import ingredients from "../Data/ingredients";
import recipes from "../Data/recipes";

class Store {
  catgList = categories;
  recipeList = recipes;
  ingredientList = ingredients;
  constructor() {
    makeAutoObservable(this);
  }
  addCatg = (catg) => {
    let newID;
    if (this.catgList.length === 0) {
      newID = 1;
    } else {
      newID = this.catgList[this.catgList.length - 1].id + 1;
    }
    this.catgList = [
      ...this.catgList,
      {
        id: newID,
        name: catg.name,
        slug: catg.name.split(" ").join("-"),
        image: catg.image,
        recipes: [],
      },
    ];
  };
  addRecipe = (recipe) => {
    let newID;
    if (this.recipeList.length === 0) {
      newID = 1;
    } else {
      newID = this.recipeList[this.recipeList.length - 1].id + 1;
    }
    this.recipeList = [
      ...this.recipeList,
      {
        id: newID,
        name: recipe.name,
        slug: recipe.name.split(" ").join("-"),
        image: recipe.image,
        ingredients: [],
        category: recipe.category,
      },
    ];
  };
  addIng = (ingredient) => {
    let newID;
    if (this.ingredientList.length === 0) {
      newID = 1;
    } else {
      newID = this.ingredientList[this.ingredientList.length - 1].id + 1;
    }
    this.ingredientList = [
      ...this.ingredientList,
      {
        id: newID,
        name: ingredient.name,
        slug: ingredient.name.split(" ").join("-"),
        image: ingredient.image,
        recipes: [],
      },
    ];
  };
}

const store = new Store();
export default store;

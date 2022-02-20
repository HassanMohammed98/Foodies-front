import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import store from "../../stores/Store";
import CreateRecipeSteps from "./CreateRecipeSteps";
import { observer } from "mobx-react";
import IngDisp from "../Ingredients/IngDisp";

const CreateRecipeModal = () => {
  const catgs = store.catgList.map((category) => (
    <li
      key={category._id}
      onClick={() => {
        setDataEntered({
          ...dataEntered,
          category: category._id,
        });
        //   libraryStore.borrowBook(member.id, book.id);
      }}
    >
      <span className="dropdown-item">{category.name}</span>
    </li>
  ));
  //   const [recipeSteps, setRecipeSteps] = useState([]);
  const [serviceList, setServiceList] = useState([{ service: "" }]);
  const [addIng, setAddIng] = useState([]);
  const [dataEntered, setDataEntered] = useState({
    name: "",
    duration: 0,
    image: "",
    description: "",
    steps: [],
    category: "",
  });
  const ingrediants = store.ingredientList.map((ing) => (
    <div
      key={`whole_${ing._id}`}
      className="margin-list"
      onClick={() => handleIngredChange(ing)}
    >
      <IngDisp ingredient={ing} />
    </div>
  ));

  const handleChange = (event) => {
    setDataEntered({
      ...dataEntered,
      [event.target.name]: event.target.value,
    });
  };
  const handleImage = (event) =>
    setDataEntered({
      ...dataEntered,
      [event.target.name]: event.target.files[0],
    });
  const handleStep = () =>
    setDataEntered({
      ...dataEntered,
      steps: serviceList,
    });

  const handleIngredChange = (ing) => {
    if (addIng.some((ingred) => ingred._id === ing._id)) {
      // const index = addIng.findIndex((ingred) => ingred.ing === ing);
      setAddIng((oldlist) =>
        oldlist.filter((ingred) => ingred._id !== ing._id)
      );
    } else {
      setAddIng([...addIng, { _id: ing._id, ing: ing }]);
    }
  };
  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...serviceList];
    list[index][name] = value;
    setServiceList(list);
    handleStep();
  };

  const handleServiceRemove = (index) => {
    const list = [...serviceList];
    list.splice(index, 1);
    setServiceList(list);
    handleStep();
  };

  const handleServiceAdd = () => {
    setServiceList([...serviceList, { service: "" }]);
    handleStep();
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(dataEntered);
    if (
      dataEntered.name !== "" &&
      dataEntered.category !== "" &&
      dataEntered.image !== ""
    ) {
      store.addRecipe({ ...dataEntered, ingredients: addIng });
      setServiceList([{ service: "" }]);
      setDataEntered({
        name: "",
        duration: 0,
        image: "",
        description: "",
        steps: [{ service: "" }],
        category: "",
      });
      setAddIng([]);
    } else {
      alert(
        `Hey, you missed:\n${dataEntered.name === "" && "   Name field\n"}${
          dataEntered.name === "" && "   Image field\n"
        }${dataEntered.category === "" && "   Category field\n"}in modal!`
      );
    }
  };
  return (
    <div className="recipe-modal">
      <Modal.Header>
        <Modal.Title>Add Recipe to List</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-3">
          <Form.Label>Recipe Name</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="Enter Recipe Name"
            required={true}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Recipe Duration (mins)</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="duration"
            type="number"
            placeholder="Enter Recipe cooking Duration"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Recipe image</Form.Label>
          <Form.Control
            onChange={handleImage}
            name="image"
            type="file"
            placeholder="Enter Recipe Image"
            required={true}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Recipe Description</Form.Label>
          <div className="recipe-description">
            <Form.Control
              onChange={handleChange}
              name="description"
              type="text"
              placeholder="Enter Recipe Description"
            />
          </div>
        </Form.Group>
        <Form.Group className="mb-3">
          <CreateRecipeSteps
            serviceList={serviceList}
            setServiceList={setServiceList}
            handleServiceChange={handleServiceChange}
            handleServiceRemove={handleServiceRemove}
            handleServiceAdd={handleServiceAdd}
          />
        </Form.Group>
        <div className="test3">
          <div className="btn-group">
            <div
            //   className="borrow-label"
            >
              Assign to Category : &#160;&#160;&#160;
            </div>
            <button
              type="button"
              className="btn btn-info dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Categories
            </button>
            <ul className="dropdown-menu">{catgs}</ul>
          </div>
          <div className="recipe-add-divider"></div>
          <h6>Add Recipe Ingredients to list</h6>
          <div className="recipe-ingred">
            <div className="recipe-test">
              <p>Added List</p>
              {addIng.map((ing) => (
                <div
                  key={`new_${ing._id}`}
                  className="margin-list"
                  onClick={() => handleIngredChange(ing)}
                >
                  <IngDisp ingredient={ing.ing} />
                </div>
              ))}
            </div>
            <div className="v-line"></div>
            <div className="recipe-test">
              <p>Whole List</p>
              {ingrediants}
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
      {/* </Modal> */}
    </div>
  );
};

export default observer(CreateRecipeModal);

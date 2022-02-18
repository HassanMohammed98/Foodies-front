import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import store from "../../stores/Store";

const CreateRecipeModal = () => {
  const catgs = store.catgList.map((category) => (
    <li
      key={category._id}
      //   onClick={() => {
      //     libraryStore.borrowBook(member.id, book.id);
      //   }}
    >
      <span className="dropdown-item">{category.name}</span>
    </li>
  ));
  const [dataEntered, setDataEntered] = useState({
    name: "",
    duration: 0,
    image: "",
    category: "",
    ingredients: [],
  });
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
  const handleSubmit = (event) => {
    event.preventDefault();
    store.addRecipe(dataEntered);
    setDataEntered({
      name: "",
      image: "",
    });
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
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Recipe Duration (mins)</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="duration"
            type="text"
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
          <div className="recipe-ingred"></div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
      {/* </Modal> */}
    </div>
  );
};

export default CreateRecipeModal;

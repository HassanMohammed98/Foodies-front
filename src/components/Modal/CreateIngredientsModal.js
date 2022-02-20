import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import store from "../../stores/Store";
import { observer } from "mobx-react";

const CreateIngredientsModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dataEntered, setDataEntered] = useState({
    name: "",
    image: "",
  });
  // const handleClose = () => setIsOpen(false);
  // const handleShow = () => setIsOpen(true);
  const handleChange = (event) => {
    setDataEntered({ ...dataEntered, [event.target.name]: event.target.value });
  };
  const handleImage = (event) =>
    setDataEntered({
      ...dataEntered,
      [event.target.name]: event.target.files[0],
    });
  const handleSubmit = (event) => {
    event.preventDefault();
    // handleClose();
    store.addIng(dataEntered);
    setDataEntered({
      name: "",
      image: "",
    });
  };
  return (
    <div className="recipe-modal">
      {/* <img
          className="add-item-img"
          src="./images/add-item.png"
          alt="..."
        ></img>
        {store.catgList.length == 0 && <>No Ingredients found</>}
        <h5>click to add a new Ingredient</h5> */}

      {/* <Modal show={isOpen} onHide={handleClose}> */}
      <Modal.Header>
        <Modal.Title>Add Ingredient to List</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-3">
          <Form.Label>Ingredient Name</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="Enter Category Name"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Ingredient Image</Form.Label>
          <Form.Control
            onChange={handleImage}
            name="image"
            type="file"
            placeholder="Enter Ingredient Image"
          />
        </Form.Group>
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

export default observer(CreateIngredientsModal);

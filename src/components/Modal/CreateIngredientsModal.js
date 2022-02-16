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
  const handleClose = () => setIsOpen(false);
  const handleShow = () => setIsOpen(true);
  const handleChange = (event) => {
    setDataEntered({ ...dataEntered, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    handleClose();
    store.addCatg(dataEntered);
    setDataEntered({
      name: "",
      image: "",
    });
  };
  return (
    <>
      <div
        className={
          store.catgList.length > 0 ? "list add-item-after" : "add-item"
        }
        onClick={handleShow}
      >
        <img
          className="add-item-img"
          src="./images/add-item.png"
          alt="..."
        ></img>
        {store.catgList.length == 0 && <>No Ingredients found</>}
        <h5>click to add a new Ingredient</h5>
      </div>

      <Modal show={isOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Ingredient to List</Modal.Title>
        </Modal.Header>
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
            onChange={handleChange}
            name="image"
            type="text"
            placeholder="Enter Ingredient Image"
          />
        </Form.Group>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default observer(CreateIngredientsModal);

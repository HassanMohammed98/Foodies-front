import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import store from "../../stores/Store";
import { observer } from "mobx-react";

const CreateCatgModal = () => {
  const [dataEntered, setDataEntered] = useState({
    name: "",
    image: "",
  });

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
    store.addCatg(dataEntered);
    setDataEntered({
      name: "",
      image: "",
    });
  };

  return (
    <div className="recipe-modal">
      <Modal.Header>
        <Modal.Title>Add Category to List</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-3">
          <Form.Label>Category Name</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="Enter Category Name"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Category image</Form.Label>
          <Form.Control
            onChange={handleImage}
            name="image"
            type="file"
            placeholder="Enter Category Image"
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </div>
  );
};

export default observer(CreateCatgModal);

import { Button, Form, Modal, Toast } from 'react-bootstrap';
import React, { useState } from 'react';

import { addPostRequest } from '../../apis/posts';

interface AddPostModalInterface {
  show: boolean;
  handleOpen: Function;
  handleClose: Function;
}
const AddPostModal = (props: AddPostModalInterface) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [showToaster, setShowToaster] = useState(false);
  const addPost = async () => {
    const response = await addPostRequest(title, body);
    if (response) {
      props.handleClose();
      setShowToaster(true);
      setTitle('');
      setBody('');
      setTimeout(() => {
        setShowToaster(false);
      }, 2000);
    }
  };
  return (
    <div>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Form */}
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={title}
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>post</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={body}
                onChange={(event) => {
                  setBody(event.target.value);
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => props.handleClose()}>
            Close
          </Button>
          <Button variant="primary" onClick={() => addPost()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* toaster */}
      {showToaster && (
        <Toast className="d-inline-block m-1 justify-content-end" bg="success">
          <Toast.Body className="text-white">
            Post added Successfully
          </Toast.Body>
        </Toast>
      )}
    </div>
  );
};

export default AddPostModal;

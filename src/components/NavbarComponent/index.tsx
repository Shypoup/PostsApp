import {
  Button,
  Container,
  Modal,
  Nav,
  NavDropdown,
  Navbar,
} from 'react-bootstrap';
import React, { useState } from 'react';

import AddPostModal from '../AddPostModal';

const NavbarComponent = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">PostsApp</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Posts</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>

            <Button variant="outline-success" onClick={handleOpenModal}>
              Add Post
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Modal */}

      <AddPostModal
        show={openModal}
        handleClose={handleCloseModal}
        handleOpen={handleOpenModal}
      />
    </div>
  );
};

export default NavbarComponent;

import { Button, Card } from 'react-bootstrap';
import React, { useState } from 'react';

import ShowDetailsModal from '../ShowDetailsModal';

interface PostCardInterface {
  title: string;
  body: string;
  id: number;
}
const PostCard = (props: PostCardInterface) => {
  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  return (
    <Card className="m-4 ">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.body}</Card.Text>
        <Button variant="primary" onClick={handleOpenModal}>
          See more
        </Button>
      </Card.Body>

      {/* Show more modal */}
      <ShowDetailsModal
        id={props.id}
        show={openModal}
        handleClose={handleCloseModal}
        handleOpen={handleOpenModal}
      />
    </Card>
  );
};

export default PostCard;

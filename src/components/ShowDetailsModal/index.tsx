import { Button, Card, Form, Modal, Row, Toast } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

import { fetchPostDetails } from '../../apis/posts';

interface ShowDetailsModalInterface {
  id: number;
  show: boolean;
  handleOpen: Function;
  handleClose: Function;
}
const ShowDetailsModal = (props: ShowDetailsModalInterface) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const getPostDetails = async () => {
    if (props.show) {
      const response = await fetchPostDetails(props.id);
      setData(response);
      setLoading(false);
    }
  };
  useEffect(() => {
    getPostDetails();
  }, [props.show]);

  return (
    <div>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Post Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {loading ? (
            <p>Loading</p>
          ) : (
            data && (
              <>
                <Card.Title>ID: {data.id}</Card.Title>
                <Card.Title>Title:</Card.Title>
                <Card.Text>{data.title}</Card.Text>

                <Card.Title>Body:</Card.Title>
                <Card.Text> {data.body}</Card.Text>
              </>
            )
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => props.handleClose()}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ShowDetailsModal;

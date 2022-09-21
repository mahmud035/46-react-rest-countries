import React, { useState } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';
import './ReactModal.css';

const ReactModal = ({ country }) => {
  console.log(country);
  const {
    name: { common },
    flags: { png },
    region,
    population,
    unMember,
    independent,
  } = country;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        See Details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{common}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card
            data-aos="fade-up"
            data-aos-duration="1000"
            className="h-100 border-0 shadow-sm "
          >
            <Card.Img variant="top" src={png} />
            <Card.Body>
              <Card.Title>{common}</Card.Title>
              <Card.Text>
                <strong>Region:</strong> {region} <br />
                <strong>Population:</strong> {population} <br />
                <strong>Independent:</strong> {independent ? 'Yes' : 'No'}
                <br />
                <strong>UN Member:</strong> {unMember ? 'Yes' : 'No'}
              </Card.Text>
            </Card.Body>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ReactModal;

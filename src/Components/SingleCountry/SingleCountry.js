import React from 'react';
import { Card } from 'react-bootstrap';
import ReactModal from '../ReactModal/ReactModal';
import './SingleCountry.css';

const SingleCountry = ({ country }) => {
  // console.log(country);
  const {
    name: { common },
    flags: { png },
    region,
    population,
    unMember,
  } = country;

  return (
    <Card
      data-aos="fade-up"
      data-aos-duration="1500"
      className="h-100 border-0 shadow-sm "
    >
      <Card.Img variant="top" src={png} />
      <Card.Body>
        <Card.Title>{common}</Card.Title>
        <Card.Text>
          <strong>Region:</strong> {region} <br />
          <strong>Population:</strong> {population} <br />
          <strong>UN Member:</strong> {unMember ? 'Yes' : 'No'}
        </Card.Text>
        <ReactModal country={country}></ReactModal>
      </Card.Body>
    </Card>
  );
};

export default SingleCountry;

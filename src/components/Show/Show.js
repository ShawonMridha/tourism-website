import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Show.css'


const Show = (props) => {
    const{img, name, description, _id}=props.cards;
    return (
        <div>
          <Col>
               <Card className="size">
               <Card.Img className="card" variant="top" src={img} />
               <Card.Body>
              <Card.Title>Place: {name}</Card.Title>
               <Card.Text>
              {description}
              </Card.Text>
             <Link to={`/details/${_id}`}>
              <button className="btn btn-primary size">Buy Now</button>
             </Link>
             </Card.Body>
             </Card>
      
    </Col>
    
        </div>
    );
};

export default Show;
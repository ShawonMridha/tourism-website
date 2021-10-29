import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Show = (props) => {
    const{img, name, description, id}=props.cards;
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
             <Link to={`/details/${id}`}>
              <button className="btn btn-primary size">Details</button>
       
             </Link>
             </Card.Body>
        
             </Card>
      
    </Col>
        </div>
    );
};

export default Show;
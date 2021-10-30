import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const OrderShow = (props) => {
    const{neme,name,email,description,number, }=props.cards;
    return (
        <div>
             <Col>
               <Card className="size">
               <Card.Img className="card" variant="top" src={neme.img} />
               <Card.Body>
              <Card.Title>Place Name: {neme.name} </Card.Title>
               <Card.Text>
                 <h5>Pakage Tk: {neme.pakage}</h5>
                 <h5>Name: {name}</h5>
                 <h5>Email: {email}</h5>
                 <h5>Number: {number}</h5>
              </Card.Text>
              <h5>Address: {description}</h5>
             </Card.Body>
             <Button onClick={()=>props.handleDelete(props.cards._id)}>Delete</Button>
             </Card>
      
    </Col>
        </div>
    );
};

export default OrderShow;
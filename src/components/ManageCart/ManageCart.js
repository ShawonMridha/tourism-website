import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './ManageCart.css'

const ManageCart = (props) => {
    const{neme,name,email,description,number, }=props.cards;
    return (
        <div className="mb-5 mt-5" >
            <Col>
               <Card className="small">
               <Card.Img className="card" variant="top" src={neme.img} />
               <Card.Body>
              <Card.Title>Place Name: {neme.name} </Card.Title>
               <Card.Text>
                 <h5>Pakage Tk: {neme.pakage}</h5>
                 <h5>Name: {name}</h5>
                 <h5>Email: {email}</h5>
                 <h5>Number: {number}</h5>
                 <h5>Address: {description}</h5>
              </Card.Text>
             </Card.Body>
             <Button onClick={()=>props.handleDelete(props.cards._id)}>Delete</Button>
             </Card>
      
    </Col>
        </div>
    );
};

export default ManageCart;
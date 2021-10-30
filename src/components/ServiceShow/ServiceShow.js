import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Added from '../Added/Added';

const ServiceShow = () => {
    const[addservice, setAddservice] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res=>res.json())
        .then(data=>setAddservice(data))
    },[])
    return (
        <div>
            <Container>
                <h3 className="demo">Added New Service: </h3>
            <Row xs={1} md={3} className="g-4">
              {
              addservice.map(addservices=> <Added newAdd={addservices} key={addservice._id} ></Added>)
              }
           </Row>
            </Container>
        </div>
    );
};

export default ServiceShow;
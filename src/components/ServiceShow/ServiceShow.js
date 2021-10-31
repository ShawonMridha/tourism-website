import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Added from '../Added/Added';

const ServiceShow = () => {
    const[addservice, setAddservice] = useState([])

    useEffect(()=>{
        fetch('https://shocking-phantom-73762.herokuapp.com/service')
        .then(res=>res.json())
        .then(data=>setAddservice(data))
    },[])
    return (
        <div>
            <Container>
                <h3 className="demo mt-5 text-primary">Added New Service: </h3>
            <Row xs={1} md={3} className="g-4">
              {
              addservice.map(addservices=> <Added key={addservice._id} newAdd={addservices}  ></Added>)
              }
           </Row>
            </Container>
        </div>
    );
};

export default ServiceShow;
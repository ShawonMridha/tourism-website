import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ManageCart from '../ManageCart/ManageCart';

const ManageAllOrder = () => {
    const[order, setOrder] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/tourist')
        .then(res=>res.json())
        .then(data=>setOrder(data))
    },[])
    console.log(order)


    const handleDelete = id =>{
        const url = `http://localhost:5000/tourist/${id}`;
        fetch(url,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data);
            if(data.deletedCount){
                window.confirm('you want to delete???')
            const remaining = order.filter(service =>service._id !==id);
            setOrder(remaining);
            }
            
        })
    }
    return (
        <div>
            <Container>
            <Row xs={1} md={3} className="g-4">
              {
              order.map(card=> <ManageCart cards={card}
                handleDelete={handleDelete}
              >

              </ManageCart>)
              }
           </Row>
            </Container>
        </div>
    );
};

export default ManageAllOrder;
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

import './Details.css'

const Details = () => {
    const{user} = useAuth();
    const{id} = useParams();
    const[service, setService] = useState({})

    useEffect(()=>{
        fetch(`http://localhost:5000/products/${id}`)
        .then(res=>res.json())
        .then(data=>setService(data));
    },[])

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // console.log(data);
        const place = data;
        place.neme = service;
        // console.log(place);
        fetch(`http://localhost:5000/tourist`,{
           method:'post',
           headers:{
             'content-type':'application/json'
           },
           body:JSON.stringify(data),
        })
        .then(res =>res.json())
        .then(result=>{
          console.log(result);
          reset()
        })
    }
    
    return (
        <>
          <h3>{service.description}</h3>
          <h4>Pakage Tk: {service.pakage}</h4>
          <img className="w-25 mb-5" src={service.img} alt="" />
            <div className="add-service">
              <form onSubmit={handleSubmit(onSubmit)}>
              <input  {...register("name", { required: true, maxLength: 20 })} defaultValue={user.displayName} placeholder="name" required/>
              <input  type="email" {...register("email")} defaultValue={user.email} placeholder="email" required />
              <input type="number" {...register("number")} placeholder="number" required />
              <textarea {...register("description")} placeholder="Address" required/>
              <input type="submit" />
            </form>
          </div>
        </>
    );
};

export default Details;
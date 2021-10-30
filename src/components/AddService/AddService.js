import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddService.css'

const AddService = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data);
         axios.post('http://localhost:5000/service', data)
        .then(res =>{
            // console.log(res)
            if(res.data.insertedId){
                alert('added successfully');
                reset();
            }
        })
        
    }
    return (
        <div className="add-service mt-5 mb-5">
            <h3 className="text-primary">ADD YOUR SERVICE:</h3>
           <form className="sm" onSubmit={handleSubmit(onSubmit)}>
             <input {...register("name", { required: true, maxLength: 20 })} placeholder="name"/>
             <textarea {...register("description")} placeholder="description" />
             <input type="number" {...register("price")} placeholder="price" />
             <input {...register("img")} placeholder="image url" />
             <input type="submit" />
           </form>
        </div>
    );
};

export default AddService;
import React from 'react';
import notFound from '../images/page404.jpg'

const NotFound = () => {
    return (
        <div  className="text-center sm={1}">
            <h3>This page is error</h3>
            <img className="img-fluid img-thumbnail" src={notFound} alt="" />
        </div>
    );
};

export default NotFound;
import React from 'react';
import notFound from '../images/page404.jpg'

const NotFound = () => {
    return (
        <div  className="text-center">
            <h3>This page is error</h3>
            <img src={notFound} alt="" />
        </div>
    );
};

export default NotFound;
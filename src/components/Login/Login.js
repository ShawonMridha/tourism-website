import React from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
// import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const{signInUsingGoogle} = useAuth();
    return (
        <div>
            <h3>Please Google Login</h3>
            <Button onClick={signInUsingGoogle}>Google Signin</Button>
        </div>
    );
};

export default Login;
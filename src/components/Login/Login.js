import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Login.css'


const Login = () => {
    const{signInUsingGoogle} = useAuth();
    const location = useLocation();
    const redirect_uri=location.state?.form || '/'
    const history=useHistory();
    const handleGoogleSignIn=()=>{
        signInUsingGoogle()
    .then(res=>{
        history.push(redirect_uri)
    })
    }
    return (
        <div className="down mt-5">
            <h3>Please Google Login</h3>
            <Button onClick={handleGoogleSignIn}>Google Signin</Button>
        </div>
    );
};

export default Login;
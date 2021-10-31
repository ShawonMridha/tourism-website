import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const {user,logout}= useAuth();
    return (
        <div>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home">Travel Agency</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end color">
                    <Nav.Link  as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        <Nav.Link as={Link} to="/myorders">My Orders</Nav.Link>
                        <Nav.Link as={Link} to="/manageOrders">Manage All Orders</Nav.Link>
                        <Nav.Link as={Link} to="/newservice">Add a new service</Nav.Link>
                        {user?.email && <button onClick={logout}>log out</button>}
                        <Navbar.Text>
                            Signed in as: <a href="/login">{ <span>{user.displayName}</span>}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;




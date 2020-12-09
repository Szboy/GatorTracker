import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Form, Button } from 'react-bootstrap'

export class MainNav extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <NavLink to="/">
                <Navbar.Brand className="text-primary">Gator Tracker</Navbar.Brand>
                </NavLink>
                <Nav className="mr-auto">
                    <NavLink className="nav-link" to="/about">
                        About
                    </NavLink>
                </Nav>
                <Form inline>
                    <NavLink to="/register">
                        <Button variant="outline-warning button-nav">Register</Button>
                    </NavLink>
                    <Nav.Link disabled>v. 1.2.1</Nav.Link>
                </Form>
            </Navbar>
        );
    }
}
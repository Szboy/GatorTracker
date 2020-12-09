import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Form, Button } from 'react-bootstrap'
import app from '../../package.json';

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
                    <NavLink className="nav-link" to="/forgot">
                        Forgot Link
                    </NavLink>
                </Nav>
                <Form inline>
                    <NavLink to="/register">
                        <Button variant="outline-warning button-nav">Register</Button>
                    </NavLink>
                    <Nav.Link disabled>v. {app.version}</Nav.Link>
                </Form>
            </Navbar>
        );
    }
}
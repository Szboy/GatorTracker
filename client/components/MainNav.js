import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';
import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav, Form, Button} from 'react-bootstrap'
//import {RegisterModal} from './RegisterModal.js';



export class MainNav extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand className="text-primary" href="/">Gator Tracker</Navbar.Brand>
        <Nav className="mr-auto">
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
        </Nav>
        <Form inline>
        <NavLink to="/register">
          <Button variant="outline-warning button-nav">Register</Button>
        </NavLink>  
        <Nav.Link disabled>v. 0.1.1</Nav.Link>
        </Form>
      </Navbar>
    );
  }
}
import React, { Component } from 'react';
import {Navbar, Nav, Form, Button} from 'react-bootstrap'
//import {RegisterModal} from './RegisterModal.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';

export class MainNav extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand className="text-primary" href="/">Gator Tracker</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">About</Nav.Link>
        </Nav>
        <Form inline>
        <Button variant="outline-warning button-nav" onClick={this.changeModal}>Register</Button>
          <Nav.Link disabled>v. 0.1.1</Nav.Link>
        </Form>
      </Navbar>
    );
  }
}
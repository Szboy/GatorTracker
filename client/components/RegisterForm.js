import React, { Component } from 'react';
import { Container, Form, Row, Col, Button, Card } from 'react-bootstrap'
import axios from 'axios';
import querystring from 'querystring'
import { NavLink } from 'react-router-dom';
import geocoder from '../../server/utils/geocoder';


export class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            email: '',
            address: '',
            covidPositive: false,
            contactName: '',
            contactEmail: ''

        }
        //Binding stuff because react is dumb.
        this.sendRegistration = this.sendRegistration.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.addContact = this.addContact.bind(this);
    }

    //Using arrow notation as regular notation would not work properly.
    handleContactChange = i => e => {
        let contacts = this.state.contacts

        if (e.target.id === "contactName-" + i) {
            contacts[i].firstName = e.target.value;
        }

        if (e.target.id === "contactEmail-" + i) {
            contacts[i].email = e.target.value;
        }

        this.setState({
            contacts
        })
    }

    handleTextChange(e) {
        if (e.target.id === "userEmail") {
            this.setState({
                email: e.target.value
            });
        }

        if (e.target.id === "userName") {
            this.setState({
                firstName: e.target.value
            });
        }
        if (e.target.id === "address") {
            this.setState({
                address: e.target.value
            });
        }
    }

    addContact(e) {
        let contact = {
            firstName: '',
            email: '',
        }
        let contacts = this.state.contacts.concat(contact);
        this.setState({
          contacts
        })
      }

    removeContact = i => e => {
        let contacts = this.state.contacts
        contacts.splice(i, 1)
        this.setState({
            contacts
        })
      }

    sendRegistration(e) {
        const loc = geocoder.geocode(this.state.address);
        console.log(loc[0].longitude);
        axios.post('/api/register',
            querystring.stringify({
                firstName: this.state.firstName,
                email: this.state.email,
                address: this.state.address,
                covidPositive: this.state.covidPositive,
                contactName: this.state.contactName,
                contactEmail: this.state.contactEmail,
            }))
        }

    render() {
        return (
            <Container>
            <h3>Register New User</h3>
            <Form id="register" onSubmit={this.sendRegistration}>
            <Card className="p-3">
                <Card.Title>
                    Personal Information
                </Card.Title>
                <Card.Subtitle>If you are a new user, please input your information below to get started.</Card.Subtitle>
                    <Form.Group>
                        <Form.Label>First Name<span className="text-danger">*</span></Form.Label>
                        <Form.Control value={this.state.firstName} id="userName" onChange={this.handleTextChange} type="text" placeholder="Enter First Name" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>UFL Email<span className="text-danger">*</span></Form.Label>
                        <Form.Control id="userEmail" value={this.state.email} onChange={this.handleTextChange} type="email" placeholder="Add UFL Email" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Address<span className="text-danger">*</span></Form.Label>
                        <Form.Control id="address" value={this.state.address} onChange={this.handleTextChange} type="text" placeholder="Add Address" />
                    </Form.Group>
                </Card>
                <br />
                <Card className="p-3">
                    <Row>
                        <Col>
                            <Card.Title>Contact Information</Card.Title>
                            <Card.Subtitle style={{width: "165%"}}>If you tested positive, please list the people below for who you were in contact with. If you need to find a specific UFL email, please look up their name in the directory <a href="https://directory.ufl.edu/">here</a>.</Card.Subtitle>
                        </Col>
                        <Col>
                            <Button className="float-right" variant="outline-success" onClick={this.addContact}>Add Contact</Button>
                        </Col>
                    </Row>
                    <hr/>
                    <Container>
                    {this.state.contacts.map((contact, i) => (
                        <Card className="mt-3" style={{width: "75%"}} key={i}>
                            <Form.Group>
                            <Card.Header>
                            <span>New Contact: {contact.firstName}</span>
                            {/*Graphical weirdness happens when using a Button component for the close icon button so we are using the normal html button attribute*/}
                            <button type="button" onClick={this.removeContact(i)} className="close" aria-label="Close"><span aria-hidden="true">&times;</span></button> 
                            </Card.Header>
                                <Card.Body>
                                    <Form.Label>Contact's First Name</Form.Label>
                                    <Form.Control id={"contactName-" + i} onChange={this.handleContactChange(i)} value={contact.firstName} type="text" placeholder="Enter Contact's First Name" />
                                    <Form.Label>Contact's UFL Email</Form.Label>
                                    <Form.Control id={"contactEmail-" + i} onChange={this.handleContactChange(i)} value={contact.email}  type="email" placeholder="Add Contact's UFL Email" />
                                </Card.Body>
                            </Form.Group>
                        </Card>
                    ))}
                    </Container>
                    </Card>
                    <hr />
                        <Button variant="outline-primary" type="submit">
                            Submit
                        </Button>
                </Form>
            </Container>
        )
    }
};
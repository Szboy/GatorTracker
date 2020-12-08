import React, { Component } from 'react';
import { Container, Form, Row, Col, Button, Card, Alert } from 'react-bootstrap'
import axios from 'axios';

let submitted = false;
let invalidSubmission = true;

export class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            email: '',
            address: '',
            contacts: [],
            errorMessages: []
        }
        //Binding stuff because react is dumb.
        this.sendRegistration = this.sendRegistration.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.addContact = this.addContact.bind(this);
        this.validateInput = this.validateInput.bind(this);
        this.alertDismissable = this.alertDismissable.bind(this);
    }

    //Using arrow notation as regular notation would not work properly.
    handleContactChange = i => e => {
        let contacts = this.state.contacts

        if (e.target.id === "contactName-" + i) {
            contacts[i].firstName = e.target.value;
        }

        if (e.target.id === "contactEmail-" + i) {
            contacts[i].email = e.target.value;
        };

        this.setState({
            contacts
        });
    }

    handleTextChange(e) {
        submitted = false;
        invalidSubmission = true;
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

        if (e.target.id === "longitude") {
            this.setState({
                longitude: e.target.value
            });
        }

        if (e.target.id === "latitude") {
            this.setState({
                latitude: e.target.value
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

    resetForm = () => {
        this.setState({
            firstName: '',
            email: '',
            address: '',
            contacts: [],
            errorMessages: []
        });
    }


    validateInput(e) {
        submitted = true;
        let errorMessages = [];
        for (let i = 0; i < this.state.contacts.length; i++) {
            if (!this.state.contacts[i].email.match("[A-Za-z0-9._-]+@ufl.edu")) {
                errorMessages.push("Contact " + this.state.contacts[i].firstName + ": Email does not  follow ufl format (sample@ufl.edu)!")
            }

            if (this.state.contacts[i].firstName.length === 0) {
                errorMessages.push("New Contact: Contact name not given!");
            }
        }

        if (this.state.firstName.length === 0) {
            errorMessages.push("User: Contact name not given!");
        } else if (!this.state.email.match("[A-Za-z0-9._-]+@ufl.edu")) {
            errorMessages.push("User: Email does not  follow ufl format (sample@ufl.edu)!");
        } else if (errorMessages.length === 0){
            invalidSubmission = false;
            this.sendRegistration();
        }

        this.setState({ errorMessages });
    }

    alertDismissable(e) { 
        if (invalidSubmission === true && submitted === true) {
            window.scrollTo(0, 0);
            return (
                <Alert variant="danger">
                    <Alert.Heading>Error when submitting form!</Alert.Heading>
                    {this.state.errorMessages.map((errorMessage) => (
                        <li>
                            {errorMessage}
                        </li>))}
                </Alert>
            );
        } else if (invalidSubmission === false && submitted === true) {
            window.scrollTo(0, 0);
            return (
                <Alert variant="success" data-dismiss="alert">
                    <Alert.Heading>Success!</Alert.Heading>
                    <p>
                        Your survey has been successfully recorded and are now
                        registered in the database! You should be receiving an email
                        from us shortly.
                </p>
                </Alert>
            )
        } else {
            return null
        }
    }

    sendRegistration(e) {
        //can't utilize state in post request since this binds too the get request.
        let registerPayload = {
            firstName: this.state.firstName,
            email: this.state.email,
            contacts: this.state.contacts,
            longitude: '',
            latitude: ''
        }
        
        axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
            params: {
                address: this.state.address,
                key: 'AIzaSyB5eyGVQrjug2rhMnXHDpwdrsdSESUN9Z4'
            }

        }).then(res => {
            //add geocode response for lat and long.
            registerPayload.latitude = res.data.results[0].geometry.location.lat;
            registerPayload.longitude = res.data.results[0].geometry.location.lng;

            axios.post('/api/register', registerPayload).then(() => {
                window.location.reload();
            });
        })
    }
    render() {
        return (
            <Container>
                <this.alertDismissable />
                <h3>Register New User</h3>
                <Form id="register" >
                    <Card className="p-3">
                        <Card.Title>
                            Personal Information
                        </Card.Title>
                        <Card.Subtitle>If you are a new user, please input your information below to get started.</Card.Subtitle>
                        <hr />
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
                            <Form.Control id="address" value={this.state.address} onChange={this.handleTextChange} type="text" placeholder="Enter your address" />
                        </Form.Group>
                    </Card>
                    <br />
                    <Card className="p-3">
                        <Row>
                            <Col>
                                <Card.Title>Contact Information</Card.Title>
                                <Card.Subtitle style={{ width: "165%" }}>If you tested positive, please list the people below for who you were in contact with. If you need to find a specific UFL email, please look up their name in the directory <a href="https://directory.ufl.edu/">here</a>.</Card.Subtitle>
                            </Col>
                            <Col>
                                <Button className="float-right" variant="outline-success" onClick={this.addContact}>Add Contact</Button>
                            </Col>
                        </Row>
                        <hr />
                        <Container>
                            {this.state.contacts.map((contact, i) => (
                                <Card className="mt-3" style={{ width: "75%" }} key={i}>
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
                                            <Form.Control id={"contactEmail-" + i} onChange={this.handleContactChange(i)} value={contact.email} type="email" placeholder="Add Contact's UFL Email" />
                                        </Card.Body>
                                    </Form.Group>
                                </Card>
                            ))}
                        </Container>
                    </Card>
                    <hr />
                    <Button variant="outline-primary" type="button" onClick={(e) => {
                        this.validateInput();
                        if (!invalidSubmission) {
                            this.resetForm();
                        }
                    }}>
                        Submit
                    </Button>
                </Form>
            </Container>
        )
    }
};
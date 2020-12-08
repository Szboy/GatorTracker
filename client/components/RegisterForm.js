import React, { Component} from 'react';
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
            longitude: '',
            latitude: '',
            contacts: [],
            isValid: false
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
        }
 
        this.setState({
            contacts
        })
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
                longitude: '',
                latitude: '',
                contacts: [],
                isValid: false
        });
 
 
        console.log("reset called");
 
 
 
    }
 
 
    validateInput(e) {
        submitted = true;
        var validContacts = true;
 
        for (var i = 0; i < this.state.contacts.length; i++) {
            if (this.state.contacts[i].firstName.length === 0 || !this.state.contacts[i].email.match("[A-Za-z0-9._-]+@ufl.edu"))
            {
                validContacts = false;
                break;
            }
        }
            if (this.state.firstName.length === 0 || !this.state.email.match("[A-Za-z0-9._-]+@ufl.edu") 
                || this.state.latitude.length === 0 || this.state.longitude.length === 0 
                || !validContacts)
            {
                invalidSubmission = true;
 
            }
            else
            {
                invalidSubmission = false;
                this.sendRegistration();
            }
 
            this.setState({isValid: !invalidSubmission});

    }
 
    alertDismissable(e) { //change which alert to show upon submission
    
        if (invalidSubmission === true && submitted === true) { //if form submitted is not valid 
            window.scrollTo(0, 0)
            return (
              <Alert variant="danger">
                <Alert.Heading>Uh oh!</Alert.Heading>
                <p>
                    Form cannot be submitted due to unfulfilled requirements.
                </p>
              </Alert>
            );
 
        }
 
        else if (invalidSubmission === false && submitted === true) {
            window.scrollTo(0, 0)
            return (
                <Alert variant="success" data-dismiss="alert">
                <Alert.Heading>Success!</Alert.Heading>
                <p>
                    Your survey has been successfully recorded and are now
                    registered in the database! You should be receiving an email
                    from us shortly. 
                </p>
                </Alert>
            );       
        }
        else {
            return null
        }
    }
 
    sendRegistration(e) {
 
        axios.post('/api/register', {
                firstName: this.state.firstName,
                email: this.state.email,
                contacts: this.state.contacts,
                longitude: this.state.longitude,
                latitude: this.state.latitude
            }
        )
 
    }
 
    render() {
        return (
            <Container>
            <this.alertDismissable />
            <h3>Register New User</h3>
            <Form id="register" onSubmit={
                                (e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                this.validateInput();
                                if(!invalidSubmission) {this.resetForm();}
 
                            }}>
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
                        <Form.Label>Longitude<span className="text-danger">*</span></Form.Label>
                        <Form.Control id="longitude" value={this.state.longitude} onChange={this.handleTextChange} type="number" placeholder="Enter your longitude" />
                    </Form.Group>
 
                    <Form.Group>
                        <Form.Label>Latitude<span className="text-danger">*</span></Form.Label>
                        <Form.Control id="latitude" value={this.state.latitude} onChange={this.handleTextChange} type="number" placeholder="Enter your latitude" />
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
                        <Button variant="outline-primary" type="success">
                            Submit
                        </Button>
                </Form>
            </Container>
        )
    }
}
import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap'
import axios from 'axios';
import querystring from 'querystring'

export class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            email: '',
            covidPositive: false,
            contactName: '',
            contactEmail: ''

        }
        //Binding stuff because react is dumb.
        this.sendRegistration = this.sendRegistration.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }
    handleCheckboxChange(e) {
        if (e.target.id === "covidPositive") {
            this.setState({
                covidPositive: e.target.checked
            });
        }
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
        if (e.target.id === "contactName") {
            this.setState({
                contactName: e.target.value
            });
        }
        if (e.target.id === "contactEmail") {
            this.setState({
                contactEmail: e.target.value
            });
        }
    }

    sendRegistration(e) {
        axios.post('/api/register',
            querystring.stringify({
                firstName: this.state.firstName,
                email: this.state.email,
                covidPositive: this.state.covidPositive,
                contactName: this.state.contactName,
                contactEmail: this.state.contactEmail
            })
        )

    }

    render() {
        return (
            <Container>
                <Form id="register" onSubmit={this.sendRegistration}>
                    <Form.Group>
                        <Form.Label>First Name<span className="text-danger">*</span></Form.Label>
                        <Form.Control value={this.state.firstName} id="userName" onChange={this.handleTextChange} type="text" placeholder="Enter First Name" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>UFL Email<span className="text-danger">*</span></Form.Label>
                        <Form.Control id="userEmail" value={this.state.email} onChange={this.handleTextChange} type="email" placeholder="Add UFL Email" />
                    </Form.Group>
                    <Form.Group >
                        <Form.Check id="covidPositive" onChange={this.handleCheckboxChange} type="checkbox" label="Have you tested positive for COVID-19?"></Form.Check>
                    </Form.Group>
                    <hr />
                    <h6>If you tested positive, please list the people below for who you were in contact with.</h6>
                    <Form.Group>
                        <Form.Label>Contact's First Name</Form.Label>
                        <Form.Control id="contactName" value={this.state.contactName} onChange={this.handleTextChange} type="text" placeholder="Enter Contact's First Name" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Contact's UFL Email</Form.Label>
                        <Form.Control id="contactEmail" value={this.state.contactEmail} onChange={this.handleTextChange} type="email" placeholder="Add Contact's UFL Email" />
                    </Form.Group>
                    <hr />
                    <Button variant="outline-primary" type="submit" action="/">
                        Submit
                </Button>
                </Form>
            </Container>
        )
    }
}
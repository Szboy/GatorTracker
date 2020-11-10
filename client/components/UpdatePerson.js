import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap'
import axios from 'axios';
import querystring from 'querystring'

export class UpdatePerson extends Component {
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
    handleCheckboxChange (e) {
        if (e.target.id === "covidPositive") {
            this.setState({
                covidPositive: e.target.checked
            });
        }
    }    
    handleTextChange (e) {
        
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

    sendRegistration (e) {
        console.log(this.state)
        // e.preventDefault(e);
       axios.post('/register', 
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
            <h4 className="display-4 text-center">Welcome Back!</h4>
            <hr/>
            <p className="lead">You identified yourself as COVID on </p>
            <Form>
                <Form.Group >
                    <Form.Check id="covidPositive" onChange={this.handleCheckboxChange} type="checkbox" label="Update Covid Status"></Form.Check>
                </Form.Group>
                <hr/>
                <Button variant="outline-primary" type="submit" action="/">Submit</Button>
            </Form>
            </Container>
        )
    }
}
import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class ForgotLink extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }
        //Binding stuff because react is dumb.
        this.handleTextChange = this.handleTextChange.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
    }

    handleTextChange(e) {
        if (e.target.id === "email") {
            this.setState({
                email: e.target.value
            })
        }
    }

    updateEmail(e) {
        let history = this.props.history;

        axios.post('/api/forgotLink', {
            email: this.state.email
        }).then(history.push('/'));
    }

    render() {
        return (
            <Container>
                <h4 className="display-4 text-center">Forgot Update Link Wizard</h4>
                <p className="lead">If you forgot or misplaced your unique COVID-19 status update link please enter your UFL email address below and we will send you an email containing it!</p>
                <hr />
                <Form inline>
                    <Form.Group>
                        <Form.Label className="my-1 mr-2">UFL Email Address</Form.Label>
                        <Form.Control onChange={this.handleTextChange} placehplder="Enter UFL Email" id="email" class="pl-3 mr-sm-2" type="text" size="sm" />
                    </Form.Group>
                    <hr />
                    <Button variant="outline-primary" onClick={this.updateEmail}>Update</Button>
                </Form>
            </Container>
        )
    }
}

export default withRouter(ForgotLink);
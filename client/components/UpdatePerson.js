import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap'
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import querystring from 'querystring'

class UpdatePerson extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            firstName: '',
            date: '',
            covidPositiveString: '',
            covidPositive: null

        }
        //Binding stuff because react is dumb.
        this.handleTextChange = this.handleTextChange.bind(this);
        this.updatePerson = this.updatePerson.bind(this);
    }

    handleTextChange(e) {
        if (e.target.id === "covidPositive") {
            if (e.target.value === "Positive") {
                this.setState({
                    covidPositive: true
                });
            } else if (e.target.value === "Negative") {
                this.setState({
                    covidPositive: false
                });
            }
        }
    }

    updatePerson(e) {
        axios.post('/api/update/' + this.props.match.params.id, {
                covidPositive: this.state.covidPositive
            })
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    componentDidMount() {
        let dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };

        let history = this.props.history;

        axios.get('/api/' + this.props.match.params.id).then((response) => {
            let testDate = response.data.testDate;
            let formatDate = new Date(testDate).toLocaleDateString("en-US", dateOptions)
            let covidPositiveString = response.data.covidPositive ?  'Positive' : 'Negative';
            this.setState({firstName: response.data.firstName, covidPositive: response.data.covidPositive, date: formatDate, covidPositiveString: covidPositiveString})
          }).catch (error => {
            if (error.response.status === 404) {
                history.push('/');
            }
        });
    }

    render() {
        return (
            <Container>
                <h4 className="display-4 text-center">Welcome Back {this.state.firstName}!</h4>
                <p className="lead text-center">You identified yourself as COVID <b style={{textTransform: "lowercase"}}>{this.state.covidPositiveString}</b> on <b>{this.state.date}</b></p>
                <hr />
                <Form inline>
                    <Form.Group>
                        <Form.Label className="my-1 mr-2">Update Covid Status:</Form.Label>
                        <Form.Control onChange={this.handleTextChange} id="covidPositive" class="pl-3 mr-sm-2" as="select" size="sm">
                            <option value="Positive">Positive</option>
                            <option value="Negative">Negative</option>
                        </Form.Control>
                    </Form.Group>
                    <hr />
                    <Button variant="outline-primary" action="/" type="submit" onClick={this.updatePerson}>Update</Button>
                </Form>
            </Container>
        )
    }
}
export default withRouter(UpdatePerson);
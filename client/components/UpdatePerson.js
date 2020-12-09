import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap'
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class UpdatePerson extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            firstName: '',
            date: '',
            covidPositive: null

        }
        
        //Binding stuff because react is dumb.
        this.updatePerson = this.updatePerson.bind(this);
    }

    updatePerson(e) {
        axios.post('/api/update/' + this.props.match.params.id, {
                covidPositive: !this.state.covidPositive
            })
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    componentDidMount() {
        let dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };

        let history = this.props.history;

        axios.get('/api/' + this.props.match.params.id).then(response => {
            let testDate = response.data.testDate;
            let formatDate = new Date(testDate).toLocaleDateString("en-US", dateOptions)
            this.setState({firstName: response.data.firstName, covidPositive: response.data.covidPositive, date: formatDate})
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
                <p className="lead text-center">You identified yourself as COVID <b>{this.state.covidPositive ? 'positive' : 'negative'}</b> on <b>{this.state.date}</b></p>
                <hr />
                    <Form>
                        <Button className="mx-auto d-block" variant="outline-primary" onClick={this.updatePerson} id="covidPositive" type="submit">
                            Update COVID-19 status to {this.state.covidPositive ? 'negative' : 'positive'}
                        </Button>
                    </Form>
            </Container>
        )
    }
}
export default withRouter(UpdatePerson);
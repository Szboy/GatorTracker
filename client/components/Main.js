import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Col, Row, ResponsiveEmbed, Jumbotron } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';

export class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            totalCases: 0,
            totalPositives: 0,
            totalNegatives: 0,
            totalContacts: 0
        }
    }
    componentDidMount() {
        axios.get('/api/statistics').then(res => {
            this.setState(res.data);
        })
    }
    render() {
        return (
            <Container>
                <Jumbotron>
                    <h1 className="display-4">Welcome to the Gator Tracker!</h1>
                    <p className="lead">The COVID-19 contact tracing app for the Gator Nation.</p>
                    <Link to="/register">
                        <Button className="float-right" variant="primary">Register New COVID Case</Button>
                    </Link>
                </Jumbotron>
                <Row className="justify-content-center">
                    <Col className="mainStatistic">
                        <h5 className="text-center">Total Cases</h5>
                        <h3 className="text-center">{this.state.totalCases}</h3>
                    </Col>
                    <Col className="mainStatistic">
                        <h5 className="text-center">Total Positives</h5>
                        <h3 className="text-center">{this.state.totalPositives}</h3>
                    </Col>
                    <Col className="mainStatistic">
                        <h5 className="text-center">Total Negatives</h5>
                        <h3 className="text-center">{this.state.totalNegatives}</h3>
                    </Col>
                    <Col className="mainStatistic">
                        <h5 className="text-center">Total Contacts</h5>
                        <h3 className="text-center">{this.state.totalContacts}</h3>
                    </Col>
                </Row>
                <hr/>
                <br/>
                <h5>Positive Case Heat Map</h5>
                    <ResponsiveEmbed aspectRatio="16by9">
                        <embed className="embed-responsive-item" title="Heatmap" alt="../assets/mapPlaceholder.png" src="https://charts.mongodb.com/charts-gatortrackers2-epkeb/embed/charts?id=d4b6aa2d-2f0a-48b4-a387-60a6b65e2903&autoRefresh=10&theme=light" />
                    </ResponsiveEmbed>
            </Container>
        );
    }
}
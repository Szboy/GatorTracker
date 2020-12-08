import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Col, Row, Jumbotron } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';

export class Main extends Component {
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
                        <h3 className="text-center">0</h3>
                    </Col>
                    <Col className="mainStatistic">
                        <h5 className="text-center">Total Contacts</h5>
                        <h3 className="text-center">0</h3>
                    </Col>
                    <Col className="mainStatistic">
                        <h5 className="text-center">Total Positives</h5>
                        <h3 className="text-center">0</h3>
                    </Col>
                    <Col className="mainStatistic">
                        <h5 className="text-center">Total Negatives</h5>
                        <h3 className="text-center">0</h3>
                    </Col>
                </Row>
                <hr/>
                <br/>
                <h5>Positive Case Heat Map</h5>
                <iframe title="Heatmap" styles="background: #FFFFFF;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);" width="1080" height="720" src="https://charts.mongodb.com/charts-project-0-pmwni/embed/charts?id=57f65d96-ea7f-48db-81fb-b25f37fbbf4e&theme=light"></iframe>
            </Container>
        );
    }
}
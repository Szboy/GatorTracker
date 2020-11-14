import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { About } from './components/About';
import { RegisterForm } from './components/RegisterForm';
import { Main } from './components/Main';
import { MainNav } from './components/MainNav';
import { RegisterSuccess } from './components/RegisterSuccess';
import UpdatePerson from './components/UpdatePerson';
ReactDOM.render(
    <Router>
        <Container>
            <MainNav />
            <br />
            <Switch>
                <Route path="/register"><RegisterForm /></Route>
                <Route path="/success"><RegisterSuccess /></Route>
                <Route path="/about"><About /></Route>
                <Route path="/:id"><UpdatePerson /></Route>
                <Route path ="/"><Main /></Route>
            </Switch>

        </Container>
    </Router>,
    document.getElementById('root')
);
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import {MainNav} from './components/MainNav';
import {RegisterForm} from './components/RegisterForm';
import {About} from './components/About';
import {UpdatePerson} from './components/UpdatePerson';

ReactDOM.render(
  <Router>
  <Container>
  <MainNav />
  <br/>
  <Switch>
    <Route path="/register"><RegisterForm /></Route>
    <Route path="/about"><About /></Route>
    <Route path="/:id"><UpdatePerson /></Route>
  </Switch>

  </Container>
  </Router>,
  document.getElementById('root')
);
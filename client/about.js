import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import {MainNav} from './components/MainNav';
import {AboutUs } from './components/AboutUs';

ReactDOM.render(
    <Container>
    <MainNav />
    <br/>
    <AboutUs />
    </Container>,
    document.getElementById('root')
  );
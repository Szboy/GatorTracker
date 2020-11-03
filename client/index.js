
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import {MainNav} from './components/MainNav';
import { RegisterForm } from './components/RegisterForm';
import {AboutUs } from './components/AboutUs';

ReactDOM.render(
  <Container>
  <MainNav />
  <br/>
  <RegisterForm />
  </Container>,
  document.getElementById('root')
);


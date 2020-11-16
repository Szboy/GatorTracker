import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import querystring from 'querystring';
import { RegisterForm } from './RegisterForm';
import '../css/App.css';

export class RegisterSuccess extends Component 
{

    render()
    {
        return (
            <div>
                <h1 className="display-4">Success!</h1>
                    <p className="pl-4">
                        Your survey has been successfully recorded and are now
                        registered in the database! You should be receiving an email
                        from us shortly. 
                    </p>
            </div>
        );
    }
}
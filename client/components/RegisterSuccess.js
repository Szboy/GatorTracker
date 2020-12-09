import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';

export class RegisterSuccess extends Component {
    render() {
        return (
            <div>
                <h1 className="display-4">Thank you for registering with Gator Tracker!</h1>
                <hr />
                    <p className="pl-4">
                        We are sorry you are not feeling well, you are now registered in our database and should be getting an email from us shortly (make sure to check your spam!) with an unique link you can use to update your status when you test negative. We have also sent emails to all your contacts and did not send any information about you to them.  
                    </p>
                    <p className="pl-4">
                        You can now either close this page safely or enjoy this picture of a adorable gator we found on the web!
                    </p>
                    <Image className="mx-auto d-block " src="../assets/adorableGator.jpg" thumbnail />
            </div>
        );
    }
}
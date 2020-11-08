import React, { Component } from 'react';
import {Modal, Button} from 'react-bootstrap'
import '../css/App.css';

export class AboutUs extends Component {
    render() {
        return (
            <div>
                <h1 style="text-align:center">About Us</h1>
                <p>
                Hello, welcome to our website. Thank you for using GatorTrackers as a resource for keeping up to date with the COVID-19 virus in 
                the Gainesville, FL area. The team is comprised of five computer science/engineering students that want to make an impact at our 
                university. We encourage everyone to practice CDC Regulations and Guidelines regarding the COVID-19 pandemic and regularly practice 
                social distancing.

                Note that this is not an official website meant to give an accurate depiction of the spread of the virus around campus, but rather, 
                an estimation of how the virus has spread in specific areas.
                </p>

                <h1 style="text-align:center">How to Use this App (update later if needed)</h1>
                <p>
                The home page of this website will display a heat map of all cases reported to the Gator GatorTracker.
                <br />
                First-time Users:
                <br />
                To add yourself to the database, click on the 'Add User' button located in the top navigation panel.
                You will be directed to a form where you can input your information including your name, email, your COVID test status, as well
                as emails of those you have come into contact with. These individuals will be sent an email being notified that they have come
                into contact with someone who may be positive for COVID. Don't worry, it will be completely anonymous! From there, they will
                be asked to add themselves to the database.
                <br />
                Returning Users:
                <br />
                To update your information at a later time, locate the email sent to you and click the unique link. You will then be navigated
                to a form where you can update your COVID Status.

                </p>

                <h1 style="text-align:center">UF Testing Centers and Resources</h1>
                <p>
                The University of Florida offers extensive resources to combat the virus, you can visit their dedicated webpage to
                learn more about the symptoms and treatment, as well as schedule a test <a href="https://coronavirus.ufhealth.org/">here</a>.
                </p>

                <h1 style= "text-align:center">Data Privacy and HIPAA Information</h1>
                <p>
                The HIPAA Laws are a series of laws and regulations protecting users' medical data, referred to as protected health information or
                PHI.  To ensure compliance with all HIPAA laws and regulations and to protect the data of our users, no identifying data pertaining
                to your diagnosis will be shared.  This includes, but is not limited to any names, emails, addresses or other personal information
                you provide to this site.  The email address you provide will be used only for the purposes of authentification.
                </p>
        </div>
        );
    }
}
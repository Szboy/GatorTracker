import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';


export class About extends Component {
    render() {
        return (
            <div>
                <h1 className="display-4">About Us</h1>
                <p className="pl-4">
                <p className="lead">Hello, welcome to the GatorTracker App.</p>
                Thank you for using GatorTracker as a resource for keeping up to date with the COVID-19 virus in 
                the Gainesville, FL area. The team is comprised of five computer science/engineering students that want to make an impact at our 
                university. We encourage everyone to practice CDC Regulations and Guidelines regarding the COVID-19 pandemic and regularly practice 
                social distancing.
                <br />
                </p>
                <br />
                <h4 className="display-4">How to Use this App</h4>
                <h5>First-time Users:</h5>
                <p className="pl-4">
                <p className="lead">To add yourself to the database, click on the 'Register' button located in the top navigation panel.</p>
                You will be directed to a form where you can input your information including your name, email, date you were tested, as well
                as the first names and emails of those you have come into contact with. In addition, if you want to disclose your current location for the Heatmap, please feel
                free to enter your address into the form. This is completely optional!
                <br />
                The individuals that were referenced in the form will be sent a separate email being notified that they have come
                into contact with someone who may be positive for COVID. Don't worry, your name will never be shared with others. Contact emails are completely anonymous! From there, they will
                be asked to add themselves to the database.
                </p>
                <br />
                <h5>Returning Users:</h5>
                <p className="pl-4">
                <p className="lead">To update your information at a later time, locate the email sent to you and click the unique link </p>
                You will then be navigated to a form where you can update your COVID Status. In the case that you have lost or forgotten this unique link,
                do not worry! Just click the 'Forgot Link' in the top navigation panel, enter your UFL email, and an email will be sent to you with the correct link!
                </p>
                <br />
                <h1 className="display-4">UF Testing Centers and Resources</h1>
                <p className="pl-4">
                The University of Florida offers extensive resources to combat the virus, you can visit their dedicated webpage to
                learn more about the symptoms and treatment, as well as schedule a test <a href="https://coronavirus.ufl.edu/resources/" rel="noopener noreferrer" target="_blank">here</a>.
                </p>
                <br />
                <h1 className="display-4">Data Privacy and HIPAA Information</h1>
                <p className="pl-4">
                The HIPAA Laws are a series of laws and regulations protecting users' medical data, referred to as protected health information or
                PHI. To ensure compliance with all HIPAA laws and regulations and to protect the data of our users, no identifying data pertaining
                to your diagnosis will be shared.  This includes, but is not limited to, any names, emails, addresses or other personal information
                you provide to this site.  The email address you provide will be used only for the purposes of authentification.
                </p>
                <br />
                <h1 className="display-4">Made with <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-heart-fill text-danger" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/></svg> by </h1>
                <p className="lead pl-4">
                    <b>David Hutchins</b>: Project Manager
                    <br/>
                    <b>Shawn Zimmer</b>: SCRUM Master/Development Lead
                    <br/>
                    <b>Branden Evangelista</b>: Development Team Member
                    <br/>
                    <b>Matthew Flippen</b>: Development Team Member
                    <br/>
                    <b>Noah Yehuda</b>: Development Team Member
                </p>
                <br />
                <br />
        </div>
        );
    }
}
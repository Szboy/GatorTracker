import Person from '../models/person.js'
import config from '../../config.json';
import nodeMailer from 'nodemailer';
import mongoose from 'mongoose';

export const getPerson = (req, res) => {
    Person.findOne({_id: req.params.id}, function (data, err) {
        if (err) {
            res.send(err);
        } else if (!data.length) {
           return res.status(404).send('User not found.')
        } else {
            res.send(data);
        }
    })
}

export const registerPerson = async (req, res) => {
    let personID = new mongoose.mongo.ObjectId(); //Creating mongoID outside the create function to use it in the email.
    let longLat = [req.body.longitude, req.body.latitude];
    Person.create({_id: personID, 
        firstName: req.body.firstName, 
        email: req.body.email,
        address: req.body.address, 
        covidPositive: req.body.covidPositive, 
        contacts: [{ firstName: req.body.contactName, email: req.body.contactEmail }], 
        location: {type: 'Point', coordinates: longLat}}, function (err) {
        if (err) {
            res.send(err);
        } else {
            res.send('User successfully added!');
        }
    })

    // Password should really be stored more secure, will do later.
    let transporter = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
          user: config.emailUser,
          pass: config.emailPass
        }
      }); 

    let registerEmail = await transporter.sendMail({
        from: '"Gator Tracker" <gatortrackers@gmail.com>',
        to: req.body.email, 
        subject: "[Gator Tracker] User Registration Confirmation",
        text: "Hi " + req.body.firstName + ", Thank you for registering with the Gator Tracker App. We are sorry to hear that you are not feeling well and we hope you are back to 100 percent very soon. Emails have been sent out to your given contacts alerting them that they might have been in contact with someone who tested positive. In the meantime, here is a link that you can use to find resources on COVID-19 as it pertains to the University: https://coronavirus.ufl.edu/resources/ Once you feel better and have tested negative, or would like to update your testing status at anytime, please go to your unique link which can be found here: http://localhost:8000/" + personID + "Once again, all your information is kept protected and we never give out any identifying information to others, even first names. If you have any questions please don't hesitate to email us back at this email. Best, The Gator Tracker Team", // text body 
        html: "<p>Hi " + req.body.firstName + ", <br/> <p>Thank you for registering with the <i>Gator Tracker App</i>.</p> We are sorry to hear that you are not feeling well and we hope you are back to 100 percent very soon. Emails have been sent out to your given contacts alerting them that they might have been in contact with someone who tested positive. </p><p>In the meantime, here is a link that you can use to find resources on COVID-19 as it pertains to the University: https://coronavirus.ufl.edu/resources/</p> <p>Once you feel better and have tested negative, or would like to update your testing status at anytime, please go to your <b>unique link</b> which can be found here: http://localhost:8000/" + personID + "</p><p> Once again, all your information is kept protected and we never give out any identifying information to others, even first names.</p><p>If you have any questions please don't hesitate to email us back at this email.</p> <br/> <p>Best,</p> <b>The Gator Tracker Team</b>", // html body
        
      });
      console.log("Message sent: %s", registerEmail.messageId);

};

export const updatePerson = (req, res) => {
    Person.findOneAndUpdate({_id: req.params.id}, {covidPositive: req.body.covidPositive, testDate: new Date()}, function (err) {
        if (err) {
            res.send(err);
        } else {
            res.send('User successfully updated!')
        }
    })
};
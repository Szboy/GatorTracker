import Person from '../models/person';
import * as Mailer from './mailer'

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
};

export const registerPerson = async (req, res) => {
    let longLat = [req.body.longitude, req.body.latitude];
    await new Person({ 
        firstName: req.body.firstName, 
        email: req.body.email,
        contacts: req.body.contacts, 
        location: {type: 'Point', coordinates: longLat},
    }).save(function (err, doc) {
        if (err) {
            res.send(err);
        } else {
            Mailer.userMailer(doc);
            Mailer.contactMailer(doc.contacts);
        }
    })
};

export const updatePerson = async (req, res) => {
    Person.findOneAndUpdate({_id: req.params.id}, {covidPositive: req.body.covidPositive, testDate: new Date()}, function (err) {
        if (err) {
            res.send(err);
        } else {
            res.send('User successfully updated!');
        }
    })
};

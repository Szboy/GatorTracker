import Person from '../models/person.js'
import bodyParser from 'body-parser'


export const registerPerson = async (req, res) => {
    Person.create({firstName: req.body.firstName, email: req.body.email, covidPositive: req.body.covidPositive, contacts: [{firstName: req.body.contactName, email: req.body.contactEmail}]}, function (err) {
        if (err) {
            res.send(err);
        } else {
            res.send('Expense successfully added!');
        }
    })
};
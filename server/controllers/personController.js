import Person from '../models/person';
import * as Mailer from './mailer';

export const getPerson = async (req, res) => {
    return await Person.findOne({ _id: req.params.id }).then((data) => {
        res.send(data);
    }).catch(() => {
        res.status(404).send()
    })
};

export const registerPerson = async (req, res) => {
    let testDate = req.body.testDate ? new Date(req.body.testDate).setUTCHours(12) : new Date(); //Mongo can case any date format but we need to add 12 hours due to timezone purposes.

    if (req.body.longitude) { //Giving location is option so we need to deal with that.
        let longLat = [req.body.longitude, req.body.latitude];

        return await new Person({
            firstName: req.body.firstName,
            email: req.body.email,
            testDate: testDate,
            contacts: req.body.contacts,
            location: { type: 'Point', coordinates: longLat },
        }).save().then((doc) => {
            res.status(200).send()
            Mailer.userMailer(doc);
            Mailer.contactMailer(doc.contacts);
        });
    } else {
        return await new Person({
            firstName: req.body.firstName,
            email: req.body.email,
            testDate: testDate,
            contacts: req.body.contacts,
        }).save().then((doc) => {
            res.status(200).send()
            Mailer.userMailer(doc);
            Mailer.contactMailer(doc.contacts);
        })
    }
};

export const updatePerson = async (req, res) => {
    Person.findOneAndUpdate({ _id: req.params.id }, { covidPositive: req.body.covidPositive, testDate: new Date() }, function (err) {

        if (err) {
            res.send(err);
        } else {
            res.send('User successfully updated!');
        }
    })
};

export const getStatistics = async (req, res) => {
    //Set up a aggregate query for the amount of contacts. 
    let totalContacts = await Person.aggregate([
        { $project: { contacts: 1 } }, //Selects field we want to target. 
        { $unwind: '$contacts' }, //Converts arrays into unique documents so we can count
        { $group: { //group by firstName
              _id: '$contacts', //We use each contact's id as the id
              count: { $sum: 1 } //Adds to the count.
          }
        }
    ]);

    let data = {
        totalCases: await Person.countDocuments(),
        totalPositives: await Person.countDocuments({covidPositive: true}),
        totalNegatives: await Person.countDocuments({covidPositive: false}),
        totalContacts: totalContacts.length
    }
    
   res.send(data);
}

export const getLink = async (req, res) => {
    return await Person.findOne({email: req.body.email}).exec().then((doc) => {
        Mailer.linkMailer(doc)
    })
}
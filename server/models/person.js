import mongoose from 'mongoose';

const Contact = new mongoose.Schema({
    contactName: {
        type: String, 
        required: true
    },
    contactEmail: {
        type: String, 
        required: true
    }
})

const Person = new mongoose.Schema({
    firstName: {
        type: String, 
        required: true
    },
    email: {
        type: String, 
        required: true
    },
    covidPositive: {
        type: Boolean
    },
    testDate: {
        type: Date,
        default: new Date()
    },
    contacts: {
        type: [Contact]
    }
    //TODO: Location
})

export default mongoose.model('Person', Person);
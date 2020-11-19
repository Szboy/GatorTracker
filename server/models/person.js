import mongoose from 'mongoose';

const Contact = new mongoose.Schema({
    firstName: {
        type: String, 
        required: true
    },
    email: {
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
    },
    //TODO: Location
    location: {
        type: {
          type: String,
          enum: ['Point'],
        },
        coordinates: {
          type: [Number],
          index: '2dsphere'
        }
    }
})

export default mongoose.model('Person', Person);
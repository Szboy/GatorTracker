import mongoose from 'mongoose';

const Contact = new mongoose.Schema({
    email: {
        type: String, 
        required: true,
    },
    firstName: {
        type: String, 
        required: true,
    }
})

const Location = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Point'],
      },
      coordinates: {
        type: [Number],
        index: '2dsphere',
      }
})

const Person = new mongoose.Schema({
    firstName: {
        type: String, 
        required: true,
    },
    email: {
        type: String, 
        required: true,
    },
    covidPositive: {
        type: Boolean,
        default: true
    },
    testDate: {
        type: Date,
        default: new Date()
    },
    contacts: {
        type: [Contact]
    },
    location: {
        type: Location
    }
})

export default mongoose.model('Person', Person);
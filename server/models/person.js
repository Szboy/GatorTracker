import mongoose from 'mongoose';
import geocoder from '../utils/geocoder';

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

const Location = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Point'],
      },
      coordinates: {
        type: [Number],
        index: '2dsphere',
        formattedAddress: String
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
    address: {
        type: String,
        //required: true
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
        type: Location
    }
})

Person.pre('save', async function(next){
    const loc = await geocoder.geocode(this.address);
    console.log(loc);
});

//Converts address to location


export default mongoose.model('Person', Person);
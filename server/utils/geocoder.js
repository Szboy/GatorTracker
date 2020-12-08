//Imports geocoder functionality from node module
//Items are to be added to the config file
import config from '../../config.json'
const NodeGeocoder = require('node-geocoder');

const options = {
  provider: config.geocoderProvider,

  // Optional depending on the providers
  apiKey: config.geocoderKey, // for Mapquest, OpenCage, Google Premier
  formatter: null
};

const geocoder = NodeGeocoder(options);

export default geocoder;
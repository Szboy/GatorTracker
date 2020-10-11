'use strict'

import express from 'express';
import Person from '../models/person'

const router = express.Router();

router.get('/', function(req, res){
  res.render('index') //React index routing.
});

/*
Test Population of db
router.post('/test', function() {
    Person.create({firstName: "Shawn", email: "shawn@shawn.com", covidPositive: true, contacts: [{firstName: "Mike", email: "mike@mike.com"}, {firstName: "ike", email: "ike@ike.com"}]})
})
*/
export default router;
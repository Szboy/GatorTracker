'use strict'

import express from 'express';
import Person from '../models/person'
import * as PersonController from '../controllers/personController.js'


const router = express.Router();

router.get('/', function(req, res){
  res.render('index') //React index routing.
});

router.post('/register', PersonController.registerPerson)

router.get('/about', function(req, res) {
  res.render('about')
});

//Test Population of db
/*
router.post('/test', function() {
    Person.create({firstName: "Shawn", email: "shawn@shawn.com", covidPositive: true, contacts: [{firstName: "Mike", email: "mike@mike.com"}, {firstName: "David", email: "david@david.com"}, {firstName: "Red", email: "kinda@sus.com"}]})
})
*/

export default router;
// Only inital routing and posting lives here. Page routing is done through react via index.js
import express from 'express';
import Person from '../models/person'
import * as PersonController from '../controllers/personController'

const router = express.Router();

router.get('/', function (req, res) {
    res.render('index') //React index routing.
});
router.post('/api/update/:id', PersonController.updatePerson);
router.post('/api/register', PersonController.registerPerson);
router.get('/api/statistics', PersonController.getStatistics);
router.get('/api/:id', PersonController.getPerson);

//Test Population of db
/*
router.post('/test', function() {
    Person.create({firstName: "Shawn", email: "shawn@shawn.com", covidPositive: true, contacts: [{firstName: "Mike", email: "mike@mike.com"}, {firstName: "David", email: "david@david.com"}, {firstName: "Red", email: "kinda@sus.com"}]})
})
*/

export default router;
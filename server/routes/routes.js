// Only inital routing and posting lives here. Page routing is done through react via index.js
import express from 'express';
import * as PersonController from '../controllers/personController'

const router = express.Router();

router.get('/', function (req, res) {
    res.render('index') //React index routing.
});

router.post('/api/update/:id', PersonController.updatePerson);
router.post('/api/register', PersonController.registerPerson);
router.post('/api/forgotLink', PersonController.getLink);
router.get('/api/statistics', PersonController.getStatistics);
router.get('/api/:id', PersonController.getPerson);

export default router;
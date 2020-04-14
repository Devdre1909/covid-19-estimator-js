const express = require('express');

const router = express.Router();

const onCovid19Service = require('../../../services/v1/covid19/covid19');

router.post('/on-covid-19', onCovid19Service.returnJson);
router.post('/on-covid-19/xml', onCovid19Service.returnXml);
router.get('/on-covid-19/log', onCovid19Service.returnLog);


module.exports = router;

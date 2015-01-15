var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.json({name: req.param('name'), method: 'GET'});
});

router.post('/', function(req, res) {
    res.json({name: req.param('name'), method: 'POST'});
});

module.exports = router;

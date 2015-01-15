var express = require('express');
var router = express.Router();

router.post('/login', function(req, res) {
    // TODO: login and retrieve user ID and certificate

    res.json({status: 'ok', id: 456, cert: 'cert1'});
});

router.post('/register', function(req, res) {
    // TODO: register and issue a valid id and certificate

    res.json({status: 'ok', id: 123, cert: 'cert2'});
});

router.post('/collect', function(req, res) {
    var buyerId = req.param('buyerId');
    var sellerId = req.param('sellerId');
    var action = req.param('action');
    var numPoints = req.param('numPoints');
    var timestamp = req.param('timestamp');
    var sellerSignature = req.param('sellerSignature');
    var buyerSignature = req.param('buyerSignature');

    var uid = req.param('buyerId'),
        cert = req.param('buyerCert');

    // wrong action
    if (req.param('action') != 'ADD')
        res.json({status: 'rejected'});

    // TODO: collect points

    res.json({status: 'ok', id: uid, cert: cert});
});

router.post('/redeem', function(req, res) {
    var buyerId = req.param('buyerId');
    var sellerId = req.param('sellerId');
    var action = req.param('action');
    var numPoints = req.param('numPoints');
    var timestamp = req.param('timestamp');
    var sellerSignature = req.param('sellerSignature');
    var buyerSignature = req.param('buyerSignature');

    // wrong action
    if (req.param('action') != 'REDEEM')
        res.json({status: 'rejected'});

    // TODO: redeem points

    res.json({status: 'ok', availablePoints: 10});
});

module.exports = router;

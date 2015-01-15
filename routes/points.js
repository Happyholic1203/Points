var express = require('express');
var router = express.Router();

router.post('/login', function(req, res) {
    res.json({status: 'ok', id: 456, cert: 'cert1'});
});

router.post('/register', function(req, res) {
    res.json({status: 'ok', id: 123, cert: 'cert2'});
});

router.post('/collect', function(req, res) {
    var uid, cert;
    if (req.param('action') == 'ADD') {
        uid = req.param('buyerId');
        cert = req.param('buyerCert');
    }
    else if (req.param('action') == 'REDEEM') {
        uid = req.param('sellerId');
        cert = req.param('sellerCert');
    }
    res.json({status: 'ok', id: uid, cert: cert});
});

router.post('/redeem', function(req, res) {
    res.json({status: 'ok', availablePoints: 10});
});

module.exports = router;

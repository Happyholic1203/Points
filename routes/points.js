var express = require('express');
var router = express.Router();

/* GET home page. */
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

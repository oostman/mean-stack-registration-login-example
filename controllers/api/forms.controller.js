var account = require('account-form.json');
var express = require('express');
var router = express.Router();

// routes
router.get('/account', getAccountForm);

module.exports = router;

function getAccountForm(req, res) {
    res.send(account);
}

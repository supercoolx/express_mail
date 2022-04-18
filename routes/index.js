const express = require('express');
const router = express.Router();
const mail = require('../service/mail');

/* GET home page. */
router.get('/', function(req, res, next) {
	mail.sendMail({
        from: process.env.MAIL_USER,
        to: 'stepan912@dispomail.win',
        subject: 'Sending email using node.js',
        text: 'That was easy!'
    })
    .then(info => res.json(info.response))
    .catch(err => res.send(err.message));
});

module.exports = router;

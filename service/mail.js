const nodemailer = require('nodemailer');

const mail = nodemailer.createTransport({
    host: "mail.gorillafund.io",
    port: 993,
    auth: {
        user: "no-reply@gorillafund.io",
        pass: "ZtVQ.K)8s@b2"
    }
});

module.exports = mail;
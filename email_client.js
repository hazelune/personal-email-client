var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth : {
        user: 'hazelune0@gmail.com',
        pass: 'C8zv8Vww2PeSPWR'
    }
});

var mailOptions = {
    from: 'hazelune0@gmail.com',
    to: '22lutzn@sayreschool.org',
    subject: 'testing_testing',
    text: 'this email was sent through nodemailer'
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    }
    else {
        console.log("Email sent: " + info.response);
    }
});
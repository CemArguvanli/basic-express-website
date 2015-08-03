var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.post('/send', function(req, res, next){
	var transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth:{
			user: 'cemarguvanli@gmail.com',
			password: 'something'
		}
	});
	mainOptions = {
		from: 'John Doe <Johndoe@outlook.com>',
		to: 'cemarguvanli@gmail.com',
		subject: 'Website',
		text: 'The website ... Name: ' + req.body.name + 'Email: ' + req.body.email + 'Message: ' + req.body.message,
		html: '<p>you got a new message</p><ul><li> '+req.body.name+' </li> <li>  '+req.body.email+' </li><li>  '+req.body.message+' </li> <li> </li></ul>'
	};
	transporter.sendMail(mainOptions, function(error, info){
		if (error) {
			console.log(error);
			res.redirect('/');
		}else{
			console.log('Message sent '+ info.response);
			res.redirect('/');
		}
	})
})

module.exports = router;

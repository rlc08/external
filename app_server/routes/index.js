var express = require('express');
var router = express.Router();
//const multer = require('multer');
//const upload = multer({ dest: 'uploads/' });

const {verifyToken} = require('../../middleware/auth');
const ctrlothers = require('../controller/others')
const ctrlposts = require('../controller/articles')
const {register,login} = require('../controller/auth')
router.get('/',ctrlposts.home)
router.get('/article-info',ctrlposts.articleinfo)

router.get('/login',ctrlothers.login)
router.get('/register',ctrlothers.register)
router.get('/about',ctrlothers.about)
router.get('/contact',ctrlothers.contact)


// Authentication

router.post("/auth/register",register);
router.post("/auth/login",login);
module.exports = router;

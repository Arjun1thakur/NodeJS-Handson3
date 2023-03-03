var express = require('express');
var router = express.Router();


let Middleware=(q,res,next)=>{
  console.log('Middleware 1');
  next()
}
let Middleware0=(q,res,next)=>{
  console.log('Middleware 2');
  next()
}
/* GET home page. */
router.get('/',Middleware, function(req, res, next) {
  res.render('index', { title: 'Middleware'});
});

router.get('/about', Middleware,function(req, res, next) {
  res.send("Hii I'm about");
});
router.get('/contact', Middleware,function(req, res, next) {
  res.send("Hii I'm contact");
});
router.get('/server',Middleware, function(req, res, next) {
  res.send("Hii I'm server");
});
router.get('/projects',Middleware, function(req, res, next) {
  res.send("Hii I'm projects");
});
router.get('/test',Middleware0 ,function(req, res, next) {
  res.send("Hii I'm test");
});
router.get('/trip-plug',Middleware0, function(req, res, next) {
  res.send("Hii I'm trip-plug");
});

module.exports = router;

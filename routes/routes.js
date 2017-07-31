const express = require('express');
const router = express.Router();
const players = require('../models/players');

router.get('/', function(req, res){
  res.render('homePage')
});

router.get('/teams', function(req, res){
  res.render('teams', {players: players.all});
});

router.get('/eastern', function(req, res){
  res.render('eastern', {players: players.filter('e')});
});

router.get('/western', function(req, res){
  res.render('western', {players: players.filter('w')});
});

module.exports = router;

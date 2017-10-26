const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('../config');
const router = express.Router();
const bodyParser = require('body-parser');
const passport = require('passport');
const Comment = require('../models/comment')
router.use(bodyParser.json());


router.get('/', (req, res) => {
  Comment.find((error, comments) => {
    if(error) {
      res.send(error)
    }

    res.json(comments)
  })
});

router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  console.log(req.body);
  const record = new Comment()

  record.lat = req.body.lat
  record.lng = req.body.lng
  record.user = req.user.email
  record.comment = req.body.comment

  record.save((error, newRecord) => {
    if(error) {
      res.send(error)
    }

    Comment.find((error, comments) => {
      if(error) {
        res.send(error)
      }

      res.json(comments)
    })
  })
});

router.get('/:lat/:lng', passport.authenticate('jwt', { session: false }), (req, res) => {
  Comment.find({lat: req.params.lat, lng: req.params.lng}, (error, comments) => {
    if(error) {
      res.send(error)
    }

    res.json(comments)
  })
});


module.exports = router;

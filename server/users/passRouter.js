const express = require('express');
const { User } = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('../config');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());






router.post('/login', (req, res) => {
  // console.log(req.body)
  User.findOne({email: req.body.email}).select('email password').exec((err, user) => {
    if (err) {
      return res.status(404).json({message: 'User not found'})
    };
    if (!user) {
      return res.status(500).json({success: false, message: 'User does not exist'});
    }
    if (!user.comparePassword(req.body.password)) {
      res.json({success: false, message: 'Wrong password'});
    } else {

      let myToken = jwt.sign({

      email: user.email,
      id: user._id

    }, config.jwtSecret, {expiresIn: "24h"});
      res.json({
      success: true,
      message: "User successfully loggedin!" + myToken,
      token: myToken

     });

  }
});
});

//register route
router.post('/register', (req, res) => {

  let user = new User();
  user.email = req.body.email;
  user.password = req.body.password;
  console.log(req.body);

  user.save((err) => {

    if (err) {
      console.log("the error");
      console.log(err);
      return res.status(500).json({message: "User already exists here!"})
    }

    let myToken = jwt.sign({

      email: user.email,
      id: user._id

    }, config.jwtSecret, {expiresIn: "24h"});
      res.json({
      success: true,
      message: "User successfully registered!" + myToken,
      token: myToken

     });

   })

});


// router.delete('/', (req, res) => {



// router.delete('/sessions', (req, res) => {
//   User.findById(req.decoded.id, (err, user) => {


//     if (user) {
//       user.remove();

//     } else {
//       res.status(404).json({message: "Unable to delete user!"});
//     }

//   });
// });

















module.exports = router;

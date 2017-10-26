const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const {User} = require('../models/user')

const config = require('../config');

const jsonParser = bodyParser.json();


const createAuthToken = user => {
    return jwt.sign({user}, config.JWT_SECRET, {
        subject: user.email,
        expiresIn: process.env.JWT_EXPIRY || '7d',
        algorithm: 'HS256'
    });
};

const router = express.Router();

router.post(
    '/login',
    // The user provides a username and password to login
    passport.authenticate('basic', {session: false}),
    (req, res) => {
        const authToken = createAuthToken(req.user.apiRepr());
        res.json({authToken});
    }
);

// Post to register a new user
router.post('/register', jsonParser, (req, res) => {
    let {email, password} = req.body;

    return User.find({email})
        .count()
        .then(count => {
            if (count > 0) {
                // There is an existing user with the same username
                return Promise.reject({
                    code: 422,
                    reason: 'ValidationError',
                    message: 'Username already taken',
                    location: 'username'
                });
            }
            // If there is no existing user, hash the password
            return User.hashPassword(password);
        })
        .then(hash => {
            return User.create({
                email,
                password: hash
            });
        })
        .then(user => {
          console.log(user);
            return res.status(201).json(user.apiRepr());
        })
        .catch(err => {
          console.log(err);
            // Forward validation errors on to the client, otherwise give a 500
            // error because something unexpected has happened
            if (err.reason === 'ValidationError') {
                return res.status(err.code).json(err);
            }
            res.status(500).json({code: 500, message: 'Internal server error'});
        });
});

router.post(
    '/refresh',
    // The user exchanges an existing valid JWT for a new one with a later
    // expiration
    passport.authenticate('jwt', {session: false}),
    (req, res) => {
        const authToken = createAuthToken(req.user);
        res.json({authToken});
    }
);

module.exports = {router};

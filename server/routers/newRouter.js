const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const morgan = require('morgan');
const mongoose = require('mongoose');
const http = require('http');
const path = require('path');
const methodOverride = require('method-override');
const request = require('request');
const uuid = require('uuid');
const ObjectId = require('mongodb').ObjectID;



mongoose.Promise = global.Promise;



  router.use(bodyParser.urlencoded({ 
   extended: false, 
   parameterLimit: 1000000
 
 }));
  
 router.use(bodyParser.json());
 router.use(methodOverride());


const {Comment} = require('../models/comment.js');


 


   router.get('/coms', (req, res) => {
    let user = req.query.email; 
    Comment
    .find()
     .find({ user: email })

      .limit(100)

     .exec()
     .then(coms => {
      
        res.status(200).json(coms)
       
    })
      .catch(
        err => {
          console.error(err);
          res.status(500).json({message: 'Internal server error'});
      });
  });




router.post('/coms', (req, res) => {

  const requiredFields = ['lat', 'lng', 'comment', 'user'];
  for (let i=0; i<requiredFields.length; i++) {
    const field = requiredFields[i];
    if (!(field in req.body)) {
      const message = `Missing \`${field}\` in request body`
      console.error(message);
      return res.status(400).send(message);
    }
  }

  Comment
    .create({
      lat: req.body.lat,
      lng: req.body.lng,
      comment: req.body.comment,
      user: req.body.user

    })
      
    .then(
      coms => res.status(201).json(searches.apiRepr()))
    .catch(err => {
      console.error(err);
      res.status(500).json({message: 'Internal server error'});
    });
});





const toUpdate = {};
const updateableFields = ['lat', 'lng', 'comment', 'user'];




      router.put('/users/:comment', (req, res) => {

        console.log("i got here");
         console.log(req.params);
 
           if (!(req.params.comment && req.body.comment && req.params.comment === req.body.comment)) {
           
          const message = ( `Request path comment (${req.params.comment}) and request body comment` +
           `(${req.body.email}) must match`); 
           console.error(message);
            res.status(400).json({message: message});
     

          }

                   updateableFields.forEach(field => {
                     if (field in req.body) {
                   toUpdate[field] = req.body[field];
   
               }

          });
 
      

       Comment
            .findByIdAndUpdate(mongoose.Types.ObjectId(req.params.comment), {$set: toUpdate})
            .exec()
            .then(coms => res.status(200).send(req.body))
            .catch(err => {
           console.log(err);
           res.status(500).json({message: 'Internal server error'})
        
        });
 
      });





          router.delete('/coms/:comment', (req, res) => {
          Search
         .findByIdAndRemove(req.params.id)
         .exec()
         .then(coms => res.status(204).end())
         .catch(err => {
          console.log(err);
          res.status(500).json({message: 'Internal server error'});


        })

    });




 




module.exports = router;
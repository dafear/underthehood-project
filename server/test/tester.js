const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const should = chai.should();


const {User} = require('../models/comment.js');
const {app, runServer, closeServer} = require('../index.js');
const {DATABASE_URL} = require('../config.js');


chai.use(chaiHttp);


describe('Comment', function() {

  before(function() {
    return runServer();
  });

  after(function() {
    return closeServer();
  });

  
  it('should list Comment items on GET', function() {
   
    return chai.request(app)
      .get('/coms')
      .then(function(res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        
        res.body.length.should.be.at.least(1);
        
        const expectedKeys = ['lat', 'lng', 'comment', 'user'];
        res.body.forEach(function(item) {
          item.should.be.a('object');
          item.should.include.keys(expectedKeys);
        });
      }).catch(function(error) {
        console.log(error)
      })
    });
      
     

  
  it('should add Comment on POST', function() {
    const newComment = {  lat: '23.543534', lng: '45.97976', comment: 'sowhat', user: 'cool@gmail.com'};
    return chai.request(app)
      .post('/coms')
      .send(newComment)
      .then(function(res) {
        res.should.have.status(201);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.include.keys('lat', 'lng', 'comment', 'user');
        res.body.id.should.not.be.null;
      
      }).catch(function(error) {
        console.log(error)
      })
  });

  
  
  it('should update Comment items on PUT', function() {
    
    const updateCommentData = {
      name: 'foo',
      checked: true
    };

     chai.request(app)
     
      .get('/coms')
      .then(function(res) {
        updateUserData.email = res.body[0].email;
        
         chai.request(app)
          .put(`/coms/${updateCommentData.lat.lng.comment.user}`)
          .send(updateCommentData);
      })
      
      .then(function(res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.deep.equal(updateCommentData);
      }).catch(function(error) {
        console.log(error)
      })
       
      
  });

 
  it('should delete Comment id on DELETE', function() {
     chai.request(app)
     

      .get('/coms')
      .then(function(res) {
      
         chai.request(app)
          .delete(`/coms/${res.body[0].comment}`);
    })
        .then(function(res) {
         res.should.have.status(204);
       }).catch(function(error) {
         console.log(error)
       })
  });
});
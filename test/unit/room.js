/* jshint expr:true */
/*global describe, it*/
'use strict';

var expect = require('chai').expect;
var Room = require('../../app/models/room.js');

describe('Room', function(){
  describe('constructor', function(){
  it('should create a room constructor', function(){
  var den = new Room('den', '12', '14');
  expect(den).to.be.instanceof(Room);
  expect(den.type).to.equal('den');
  expect(den.width).to.be.a('number');
  expect(den.width).to.equal(12);
  expect(den.length).to.be.a('number');
  expect(den.length).to.equal(14);

  });
 });
  
  describe('#area', function(){
    it('should find the area of a room', function(){
    var den = new Room('den', '12', '14');
    den.area();
    expect(den.area()).to.equal(168);
    });
  });
  
  describe('#cost', function(){
    it('should find the cost of a room', function(){
    var den = new Room('den', '12', '14');
    den.cost();
    expect(den.cost()).to.equal(840);
    });
  });

});

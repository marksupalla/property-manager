/* jshint expr:true */
/*global describe, it*/
'use strict';

var expect = require('chai').expect;
var Renter = require('../../app/models/renter.js');

describe('Renter', function(){
  describe('constructor', function(){
    it('should create a new renter', function(){
    var renter1 = new Renter('Jerome', '44', 'Male', 'Slumlord');
    expect(renter1.name).to.equal('Jerome');
    expect(renter1.age).to.equal('44');
    expect(renter1.gender).to.equal('Male');
    expect(renter1.profession).to.equal('Slumlord');
    expect(renter1.cash).to.be.within(100, 500);
    expect(renter1.isEvicted).to.be.false;
  });
  });
});

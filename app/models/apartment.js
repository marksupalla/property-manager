'use strict';

function Apartment(unit) {

  this.unit = unit;
  this.rooms = [];
  this.renters = [];
}

Apartment.prototype.totalArea = function(){
  var sum = 0;
  for(var i = 0; i < this.rooms.length; i++){
  sum +=  this.rooms[i].area();
  }
  return sum;
};

Apartment.prototype.totalCost = function(){
  var sum = 0;
  for(var i = 0; i < this.rooms.length; i++){
  sum +=  this.rooms[i].cost();
  }
  return sum;
};

Apartment.prototype.bedrooms = function(){
  var count = [];
  for(var i = 0; i < this.rooms.length; i++){
    if(this.rooms[i].type === 'bedroom') {
    count.push(this.rooms[i]);
    }
  }
  return count.length;
};
















module.exports = Apartment;

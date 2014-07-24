'use strict';


function Room(type, width, length) {
  this.type = type;
  this.width = parseInt(width);
  this.length = parseInt(length);
}

Room.prototype.area = function() {
  return this.width * this.length;
};

Room.prototype.cost = function(){
  return this.area() * 5;
};

module.exports = Room;


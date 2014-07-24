'use strict';



function Renter(name, age, gender, profession) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.profession = profession;

  this.cash = Math.floor(Math.random() * 401) + 100;
  this.isEvicted = false;
}

Renter.prototype.work = function (){
  switch(this.profession){
    case 'Slumlord':
      this.cash = this.cash + Math.floor(Math.random() * 5001) + 2000;
      break;

    case 'Dealer':
      this.cash = this.cash + Math.floor(Math.random() * 3001) + 1000;
      break;
      
    case 'Teacher':
      this.cash = this.cash + Math.floor(Math.random() * 1001) + 700;
      break;

    case 'Clerk':
      this.cash = this.cash + Math.floor(Math.random() * 701) + 200;
}
};

module.exports = Renter;

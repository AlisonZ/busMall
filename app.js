'use strict';
//Global variables

//look at math mdn for a more appropriate random number generator//
function makeRandomNum(){
  return Math.floor(Math.random() * myImagesArray.length);
};
//all the created image objects will be pushed to this array//
var imageArray = [];

//this is the constructor for the objects//
function Image(name, location){
  this.name = name;
  this.location = location;
  this.views = 0;
  this.display = 0;
  imageArray.push(this);
}

//creating all of the image objects//

var bag = new Image('bag','images/bag.jpg');
var banana = new Image('banana','images/');
var bathroom = new Image('bathroom','images/bathroom.jpg' );
var boots = new Image ('boots','images/boots.jpg');
var breakfast = new Image ('breakfast', 'images/breakfast.jpg');
var bubblegum = new Image('bubblegum', 'images/bubblegum.jpg');
var chair = new Image('chair', 'images/chair.jpg');
var cthulhu = new Image ('cthulhu', 'images/cthulhu.jpg');
var dogDuck = new Image ('dogDuck', 'images/dog-duck.jpg');
var dragon = new Image ('dragon', 'images/dragon.jpg');
var pen = new Image ('pen', 'images/pen.jpg');
var petSweep = new Image ('petSweep', 'images/pet-sweep.jpg');
var scissors = new Image ('scissors', 'images/scissors.jpg');
var shark = new Image ('shark', 'images/shark.jpg');
var sweep = new Image ('sweep', 'images/sweep.png');
var tauntaun = new Image ('tauntaun', 'images/tauntaun.jpg');
var unicorn = new Image ('unicorn', 'images/unicorn.jpg');
var usb = new Image ('usb', 'images/usb.git');
var waterCan = new Image ('waterCan', 'images/water-can.jpg');
var wineGlass = new Image ('wineGlass', 'images/wine-glass.jpg');

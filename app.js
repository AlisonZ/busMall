'use strict';
//Global variables

//look at math mdn for a more appropriate random number generator//
function makeRandomNum(){
  return Math.floor(Math.random() * imageArray.length);
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

var bag = new Image('bag','assets/bag.jpg');
var banana = new Image('banana','assets/banana.jpg');
var bathroom = new Image('bathroom','assets/bathroom.jpg' );
var boots = new Image ('boots','assets/boots.jpg');
var breakfast = new Image ('breakfast', 'assets/breakfast.jpg');
var bubblegum = new Image('bubblegum', 'assets/bubblegum.jpg');
var chair = new Image('chair', 'assets/chair.jpg');
var cthulhu = new Image ('cthulhu', 'assets/cthulhu.jpg');
var dogDuck = new Image ('dogDuck', 'assets/dog-duck.jpg');
var dragon = new Image ('dragon', 'assets/dragon.jpg');
var pen = new Image ('pen', 'assets/pen.jpg');
var petSweep = new Image ('petSweep', 'assets/pet-sweep.jpg');
var scissors = new Image ('scissors', 'assets/scissors.jpg');
var shark = new Image ('shark', 'assets/shark.jpg');
var sweep = new Image ('sweep', 'assets/sweep.png');
var tauntaun = new Image ('tauntaun', 'assets/tauntaun.jpg');
var unicorn = new Image ('unicorn', 'assets/unicorn.jpg');
var usb = new Image ('usb', 'assets/usb.gif');
var waterCan = new Image ('waterCan', 'assets/water-can.jpg');
var wineGlass = new Image ('wineGlass', 'assets/wine-glass.jpg');

//now getting three random numbers

function makeThreeImages(){
  var firstImageRandomNum = makeRandomNum();
  // console.log(firstImageRandomNum);
  var secondImageRandomNum = makeRandomNum();
  // console.log(secondImageRandomNum);
  while (firstImageRandomNum === secondImageRandomNum){
    secondImageRandomNum = makeRandomNum();
    // console.log('this fires');
  }

  var thirdImageRandomNum = makeRandomNum();
  // console.log(thirdImageRandomNum);
  while(firstImageRandomNum === thirdImageRandomNum || secondImageRandomNum === thirdImageRandomNum){
    thirdImageRandomNum = makeRandomNum();
    // console.log('this also fires');
  }

  // console.log('make Three Images was called');
  var firstImage = document.getElementById('firstImage');
  firstImage.src = imageArray[firstImageRandomNum].location;
  // console.log(firstImage);
  var secondImage = document.getElementById('secondImage');
  secondImage.src = imageArray[secondImageRandomNum].location;
  var thirdImage = document.getElementById('thirdImage');
  thirdImage.src = imageArray[thirdImageRandomNum].location;
}

makeThreeImages();


document.getElementById('images').addEventListener('click', makeThreeImages);

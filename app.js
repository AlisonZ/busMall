'use strict';
//Global variables
function makeRandomNum(){
  return Math.floor(Math.random() * imageArray.length);
};
var imageArray = [];
var currentIndices = [];
var clicks = 0;

//this is the constructor for the objects//
function Image(name, location){
  this.name = name;
  this.location = location;
  this.chosen = 0;
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
var usb = new Image ('usb', 'assets/usb.png');
var waterCan = new Image ('waterCan', 'assets/water-can.jpg');
var wineGlass = new Image ('wineGlass', 'assets/wine-glass.jpg');

//now getting three random numbers
function handleButton(){
  // console.log('handle button working');
  var clickChart = document.getElementById('clickChart').getContext('2d');
  var barData = {
    labels: makeNamesArray(),
    datasets:[
      {
        fillColor: 'red',
        strokeColor: 'black',
        data: makeClickData()
      },
    ]
  };
  new Chart.Bar(clickChart, barData);
}

function handleClicks(event){
  console.log(event.target.alt);
  clicks += 1;
  console.log(clicks);
  for(var i = 0; i < imageArray.length; i++){
    if (event.target.alt === imageArray[i].name){
      imageArray[i].chosen += 1;
      console.log(imageArray[i].name + ' has ' + imageArray[i].chosen + ' clicks');
    }
  }
  if(clicks < 5){
    makeThreeImages();
  } else{
    document.getElementById('button').addEventListener('click',handleButton);
    console.log('out of clicks');
    //  makeClickData(){
      // return chartData;
    //turn off event listeners
    //show button for results
    //draw chart
  };
    // makeClickData();
}

function makeThreeImages(){
  // collect data on the clicked image
  // start generating new images
  var firstImageRandomNum = makeRandomNum();
  while(firstImageRandomNum === currentIndices[0] || firstImageRandomNum === currentIndices[1] || firstImageRandomNum === currentIndices[2]) {
    firstImageRandomNum = makeRandomNum();
    // console.log('duplicate in first');
  }

  var secondImageRandomNum = makeRandomNum();
  while(firstImageRandomNum === secondImageRandomNum || secondImageRandomNum === currentIndices[0] || secondImageRandomNum === currentIndices[1] || secondImageRandomNum === currentIndices[2]) {
    secondImageRandomNum = makeRandomNum();
    // console.log('duplicate in second');
  }

  var thirdImageRandomNum = makeRandomNum();
  while(thirdImageRandomNum === firstImageRandomNum || thirdImageRandomNum === secondImageRandomNum || thirdImageRandomNum === currentIndices[0] || thirdImageRandomNum === currentIndices[1] || thirdImageRandomNum === currentIndices[2]) {
    thirdImageRandomNum = makeRandomNum();
    // console.log('right index matched a prior image');
  }
  currentIndices = [firstImageRandomNum, secondImageRandomNum,thirdImageRandomNum];
  // return currentIndices;

  var firstImage = document.getElementById('firstImage');
  firstImage.src = imageArray[firstImageRandomNum].location;
  firstImage.alt = imageArray[firstImageRandomNum].name;
  imageArray[firstImageRandomNum].display++;

  var secondImage = document.getElementById('secondImage');
  secondImage.src = imageArray[secondImageRandomNum].location;
  secondImage.alt = imageArray[secondImageRandomNum].name;
  imageArray[secondImageRandomNum].display++;

  var thirdImage = document.getElementById('thirdImage');
  thirdImage.src = imageArray[thirdImageRandomNum].location;
  thirdImage.alt = imageArray[thirdImageRandomNum].name;
  imageArray[thirdImageRandomNum].display++;
}

  //trying to get a data array for the chart
makeThreeImages();
document.getElementById('images').addEventListener('click', handleClicks);


var makeClickData = function(){
  var chartData = [];
  for(var i = 0; i < imageArray.length; i++){
    chartData.push(imageArray[i].chosen);
  }
  console.log(chartData);
  return chartData;
};

var makeNamesArray = function(){
  var namesData = [];
  for (var i = 0; i < imageArray.length; i++){
    namesData.push(imageArray[i].name);
  }
  console.log(namesData);
  return namesData;
};

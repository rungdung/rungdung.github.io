var vehicles = [];
var words = ["Hello","Adhavan","WTF"];
var j=0;

function preload() {
  font = loadFont('verdanab.ttf')
}

function setup() {
  createCanvas(800, 200);
  
  pushNewWord();
}

function draw() {
  background(2);
  for (var i = 0; i < vehicles.length; i++) {
    vehicles[i].behaviours();
    vehicles[i].update();
    vehicles[i].show();
  }
}

function mouseClicked(){
  j+=1;
  pushNewWord();
}

function pushNewWord(){
  vehicles.length=0;
  if(j>words.length-1){
    j=0;
  }
  textFont(font);
  console.log("wtf os this issue");
  console.log(j);
  var points = font.textToPoints(words[j], 100, 100, 100, {
    sampleFactor: 0.6
  });
  
  for (var i = 0; i < points.length; i++) {
    pt = points[i];
    var vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
  }
  
}

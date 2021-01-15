let canvas;
let myMap;

const mappa=new Mappa('Leaflet');

const options = {
    lat: 40.73447,
    lng: -74.00232,
    zoom: 13,
    style: 'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
  }

function preload(){
    data = loadJSON('./data/taxiday1.geojson');
}
function setup(){
    canvas = createCanvas(800,700);
    myMap = mappa.tileMap(options); 
    myMap.overlay(canvas); // Overlay the canvas on top of the map.
  }
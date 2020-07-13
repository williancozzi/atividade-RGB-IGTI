window.addEventListener('load', start);

var sliderRed = document.querySelector('#sliderRed');
var sliderGreen = document.querySelector('#sliderGreen');
var sliderBlue = document.querySelector('#sliderBlue');
var inputRed = document.querySelector('#input-red');
var inputGreen = document.querySelector('#input-green');
var inputBlue = document.querySelector('#input-blue');
var boxRGB = document.querySelector('.boxRGB');

sliderRed.addEventListener('input', setColor);
sliderGreen.addEventListener('input', setColor);
sliderBlue.addEventListener('input', setColor);

function start() {
  console.log("Page fully loaded.");
  setColor();
}

function setColor() {
  inputRed.value = sliderRed.value;
  inputGreen.value = sliderGreen.value;
  inputBlue.value = sliderBlue.value;
  boxRGB.style.backgroundColor = `rgb(${sliderRed.value},${sliderGreen.value}, ${sliderBlue.value})`;
}
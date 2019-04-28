// JavaScript source code
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/drumset.jpg') {
      myImage.setAttribute ('src','images/white-pearl-drumset.jpg');
	  myImage.setAttribute ('alt','White Pearl Drumset');
    } else {
      myImage.setAttribute ('src','images/drumset.jpg');
	  myImage.setAttribute ('alt','Silver Pearl Drumset');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Drumming is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Drumming is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
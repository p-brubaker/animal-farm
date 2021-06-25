// import functions

// reference needed DOM elements


// set event listeners 
  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)

const catSound = document.getElementById("cat-sound");
const catImage = document.getElementById("cat-image");
catImage.addEventListener('click', () => {
  catSound.play();
});

const dogSound = document.getElementById("dog-sound");
const dogImage = document.getElementById("dog-image");
dogImage.addEventListener('click', () => {
  dogSound.play();
});

const horseSound = document.getElementById("horse-sound");
const horseImage = document.getElementById("horse-image");
horseImage.addEventListener('click', () => {
  horseSound.play();
});

// document.addEventListener('keydown', (event) => {
//   var name = event.key;
//   var code = event.code;
//   // Alert the key name and key code on keydown
//   alert(`Key pressed ${name} \r\n Key code value: ${code}`);
// }, false);

document.addEventListener('keydown', (event) => {
  if (event.key === 'd') {
    dogSound.play();
  } else if (event.key === 'h') {
    horseSound.play();
  } else if (event.key === 'c') {
    catSound.play();
  }
});
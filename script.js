'use strict'
//AUTO GENERATE VALUE
let val = Math.trunc(Math.random() * 20 + 1);

let score = 20;

let highscr = 0;

// console.log(val);

const displayOutval = function (message) {
  document.querySelector('.outval').innerHTML = message;
};

document.querySelector('.btnclk').addEventListener('click', function () {
  const inputvalue = Number(document.querySelector('.inputval').value);

  //NO INPUT VALUE
  if (!inputvalue) {
    // document.querySelector('.outval').innerHTML = 'Enter Value';
    displayOutval('Enter value');
  }

  //CORRECT VALUE
  else if (val === inputvalue) {
    if (highscr < score) {
      highscr = score;
      document.querySelector('.highscr').innerHTML = highscr;
    }
    // document.querySelector('.outval').innerHTML = 'Correct Number!';
    displayOutval('Correct Number!');
    document.querySelector('.scrboard').innerHTML = inputvalue;
    document.querySelector('.scrboard').style.fontSize = '150px';
    document.querySelector('.scrboard').style.backgroundColor = 'white';
    document.querySelector('.outval').style.backgroundColor = 'black';
  } else if (val !== inputvalue) {
    if (score > 1) {
      // document.querySelector('.outval').innerHTML =
      //   inputvalue < val ? 'Too Low' : 'Too High';
      displayOutval(inputvalue < val ? 'Too Low' : 'Too High');
      score--;
      document.querySelector('.scoreval').innerHTML = score;
    } else {
      // document.querySelector('.outval').innerHTML = 'You Lost The Game >!<';
      displayOutval('You Lost The Game >!<');
      document.querySelector('.scoreval').innerHTML = 0;
    }
  }
});

document.querySelector('.tryagain').addEventListener('click', function () {
  // document.querySelector('.outval').innerHTML = 'Start guessing...';
  displayOutval('Start guessing...');
  score = 20;
  document.querySelector('.scoreval').innerHTML = score;
  document.querySelector('.scrboard').innerHTML = '?';
  document.querySelector('.scrboard').style.backgroundColor = '';
  document.querySelector('.scrboard').style.fontSize = '100px';
  document.querySelector('.outval').style.backgroundColor = '';
  document.querySelector('.inputval').value = '';
  val = Math.trunc(Math.random() * 20 + 1);
  // console.log(val);
});
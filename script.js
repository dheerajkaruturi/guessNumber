'use strict'; 
// to generate a random number between 1-20.
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let actualScore = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
//event listener method with click and event handler parameters and game logic.
//declaring an event listener to the button with class check.
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when there is no input or input equal to zero.
  if (guess === 0) {
    //document.querySelector('.message').textContent = 'No number ❌';
    displayMessage('No number ❌');
  }

  //if input matches the secret number.Player wins.
  else if (guess === secretNumber) {
    displayMessage('Congratulation 🥳');
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    //for setting the high score value.
    if (actualScore > highscore) {
      highscore = actualScore;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //if text input is not equal to secret number.
  else if (guess !== secretNumber) {
    if (actualScore > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too high 🔺' : 'Too low 🔻';
      displayMessage(guess > secretNumber ? 'Too high 🔺' : 'Too low 🔻');
      actualScore = actualScore - 1;
      document.querySelector('.score').textContent = actualScore;
    } else {
      document.querySelector('.score').textContent = 0;
      displayMessage('You lost 😒');
    }
  }
  /* this code is commented because it is repeated twice in below conditions to make it clean we added the above code using the ternery operator.

  // if input is less than secret number.
  else if (guess < secretNumber) {
    if (actualScore > 1) {
      document.querySelector('.message').textContent = 'Too low 🔻';
      actualScore = actualScore - 1;
      document.querySelector('.score').textContent = actualScore;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = 'You lost 😒';
    }
  }

  // if input is greater than secret number.
  else if (guess > secretNumber) {
    if (actualScore > 1) {
      document.querySelector('.message').textContent = 'Too high 🔺';
      actualScore = actualScore - 1;
      document.querySelector('.score').textContent = actualScore;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = 'You lost 😒';
    }
  }*/
});

// again button to reload a new game:
/*document.querySelector('.again').addEventListener('click', function () {
  window.location.reload();
}); */
//above event was a window reload.
document.querySelector('.again').addEventListener('click', function () {
  actualScore = 20;
  secretNumber = Math.trunc(Math.random()) * 20 + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  //document.querySelector('.message').textContent = 'start guessing';
  displayMessage('start guessing');
  document.querySelector('.score').textContent = actualScore;
  //document.querySelector('.highscore').textContent = 0;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

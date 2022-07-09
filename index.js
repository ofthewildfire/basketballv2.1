let homeScore = 0
let homeScoreLog = document.getElementById("home-score")

let guestScore = 0
let guestScoreLog = document.getElementById("guest-score")

// console.log(homeScore)
// interesting, I have to ask or Google why when I moved that let variable down to beneath the home functions it suddenly said it was not working. should it not have worked 'js reads top to bottom' so it was still BEFORE and declared first? /thinking-face. 

// Home functions 

function add1home() {
  let homeScoreNew = homeScore += 1;
  homeScoreLog.textContent = homeScoreNew;
}

function add2home() {
  let homeScoreNew = homeScore += 2;
  homeScoreLog.textContent = homeScoreNew;
}

function add3home() {
  let homeScoreNew = homeScore += 3;
  homeScoreLog.textContent = homeScoreNew;
}

// Guest functions 

function add1guest() {
  let guestScoreNew = guestScore += 1;
  guestScoreLog.textContent = guestScoreNew;
}

function add2guest() {
  let guestScoreNew = guestScore += 2;
  guestScoreLog.textContent = guestScoreNew;
}

function add3guest() {
  let guestScoreNew = guestScore += 3;
  guestScoreLog.textContent = guestScoreNew;
}

// Reset button 

let resetBtn = document.getElementById('new-game');

function reset() {
  homeScore = 0;
  guestScore = 0;
  guestScoreLog.textContent = 0;
  homeScoreLog.textContent = 0;
}

// Winning + Losing Indicators 


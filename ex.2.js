const start$$ = document.querySelector('[data-function = "start"]');
const score$$ = document.querySelector('[data-function = "score"]');
const timeLeft$$ = document.querySelector('[data-function = "time-left"]');
const square$$ = document.querySelectorAll('[data-function="square"]');
let score = 0;
start$$.addEventListener("click", gameStart);

for (const element of square$$) {
  element.addEventListener('click', () =>{
    addScore(element)
  })
};


function gameStart() {
  
  start$$.disabled = true;
  lefTime();
  let time = Number(timeLeft$$.textContent);
  console.log("el timeleft es...", typeof time);
}

function hideMole() {
  setTimeout(() => {
    for (let index = 1; index < square$$.length; index++) {
      square$$[index].classList.remove("b-mole");
    }
    showMole();
  }, 300);
}

function lefTime() {
  showMole();
  const gameTime = setInterval(() => {
    let min = Number(timeLeft$$.textContent) - 1;
    timeLeft$$.innerHTML = min;
    if (min < 0) {
      clearInterval(gameTime);
      endGame();
    }
  }, 1000);
}
function endGame() {
  start$$.disabled = false;
  start$$.innerHTML = "JUEGA OTRA VEZ";
  score = 0;
  score$$.innerHTML = 0;
  timeLeft$$.innerHTML = 30;
  alert("Se acabó el tiempo");
}

const showMole = () => {
  let target = parseInt(Math.random() * (9 - 1) + 1);
  console.log("objetivo...", typeof target, target);

  for (let i = 1; i < square$$.length; i++) {
    if (i === target) {
      square$$[i].classList.add("b-mole");
        }
  }
  if (Number(timeLeft$$.textContent) > 0) {
    console.log("time is ----", Number(timeLeft$$.textContent));
    hideMole();
  }
};

const addScore= (param)=>{
  // console.log('estas son mis clases',param.classList.value)
   if(param.classList.value.includes('b-mole')){
    score++
    score$$.textContent = score; 
   } 
   
}

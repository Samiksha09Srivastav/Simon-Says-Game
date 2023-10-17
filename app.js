let gameSeq=[];
let userSeq=[];

let btns = ["pink", "green", "purple", "orange"];

let started = false;
let level = 0;

let h3 = document.querySelector("h3");
let h4 = document.querySelector("h4");

let highScore = 0; // Initialize the highest score to 0

h4.innerHTML = `Your highest score :`;

document.addEventListener("keypress", function(){
    
    if (started == false) {
        console.log("Game is started ");
        started = true;

        levelUp();
    }
    
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 150);
}

function levelUp() {
    userSeq=[];
    level++;
    h3.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
    
} 

function checkAns(idx){
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length){
            setTimeout(levelUp, 250); 
        }
    } else {
        h3.innerHTML = `Game Over! Your score was <b> ${level} </b> </br> Press any key to start.`; 
        updateHighScore();
        reset();
    }
}

function btnPress() {
    console.log(this);
    let btn = this;
    btnFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);   
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function updateHighScore() {
    if (level > highScore) {
      highScore = level;
      h4.innerHTML = `Your highest score : <b> ${highScore}`;
    }
  }  

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;    
}    


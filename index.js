
document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    audio.loop = true; 
    const button = document.getElementById('audioButton');
    button.click();
    
    button.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });
  
});
const chBtnLength=document.querySelectorAll(".ch-btn").length;
for(var i=0 ; i<chBtnLength;i++){
document.querySelectorAll(".ch-btn")[i].addEventListener("click" , function (){
   document.querySelector(".user-ch-box").classList.toggle("d-none");
   document.querySelector(".ludo-home").classList.toggle("d-none");
   document.querySelector(".contnr").classList.toggle("d-none");
   setupBoard();
});
}

// document.getElementById('btn').addEventListener('click', setupBoard);

const colors = ['red', 'blue', 'green', 'yellow'];
function setupBoard() {
    const board = document.getElementById('gameBoard');
    for (let i = 0; i < 225; i++) { 
        const cell = document.createElement('div');
        cell.className = 'cell';
        if (Math.floor(i / 15) < 6 && i % 15 < 6) {
            cell.style.backgroundColor = 'red';
        } else if (Math.floor(i / 15) < 6 && i % 15 >= 9) {
            cell.style.backgroundColor = 'blue'; 
        } else if (Math.floor(i / 15) >= 9 && i % 15 < 6) {
            cell.style.backgroundColor = 'green';
        } else if (Math.floor(i / 15) >= 9 && i % 15 >= 9) {
            cell.style.backgroundColor = 'yellow'; 
        } else if (
            (Math.floor(i / 15) >= 6 && Math.floor(i / 15) < 9) &&
            (i % 15 >= 6 && i % 15 < 9) &&
            !cell.style.backgroundColor
        ) {
            cell.style.backgroundColor = 'skyblue';
        } else if (Math.floor(i / 15) === 6 && i % 15 === 1) {
            cell.style.backgroundColor = 'red';
        } else if (Math.floor(i / 15) === 7 && i % 15 <= 5 && i % 15 >= 1) {
            cell.style.backgroundColor = 'red';
        } else if (Math.floor(i / 15) === 1 && i % 15 === 8) {
            cell.style.backgroundColor = 'blue';
        } else if (Math.floor(i / 15) <= 5 && i % 15 === 7 && Math.floor(i / 15) >= 1) {
            cell.style.backgroundColor = 'blue';
        } else if (Math.floor(i / 15) === 8 && i % 15 === 13) {
            cell.style.backgroundColor = 'yellow';
        } else if (Math.floor(i / 15) === 7 && i % 15 <= 13 && i % 15 >= 9) {
            cell.style.backgroundColor = 'yellow';
        } else if (Math.floor(i / 15) === 13 && i % 15 === 6) {
            cell.style.backgroundColor = 'green';
        } else if (Math.floor(i / 15) <= 13 && i % 15 === 7 && Math.floor(i / 15) >= 9) {
            cell.style.backgroundColor = 'green';
        }
        if (Math.floor(i / 15) <= 5 && i % 15 >= 6 && i%15 <=8) {
            cell.style.border = '1px solid black';
        }
       else if (Math.floor(i / 15) <= 14 && i % 15 >= 6 && i%15 <=8 && (i / 15) >= 9) {
            cell.style.border = '1px solid black';
        }
        else if (Math.floor(i / 15) >= 6 && i % 15 <=5 && (i / 15) < 9 ) {
            cell.style.border = '1px solid black';
        }
        else if (Math.floor(i / 15) >= 6 && i % 15 >=9 && (i / 15) < 9 ) {
            cell.style.border = '1px solid black';
        }
        board.appendChild(cell);
    }
}


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
 var btnAudio = document.getElementById('btnAudio');
 document.querySelectorAll(".ch-btn")[i].addEventListener('focus', function() {
        btnAudio.currentTime = 0; 
        btnAudio.play();
      });  
}
const dice=document.querySelectorAll(".dice-img").length;
for(let n=0; n<dice; n++){
document.querySelectorAll(".dice-cont")[n].addEventListener("click" , function (){
    const rn1=Math.floor(Math.random() * 6) + 1;
    const rn2=Math.floor(Math.random() * 6) + 1; 
    const rn3=Math.floor(Math.random() * 6) + 1;  
    const rn4=Math.floor(Math.random() * 6) + 1; 
    if(n===0){
        document.getElementById("dice-img1").setAttribute("src" , "./images/dice"+rn1+".png");
    }
    else if(n===1){
        document.getElementById("dice-img2").setAttribute("src" ,"./images/dice"+rn2+".png");
    }
    else if(n===2){
        document.getElementById("dice-img3").setAttribute("src" , "./images/dice"+rn3+".png");
    }
    else if(n===3){
        document.getElementById("dice-img4").setAttribute("src" ,"./images/dice"+rn4+".png");
    }
    else{
        alert("error "+n);
    }
    diceAudio.currentTime = 0; 
    diceAudio.play();

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
        else if(i===16 || i===19 || i===61 ||  i===64 || i===25 || i===28 || i===70 || i===73 || i===151 ||
             i===154 || i===160 || i===163 || i===196 || i===199 || i===205 || i===208 ){
            const innerDiv = document.createElement('div');
            innerDiv.style.backgroundColor = 'white';
            innerDiv.style.borderRadius = '30px';
            innerDiv.style.width = '100%';
            innerDiv.style.height = '100%';
            cell.appendChild(innerDiv);
            const redGoti = document.querySelector('.red-goti').cloneNode(true);
            redGoti.style.zIndex = '2';
            redGoti.style.display="block";
           if(Math.floor(i / 15) < 6 && i % 15 < 6){
             redGoti.style.color='red';
           }
            else if (Math.floor(i / 15) < 6 && i % 15 >= 9){
                redGoti.style.color='blue';
             }
             else if (Math.floor(i / 15) >= 9 && i % 15 < 6) {
                redGoti.style.color='green';
            } else if (Math.floor(i / 15) >= 9 && i % 15 >= 9) {
                redGoti.style.color='yellow';
            }
             innerDiv.appendChild(redGoti);
        }
        board.appendChild(cell);
    }
}
    //   for dice roll
   function player2(){
         document.querySelector(".i1").classList.toggle("d-none");
          document.querySelector(".i4").classList.toggle("d-none");
   }
   function player3(){
    document.querySelector(".i3").classList.toggle("d-none");
   }
    
     

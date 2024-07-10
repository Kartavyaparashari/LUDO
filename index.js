
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
    
const topGridContainers = document.querySelectorAll('.topgrid');

topGridContainers.forEach(container => {
    for (let i = 0; i < 18; i++) { 
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.border='1px solid black'
        container.appendChild(cell);
    }
});
const middleGridContainers = document.querySelectorAll('.middlegrid');

middleGridContainers.forEach(container => {
    for (let i = 0; i < 18; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.border='1px solid black'
        container.appendChild(cell);
    }
});
const middleGridCells = document.querySelectorAll('.middlegrid .cell');
middleGridCells[1].style.backgroundColor='red';
const img = document.createElement('img');
img.src = 'images/nautical-star-1144619_640.webp';
img.style.height = '28px'; 
middleGridCells[1].appendChild(img);
const img4 = document.createElement('img');
img4.src = 'images/nautical-star-1144619_640.webp';
img4.style.height = '28px'; 
middleGridCells[14].appendChild(img4);
for (let i = 7; i <= 11; i++) {
    middleGridCells[i].style.backgroundColor = 'red';
}
const secondMiddleGridDiv = document.querySelectorAll('.middlegrid')[1];

const middleGridCells1 = secondMiddleGridDiv.querySelectorAll('.cell');
middleGridCells1[16].style.backgroundColor = 'rgb(255, 208, 0)';
const img1 = document.createElement('img');
img1.src = 'images/nautical-star-1144619_640.webp';
img1.style.height = '28px'; 
middleGridCells1[16].appendChild(img1);
const img5 = document.createElement('img');
img5.src = 'images/nautical-star-1144619_640.webp';
img5.style.height = '28px'; 
middleGridCells1[3].appendChild(img5);

for (let i = 6; i <= 10; i++) {
    middleGridCells1[i].style.backgroundColor = 'rgb(255, 208, 0)'; 
}
const topGridCells = document.querySelectorAll('.topgrid .cell');
topGridCells[5].style.backgroundColor='blue';
const img2 = document.createElement('img');
img2.src = 'images/nautical-star-1144619_640.webp';
img2.style.height = '28px'; 
topGridCells[5].appendChild(img2);
const img6 = document.createElement('img');
img6.src = 'images/nautical-star-1144619_640.webp';
img6.style.height = '28px'; 
topGridCells[6].appendChild(img6);
for (let i = 4; i <= 16; i+=3) {
    topGridCells[i].style.backgroundColor = 'blue';
}
const topGridDiv = document.querySelectorAll('.topgrid')[1];
const topGridCells1 = topGridDiv.querySelectorAll('.cell');
topGridCells1[12].style.backgroundColor = 'green';
const img3 = document.createElement('img');
img3.src = 'images/nautical-star-1144619_640.webp';
img3.style.height = '28px'; 
topGridCells1[12].appendChild(img3);
const img7 = document.createElement('img');
img7.src = 'images/nautical-star-1144619_640.webp';
img7.style.height = '28px'; 
topGridCells1[11].appendChild(img7);
for (let i = 1; i <= 13; i+=3) {
    topGridCells1[i].style.backgroundColor = 'green'; 
}
topGridCells1[12].style.backgroundColor = 'green';
}
    //   for dice roll
   function player2(){
         document.querySelector(".i1").classList.toggle("d-none");
          document.querySelector(".i4").classList.toggle("d-none");
   }
   function player3(){
    document.querySelector(".i3").classList.toggle("d-none");
   }
    
     

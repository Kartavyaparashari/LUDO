
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
});
}

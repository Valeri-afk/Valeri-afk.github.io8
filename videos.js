let videoImg = document.querySelectorAll('.video-img');
let timeBtn = document.querySelectorAll('.time-btn');

for(i=0;i<videoImg.length;i++) {
videoImg[i].addEventListener('click', moonFunction);
function moonFunction(event) {
video.src = event.target.dataset.src;
duration = event.target.dataset.duration;
counter = 0;
playImg.src = 'play.png';
clearInterval(stop);
} 
}



for(i=0; i<timeBtn.length; i++) {
timeBtn[i].addEventListener('click', dropFunction);
function dropFunction(event) {
   video.currentTime = Number(event.target.dataset.sec);
   counter = Number((360/duration)*video.currentTime);
}
}


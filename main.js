let video = document.querySelector('.video');
let duration = 97;
let counter = 0;
let pieceRight = document.querySelector('.piece-right');
let pieceLeft = document.querySelector('.piece-left');
let playImg = document.querySelector('.play-img');

function counterFunction() {
   return counter = Number(counter + (360/duration));
};

playImg.addEventListener('click', startFunction);
function startFunction() {
    if(playImg.src === 'https://valeri-afk.github.io/Valeri-afk.github.io8/pause.png') {
        playImg.src = 'play.png';
        video.pause();
        clearInterval(stop);
    }
    else {
        playImg.src = 'https://valeri-afk.github.io/Valeri-afk.github.io8/pause.png';
        function rotateFunction() {
            video.play();
            if(counter < 180) {
                counterFunction();
                pieceRight.style.transform = 'rotate('+ Number(180 + counter) + 'deg)';
                pieceLeft.classList.remove('piece-left-rotated');
                pieceLeft.classList.add('piece-left');
            }
            else if (counter > 179 && counter < 360) {
                counterFunction();
                pieceRight.style.transform = 'rotate('+ Number(180 + counter) + 'deg)';
                pieceLeft.classList.remove('piece-left');
                pieceLeft.classList.add('piece-left-rotated');
            }
            else if (parseInt(counter) === 360) {
                playImg.src = 'play.png';
                counter = 0;
                video.pause();
                clearInterval(stop)
            }
        }
        stop = setInterval(rotateFunction, 1000);
    }
}

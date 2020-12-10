let video = document.querySelector('.video');
let duration = 97;
let counter = 0;
let pieceRight = document.querySelector('.piece-right');
let pieceLeft = document.querySelector('.piece-left');
let playImg = document.querySelector('.play-img');
    
playImg.addEventListener('click', startFunction);
function startFunction() {
    if(playImg.src === 'pause.png') {
        playImg.src = 'play.png';
        video.pause();
        clearInterval(stop);
    }
    else {
        playImg.src = 'pause.png';
        function rotateFunction() {
            video.play();
            if(counter < 180) {
                counter = Number(counter + (360/duration));
                pieceRight.style.transform = 'rotate('+ Number(180 + counter) + 'deg)';
                pieceLeft.classList.remove('piece-left-rotated');
                pieceLeft.classList.add('piece-left');
            }
            else if (counter > 179 && counter < 360) {
                counter = Number(counter + (360/duration));
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

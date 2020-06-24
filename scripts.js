// pretty big, so it gets its own file

// get our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip');
const ranges = player.querySelectorAll('.player__slider');

// build out functions
function togglePlay() {
    // alternate method to do the same thing:
    // const method = video.paused ? 'play' : 'pause';
    // video[method]();
    if(video.paused) {
        video.play();
    } else {
        video.pause();
    }
};

function updateButton() {
    console.log('Update the button');
}

// hook up the event listeners
toggle.addEventListener('click', togglePlay);
// but the button itself doesn't update - still show the arrow
// we have to update the text inside that button
// too cool! now when I click, the video pauses/restarts
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
// updates the play button to work
video.addEventListener('click', togglePlay);

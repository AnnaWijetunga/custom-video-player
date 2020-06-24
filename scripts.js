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

// updates the button to pause or play
function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
    console.log(icon);
};

function skip() {
    console.log('Skipping!');
    // parseFloat converts to number
    video.currentTime += parseFloat(this.dataset.skip)
};

function handleRangeUpdate() {
    video[this.name] = this.value;
};

function handleProgress() {
    // * 100 to show whole percentage not decimals
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.getElementsByClassName.flexBasis = `${percent}%`;
};

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
    // console.log(e);
}

// hook up the event listeners
toggle.addEventListener('click', togglePlay);
// but the button itself doesn't update - still show the arrow
// we have to update the text inside that button
// too cool! now when I click, the video pauses/restarts
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
// updates the play button to work
video.addEventListener('click', togglePlay);
// to skip fast forward
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
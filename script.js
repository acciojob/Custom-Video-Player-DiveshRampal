/* Edit this file */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const inputs = document.querySelectorAll('.controls input');

    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      if (this.name === 'volume') {
        video.volume = this.value;
      } else if (this.name === 'playback-speed') {
        video.playbackRate = this.value;
      }
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

    playerButton.addEventListener('click', () => {
      if (video.paused) {
        video.play();
        playerButton.textContent = '❚ ❚';
      } else {
        video.pause();
        playerButton.textContent = '►';
      }
    });

    video.addEventListener('timeupdate', () => {
      const progress = (video.currentTime / video.duration) * 100;
      progressFilled.style.width = `${progress}%`;
    });

    progressBar.addEventListener('click', (e) => {
      const progressBarWidth = progressBar.offsetWidth;
      const clickPosition = e.offsetX;
      const seekTime = (clickPosition / progressBarWidth) * video.duration;
      video.currentTime = seekTime;
    });

    rewindButton.addEventListener('click', () => {
      video.currentTime -= 10;
    });

    skipButton.addEventListener('click', () => {
      video.currentTime += 25;
    });
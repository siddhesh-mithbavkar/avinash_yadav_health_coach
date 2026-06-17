const video = document.getElementById('heroVideo');
const btn = document.getElementById('videoToggle');

btn.addEventListener('click', function () {

    if (video.paused) {
        video.play();
        btn.innerHTML = '⏸';
    } else {
        video.pause();
        btn.innerHTML = '▶';
    }

});
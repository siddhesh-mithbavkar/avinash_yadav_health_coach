const video = document.getElementById('heroVideo');

function enableSound() {
    video.muted = false;
    video.play();
    document.removeEventListener('click', enableSound);
}

document.addEventListener('click', enableSound);

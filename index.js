function playSound(event) {
    const audio = document.querySelector(`audio[id="${event.keyCode}"]`);
    const key = document.querySelector(`.key[id="${event.keyCode}"]`);
    if (!audio) return; // stop function
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);



function playClick(e) {
    const audio = document.querySelector(`audio[id="${e}"]`);
    audio.currentTime = 0;
    audio.play();
}

const key = document.querySelectorAll(`.key`);
key.forEach(playClick);

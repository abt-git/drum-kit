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

//_____________________________________________________________________________

const button = document.querySelector(`.key`);

button.addEventListener("click", playClick);

function playClick(e) {
    console.log(button);
    const audio = document.querySelector(`audio[id="65"]`);
    audio.currentTime = 0;
    audio.play();
    button.classList.add('playing');
}



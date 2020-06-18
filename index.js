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

let wrapper = document.querySelector('.keys');

let selectedBt;

wrapper.onclick = function(event) {
    let target = event.target.closest("div");
    playClick(target);
    console.log(target);    
}

function playClick(bt) {
    bt.classList.add('playing');
    const audio = document.querySelector(`audio[id="${bt.id}"]`);
    audio.play();    
}
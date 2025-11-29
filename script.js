const jumpscare = document.getElementById('jumpscare');
const ghost = document.getElementById('ghost-emoji');
const sound = document.getElementById('jumpscare-sound');
const btn = document.getElementById('start-btn');

btn.addEventListener('click', function() {
    btn.style.display = 'none';
    ghost.style.display = 'block';
    sound.play();

    setTimeout(() => {
        jumpscare.style.display = 'none';
    }, 1500);
});
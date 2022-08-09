const video = document.querySelector('video');
const btn = document.querySelector('.switch-btn');
const preLoader = document.querySelector('.pre-loader');

window.addEventListener('load', function() {
    preLoader.style.visibility = 'hidden';
    btn.addEventListener('click', function() {
        if (!btn.classList.contains('slide')) {
            btn.classList.add('slide');
            video.pause();
        } else {
            btn.classList.remove('slide');
            video.play();
        }
    })
})

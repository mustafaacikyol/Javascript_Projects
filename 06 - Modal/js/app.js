const openModal = document.querySelector('.open-modal');
const modal = document.querySelector('.modal-overlay')
const closeBtn = document.querySelector('.close-btn');

openModal.addEventListener('click', function() {
    modal.classList.add('show-modal');
});

closeBtn.addEventListener('click', function() {
    modal.classList.remove('show-modal');
});

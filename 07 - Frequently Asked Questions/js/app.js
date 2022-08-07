const questions = document.querySelectorAll('.question');

questions.forEach(function(question) {
    question.addEventListener('click', function() {
        questions.forEach(function(item) {
            if (item !== question) {
                item.classList.remove('show-text');
            }
        })
        this.classList.toggle('show-text');
    })
});

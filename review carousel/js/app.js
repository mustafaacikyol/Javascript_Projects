const review = [{
    id: 1,
    image: "./img/1.png",
    name: "Jodie Tyler",
    job: "UX Designer",
    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis saepe unde voluptate modi debitis neque eveniet omnis cum dolore ad."

}, {
    id: 2,
    image: "./img/2.png",
    name: "Tom Tyler",
    job: "Front End Developer",
    info: "Et pariatur aspernatur nobis! Fugiat iure dolorum ducimus rerum vero! Eaque repellat sapiente reiciendis iusto animi."
}, {
    id: 3,
    image: "./img/3.png",
    name: "John Tyler",
    job: "Back End Developer",
    info: "A, repellendus laborum quidem ullam voluptatem perspiciatis ea at porro totam aliquam nam, ducimus quod ad doloremque voluptatibus inventore."
}, {
    id: 4,
    image: "./img/4.png",
    name: "Julia Tyler",
    job: "Project Manager",
    info: " laborum eaque corrupti architecto veritatis. Ipsam facere quod nulla, ea dolorum expedita iure fuga recusandae veniam maxime non provident."
}];

const image = document.getElementById('img');
const name = document.getElementById('name');
const job = document.getElementById('job');
const info = document.getElementById('text');

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const randomBtn = document.querySelector('.btn');

let currentItem = 0;

function showPerson() {
    image.src = review[currentItem].image;
    name.textContent = review[currentItem].name;
    job.textContent = review[currentItem].job;
    info.textContent = review[currentItem].info;
}

window.addEventListener('DOMContentLoaded', function() {
    showPerson();
});

nextBtn.addEventListener('click', function() {
    currentItem++;

    if (currentItem > review.length - 1) {
        currentItem = 0;
    }

    showPerson();

});

prevBtn.addEventListener('click', function() {
    currentItem--;

    if (currentItem < 0) {
        currentItem = review.length - 1;
    }

    showPerson();

});

randomBtn.addEventListener('click', function() {
    currentItem = Math.floor(Math.random() * review.length);
    showPerson();
});

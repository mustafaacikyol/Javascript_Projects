const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const items = document.querySelectorAll('.deadline-format h4');
const deadline = document.querySelector('.deadline');

let futureDate = new Date();
const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const day = weekdays[futureDate.getDay()];
const hour = futureDate.getHours();
const min = futureDate.getMinutes();

//set the timer to always start 10 days ahead
futureDate = new Date(year, futureDate.getMonth(), date+10, futureDate.getDay(), hour, min);

giveaway.innerHTML = `giveaway ends on ${day}, ${date} ${month} ${year}, ${hour}:${min}am `;

let countdown = setInterval(getRemaingTime, 1000);

function getRemaingTime() {
  
  const today = new Date();
  let remain = futureDate.getTime() - today.getTime();

  if (remain < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `Time has expired.`
  }

  items.forEach(function (item, index) {

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    let arrValue = [Math.floor(remain / day), Math.floor((remain % day) / hour), Math.floor((remain % hour) / minute), Math.floor((remain % minute) / second)];

    item.innerHTML = arrValue[index];

  });

}

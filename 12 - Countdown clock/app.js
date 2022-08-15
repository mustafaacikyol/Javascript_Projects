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

//set the timer to always start 10 days ahead
futureDate = new Date(futureDate.getFullYear(), futureDate.getMonth(),futureDate.getDate()+10, futureDate.getHours(), futureDate.getMinutes(), futureDate.getSeconds());

const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const day = weekdays[futureDate.getDay()];
const hour = futureDate.getHours();
const min = futureDate.getMinutes();

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

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    let arrValue = [Math.floor(remain / days), Math.floor((remain % days) / hours), Math.floor((remain % hours) / minutes), Math.floor((remain % minutes) / seconds)];

    if (arrValue[index]<10) {
      arrValue[index] = '0' + arrValue[index];
    }

    item.innerHTML = arrValue[index];

  });

}

/// counter
const seconds = document.querySelector('.seconds');
const mint = document.querySelector('.min');
const hours = document.querySelector('.hour');
const days = document.querySelector('.days');

function timer() {
  // create new date and furture date
  const now = new Date();
  const event = new Date('11-11-2021');

  // get now time and future time
  const timeNow = now.getTime();
  const timeEvent = event.getTime();

  // gettting time
  const count = timeEvent - timeNow;

  // getting time in sec, min , hours, day
  let sec = Math.round(count / 1000);
  let min = Math.round(sec / 60);
  let hour = Math.round(min / 60);
  let day = Math.round(hour / 24);

  // getting division time
  sec %= 60;
  min %= 60;
  hour %= 24;

  sec = sec < 10 ? '0' + sec : sec;
  min = min < 10 ? '0' + min : min;
  hour = hour < 10 ? '0' + hour : hour;
  day = day < 10 ? '0' + day : day;
  seconds.innerText = sec;
  mint.innerText = min;
  hours.innerText = hour;
  days.innerText = day;
  setTimeout(timer, 1000);
}
timer();
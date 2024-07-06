/// <reference types="../@types/jquery" />

// * open and closing navbar
$(".open-menu").on('click', function () {
  $("#leftMenu").animate({ width: '250px' }, 100)
  $(".open-menu").animate({ marginLeft: '250px' }, 100)
})

$(".close-btn").on('click', function () {
  $("#leftMenu").animate({ width: '0px' }, 100)
  $(".open-menu").animate({ marginLeft: '0px' }, 100)
})

// &--------------------------------------

// * slide up and slide down

$(".toggle").on('click', function (e) {
  $(e.target).next().slideToggle(500);
  $('.inner-slider').not($(e.target).next()).slideUp(500);          //hide all items(inner slider) - except the next of one i clicked on(inner slider of toggle i click)
});

// &--------------------------------------

// * counter section

function countDown() {

  // the future Date
  let futureDate = new Date("22 june 2025 3:56:00");
  future = (futureDate.getTime());
  // console.log(futureDate);
  // console.log(future);

  // the Date Now
  let nowDate = new Date();
  now = (nowDate.getTime());
  // console.log(nowDate);
  // console.log(now);

  // The difference between the present and the future
  timeDifference = (future - now);
  // console.log(timeDifference);

  // Convert the time difference into days, hours, minutes, and seconds
  // secondsInDay = (24 * 60 * 60 * 1000)
  const days = Math.floor(timeDifference / (24 * 60 * 60 * 1000));

  const hours = Math.floor((timeDifference % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));

  const minutes = Math.floor((timeDifference % (60 * 60 * 1000)) / (60 * 1000));

  const seconds = Math.floor((timeDifference % (60 * 1000)) / 1000);

  // display result in html
  $(".days").html(`${days} D`);
  $(".hours").html(`${hours} h`);
  $(".minutes").html(`${minutes} m`);
  $('.seconds').html(`${seconds} s`)

  //to call a function every milliseconds
  setInterval(function () {
    countDown();
  }, 1000);
}

// to execute a function once a web page has completely loaded
window.onload = function () {
  countDown();
}

// &--------------------------------------

// * contact Us sction

let maxNum = 100;

$("textarea").on('keyup', function () {
  let wordsCountInput = $(this).val().length;
  let residualWords = maxNum - wordsCountInput;
  // console.log(wordsCountInput);
  // console.log(residualWords);
  if (residualWords <= 0) {
    $('#specialChars').text('your available character finished')
  } else {
    $('#specialChars').text(residualWords)
  }
})


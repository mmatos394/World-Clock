function updateTime() {
  let istanbulElement = document.querySelector("#istanbul");
  let istanbulDateElement = istanbulElement.querySelector(".date");
  let istanbulTimeElement = istanbulElement.querySelector(".time");
  istanbulDateElement.innerHTML = moment()
    .tz("Asia/Istanbul")
    .format("MMMM Do YYYY");
  istanbulTimeElement.innerHTML = moment()
    .tz("Asia/Istanbul")
    .format("HH:mm:ss");

  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  sydneyDateElement.innerHTML = moment()
    .tz("Australia/Sydney")
    .format("MMMM Do YYYY");
  sydneyTimeElement.innerHTML = moment()
    .tz("Australia/Sydney")
    .format("HH:mm:ss");

  let hanoiElement = document.querySelector("#hanoi");
  let hanoiDateElement = hanoiElement.querySelector(".date");
  let hanoiTimeElement = hanoiElement.querySelector(".time");
  hanoiDateElement.innerHTML = moment()
    .tz("Asia/Ho_Chi_Minh")
    .format("MMMM Do YYYY");
  hanoiTimeElement.innerHTML = moment()
    .tz("Asia/Ho_Chi_Minh")
    .format("HH:mm:ss");
}

setInterval(updateTime, 1000);

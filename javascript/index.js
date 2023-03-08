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

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if ((cityTimeZone = "current")) {
    cityTimeZone = moment.tz.guess();
  }
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityTimeZone}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("HH:mm:ss")}</div>
        </div> 
        <a href="/">All cities</a>
        `;
}

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);

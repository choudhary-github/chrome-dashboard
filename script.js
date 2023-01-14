let array = ["bitcoin", "dogecoin", "ethereum", "litecoin"];
const client_id = "NkQu5HW5YSjrMojtNaX3XzNTXOv78LU54LCIboKd6Wk";
const API_key = "b350c11c195ac8440772b1b19b8d5e08";
fetch(
  `https://api.unsplash.com/photos/random/?client_id=${client_id}&orientation=landscape&query=nature`
)
  .then((res) => {
    if (!res.ok) {
      throw Error("Something went wrong!");
    }
    return res.json();
  })
  .then((data) => {
    document.body.style.backgroundImage = `url(${data.urls.full})`;
    document.getElementById("credit").innerHTML = data.user.name;
    // throw Error("I am an error!");
  })
  .catch((error) => {
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1501854140801-50d01698950b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzOTg4Mjd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzM2ODYzMDQ&ixlib=rb-4.0.3&q=80&w=1080)`;
    document.getElementById("credit").innerHTML = "Yousef Espanioly";

    console.error(error);
  })
  .catch((err) => console.error(err));

let length = array.length;
for (let i = 0; i < length; i++) {
  fetch(`https://api.coingecko.com/api/v3/coins/${array[i]}`)
    .then((res) => {
      if (!res.ok) {
        throw Error("Something went wrong!");
      }
      return res.json();
    })
    .then((data) => {
      let image = data.image.thumb;
      let price = data.market_data.current_price.inr;
      document.getElementById("crypto").children[i].innerHTML = `
      <img src=${image} alt=''/>
      <p><i class="fa-solid fa-indian-rupee-sign"></i> ${price}<p/INR : >
      `;
    })
    .catch((err) => console.error(err));
}

setInterval(() => {
  let time = new Date();
  let timeNow = time.toLocaleString("en-UK", {
    hour: "2-digit",
    minute: "numeric",
    hour12: true,
  });
  document.getElementById("time").innerText = timeNow;
}, 1000);

fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=kolkata&appid=${API_key}`
)
  .then((res) => {
    if (!res.ok) {
      throw Error("Something went wrong!");
    }
    return res.json();
  })
  .then((data) => {
    let temp = `${Math.round(data.main.temp - 273)}ºc`;
    let cityName = data.name;
    document.getElementById("temp").innerHTML += `
    ${temp}
    `;
    document.getElementById("city").innerText = cityName;
  })
  .catch((err) => console.error(err));

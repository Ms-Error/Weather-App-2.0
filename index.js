function fs(tim){
let date = new Date(tim);
let hr = date.getHours();
let min = date.getMinutes();
let ar =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let day = ar[date.getDay()];
if(min<10){
    min=`0${min}`;
}
if (hr < 10) {
  hr = `0${hr}`;
}
return`${day} ${hr}:${min}`;
}
function display(response){
    console.log(response.data);
     let ci = document.querySelector(".city");
     ci.innerHTML = response.data.name;
    let tem = document.querySelector("#te");
    tem.innerHTML=Math.round(response.data.main.temp);
    let d = document.querySelector("#desc");
    d.innerHTML=response.data.weather[0].description;
    let h = document.querySelector("#humid");
    h.innerHTML=(`${response.data.main.humidity}%`);
    let w = document.querySelector("#wi");
    w.innerHTML = (`${response.data.wind.speed} km/h`);
    let da=document.querySelector("#date");
    da.innerHTML=fs(response.data.dt*1000);
     cels = response.data.main.temp;
    let i = document.querySelector("#icon");
    i.setAttribute("alt",response.data.weather[0].description);
    i.setAttribute("src",`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
}
function searc(city){
let apiKey = "7d8dea017dfa21f3db39b33bb85df077";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(display);
}
function hanc(event){
    event.preventDefault();
    let cin = document.querySelector("#ct");
    searc(cin.value);
}

function comtemp(event) {
  event.preventDefault();
  let tem = document.querySelector("#te");
   celcius.classList.add("active");
   fah.classList.remove("active");
  tem.innerHTML = Math.round(cels);
}
function dtemp(event){
    event.preventDefault();
      let tem = document.querySelector("#te");
      celcius.classList.remove("active");
      fah.classList.add("active");
   let tempf = (cels * 9) / 5 + 32;
   tem.innerHTML = Math.round(tempf);

}

let cels =null;

let form = document.querySelector("#search");
form.addEventListener("submit",hanc);

let fah = document.querySelector("#far");
fah.addEventListener("click",dtemp);

let celcius = document.querySelector("#cs");
celcius.addEventListener("click",comtemp);
searc("New York");
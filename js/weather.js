const API_KEY="3474641ed9b72ef9c068535c404e21c2";

function onGeoOk(position){
    console.log(position);
    const lat=position.coords.latitude;
    const lon=position.coords.longitude;
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`
    console.log(url);
    fetch(url).then(res=>res.json()).then(data=>{
        const weather=document.querySelector("#weather span:first-child");
        const city=document.querySelector("#weather span:last-child");
        city.innerText=data.name;
        weather.innerText=`Weather : ${data.weather[0].main} / City : ${data.main.temp}`;
        
    });
    
    console.log("you lived in ",lat, lon);
    //https://openweathermap.org/
}

function onGeoError(position){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
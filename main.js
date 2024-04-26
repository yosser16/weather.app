const country_name = document.querySelector(".country");

const todayDate = document.querySelector(".date");

const todayTempurature = document.querySelector(".temperature");

const feelsLike = document.querySelector(".feelsLike");

const windSpeed = document.querySelector(".windSpeed");

const hum = document.querySelector(".humidity"); 



const chooseCountry = async function () {
    try {
      const res = await axios.get("https://api.ipify.org/?format=json");
      const ip = res.data.ip;
      console.log(ip); 

  
const geoinfo = await axios.get( `https://api.ipgeolocation.io/ipgeo?apiKey=60219071be394c3d85cbd8df7146cd91&ip=${ip}`)
 console.log(geoinfo);
const country1= geoinfo.data.country_name ;  

const weatherData = await axios.get(`https://api.weatherapi.com/v1/current.json?key=2388a4a8401f4e41884193406241804&q=${country1}&aqi=no`)
console.log(weatherData);  

const {feelslike_c,humidity,wind_kph}=weatherData.data.current    
const {country,localtime}=weatherData.data.location    
const {text}=weatherData.data.current.condition  

country_name.innerHTML=country
feelsLike.innerHTML=text
todayDate.innerHTML=localtime
todayTempurature.innerHTML=feelslike_c
windSpeed.innerHTML= `${wind_kph}k/h `
hum.innerHTML = `${humidity} %`;

} catch (error) {
console.log(error); 
}   
} 
chooseCountry()



console.log("working");

let search=document.querySelector('#search');
let btn=document.querySelector('#btn');
let temp=document.querySelector('#temp');
let cityname=document.querySelector('#cityname');
let humidity=document.querySelector('#humidity');
let windspeed=document.querySelector('#windspeed');
let sections=document.querySelectorAll('.sections');

cityname.innerHTML="Please enter a city name";
temp.innerHTML="";
sections.forEach(function(section){

    if(!section.classList.contains('cityname'))
        section.style.opacity="0";
})

let apikey="db613d179dd4d84b08461a186abb88e6";
const searchCity=async (city)=>
{
    try{
        const data=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`);
        const jsonData= await data.json();
        console.log(jsonData);
        temp.innerHTML=`${Math.round(jsonData.main.temp)}* c`;
        cityname.innerHTML=jsonData.name;
        humidity.innerHTML=jsonData.main.humidity;
        sections.forEach(function(section){
    
            section.style.opacity="1";
        })
    }catch(err)
    {
        alert("Please provide correct city name")
        console.log(err);

    }
 
}

btn.addEventListener('click',(e)=>{
    searchCity(search.value);
})
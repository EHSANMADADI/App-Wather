const abr=document.querySelector(".abr");
const sun=document.querySelector(".sun");
const barf=document.querySelector(".barf");
function show(){
     setInterval(() => {
          sun.classList.toggle("color");
        
     }, 1000);

}


function roteteb(){
     setInterval(() => {
          barf.classList.toggle("rotet");

     },2000);
}

function heit(){
     setInterval(() => {
        abr.classList.toggle("heit");

     },1000);
}
show();
roteteb();
heit();


///work for API

const inputcityname =document.querySelector(".inputcity");
const addinput=document.querySelector("#add");
const cityname=document.querySelector("#cityname");
const description=document.querySelector("#description");
const temp=document.querySelector("#temp");
const wind=document.querySelector("#wind");
const apiKey = "3045dd712ffe6e702e3245525ac7fa38";
///API
async function Getweather(){
     var apiresult=await(await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputcityname.value}&appid=${apiKey}`)).json();
     console.log(apiresult);
     setInfo(apiresult);
}

    



addinput.addEventListener('click',Getweather);

///set detailes in document html

///convert kelvin to selesus
function convert(value) { 
     return(value-273).toFixed(1);

}

function setInfo(data){
     var namecity=data["name"];
     var dec=data["weather"][0]["description"];
     var te=data["main"]["temp"];
     var wi=data["wind"]["speed"];

     cityname.innerHTML=`City:${namecity}`;
     description.innerHTML=`${dec}`;
     temp.innerHTML=`Temp:${convert(te)} c`;
     wind.innerHTML=`Wind: ${wi} km/h`;

}
import React from 'react';
import apiKey from './apiKeys';
import Clock from 'react-live-clock';
import Forcast from './forcast';
import loader from './Images/WeatherIcons.gif';
import ReactAnimatedWeather from 'react-animated-weather';

function dateBuilder(d){
    let months=[
        "January","February","March","April","May","June",
        "July", "August","September","October","November","December"
    ];
    let days=[
     "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday",
     "Saturday"
    ];
    let day= days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${date},${year} ${month} ${day}`;
};

const defaults={
    color:"white",
    size:112,
    animate:true,
};

class Weather extends React.Component{
    state={
        lat:undefined,
        lon:undefined,
        errorMessage:undefined,
        temperatureC:undefined,
        temperatureF:undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        icon: "CLEAR_DAY",
        sunrise: undefined,
        sunset: undefined,
         errorMsg: undefined,
    };

  componentDidMount(){
    if(navigator.geolocation){
        this.getPosition()

        .then((position)=>{
            this.getWeather(position.coords.latitude,position.coords.longitude);
        })
        .catch((err) => {
            //If user denied location service then standard location weather will le shown on basis of latitude & latitude.
            this.getWeather(28.67, 77.22);
            alert(
              "You have disabled location service. Allow 'This APP' to access your location. Your current location will be used for calculating Real time weather."
            );
          });
      } else {
        alert("Geolocation not available");
      }
  
      this.timerID = setInterval(
        () => this.getWeather(this.state.lat, this.state.lon),
        600000
      );
    }


}


































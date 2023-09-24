import React from 'react';
import './WeatherResult.css';
import clear from '../icons/clear.svg';
import cloud from '../icons/cloud.svg';
import haze from '../icons/haze.svg';
import humidity from '../icons/humidity.svg';
import rain from '../icons/rain.svg';
import snow from '../icons/snow.svg';
import storm from '../icons/storm.svg';
import wind from '../icons/wind.svg';
import mist from '../icons/mist.svg';

const WeatherResult = ({ weatherData }) => {

  if (!weatherData) {
    return <div className='city-name'>Please Enter City Name </div>;
  }

  const weatherCondition = weatherData.weather[0].main;

  const weatherIcons = {
    Clear: clear,
    Clouds: cloud,
    Haze: haze,
    Rain: rain,
    Snow: snow,
    Thunderstorm: storm,
    Wind: wind,
    Mist: mist,
  };

  return (
    <div className="weather">
      <div className="weather-image">
        <img src={weatherIcons[weatherCondition]} alt={weatherIcons[weatherCondition]} />
      </div>
      <div className="weather-temp">
        <p>{Math.round(weatherData.main.temp)}&deg;C</p> 
      </div>
      <div className="weather-location">
        <p>{weatherData.name}</p> 
      </div>
      <div className="data-container">
        <div className="element">
          <img src={humidity} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">{weatherData.main.humidity}%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">{weatherData.wind.speed} km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherResult;

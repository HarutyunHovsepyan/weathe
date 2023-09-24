import React, { useState} from 'react';
import './SearchCity.css';
import searchIcon from '../icons/search.svg';
import WeatherResult from '../main/WeatherResult';
import axios from 'axios';

const SearchCity = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = 'aed8a264ee06b21111a63106aa50b791';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric&q=${city}`;

  const search = async () => {
    try {
      const response = await axios.get(apiUrl);
      setWeatherData(response.data);
      setError(null); 
    } catch (error) {
      setError('Invalid city name');
      setWeatherData(null); 
    }
  };

  return (
    <div className="container">
      <div className="top-bar">
        <input
          type="text"
          className="cityInput"
          placeholder="Enter Your city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <div className="search-icon" onClick={search}>
          <img src={searchIcon} alt="Search icon" />
        </div>
      </div>
      {error && <div className="error-message">{error}</div>}
      <WeatherResult weatherData={weatherData} />
    </div>
  );
};

export default SearchCity;

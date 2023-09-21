import "./WeatherResult.css";
import cloud from "../icons/cloud.svg";
import humidity from "../icons/humidity.svg";
import wind from "../icons/wind.svg";

const WeatherResult = () => {
  return (
    <div className="weather">
      <div className="weather-image">
        <img src={cloud} alt="Cloud" />
      </div>
      <div className="weather-temp">
        <p>24&deg;c</p>
      </div>
      <div className="weather-location">
        <p>London</p>
      </div>
      <div className="data-container">
        <div className="element">
            <img src={humidity} alt="" className="icon" />
            <div className="data">
                <div className="humidity-percent">
                    64%
                </div>
                <div className="text">
                    Humidity
                </div>
            </div>
        </div>
        <div className="element">
            <img src={wind} alt="" className="icon" />
            <div className="data">
                <div className="humidity-percent">
                    18 km/h
                </div>
                <div className="text">
                   Wind Speed
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherResult;

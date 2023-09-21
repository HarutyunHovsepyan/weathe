import "./SearchCity.css";
import searchIcon from "../icons/search.svg";
import WeatherResult from "../main/WeatherResult";

const SearchCity = () => {
  return (
    <div className="container">
      <div className="top-bar">
        <input
          type="text"
          className="cityInput"
          placeholder="Enter Your city name"
        />
        <div className="search-icon">
          <img src={searchIcon} alt="Search icon" />
        </div>
      </div>
      <WeatherResult />
    </div>
  );
};

export default SearchCity;

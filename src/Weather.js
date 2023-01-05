import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather">
      Hello From Weather
      <div class="container">
        <form id="cityForm" class="city-form">
          <input
            class="search-input"
            type="text"
            placeholder="Enter a City"
            id="cityInput"
          />
          <button type="submit" class="search-button" id="citySearchn">
            <img
              class="search-icon"
              src="images/svg/022-magnifying-glass.svg"
              alt="search icon"
            />
          </button>
        </form>
      </div>
      <div class="content-box">
        <div class="container">
          <div class="row">
            <div class="col-6">
              <h1 class="row">Tucson, Arizona</h1>
              <div class="text row" id="currentTime">
                00:00
              </div>
              <div class="text row" id="currentHumidity">
                Humidity: 0%
              </div>{" "}
              <div class="text row" id="currentWind">
                Wind: 0mph
              </div>
            </div>
            <div class="col-3">
              <div class="row">
                <img
                  src="images/svg/019-sun.svg"
                  class="weather-icon"
                  alt="Sun Icon"
                  id="icon"
                />
              </div>
              <div class="row">
                <div class="text weather-decription" id="weatherDescription">
                  Sunny
                </div>
              </div>
            </div>
            <div class="col-3">
              <div class="row">
                <div class="text main-temp" id="tempToday">
                  100
                </div>

                <a href="#" id="imperialButton">
                  <img
                    class="fara-button"
                    src="images/svg/004-farenheit.svg"
                    id="imperialIcon"
                    alt="farenheit icon"
                  />
                </a>
              </div>

              <div class="row">
                <div class="text" id="lowHi">
                  64°/102°
                </div>
              </div>
            </div>
          </div>
          <div class="forecast-group" id="forecast"></div>
        </div>
      </div>
    </div>
  );
}

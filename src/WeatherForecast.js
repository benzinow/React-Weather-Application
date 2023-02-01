import React from "react";
import WeatherIconStatic from "./WeatherIconStatic";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">DAY</div>
          <WeatherIconStatic />

          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max"></span>
            <span className="WeatherForecast-temperature-min"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

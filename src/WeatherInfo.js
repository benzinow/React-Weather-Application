import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6 temp-box">
          <img src={props.data.iconUrl} alt="weather icon" />
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>HUMIDITY: {props.data.humidity}</li>
            <li>WIND: {Math.round(props.data.wind)}mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

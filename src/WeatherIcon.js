import React from "react";
import Images from "./weather-icons";

export default function WeatherIcon(props) {
  const codeMapping = {
    "clear-sky-day": Images.clearDay,
    "clear-sky-night": Images.clearNight,
    "few-clouds-day": Images.partlyCloudyDay,
    "few-clouds-night": Images.partlyCloudyNight,
    "scattered-clouds-day": Images.cloudy,
    "scattered-clouds-night": Images.cloudy,
    "broken-clouds-day": Images.cloudy,
    "broken-clouds-night": Images.cloudy,
    "shower-rain-day": Images.drizzle,
    "shower-rain-night": Images.drizzle,
    "rain-day": Images.rain,
    "rain-night": Images.rain,
    "thunderstorm-day": Images.storm,
    "thunderstorm-night": Images.storm,
    "snow-day": Images.snow,
    "snow-night": Images.snow,
    "mist-day": Images.foggy,
    "mist-night": Images.foggy,
  };

  return (
    <img
      src={codeMapping[props.code]}
      height={props.size}
      alt="forecast_icon"
    />
  );
}

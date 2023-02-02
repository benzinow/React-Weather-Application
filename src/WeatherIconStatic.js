import React from "react";
import Images from "./weather-icons";

export default function WeatherIconStatic(props) {
  const codeMapping = {
    "clear-sky-day": Images.clearDayStatic,
    "clear-sky-night": Images.clearNightStatic,
    "few-clouds-day": Images.partlyCloudyDayStatic,
    "few-clouds-night": Images.partlyCloudyNightStatic,
    "scattered-clouds-day": Images.cloudyStatic,
    "scattered-clouds-night": Images.cloudyStatic,
    "broken-clouds-day": Images.cloudyStatic,
    "broken-clouds-night": Images.cloudyStatic,
    "shower-rain-day": Images.drizzleStatic,
    "shower-rain-night": Images.drizzleStatic,
    "rain-day": Images.rainStatic,
    "rain-night": Images.rainStatic,
    "thunderstorm-day": Images.stormStatic,
    "thunderstorm-night": Images.stormStatic,
    "snow-day": Images.snowStatic,
    "snow-night": Images.snowStatic,
    "mist-day": Images.foggyStatic,
    "mist-night": Images.foggyStatic,
  };

  return <img src={codeMapping[props.code]} height="50px" />;
}

import React from "react";
import Images from "./weather-icons";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": Images.clearDay,
    "01n": Images.clearNight,
    "02d": Images.partlyCloudyDay,
    "02n": Images.partlyCloudyNight,
    "03d": Images.cloudy,
    "03n": Images.cloudy,
    "04d": Images.cloudy,
    "04n": Images.cloudy,
    "09d": Images.drizzle,
    "09n": Images.drizzle,
    "010d": Images.rain,
    "010n": Images.rain,
    "011d": Images.storm,
    "011n": Images.storm,
    "013d": Images.snow,
    "013n": Images.snow,
    "015d": Images.foggy,
    "015n": Images.foggy,
  };

  return <img src={codeMapping[props.code]} height="90px" />;
}

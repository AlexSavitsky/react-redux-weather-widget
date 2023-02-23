import { useSelector } from "react-redux";
import { formatToLocalTime } from "../../services/weatherService";
import Spinner from "../spinner/Spinner";

import {
  UilArrowUp,
  UilArrowDown,
  UilSunset,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
} from "@iconscout/react-unicons";

const TemperatureAndDetails = () => {
  const { weatherData, weatherLoadingStatus } = useSelector(
    (state) => state.weather
  );

  if (weatherLoadingStatus === "loading" || !weatherData) {
    return <Spinner />;
  }

  const {
    speed,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    dt,
    country,
    sunrise,
    sunset,
    details,
    timezone,
    icon,
    name,
  } = weatherData;

  return (
    <div className="z-30">
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">
          {formatToLocalTime(dt, timezone)}
        </p>
      </div>

      <div className="flex items-center justify-between  text-xl text-cyan-300">
        <div className="flex flex-col items-center justify-around basis-2/5">
          <p className="text-white text-3xl font-medium ">{`${name}, ${country}`}</p>
          <p className="basis-2/4">{details}</p>
        </div>
        <img src={icon} alt="img" className="w-30" />
      </div>

      <div className="flex flex-row items-center justify-between text-white ">
        <p className="text-8xl basis-2/5 text-center">{temp}°</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className="mr-1" />
            Real fell:
            <span className="font-medium ml-1">{feels_like}°</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">{humidity}%</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">{speed}km/h</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <UilSun />
        <p className="font-light ">
          Rise:{" "}
          <span className="font-medium ml-1">
            {formatToLocalTime(sunrise, timezone, "hh:mm a")}
          </span>
        </p>
        <p className="font-light">|</p>
        <UilSunset />
        <p className="font-light ">
          Set:{" "}
          <span className="font-medium ml-1">
            {formatToLocalTime(sunset, timezone, "hh:mm a")}
          </span>
        </p>
        <p className="font-light">|</p>
        <UilArrowUp />
        <p className="font-light ">
          High: <span className="font-medium ml-1">{temp_max}°</span>
        </p>
        <p className="font-light">|</p>
        <UilArrowDown />
        <p className="font-light ">
          Low: <span className="font-medium ml-1">{temp_min}°</span>
        </p>
      </div>
    </div>
  );
};

export default TemperatureAndDetails;

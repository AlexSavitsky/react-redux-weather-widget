import { DateTime } from "luxon";

const API_KEY = "0fac21dc3e33a751c1a9c27b53929007";
const API_BASE = "https://api.openweathermap.org/data/";

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(`${API_BASE}/${infoType}`);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return fetch(url).then((res) => res.json());
};

const transformCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    timezone,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  const { main: details, icon } = weather[0];

  return {
    lat,
    lon,
    temp: Math.floor(temp),
    feels_like: Math.floor(feels_like),
    temp_min: Math.floor(temp_min),
    temp_max: Math.floor(temp_max),
    humidity,
    speed,
    name,
    dt,
    timezone,
    country,
    sunrise,
    sunset,
    details,
    icon: iconUrlFromCode(icon),
  };
};

const transformForecastWeather = (data) => {
  let { timezone, daily, hourly } = data;
  daily = daily.slice(1, 6).map((item) => {
    return {
      title: formatToLocalTime(item.dt, timezone, "ccc"),
      temp: Math.floor(item.temp.day),
      icon: iconUrlFromCode(item.weather[0].icon),
    };
  });

  hourly = hourly.slice(1, 6).map((item) => {
    return {
      title: formatToLocalTime(item.dt, timezone, "hh:mm a"),
      temp: Math.floor(item.temp),
      icon: iconUrlFromCode(item.weather[0].icon),
    };
  });

  return { timezone, daily, hourly };
};

const getFormattedWeatherData = async (searchParams) => {
  const transformedCurrentWeather = await getWeatherData(
    "2.5/weather",
    searchParams
  ).then(transformCurrentWeather);

  const { lat, lon } = transformedCurrentWeather;

  const transformedForecastWeather = await getWeatherData("3.0/onecall", {
    lat,
    lon,
    exclude: "current,minutely,alerts",
    units: searchParams.units,
  }).then(transformForecastWeather);

  return { ...transformedCurrentWeather, ...transformedForecastWeather };
};

const formatToLocalTime = (
  sec,
  zone,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(sec).setZone(zone).toFormat(format);

const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;

export { formatToLocalTime, iconUrlFromCode };

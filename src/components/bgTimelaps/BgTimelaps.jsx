import {useSelector } from "react-redux";
import weatherTypesHelper from "../../utilites/wetherTypesHelper";

const TimelapsBg = () => {
  const { weatherData } = useSelector(
    (state) => state.weather
  );
    
  const weatherType = weatherData ? weatherData.details.toLowerCase() : '';
  
  return (
    <video
        className="opacity-30 max-w-fit absolute"
        src={weatherType ? weatherTypesHelper[weatherType].timelapsUrl : ''}
        autoPlay
        loop
        muted
      />
  )
}

export default TimelapsBg
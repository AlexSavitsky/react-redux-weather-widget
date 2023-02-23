import {useSelector } from "react-redux";

const Forecast = ({title}) => {
  const { weatherData, weatherLoadingStatus} = useSelector(
    (state) => state.weather
  );
  
  const renderItems = (data) => {
    return data.map((item, index) => {
      const {title, temp, icon} = item;
      return <div key={index} className="flex flex-col items-center justify-center">
      <p className="font-light text-sm">{title}</p>
      <img src={icon} alt="img" className="w-12 my-1"/>
      <p className="font-medium">{temp}°</p>
    </div>
    });
  }

  if(weatherLoadingStatus === 'loading' || !weatherData) {
    return null;
  }

  return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <p className="text-white uppercase font-medium">{title} forecast</p>
      </div>
      <hr className="my-2" />

      <div className="flex items-center justify-between text-white">
        {renderItems(weatherData[title])}
      </div>
    </div>
  );
};

export default Forecast;

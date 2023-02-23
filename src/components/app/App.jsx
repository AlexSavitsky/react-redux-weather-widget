import { fetchWeatherData } from "../../redux/slice/weatherSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import TopButtons from "../topButtons/TopButtons";
import SearchBar from "../searchBar/SearchBar";
import TemperatureAndDetails from "../temperatureAndDetails/TemperatureAndDetails";
import Forecast from "../forecast/Forecast";
import BgTimelaps from "../bgTimelaps/BgTimelaps";
import ErrorBoundary from "../error/ErrorBoundary";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();
  const { query, units } = useSelector((state) => state.weather);

  useEffect(() => {
    dispatch(fetchWeatherData({ ...query, units: units }));
  }, [query, units]);

  return (
    <div className="mx-auto max-w-screen-sm sm:w-full overflow-hidden relative bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl stroke-gray-400">
      <BgTimelaps />
      <div className=" py-5 px-5 sm:px-20 sticky">
        <TopButtons />
        <SearchBar />
        <ErrorBoundary>
          <TemperatureAndDetails />
          <Forecast title={"hourly"} />
          <Forecast title={"daily"} />
        </ErrorBoundary>
      </div>
      <ToastContainer
        autoClose={2000}
        theme="dark"
        newestOnTop={true}
        pauseOnHover={false}
      />
    </div>
  );
}

export default App;

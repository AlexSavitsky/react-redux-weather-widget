import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import { changeUnits, changeQuery } from "../../redux/slice/weatherSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const SearchBar = () => {
  const [searchingCity, setSearchingCity] = useState("");
  const dispatch = useDispatch();

  const onChangeUnits = (payload) => {
    dispatch(changeUnits(payload));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (searchingCity) {
      dispatch(changeQuery({ q: searchingCity }));
      setSearchingCity("");
    }
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        dispatch(
          changeQuery({
            lat: lat,
            lon: lon,
          })
        );
      });
    }
  };

  return (
    <div className="flex flex-row justify-center my-6">
      <form
        className="flex flex-row w-3/4 items-center justify-center space-x-4"
        onSubmit={(e) => onSubmit(e)}
      >
        <input
          type="text"
          value={searchingCity}
          placeholder="Search for city..."
          className="text-xl font-light p-2 w-full shadow-xl rounded-xl z-40 first-letter:capitalize focus:outline-none "
          onChange={(e) => setSearchingCity(e.target.value)}
        />
        <button>
          <UilSearch
            size={25}
            className="text-white cursor-pointer transition ease-out hover:scale-125"
          />
        </button>
        <button>
          <UilLocationPoint
            size={25}
            className="text-white cursor-pointer transition ease-out hover:scale-125"
            onClick={() => handleLocationClick()}
          />
        </button>
      </form>

      <div className="flex flex-row w-1/4 items-center justify-center  ">
        <button
          name="metric"
          className="text-xl text-white font-light transition ease-out hover:scale-125"
          onClick={(e) => onChangeUnits(e.target.name)}
        >
          °C
        </button>
        <p className="text-lg text-white mx-1">|</p>
        <button
          name="imperial"
          className="text-xl text-white font-light transition ease-out hover:scale-125"
          onClick={(e) => onChangeUnits(e.target.name)}
        >
          °F
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

import { useDispatch} from "react-redux";
import { changeQuery } from "../../redux/slice/weatherSlice";

const TopButtons = () => {
  const dispatch = useDispatch();

  const onChangeCity = (payload) => {
    dispatch(changeQuery({q: payload}));
  };

  const cities = [
    {
      id: 1,
      title: "Kyiv",
    },
    {
      id: 2,
      title: "Lviv",
    },
    {
      id: 3,
      title: "New York",
    },
    {
      id: 4,
      title: "Odesa",
    },
    {
      id: 5,
      title: "London",
    },
  ];
 
  return (
    <div className="flex items-center justify-around gap-3 my-6 ">
      {cities.map((item) => {
        return (
          <button
            onClick={(e) => onChangeCity(e.target.textContent)}
            className="text-white text-lg font-medium first-letter:uppercase transition ease-out hover:scale-125"
            key={item.id}
          >
            {item.title}
          </button>
        );
      })}
    </div>
  );
};

export default TopButtons;

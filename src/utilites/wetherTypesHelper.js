import {clear, cloud, fog, rain, snow, storm, drizzle, dust, tornado} from "../assets/timelaps"

const weatherTypesHelper = {
  thunderstorm: {
    timelapsUrl: storm,
    iconUrl: "",
  },
  drizzle: {
    timelapsUrl: drizzle,
    iconUrl: "",
  },
  rain: {
    timelapsUrl: rain,
    iconUrl: "",
  },
  snow: {
    timelapsUrl: snow,
    iconUrl: "",
  },
  mist: {
    timelapsUrl: fog,
    iconUrl: "",
  },
  smoke: {
    timelapsUrl: fog,
    iconUrl: "",
  },
  haze: {
    timelapsUrl: fog,
    iconUrl: "",
  },
  dust: {
    timelapsUrl: dust,
    iconUrl: "",
  },
  fog: {
    timelapsUrl: fog,
    iconUrl: "",
  },
  sand: {
    timelapsUrl: dust,
    iconUrl: "",
  },
  ash: {
    timelapsUrl: fog,
    iconUrl: "",
  },
  squall: {
    timelapsUrl: storm,
    iconUrl: "",
  },
  tornado: {
    timelapsUrl: tornado,
    iconUrl: "",
  },
  clear: {
    timelapsUrl: clear,
    iconUrl: "",
  },
  clouds: {
    timelapsUrl: cloud,
    iconUrl: "",
  },
};

export default weatherTypesHelper;

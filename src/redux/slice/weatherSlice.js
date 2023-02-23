import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import getFormattedWeatherData from "../../services/weatherService";

export const fetchWeatherData = createAsyncThunk(
  "weather/fetchWeatherData",
  async (searchParams) => {
    const weatherData = await getFormattedWeatherData(searchParams);
    return weatherData;
  }
);

const initialState = {
  query: { q: "Kyiv" },
  units: "metric",
  weatherData: null,
  weatherLoadingStatus: "idle",
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    changeQuery: (state, action) => {
      state.query = { ...action.payload };
    },
    changeUnits: (state, action) => {
      state.units = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherData.pending, (state) => {
        state.weatherLoadingStatus = "loading";
        toast.info("Fetching weather for " + state.query.q);
      })
      .addCase(fetchWeatherData.fulfilled, (state, action) => {
        state.weatherLoadingStatus = "idle";
        state.weatherData = action.payload;
        toast.success(
          "Succesfuly fetched weather for " + state.weatherData.name
        );
      })
      .addCase(fetchWeatherData.rejected, (state) => {
        state.weatherLoadingStatus = "error";
        toast.error("Error fetching weather for " + state.query.q);
      });
  },
});

const { actions, reducer } = weatherSlice;

export default reducer;

export const { changeQuery, changeUnits } = actions;

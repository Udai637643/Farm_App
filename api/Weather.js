import axios from "axios";
import { apiKey } from "../constants";

const forecastEndpoint = params =>
  `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${params.cityName}&days=${params.days}`;
const locationsEndpoint = params =>
  `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${params.cityName}`;

const apiCall = async (endpoint) => {
  try {
    const response = await axios.get(endpoint);

    if (response.status === 200) {
      return response.data;
    } else {
      console.log(`Request failed with status code ${response.status}`);
      return {};
    }
  } catch (error) {
    console.log('Error:', error.message);
    return {};
  }
};

export const fetchWeatherForecast = (params) => {
  let forecastUrl = forecastEndpoint(params);
  return apiCall(forecastUrl);
};

export const fetchLocations = (params) => {
  let locationsUrl = locationsEndpoint(params);
  return apiCall(locationsUrl);
};

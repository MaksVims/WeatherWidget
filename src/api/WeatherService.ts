import { cityGeo, cityWeather, cityGeoResponse } from "@/types"
import axios from "axios"

export class WeatherService {

  static key = 'e9e7112e85bf4102236c77ba08c87140'

  static async getCityGeo(city: string) {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${WeatherService.key}`
    const response = await axios.get<cityGeoResponse>(url)
    return response.data[0]
  }

  static async getCityWeather(geo: cityGeo) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${geo.lat}&lon=${geo.lon}&appid=${WeatherService.key}`
    const response = await axios.get<cityWeather>(url)
    return response.data
  }
}
<template>
  <div class="app">
    <Transition name="weather">
      <div v-if="!isSetting" class="max-width">
        <HeaderOptions v-model="isSetting" @clear-er="error = ''" />
        <Weather :cities-weather="citiesWeather" />
        <div v-if="!citiesWeather.length && checkStorage" class="aggregate">
          <p>Empty Weather List</p>
        </div>
      </div>
    </Transition>
    <Transition name="settings">
      <Settings
        v-if="isSetting"
        :cities="citiesWeather"
        v-model="isSetting"
        @remove="removeItem"
        @add-location="addLocation"
        :error="error"
        @clear-er="error = ''"
      />
    </Transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { cityWeather, cityGeo } from "./types";
import { WeatherService } from "./api";
import Weather from "./components/Weather/Weather.vue";
import HeaderOptions from "./components/Weather/HeaderOptions.vue";
import Settings from "./components/Settings/Settings.vue";

export default defineComponent({
  name: "weather-widget",
  components: { Settings, Weather, HeaderOptions },
  data() {
    return {
      citiesWeather: [] as cityWeather[],
      checkStorage: false,
      isSetting: false,
      error: "",
    };
  },
  async mounted() {
    const data = localStorage.getItem("cities-weather");
    if (data) {
      this.citiesWeather = JSON.parse(data);
      const newDataWeathers = await WeatherService.getManyWeatherCities(
        this.citiesWeather
      );
      this.citiesWeather = newDataWeathers;
    }
    this.checkStorage = true;
  },
  watch: {
    checkStorage() {
      if (!this.citiesWeather.length) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const currentGeo: cityGeo = {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          };
          const currentWeather = await WeatherService.getCityWeatherByGeo(
            currentGeo
          );
          this.citiesWeather.push(currentWeather);
        });
      }
    },
    citiesWeather: {
      handler() {
        localStorage.setItem(
          "cities-weather",
          JSON.stringify(this.citiesWeather)
        );
      },
      deep: true,
    },
  },
  methods: {
    removeItem(id: number) {
      this.citiesWeather = this.citiesWeather.filter((city) => city.id !== id);
    },
    async addLocation(location: string) {
      try {
        const newLocation = await WeatherService.getCityWeatherByLocationName(
          location
        );
        this.citiesWeather.push(newLocation);
      } catch (e) {
        this.error = "Uncorrected location name";
      }
    },
  },
});
</script>

<style lang="scss">
@import "./style/index.scss";
@import "./style/card.scss";
@import "./style/settings.scss";
@import "./style/add-location.scss";
@import "./style/city-item.scss";
@import "./style/transition.scss";
</style>

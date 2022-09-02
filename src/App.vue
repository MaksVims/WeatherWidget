<template>
  <div class="app">
    <div v-if="!isSetting">
      <HeaderOptions v-model="isSetting" />
      <Weather :cities-weather="citiesWeather" />
    </div>
    <Settings v-else :cities="citiesWeather" v-model="isSetting" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { cityWeather, cityGeo } from "./types";
import { WeatherService } from "./api";
import Weather from "./components/Weather.vue";
import HeaderOptions from "./components/HeaderOptions.vue";
import Settings from "./components/Settings.vue";

export default defineComponent({
  name: "App",
  components: { Settings, Weather, HeaderOptions },
  data() {
    return {
      citiesWeather: [
        {
          coord: {
            lon: 37.6156,
            lat: 55.7522,
          },
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04d",
            },
          ],
          base: "stations",
          main: {
            temp: 281.27,
            feels_like: 277.78,
            temp_min: 281.01,
            temp_max: 282.25,
            pressure: 1014,
            humidity: 63,
            sea_level: 1014,
            grnd_level: 996,
          },
          visibility: 10000,
          wind: {
            speed: 6.65,
            deg: 281,
            gust: 10.33,
          },
          clouds: {
            all: 95,
          },
          dt: 1662100650,
          sys: {
            type: 2,
            id: 47754,
            country: "RU",
            sunrise: 1662086156,
            sunset: 1662135788,
          },
          timezone: 10800,
          id: 524901,
          name: "Moscow",
          cod: 200,
        },
        {
          coord: {
            lon: 37.6156,
            lat: 55.7522,
          },
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04d",
            },
          ],
          base: "stations",
          main: {
            temp: 281.27,
            feels_like: 277.78,
            temp_min: 281.01,
            temp_max: 282.25,
            pressure: 1014,
            humidity: 63,
            sea_level: 1014,
            grnd_level: 996,
          },
          visibility: 10000,
          wind: {
            speed: 6.65,
            deg: 281,
            gust: 10.33,
          },
          clouds: {
            all: 95,
          },
          dt: 1662100650,
          sys: {
            type: 2,
            id: 47754,
            country: "RU",
            sunrise: 1662086156,
            sunset: 1662135788,
          },
          timezone: 10800,
          id: 524903,
          name: "Moscow",
          cod: 200,
        },
      ] as cityWeather[],
      citiesGeo: [] as cityGeo[],
      checkStorage: false,
      isSetting: false,
    };
  },
  mounted() {
    const data = localStorage.getItem("cities-weather");
    if (data) {
      this.citiesGeo = JSON.parse(data);
    }
    this.checkStorage = true;
  },
  watch: {
    checkStorage() {
      if (this.citiesGeo.length) {
      } else {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const currentGeo: cityGeo = {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
            country: "",
            name: "",
          };
          // const currentWeather = await WeatherService.getCityWeather(
          //   currentGeo
          // );
          // currentGeo.country = currentWeather.sys.country;
          // currentGeo.name = currentWeather.name;
          // this.citiesGeo.push(currentGeo);
          // this.citiesWeather.push(currentWeather)
        });
      }
    },
    citiesGeo: {
      handler() {
        console.log(this.citiesGeo);
      },
      deep: true,
    },
  },
  methods: {
    async loadWeather() {},
  },
});
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 14px;
  color: dimgray;
}

.app {
  max-width: 230px;
  padding: 10px;
  margin: 0px auto;
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
}

.capitalize {
  text-transform: capitalize;
}

svg {
  fill: grey;
  flex-shrink: 0;
}
</style>

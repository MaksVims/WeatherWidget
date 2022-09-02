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
  name: "weather-widget",
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
      isSetting: true,
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

  &__header {
    width: 100%;
    padding: 10px;
    padding-top: 0px;
    padding-right: 0px;
    display: flex;
    justify-content: flex-end;
  }

  &__weather {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  &__celcius {
    gap: 0px;
    height: 100px;
  }

  &__info {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    column-gap: 15px;
  }

  &__wind {
    gap: 4px;
    font-size: 14px;
  }
}

.capitalize {
  text-transform: capitalize;
}

svg {
  fill: grey;
  flex-shrink: 0;
}

.icon {
  height: 20px;
  width: 20px;
  cursor: pointer;

  &__options {
    transition: transform 0.3s;

    &:hover {
      transform: rotate(90deg);
      transition: transform 0.3s;
    }
  }

  &__info {
    height: 16px;
    width: 16px;
    fill: black;
  }

  &__menu {
    transition: transform 0.3s;
    &:hover {
      transform: rotate(90deg);
      transition: transform 0.3s;
    }
  }

  &__basket {
    transition: fill 0.3s;
    &:hover {
      fill: red;
      transition: fill 0.3s;
    }
  }
}

.card {
  min-width: 220px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: lightcyan;
  border-radius: 10px;
  padding: 10px;

  &__title {
    font-weight: 900;
    font-size: 18px;
    text-align: left;
    color: black;
  }

  &__temp {
    font-size: 32px;
    color: black;
  }

  &__text {
    color: dimgray;
    font-size: 14px;
  }
}

.direction {
  transform: rotate(-90deg);
}

.settings {
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;

    h1 {
      font-size: 18px;
    }
  }

  &__city-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 40px;
  }
}

.city-item {
  padding: 10px 7px;
  border-radius: 2px;
  background-color: #f7f7f7;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__icon {
    height: 15px;
    width: 15px;
    cursor: pointer;
  }

  &__inner {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__text {
    color: black;
    font-size: 14px;
  }
}

.add-location {
  display: flex;
  flex-direction: column;
  gap: 5px;

  &__icon {
    height: 21px;
    width: 21px;
    fill: black;
    cursor: pointer;
  }

  &__title {
    font-size: 16px;
    color: black;
  }

  &__inner {
    display: flex;
    align-items: center;
    gap: 5px;
    padding-right: 5px;
  }
}

.input {
  outline: none;
  width: 100%;
  border: 1px solid grey;
  padding: 6px;
  color: black;
  border-radius: 3px;
  background: white;

  &:focus {
    border: 1px solid rgb(64, 168, 202);
  }
}
</style>

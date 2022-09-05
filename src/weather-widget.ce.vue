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
      />
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { cityWeather, cityGeo } from "./types";
import { ERROR_KEY, CHANGE_ORDER_CITIES_LIST } from "./injectKeys";
import { reactive, readonly, ref } from "@vue/reactivity";
import { onMounted, provide, watch} from "@vue/runtime-core";
import { WeatherService } from "./api";
import Weather from "./components/Weather/Weather.vue";
import HeaderOptions from "./components/Weather/HeaderOptions.vue";
import Settings from "./components/Settings/Settings.vue";
import { errors } from "@/consts/errors";

const citiesWeather = ref<cityWeather[]>([]);
const checkStorage = ref(false);
const isSetting = ref(false);
const error = ref<string | null>(null);

const resetError = () => (error.value = null);
provide(ERROR_KEY, readonly({ error, resetError }));

const changeOrderCities = () => citiesWeather.value = [...citiesWeather.value]
provide(CHANGE_ORDER_CITIES_LIST, changeOrderCities)

onMounted(async () => {
  const data = localStorage.getItem("cities-weather");
  if (data) {
    citiesWeather.value = JSON.parse(data);
    const newDataWeathers = await WeatherService.getManyWeatherCities(
      citiesWeather.value
    );
    citiesWeather.value = newDataWeathers;
  }
  checkStorage.value = true;
});

watch(checkStorage, () => {
  if (!citiesWeather.value.length) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const currentGeo: cityGeo = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      };
      const currentWeather = await WeatherService.getCityWeatherByGeo(
        currentGeo
      );
      citiesWeather.value.push(currentWeather);
    });
  }
});

watch(citiesWeather, () => {
  localStorage.setItem("cities-weather", JSON.stringify(citiesWeather.value));
});

const removeItem = (id: number) => {
  citiesWeather.value = citiesWeather.value.filter((city) => city.id !== id);
};

const addLocation = async (location: string) => {
  try {
    const newLocation = await WeatherService.getCityWeatherByLocationName(
      location
    );
    if (citiesWeather.value.find((city) => city.id === newLocation.id)) {
      throw new Error(errors.REPEAT_CITY);
    }
    citiesWeather.value = [...citiesWeather.value, newLocation]
  } catch (e) {
    if ((e as Error).message === errors.REPEAT_CITY) {
      error.value = errors.REPEAT_CITY;
    } else {
      error.value = errors.UNCORRECT_CITY;
    }
  }
};
</script>

<style lang="scss">
@import "./style/index.scss";
@import "./style/card.scss";
@import "./style/settings.scss";
@import "./style/add-location.scss";
@import "./style/city-item.scss";
@import "./style/transition.scss";
</style>

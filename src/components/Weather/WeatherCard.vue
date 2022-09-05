<template>
  <section class="card">
    <h2 class="card__title">{{ city.name }}, {{ city.sys.country }}</h2>
    <div class="wrapper wrapper__celcius">
      <img :src="srcIcon" alt="weather icon" />
      <h2 class="card__temp">{{ celsius }}&#176;C</h2>
    </div>
    <p class="card__text">
      Feels like {{ feelsLike }}&#176;C. {{ city.weather[0].main }}.
      <span class="capitalize">
        {{ city.weather[0].description }}
      </span>
    </p>
    <WindPressureInfoVue
      :pressure="city.main.pressure"
      :windSpeed="city.wind.speed"
      :windDeg="city.wind.deg"
    />
    <WeatherCardInfo :city="city" :celsius="celsius" />
  </section>
</template>

<script setup lang="ts">
import { cityWeather } from "@/types";
import WindPressureInfoVue from "./WindPressureInfo.vue";
import WeatherCardInfo from "./WeatherCardInfo.vue";
import { computed } from "@vue/runtime-core";

interface Props {
  city: cityWeather;
}
const { city } = defineProps<Props>();

const getCelcius = (temp: number) => Math.ceil(temp - 273.15);

const celsius = computed(() => getCelcius(city.main.temp));
const feelsLike = computed(() => getCelcius(city.main.feels_like));
const srcIcon = computed(
  () => `https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`
);
</script>
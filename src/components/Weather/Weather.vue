<template>
  <div class="wrapper__weather">
    <WeatherCard v-for="city of citiesWeather" :key="city.id" :city="city" />
  </div>
</template>

<script lang="ts" setup>
import { cityWeather } from "@/types";
import WeatherCard from "./WeatherCard.vue";

interface Props {
  citiesWeather: cityWeather[];
}
defineProps<Props>();
</script>

<template>
  <div class="wrapper__info">
    <span>Humidity: {{ city.main.humidity }}%</span>
    <span>Dew Point: {{ dewPoint }}&#176;C</span>
    <span>Visibility: {{ visibility }}km</span>
  </div>
</template>

<script lang="ts" setup>
import { cityWeather } from "@/types";
import { computed } from "@vue/runtime-core";

interface Props {
  city: cityWeather;
  celsius: number;
}
const { city, celsius = 0 } = defineProps<Props>();

const fN = (T: number, Rh: number) => {
  return (17.27 * T) / (237.7 + T) + Math.log(Rh / 100);
};

const visibility = computed(() => (city.visibility / 1000).toFixed(1));
const dewPoint = computed(() => {
  return (
    (237.7 * fN(celsius, city.main.humidity)) /
    (17.27 - fN(celsius, city.main.humidity))
  ).toFixed(0);
});
</script>

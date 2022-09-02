<template>
  <div class="weather">
    <weather-card v-for="city of citiesWeather" :key="city.id" :city="city" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { cityWeather } from "@/types";
import WeatherCard from "./WeatherCard.vue";

export default defineComponent({
  name: "Weather",
  components: { WeatherCard },
  props: {
    citiesWeather: Array as PropType<cityWeather[]>,
  },
});
</script>

<style scoped lang="scss">
  .weather {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
</style>
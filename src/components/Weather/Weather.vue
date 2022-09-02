<template>
  <div class="wrapper__weather">
    <WeatherCard v-for="city of citiesWeather" :key="city.id" :city="city" />
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

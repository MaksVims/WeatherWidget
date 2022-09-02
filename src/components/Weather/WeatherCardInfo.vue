<template>
  <div class="wrapper__info">
    <span>Humidity: {{ city.main.humidity }}%</span>
    <span>Dew Point: {{ dewPoint }}&#176;C</span>
    <span>Visibility: {{ visibility }}km</span>
  </div>
</template>

<script lang="ts">
import { cityWeather } from "@/types";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "WeatherCardInfo",
  props: {
    city: {
      type: Object as PropType<cityWeather>,
      required: true,
    },
    celsius: {
      type: Number,
      default: () => 0,
    },
  },
  methods: {
    helper(T: number, Rh: number) {
      return (17.27 * T) / (237.7 + T) + Math.log(Rh / 100);
    },
  },
  computed: {
    visibility() {
      return (this.city.visibility / 1000).toFixed(1);
    },
    dewPoint() {
      return (
        (237.7 * this.helper(this.celsius, this.city.main.humidity)) /
        (17.27 - this.helper(this.celsius, this.city.main.humidity))
      ).toFixed(0);
    },
  },
});
</script>

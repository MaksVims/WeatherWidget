<template>
  <div class="wrapper__info">
      <span>Humidity: {{city.main.humidity}}%</span>
      <span>Dew Point: {{dewPoint}}&#176C</span>
      <span>Visibility: {{visibility}}km</span>
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
  },
  computed:{
    visibility() {
      return (this.city.visibility / 1000).toFixed(1)
    },
    dewPoint() {
      return 0
    }
  }
});
</script>

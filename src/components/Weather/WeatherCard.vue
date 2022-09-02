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

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { cityWeather } from "@/types";
import WindPressureInfoVue from "./WindPressureInfo.vue";
import WeatherCardInfo from "./WeatherCardInfo.vue";

export default defineComponent({
  name: "WeatherCard",
  components: {
    WindPressureInfoVue,
    WeatherCardInfo,
  },
  props: {
    city: {
      type: Object as PropType<cityWeather>,
      required: true,
    },
  },
  methods: {
    getCelcius(temp: number) {
      return Math.ceil(temp - 273.15);
    },
  },
  computed: {
    celsius() {
      return this.getCelcius(this.city.main.temp);
    },
    feelsLike() {
      return this.getCelcius(this.city.main.feels_like);
    },
    srcIcon() {
      return `https://openweathermap.org/img/wn/${this.city.weather[0].icon}@2x.png`;
    },
  },
});
</script>
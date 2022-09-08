<template>
  <section @keydown.esc="closeSettings">
    <div class="settings__header">
      <h1>Settings</h1>
      <span @click="closeSettings">
        <SvgClose />
      </span>
    </div>
    <CityList
      v-if="cities.length"
      class="settings__city-list"
      :cities="cities"
      @remove="(id) => $emit('remove', id)"
    />
    <div class="aggregate aggregate__settings" v-else>
      <p>Empty list</p>
    </div>
    <AddLocation
      @add-location="(location) => $emit('add-location', location)"
    />
    <p class="error" v-if="injections?.error">{{ injections.error }}</p>
  </section>
</template>

<script lang="ts" setup>
import { cityWeather } from "@/types";
import { ERROR_KEY } from "@/injectKeys";
import CityList from "./CityList.vue";
import AddLocation from "./AddLocation.vue";
import { inject } from "@vue/runtime-core";
import SvgClose from "../Svg/SvgClose.vue";

interface Props {
  modelValue: Boolean;
  cities: cityWeather[];
}
defineProps<Props>();

const emit = defineEmits<{
  (e: "update:modelValue", value: Boolean): void;
}>();

const injections = inject(ERROR_KEY);

const closeSettings = () => {
  injections?.resetError();
  emit("update:modelValue", false);
};
</script>

<template>
  <section @keydown.esc="closeSettings">
    <div class="settings__header">
      <h1>Settings</h1>
      <svg
        @click="closeSettings"
        class="icon"
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g data-name="Layer 2">
          <g data-name="close">
            <rect
              width="24"
              height="24"
              transform="rotate(180 12 12)"
              opacity="0"
            />
            <path
              d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"
            />
          </g>
        </g>
      </svg>
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

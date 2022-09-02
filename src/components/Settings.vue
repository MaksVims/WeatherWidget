<template>
  <section>
    <div class="header">
      <h1>Settings</h1>
      <svg
        @click="$emit('update:modelValue', false)"
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
    <CityList class="city-list" :cities="cities" />
    <AddLocation />
  </section>
</template>

<script lang="ts">
import { cityWeather } from "@/types";
import { defineComponent, PropType } from "vue";
import CityList from "./CityList.vue";
import AddLocation from "./AddLocation.vue";

export default defineComponent({
  name: "Settings",
  components: { CityList, AddLocation },
  props: {
    modelValue: {
      type: Boolean,
      defalt: () => "",
    },
    cities: {
      type: Array as PropType<cityWeather[]>,
      default: () => [],
    },
  },
});
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;

  h1 {
    font-size: 18px;
  }
}

.icon {
  cursor: pointer;
}

.city-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
}
</style>
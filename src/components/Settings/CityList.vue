<template>
  <draggable
    class="dragArea list-group w-full"
    :list="cities"
    :move="handleMove"
    @change="handleChangeOrder"
  >
    <TransitionGroup name="city-list">
      <CityItem
        v-for="city of cities"
        :key="city.id"
        :city="city"
        @remove="(id) => $emit('remove', id)"
        @dragon="isDrag = true"
        @dragoff="isDrag = false"
      />
    </TransitionGroup>
  </draggable>
</template>

<script lang="ts" setup>
import { CHANGE_ORDER_CITIES_LIST } from "@/injectKeys";
import { cityWeather } from "@/types";
import { inject, ref, watch } from "vue";
import { VueDraggableNext as draggable } from "vue-draggable-next";
import CityItem from "./CityItem.vue";

interface Props {
  cities: cityWeather[];
}

defineProps<Props>();
const isDrag = ref(false);

const injections = inject(CHANGE_ORDER_CITIES_LIST);

const handleMove = () => {
  if (!isDrag.value) {
    return false;
  }
};

const handleChangeOrder = () => {
  if (injections) injections();
};
</script>
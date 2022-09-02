<template>
  <draggable
    class="dragArea list-group w-full"
    :list="cities"
    :move="handleMove"
  >
    <CityItem
      v-for="city of cities"
      :key="city.id"
      :city="city"
      @remove="(id) => $emit('remove', id)"
      @dragon="isDrag = true"
      @dragoff="isDrag = false"
    />
  </draggable>
</template>

<script lang="ts">
import { cityWeather } from "@/types";
import { defineComponent, PropType } from "vue";
import { VueDraggableNext } from "vue-draggable-next";
import CityItem from "./CityItem.vue";

export default defineComponent({
  name: "CityList",
  components: { draggable: VueDraggableNext, CityItem },
  props: {
    cities: {
      type: Array as PropType<cityWeather[]>,
      default: () => [],
    },
  },
  data() {
    return {
      isDrag: false,
    };
  },
  methods: {
    handleMove() {
      if (!this.isDrag) {
        return false;
      }
    },
  },
});
</script>
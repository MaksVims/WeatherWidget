<template>
  <article class="city-item">
    <div class="city-item__inner">
      <span @pointerenter="$emit('dragon')" @pointerleave="$emit('dragoff')">
        <SvgMenu />
      </span>
      <span class="text">{{ city.name }}, {{ city.sys.country }}</span>
    </div>
    <span @click="$emit('remove', city.id)">
      <SvgBasket />
    </span>
    
  </article>
</template>

<script lang="ts" setup>
import { cityWeather } from "@/types";
import SvgMenu from "../Svg/SvgMenu.vue";
import SvgBasket from "../Svg/SvgBasket.vue";

interface Props {
  city: cityWeather;
}

defineProps<Props>();
</script>
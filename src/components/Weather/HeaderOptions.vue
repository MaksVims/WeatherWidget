<template>
  <div class="wrapper__header">
    <span  @click="changeMode">
      <SvgOptions />
    </span>
  </div>
</template>

<script lang="ts" setup>
import SvgOptions from '../Svg/SvgOptions.vue';

interface Props {
  modelValue: Boolean;
}
defineProps<Props>();

const emit = defineEmits<{
  (e: "clear-er"): void;
  (e: "update:modelValue", value: boolean): void;
}>();

const changeMode = () => {
  emit("clear-er");
  emit("update:modelValue", true);
};
</script>

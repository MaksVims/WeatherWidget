<template>
  <input class="input" type="text" :value="modelValue" @input="changeInput" />
</template>

<script setup lang="ts">
interface Props {
  modelValue: string;
}

defineProps<Props>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const changeInput = (e: Event) => {
  emit("update:modelValue", (e.target as HTMLInputElement).value);
};
</script>
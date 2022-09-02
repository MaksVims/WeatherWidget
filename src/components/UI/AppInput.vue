<template>
  <input class="input" type="text" :value="modelValue" @input="changeInput" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppInput",
  props: {
    modelValue: String,
  },
  methods: {
    changeInput(e: Event) {
      this.$emit("update:modelValue", (e.target as HTMLInputElement).value);
    },
  },
});
</script>
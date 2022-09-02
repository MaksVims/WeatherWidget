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

<style lang="scss">
.input {
  outline: none;
  width: 100%;
  border: 1px solid grey;
  padding: 6px;
  color: black;
  border-radius: 3px;
  background: white;

  &:focus {
    border: 1px solid rgb(64, 168, 202);
  }
}
</style>
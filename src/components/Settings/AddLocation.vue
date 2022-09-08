<template>
  <form @submit.prevent="">
    <label class="add-location">
      <span class="add-location__title">Add Location:</span>
      <div class="add-location__inner">
        <AppInput v-model="location" @keyup.enter="handleAddLocation" v-focus />
        <span @click="handleAddLocation">
          <SvgAddLocation />
        </span>
      </div>
    </label>
  </form>
</template>

<script lang="ts" setup>
import { ERROR_KEY } from "@/injectKeys";
import { inject, ref, watch } from "vue";
import { focus as vFocus } from "@/directives/focus";
import AppInput from "../UI/AppInput.vue";
import SvgAddLocation from "../Svg/SvgAddLocation.vue";

const emit = defineEmits<{
  (e: "add-location", value: string): void;
}>();

const location = ref("");
const handleAddLocation = () => {
  if (location.value) {
    emit("add-location", location.value);
    location.value = "";
  }
};

const injections = inject(ERROR_KEY);
watch(location, () => {
  if (location.value && injections?.error) {
    injections.resetError();
  }
});
</script>
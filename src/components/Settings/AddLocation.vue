<template>
  <form @submit.prevent="">
    <label class="add-location">
      <span class="add-location__title">Add Location:</span>
      <div class="add-location__inner">
        <AppInput v-model="location" @keyup.enter="handleAddLocation" v-focus/>
        <svg
          @click="handleAddLocation"
          class="add-location__icon"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 511.999 511.999"
          style="enable-background: new 0 0 511.999 511.999"
          xml:space="preserve"
        >
          <g>
            <g>
              <polygon
                points="511.999,145.102 470.412,145.102 470.412,235.206 79.606,235.206 200.941,113.871 171.535,84.465 0,255.999 
			171.535,427.533 200.941,398.128 79.606,276.792 511.999,276.792 		"
              />
            </g>
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>
      </div>
    </label>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppInput from "../UI/AppInput.vue";
import { focus } from "@/directives/focus";

export default defineComponent({
  name: "AddLocation",
  components: { AppInput },
  directives: {
    'focus': focus
  },
  data() {
    return {
      location: "",
    };
  },
  methods: {
    handleAddLocation() {
      if (this.location) {
        this.$emit("add-location", this.location);
        this.location = "";
      }
    },
  },
  watch: {
    location() {
      if(this.location) {
        this.$emit('clear-er')
      }
    }
  }
});
</script>
<template>
  <form @submit.prevent="">
    <label class="add-location">
      <span class="title">Add Location:</span>
      <div class="inner">
        <app-input v-model="name" @keyup.enter="handleAddLocation" />
        <svg
          @click="handleAddLocation"
          class="icon"
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

export default defineComponent({
  name: "AddLocation",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    handleAddLocation() {
      console.log(this.name);
    },
  },
});
</script>

<style lang="scss" scoped>
.inner {
  display: flex;
  align-items: center;
  gap: 5px;
  padding-right: 5px;
}

.icon {
  height: 21px;
  width: 21px;
  fill: black;
  cursor: pointer;
}

.title {
  font-size: 16px;
  color: black;
}

.add-location {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>
<template>
  <div class="wrapper">
    <div class="wrapper wrapper__wind">
      <svg
        class="icon__info direction"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="95.301px"
        height="95.301px"
        viewBox="0 0 95.301 95.301"
        style="enable-background: new 0 0 95.301 95.301"
        xml:space="preserve"
      >
        <g>
          <path
            d="M94.695,0.605c-0.583-0.583-1.456-0.763-2.224-0.458L1.297,36.581c-0.858,0.343-1.383,1.214-1.286,2.133
		c0.097,0.919,0.793,1.661,1.704,1.816l45.313,7.742l7.743,45.312c0.156,0.911,0.898,1.606,1.816,1.704
		c0.072,0.008,0.146,0.012,0.218,0.012c0.836,0,1.599-0.508,1.915-1.297L95.153,2.828C95.46,2.062,95.279,1.188,94.695,0.605z"
          />
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
      <span>{{ windSpeed }}m/s {{ directionWind }}</span>
    </div>
    <div class="wrapper wrapper__wind">
      <svg
        class="icon__info"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 487.913 487.913"
        style="enable-background: new 0 0 487.913 487.913"
        xml:space="preserve"
      >
        <g transform="translate(0 -540.36)">
          <g>
            <g>
              <path
                d="M292.256,606.573L292.256,606.573c6.4-19.3,0.5-41.1-15.8-54.2c-18.1-16-46-16-64.9-0.1c-16.3,13.1-22.3,35-15.9,54.3
				c-95.2,21.8-166.5,106.9-166.5,208.1c0,117.8,96.3,213.6,214.8,213.6s214.8-95.8,214.8-213.6
				C458.756,713.373,387.456,628.373,292.256,606.573z M224.156,567.773L224.156,567.773c0.1-0.1,0.2-0.1,0.2-0.2
				c11.5-9.7,28.3-9.8,39-0.2c0.1,0.1,0.3,0.2,0.4,0.4c10.5,8.4,13.8,23,8.4,35.1c-9.2-1.2-18.7-1.8-28.2-1.8
				c-9.6,0-19,0.6-28.2,1.8C210.256,590.773,213.556,576.172,224.156,567.773z M243.956,1008.272L243.956,1008.272
				c-107.4,0-194.8-86.8-194.8-193.6c0-106.7,87.4-193.6,194.8-193.6s194.8,86.8,194.8,193.6S351.356,1008.272,243.956,1008.272z"
              />
              <path
                d="M395.056,788.273c-5.8-35.5-24.3-67.6-51.9-90.4c-57.5-47.3-140.8-47.3-198.3,0c-27.6,22.8-46.1,54.9-51.9,90.4
				c-5.7,35,1,71.3,19,102.3c1.7,3.1,5,5,8.6,5h246.9c3.5,0,6.8-1.9,8.6-5C394.056,859.573,400.856,823.273,395.056,788.273z
				 M361.456,875.573h-235.1c-29.2-55.5-16.6-122.9,31.1-162.2c50.1-41.3,122.8-41.3,172.9,0
				C378.056,752.672,390.656,820.073,361.456,875.573z"
              />
              <path
                d="M301.556,776.273l-51.4-40.4c-3.6-2.9-8.7-2.9-12.4,0l-51.4,40.4c-4.3,3.4-5.1,9.7-1.7,14c3.4,4.3,9.7,5.1,14,1.7
				l35.2-27.7v70.2c0,5.5,4.5,10,10,10s10-4.5,10-10v-70.2l35.2,27.7c1.8,1.4,4,2.1,6.2,2.1c3,0,5.9-1.3,7.9-3.8
				C306.656,785.973,305.856,779.773,301.556,776.273z"
              />
            </g>
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
      {{ pressure }}hPA
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "WindPressureInfo",
  props: {
    pressure: Number,
    windSpeed: Number,
    windDeg: Number,
  },
  computed: {
    directionWind() {
      const dir = this.windDeg!;
      if (dir > 348.75 && dir <= 11.25) return "N";
      else if (dir > 11.25 && dir <= 33.75) return "NNE";
      else if (dir > 33.75 && dir <= 56.25) return "NE";
      else if (dir > 56.25 && dir <= 78.75) return "ENE";
      else if (dir > 78.75 && dir <= 101.25) return "E";
      else if (dir > 101.25 && dir <= 123.75) return "ESE";
      else if (dir > 123.75 && dir <= 146.25) return "SE";
      else if (dir > 146.25 && dir <= 168.75) return "SSE";
      else if (dir > 168.75 && dir <= 191.25) return "S";
      else if (dir > 191.25 && dir <= 213.75) return "SSW";
      else if (dir > 213.75 && dir <= 236.25) return "SW";
      else if (dir > 236.25 && dir <= 258.75) return "WSW";
      else if (dir > 258.75 && dir <= 281.25) return "W";
      else if (dir > 281.25 && dir <= 303.75) return "WNW";
      else if (dir > 303.75 && dir <= 326.25) return "NW";
      else return "NNW";
    },
  },
});
</script>
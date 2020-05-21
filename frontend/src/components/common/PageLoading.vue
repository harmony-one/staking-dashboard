<template>
  <div class="loading-overlay">
    <div class="loading-background"></div>
    <rotate-square2 size="80px"></rotate-square2>
  </div>
</template>

<script>
import { RotateSquare2 } from "vue-loading-spinner"
export default {
  name: `page-loading`,
  components: {
    RotateSquare2
  }
}
</script>
<style scoped>
.loading-overlay {
  z-index: 99999;
  position: fixed;
  display: flex;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.loading-background {
  background: rgb(255, 255, 255, 0.7);
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  position: absolute;
}
</style>

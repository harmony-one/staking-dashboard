<template>
  <div class="widget-container">
    <div class="widget-portfolio-light">
      <div class="widget-title" v-if="title">
        {{ title }}
      </div>
      <div class="widget-body">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: `widget`,
  props: ["title"]
}
</script>

<style scoped>
.widget-container {
  display: flex;
  flex-direction: column;
}

.widget-portfolio-light {
  border-radius: 5px;
  border: 1px solid #d9d9e0;
  background: rgba(54, 207, 214, 0.02);
  box-shadow: 0px 2px 3px rgba(78, 85, 114, 0.18);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}

.widget-title {
  font-size: 20px;
  font-weight: bold;
  color: #0b93ea;
  margin-top: 10px;
}

.widget-body {
  padding: 10px 20px 20px 20px;
}
</style>

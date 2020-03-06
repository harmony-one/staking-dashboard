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
  margin-right: var(--unit);
  display: flex;
  flex-direction: column;
}

.widget-portfolio-light {
  border: 1px solid #d9d9e0;
  border-radius: var(--half);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  margin-bottom: var(--unit);
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

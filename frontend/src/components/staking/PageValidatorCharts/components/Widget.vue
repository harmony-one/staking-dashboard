<template>
  <div class="widget-container">
    <div class="widget">
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
  margin-top: var(--unit);
  display: flex;
  flex-direction: column;
}

.widget {
  border: 1px solid #d9d9e0;
  border-radius: var(--half);
  background: white;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.widget-title {
  font-size: 20px;
  color: #0b93ea;
  margin: 10px 20px 0px 20px;
}

.widget-body {
  padding: 10px 20px;
}
</style>

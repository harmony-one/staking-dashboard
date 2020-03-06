<template>
  <div class="widget-container">
    <div class="widget-portfolio">
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

.widget-portfolio {
  border: 1px solid #d9d9e0;
  border-radius: var(--half);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
  margin-bottom: var(--unit);
}

.widget-title {
  font-size: 20px;
  color: #0b93ea;
  margin: 0px 20px 0px 20px;
}

.widget-body {
  padding: var(--unit);
}
</style>

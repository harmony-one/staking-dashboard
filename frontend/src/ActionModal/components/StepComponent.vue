<template>
  <div class="stepItem">
    <div class="circle--container" :class="{ active, includeLine }">
      <!-- <div class="circle--default" :class="{ active, includeLine }">
        {{ number }}
      </div> -->

      <svgicon
        :name="title.toLowerCase().replace(/ /g, '_')"
        width="20"
        height="20"
      ></svgicon>

      <p class="text--default" :class="{ textActive: active }">
        {{ title }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "StepComponent",
  props: {
    title: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      required: true
    },
    number: {
      type: Number,
      required: true
    },
    includeLine: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss">
.stepItem {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  cursor: default;
}

.circle--container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  white-space: normal;
  position: relative;
  align-items: center;
  > svg {
    transform: scale(2);
    margin-bottom: var(--unit);
  }
}

.circle--default {
  color: white;
  font-weight: 500;
  border-radius: 50%;
  background: var(--app-nav-light);
  width: 2.2rem;
  height: 2.2rem;
  margin-bottom: 0.75rem;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.active,
.active .svg-icon {
  color: var(--blue);
  fill: var(--blue);
}

.text--default {
  color: var(--grey);
  font-size: var(--xs);
  font-weight: 500;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  margin: 0 auto;
}

.textActive {
  color: var(--tertiary);
}
</style>

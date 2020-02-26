<template>
  <button
    class="button"
    :class="{
      secondary: type === `secondary`,
      small: size === `small`,
      active: type === `active`
    }"
    :disabled="disabled"
  >
    {{ value }} <div v-if="number >= 0" class="number-circle">{{ number }}</div>
  </button>
</template>

<script>
export default {
  name: `TmBtn`,
  props: {
    value: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    number: {
      type: Number,
      default: -1
    }
  }
}
</script>

<style scoped>
.button {
  font-family: var(--helvetica);
  font-size: 14px;
  font-weight: 400;
  padding: 8px 16px;
  min-width: 100px;
  color: var(--bright);
  margin: 0;
  border-radius: 0.5rem;
  cursor: pointer;
  background: var(--primary);
  border: 2px solid var(--primary);
  transition: all 0.5s ease;
  white-space: nowrap;
  outline: none;
}

.button:hover {
  background: var(--primary-dark);
  border-color: var(--primary-dark);
}

.button:disabled {
  opacity: 0.5;
  background: var(--primary-dark);
  border-color: var(--bc-dim);
  cursor: default;
}

.button:disabled:hover {
  background: var(--primary-dark);
  border-color: var(--bc-dim);
}

.button.secondary.active {
  background: var(--primary-dark);
  border: 2px solid var(--primary-dark);
}

.button.secondary {
  background: var(--primary);
}

.button.secondary:hover {
  /* background: var(--primary-hover); */

  /* border: 2px solid var(--primary-hover); */
  background: var(--primary-dark);
  border: 2px solid var(--primary-dark);
}

.button.secondary.small {
  padding: 6px 10px;
  font-size: 12px;
  min-width: 0;
  color: var(--text-white);
  border-color: var(--bright-light);
  background-color: transparent;
}

.button.secondary.small:hover {
  background-color: var(--bc-dim);
}

@media screen and (max-width: 1023px) {
  .button.secondary.small {
    padding: 10px 10px;
  }
}

.addon-max {
  font-family: var(--helvetica);
  font-size: 14px;
  font-weight: 400;
  padding: 4px 16px;
  min-width: 100px;
  color: var(--bright);
  margin: 0;
  border-top-left-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
  border-top-right-radius: 0.25rem !important;
  border-bottom-right-radius: 0.25rem !important;
  cursor: pointer;
  background: var(--primary);
  border: 2px solid var(--primary);
  transition: all 0.5s ease;
  white-space: nowrap;
  outline: none;
}

.addon-max:hover {
  background: var(--primary-dark);
  border-color: var(--primary-dark);
}

.addon-max:disabled {
  opacity: 0.5;
  background: var(--primary-dark);
  border-color: var(--bc-dim);
  cursor: default;
}

.addon-max:disabled:hover {
  background: var(--primary-dark);
  border-color: var(--bc-dim);
}

.number-circle{
  width: 25px;
  height: 25px;
  display: inline-block;
  border-radius: 50%;
  padding-top: 5px;
  text-align: center;
  margin-left: 10px;
  /* background: rgba(255, 255, 255, 0.4); */
}
</style>

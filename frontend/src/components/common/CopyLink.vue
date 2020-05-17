<template>
  <div class="copy-link">
    <div
      v-tooltip="{
        placement: 'top',
        content: copySuccess || `Click to copy`
      }"
      v-clipboard:copy="href"
      v-clipboard:success="() => onCopy()"
      class="address"
    >
      {{ text }}
    </div>

    <!-- <div :class="{ active: copySuccess }" class="copied">
      <i class="material-icons">check</i>
    </div> -->
  </div>
</template>

<script>
export default {
  name: `copy-link`,
  props: {
    text: {
      type: String,
      required: true
    },
    href: {
      type: String,
      required: true
    }
  },
  data() {
    return { copySuccess: false }
  },
  methods: {
    onCopy() {
      this.copySuccess = "Copied!"
      setTimeout(() => {
        this.copySuccess = false
      }, 2500)
    }
  }
}
</script>
<style scoped lang="scss">
.address,
.show-on-ledger {
  margin-top: var(--half);
}

.copy-link {
  padding: 0;
  margin: 0;
  font-size: inherit;
  display: inline-block;
}

.copy-link .address {
  color: var(--gray);
  width: 100%;
  cursor: pointer;
}

.copy-link .address:hover {
  color: var(--blue);
}
</style>

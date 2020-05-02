<template>
  <div class="validator-info-container">
    {{data.address| formatBech32(false, 8, 8) }}

  </div>
</template>

<script>

import { formatBech32 } from "src/filters"

export default {
  name: `li-validator`,
  filters: {
    formatBech32
  },
  components: {  },
  props: ["data"]
}
</script>

<style scoped lang="scss">
.validator-info-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  max-width: 100%;
}

.validator-info {
  display: flex;
  flex-direction: column;
  text-overflow: ellipsis;
  align-content: center;
  justify-content: center;
}

.li-validator h4,
.li-validator h5 {
  font-size: var(--sm);
  display: inline-block;
}

.li-validator h5 {
  padding-left: 0.5rem;
  color: var(--success);
}

.li-validator:hover {
  cursor: pointer;
  color: var(--txt);
}

.li-validator-name {
  font-size: 1rem;
  line-height: 18px;
  font-weight: 500;
  color: var(--txt);
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
}

.li-validator-image {
  border-radius: 0.25rem;
  height: 2.5rem;
  width: 2.5rem;
  border: 1px solid var(--bc-dim);
}
</style>

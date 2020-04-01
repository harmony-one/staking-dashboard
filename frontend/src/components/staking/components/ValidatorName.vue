<template>
  <div class="validator-info-container">
    <ValidatorLogo
      :name="data.moniker"
      :operator-address="data.operator_address"
      :logo-url="data.logo_url"
    />
    <div class="validator-info">
      <h3 class="li-validator-name">{{ data.moniker }}</h3>
    </div>
  </div>
</template>

<script>
import ValidatorLogo from "./ValidatorLogo"

export default {
  name: `li-validator`,
  components: { ValidatorLogo },
  props: ["data"]
}
</script>

<style scoped lang="scss">
.validator-info-container {
  display: flex;
  flex-direction: row;
  align-items: center;
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
}

.li-validator-image {
  border-radius: 0.25rem;
  height: 2.5rem;
  width: 2.5rem;
  border: 1px solid var(--bc-dim);
}
</style>

<template>
  <div class="validator-logo-container">
    <img
      v-if="!isImageLoaded && !loadedWithError"
      class="loader li-validator-image"
      src="~assets/images/loader.svg"
      alt="a small spinning circle to display loading"
    />
    <img
      v-if="!loadedWithError"
      :src="this.imageSrc"
      :style="{ display: isImageLoaded ? 'block' : 'none' }"
      class="li-validator-image"
      :alt="`validator logo for ` + this.name"
      @error="loadedWithError = true"
      @load="isImageLoaded = true"
    />
    <Avatar
      v-if="loadedWithError"
      class="li-validator-image"
      alt="generic validator logo - generated avatar from address"
      :address="operatorAddress"
    />
  </div>
</template>

<script>
import Avatar from "common/Avatar"

export default {
  name: `ValidatorLogo`,
  components: {
    Avatar
  },
  props: ["operatorAddress", "logoUrl", "name"],
  data() {
    return {
      isImageLoaded: false,
      loadedWithError: false
    }
  },
  computed: {
    imageSrc() {
      return (
        this.logoUrl ||
        `https://github.com/harmony-one/validator-logos/raw/master/validators/${this.operatorAddress}.jpg`
      )
    }
  }
}
</script>
<style lang="scss">
.validator-logo-container {
  margin-right: 10px;
  display: flex;

  .li-validator-image {
    border-radius: 0.25rem;
    height: 40px;
    width: 40px;
    border: 1px solid var(--bc-dim);
    padding: 5px;
  }

  .loader {
    padding: 10px 0;
    border: none;
  }
}
</style>

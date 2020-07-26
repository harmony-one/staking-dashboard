<template>
  <div v-if="display">
    <div class="blur" />
    <div class="stake-calculator-modal">
      <div class="button-container">
        <TmBtn value="✕" @click.native="closeModal" />
      </div>
      <iframe
        width="100%"
        height="100%"
        src="https://harmony.validator.services"
      />
    </div>
  </div>
</template>

<script>
import TmBtn from "../../common/TmBtn"
import { mapState } from "vuex"

export default {
  name: `stake-calculator`,
  components: { TmBtn },
  computed: {
    ...mapState([`session`]),
    display: state => state.session.stakeCalculator
  },
  methods: {
    closeModal() {
      this.$store.dispatch("hideStakeCalculator")
    }
  }
}
</script>

<style lang="scss">
.blur {
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
}

.stake-calculator-modal {
  z-index: 999;
  padding: 0 20px;
  position: fixed;
  top: 25px;
  left: calc(50% - 600px);
  background: white;
  border-radius: 5px;
  width: 1200px;
  height: calc(100vh - 50px);
  min-height: 600px;

  h2 {
    font-weight: bold;
    font-size: 16px;
  }

  p {
    margin-top: 15px;
  }

  b {
    font-weight: bold;
  }

  ul {
    list-style: disc;
  }

  li {
    margin-left: 30px;
    margin-bottom: 5px;
    margin-top: 5px;
  }

  span {
    color: #00ade8;
  }

  .button-container {
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    right: -16px;
    top: -16px;

    button {
      padding: 0 17px;
      font-size: 20px;
    }
  }

  @media (max-width: 700px) {
    width: 400px;
    left: calc(50% - 200px);
  }
}
</style>

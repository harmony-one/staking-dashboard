<template>
  <div v-if="!hide">
    <div class="blur" />
    <div class="welcome-modal">
      <h2>Welcome to Harmony Open Staking Dashboard</h2>
      <p>
        Here you can stake/delegate your <span>$ONE</span> tokens with a
        Validator
      </p>
      <p>
        In order to proceed with delegations, you will need:
      </p>
      <ul>
        <li>
          <span>$ONE</span> Tokens - Minimum delegation <span>1 $ONE</span>,
          check <b>"Delegation Guide"</b> for info.
        </li>
        <li>
          Native <span>$ONE</span> wallet supported for delegation, check
          <b>"Supported Wallets"</b>
          for info.
        </li>
        <li>
          Select Validator/s and Delegate, check
          <b>"Validator Performance"</b> before preceding.
        </li>
      </ul>
      <p style="display: none;">Don't show this message gain</p>
      <p>Thanks for supporting <span>Harmony ONE</span>!</p>

      <div class="button-container">
        <TmBtn
          class="send-button"
          value="Get started"
          type="secondary"
          @click.native="onClose()"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TmBtn from "../../common/TmBtn"
export default {
  name: `welcome-message`,
  components: { TmBtn },
  data() {
    return { hide: false }
  },
  mounted() {
    this.hide = this.$cookie.get("staking-welcome")
  },
  methods: {
    onClose() {
      this.hide = true
      this.$cookie.set("staking-welcome", true, 356)
    }
  }
}
</script>

<style lang="scss">
.blur {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
}

.welcome-modal {
  z-index: 999;
  padding: 40px;
  position: fixed;
  top: 140px;
  left: calc(50% - 350px);
  width: 680px;
  background: white;
  border-radius: 5px;

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
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  @media (max-width: 700px) {
    width: 400px;
    left: calc(50% - 200px);
  }
}
</style>

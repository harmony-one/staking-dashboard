<template>
  <transition name="component-fade" mode="out-in">
      
      <div class="session-frame">

        <BasicHeader :title="title" />

        <div class="session-container">
          <div class="session-image">
            <img :src="getImgUrl(image)" />
          </div>
          <div class="session-content">
            <slot></slot>
          </div>
        </div>
        
        

        <TmBtn
          class="session-close"
          value="Back to Harmony"
          color="secondary"
          @click.native="$router.push(`/`)"
        />
      </div>

  </transition>
</template>

<script>
import TmBtn from "common/TmBtn"
import BasicHeader from "./BasicHeader"

export default {
  name: `session-frame`,
  components: {
    BasicHeader,
    TmBtn,
  },
  props: {
    title: {
      type: String,
      default: "Sign In"
    },
    image: {
      type: String,
      default: "account"
    },
    hideBack: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    goBack() {
      this.$router.go(`-1`)
    },
    getImgUrl(which) {
      return require(`./../../assets/images/onboarding/${which}.png`)
    }
  }
}
</script>

<style lang="scss">

.session-frame {
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-modal);
  width: 100vw;
  height: 100vh;
  background: var(--background);
  overflow: auto;
  overflow-x: hidden;
  padding-top: 128px;
}

.session-container {
  display: flex;
  align-content: flex-start;
  justify-content: center;
  flex-wrap: wrap;
}

.session-image {
  margin: var(--double);
  max-width: 400px;
  max-height: 400px;
  img {
    width: 100%
  }
}

.session-content {
  margin: var(--double);
  text-align: center;
  max-width: 400px;
  .session-title {
    font-size: var(--h2);
    color: var(--blue);
    font-weight: bold;
  }

  .session-list h3 {
    font-size: var(--h3);
    color: var(--bright);
    font-weight: 500;
    padding: var(--unit);
  }

  .footnote {
    padding: 1rem 1rem 0;
    font-size: var(--sm);
  }
}

@media screen and (max-width: 411px) {
  
  .session-image, .session-content {
    width: 100%;
    margin: var(--unit);
  }
}








.session-header {
  padding: 1rem 1rem 0;
  display: block;
}

.session-header p {
  font-size: 14px;
}

.session-title {
  font-size: var(--h2);
  line-height: 44px;
  color: var(--txt);
  font-weight: 600;
  padding: 1rem 0 0;
}


.session-paragraph {
  margin-bottom: 1rem;
  padding: 0 1rem;
}

.session-back {
  cursor: pointer;
  display: flex;
  align-items: center;
}

.session-close {
  position: absolute;
  right: var(--unit);
  top: calc(56px + var(--unit));
}

.session-footer {
  display: flex;
  padding: 1rem 0;
  flex-direction: column;
  justify-content: space-between;
  font-size: 12px;
}

.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.2s ease;
}

.component-fade-enter,
.component-fade-leave-to .component-fade-leave-active {
  opacity: 0;
}

.session-logo-mobile {
  display: none;
}

.field-checkbox-input {
  display: block;
  padding-left: 1.5rem;
  text-indent: -1.5rem;
  line-height: 14px;
  font-size: 14px;
}

.accounts-header {
  padding: 0 1rem;
}



</style>

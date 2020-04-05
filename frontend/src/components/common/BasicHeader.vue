<template>
    <div class="container">
        <div class="header-item">
            <div>
              <a href="/">
                <img
                    class="header-item-logo"
                    src="~assets/images/logo-top-right.png"
                    alt="Harmony Staking spaceship accelerating into a colourful space sky"
                />
            </a>
          </div>
        </div>
        <div class="heading">
          <div>
            {{title || 'Sign In'}}
          </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style scoped lang="scss">

.container {
    background: white;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 56px;
    border-bottom: 1px solid var(--light);
    overflow: hidden;
}

.header-item {
  border-right: 1px solid var(--light);
  height: 56px;
  padding: var(--unit);
  width: var(--width-side);
  display: inline-block;
  > div {
    display: flex;
    align-content: center;
    justify-content: center;
    img {
      height: 24px;
    }
  }
}

.heading {
  position: relative;
  display: inline-block;
  div {
    position: absolute;
    top: -24px;
    width: 400px;
    display: flex;
    align-content: center;
    padding-left: var(--double);
    text-transform: uppercase;
    color: var(--blue);
  }
}



@media screen and (max-width: 411px) {
  .heading {
    display: none;
  }
  .header-item {
    border-right: none;
    width: 100vw;
  }
}


</style>

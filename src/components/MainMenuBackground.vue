<template>
  <TransitionFade>

    <div class="main__menuBackground" v-if="menuOpen">
      <Transition2Wrapper>
        <Logo dark large :padding-bottom="false" v-if="menuOpen" :key="true" :data-index="0" />
      </Transition2Wrapper>
    </div>
  </TransitionFade>
</template>

<script>
import { store } from '../store.js'

import TransitionFade from './TransitionFade'
import Transition2Wrapper from './Transition2Wrapper'
import Logo from './Logo'

export default {
  name: 'MainMenuBackground',
  components: {
    Logo,
    TransitionFade,
    Transition2Wrapper
  },
  data: function () {
    return {
      sharedState: store.state
    }
  },
  computed: {
    menuOpen: function () {
      return this.sharedState.menuOpen
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  &__menuBackground {
    background: #222222;
    width: 60vw;
    height: 100vh;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    &__logo {
      opacity: 0.25;
      height: 50px;
    }
  }
}
</style>

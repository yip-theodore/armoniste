<template>
  <div class="side__content__instruction" v-if="!menuOpen">
    <TransitionWrapper
      vertical
      :enter-delay="1600"
    >
      <div
        v-if="page === 1"
        class="side__content__instruction__text"
        :key="page"
      >
        Scroll
      </div>
    </TransitionWrapper>

    <!-- <TransitionWrapper
      vertical
      :style="{ marginTop: '10px' }"
      :enter-delay="1400"
    > -->
      <Separator
        :v-if="page === 1"
        bottom-to-top
        :style="{ marginTop: '10px' }"
        :enter-delay="1400"
      />
      <!-- <div v-if="page === 1" class="side__content__instruction__separator" :key="page"/> -->
    <!-- </TransitionWrapper> -->
  </div>
</template>

<script>
import { data } from '../data.js'
import { store } from '../store.js'

import TransitionWrapper from './TransitionWrapper'
import Separator from './Separator'

export default {
  name: 'SideContentInstruction',
  data: function () {
    return {
      sharedState: store.state
    }
  },
  components: {
    TransitionWrapper,
    Separator
  },
  computed: {
    page: function () {
      return data[this.sharedState.currentPage].page
    },
    menuOpen: function () {
      return this.sharedState.menuOpen
    }
  }
}
</script>

<style lang="scss" scoped>
.side {
  &__content {
    &__instruction {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      align-self: center;
      &__text {
        color: #9B9B9B;
        font-size: 10px;
        text-transform: uppercase;
        font-weight: bold;
        letter-spacing: 3px;
      }
      &__separator {
        width: 0px;
        border-left: 1px solid rgba(#DBDBDB, 0.5);
        height: 30px;
        transform: rotate(180deg);
        // margin: 10px 0 0;
      }
    }
  }
}
</style>

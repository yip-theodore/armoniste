<template>
  <TransitionWrapper vertical :mirror="bottomToTop" :enter-delay="enterDelay">
    <div v-if="vIf" class="separator" :key="sharedState.currentPage"></div>
  </TransitionWrapper>
</template>

<script>
import Velocity from 'velocity-animate'
import { store } from '../store.js'

import TransitionWrapper from './TransitionWrapper'

export default {
  name: 'Separator',
  data: function () {
    return {
      sharedState: store.state
    }
  },
  props: {
    vIf: Boolean,
    bottomToTop: Boolean,
    enterDelay: Number,
  },
  components: {
    TransitionWrapper
  },
  methods: {
    beforeEnter: function (el) {
      el.style.height = 0
    },
    enter: function (el, done) {
      Velocity(
        el,
        { height: '30px' },
        { complete: done }
      )
    },
    leave: function (el, done) {
      Velocity(
        el,
        { height: 0 },
        { complete: done }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.separator {
  width: 0px;
  border-left: 1px solid rgba(#DBDBDB, 0.5);
  height: 30px;
  // margin: 10px 0;
}
</style>


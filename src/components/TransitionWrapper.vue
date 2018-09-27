<template>
  <div :style="{ overflow: 'hidden' }" :class="{ 'upside-down': mirror }">
    <transition appear
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:leave="leave"
      v-bind:css="false"
      mode="out-in"
    >
      <slot></slot>
    </transition>
  </div>
</template>

<script>
import { data } from '../data.js'
import { store } from '../store.js'

import Velocity from 'velocity-animate'

export default {
  name: 'TransitionWrapper',
  props: {
    vertical: Boolean,
    delay: Number,
    enterDelay: Number,
    leaveDelay: Number,
    mirror: Boolean
  },
  data: function () {
    return {
      sharedState: store.state
    }
  },
  methods: {
    beforeEnter: function (el) {
      const { currentPage, previousPage } = this.sharedState
      const direction = previousPage - currentPage
      el.style.transform = this.vertical ? `translateY(${direction * 100}%)` : `translateX(${direction * -100}%)`
    },
    enter: function (el, done) {
      const { currentPage, previousPage } = this.sharedState
      const direction = previousPage - currentPage
      Velocity(
        el,
        { transform: [this.vertical ? 'translateY(0)' :'translateX(0)', this.vertical ? `translateY(${direction * 100}%)` : `translateX(${direction * -100}%)`] },
        { delay: this.delay || this.enterDelay, complete: done }
      )
    },
    leave: function (el, done) {
      const { currentPage, previousPage } = this.sharedState
      const direction = previousPage - currentPage
      Velocity(
        el,
        { transform: this.vertical ? `translateY(${direction * -100}%)` : `translateX(${direction * 100}%)` },
        { delay: this.delay || this.leaveDelay, complete: done }
      )
    }
  },
  computed: {
    page: function () {
      return data[this.sharedState.currentPage].page
    }
  }
}
</script>

<style lang="scss" scoped>
.upside-down {
  transform: rotate(180deg);
}
</style>

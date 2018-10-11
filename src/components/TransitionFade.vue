<template>
  <transition appear
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:leave="leave"
    v-bind:css="false"
    mode="out-in"
  >
    <slot></slot>
  </transition>
</template>

<script>
import Velocity from 'velocity-animate'

export default {
  name: 'TransitionFade',
  props: {
    withEnter: {
      default: true
    }
  },
  methods: {
    beforeEnter: function (el) {
      if (!this.withEnter) return
      el.style.opacity = 0
    },
    enter: function (el, done) {
      if (!this.withEnter) return
      Velocity(
        el,
        { opacity: 1 },
        { duration: 1000, complete: done }
      )
    },
    leave: function (el, done) {
      Velocity(
        el,
        { opacity: 0 },
        { duration: 1000, complete: done }
      )
    }
  }
}
</script>

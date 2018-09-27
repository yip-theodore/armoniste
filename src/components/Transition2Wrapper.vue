<template>
  <transition-group appear
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:leave="leave"
    v-bind:css="false"
    mode="out-in"
  >
    <slot></slot>
  </transition-group>
</template>

<script>
import Velocity from 'velocity-animate'

export default {
  name: 'Transition2Wrapper',
  methods: {
    beforeEnter: function (el) {
      el.style.opacity = 0
      el.style.transform = 'translateY(10px)'
    },
    enter: function (el, done) {
      var delay = el.dataset.index * 100
      setTimeout(function () {
        Velocity(
          el,
          { transform: ['translateY(0)', 'translateY(10px)'], opacity: 1 },
          { duration: 300, delay: 1000, easing: 'ease-out', complete: done }
        )
      }, delay)
    },
    leave: function (el, done) {
      Velocity(
        el,
        { transform: 'translateY(10px)', opacity: 0 },
        { duration: 150, easing: 'ease-out', complete: done }
      )
    }
  }

}
</script>

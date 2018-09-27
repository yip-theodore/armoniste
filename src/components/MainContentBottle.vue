<template>
  <transition
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:leave="leave"
    v-bind:css="false"
    mode="out-in"
  >
    <img
      v-if="image"
      class="main__content__img"
      :src="require(`../assets/${image}`)"
      alt=""
      :key="image"
    >
  </transition>
</template>

<script>
import { data } from '../data.js'
import { store } from '../store.js'
import Velocity from 'velocity-animate'

export default {
  name: 'MainContentBottle',
  // props: {
  //   image: String
  // },
  data: function () {
    return {
      sharedState: store.state
    }
  },
  computed: {
    image: function () {
      return data[this.sharedState.currentPage].image
    }
  },
  methods: {
    beforeEnter: function (el) {
      const { currentPage, previousPage } = this.sharedState
      const direction = previousPage - currentPage
      el.style.transform = `translateY(${direction * -100}vh)`
    },
    enter: function (el, done) {
      const { currentPage, previousPage } = this.sharedState
      const direction = previousPage - currentPage
      Velocity(
        el,
        { transform: ['translateY(0)', `translateY(${direction * -100}vh)`] },
        { duration: 500, delay: previousPage === 0 ? 700 : 200, complete: done }
      )
    },
    leave: function (el, done) {
      const { currentPage, previousPage } = this.sharedState
      const direction = previousPage - currentPage
      Velocity(
        el,
        { transform: `translateY(${direction * 100}vh)` },
        { duration: 500, complete: done }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.bottle-enter-active{
  transition: transform 1s ease-out 0.25s, opacity .5s;
}
.bottle-leave-active {
  transition: all 1s ease-out;
}
.bottle-enter {
  transform: translateY(-100vh);
}
.bottle-leave-to {
  transform: translateY(100vh);
  opacity: 0;
}

.main {
  &__content {
    &__img {
      justify-self: center;
      grid-column: 1 / 2;
      grid-row: 1 / 2;
      height: 70vh;
    }
  }
}
</style>

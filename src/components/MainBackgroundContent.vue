<template>
    <transition
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-bind:css="false"
    >
    <div class="main__background__content"
      
    >
      <video
        v-if="background.substring(background.length-3) === 'mp4'"
        class="main__background__content__item main__background__content__item--video"
        :class="{ 'main__background__content__item--inverted': isInverted }"
        :src="require(`../assets/${background}`)"
        autoplay muted loop
        :key="background"
      ></video>
      <img
        v-else
        class="main__background__content__item main__background__content__item--image"
        :class="{ 'main__background__content__item--inverted': isInverted }"
        :src="require(`../assets/${background}`)"
        alt=""
        :key="background"
      >
    </div>
    </transition>
</template>

<script>
import { data } from '../data.js'
import { store } from '../store.js'

import Velocity from 'velocity-animate'

export default {
  name: 'MainBackgroundContent',
  // props: {
  //   background: String
  // },
  data: function () {
    return {
      sharedState: store.state
    }
  },
  computed: {
    background: function () {
      return data[this.sharedState.currentPage].background
    },
    isInverted: function () {
      const { currentPage, previousPage } = this.sharedState
      const direction = previousPage - currentPage
      return direction === -1
    }
  },
  methods: {
    beforeEnter: function (el) {
      // const { currentPage, previousPage } = this.sharedState
      // const direction = previousPage - currentPage

      // if (direction === -1) {
      //   el.style.transform = 'rotate(180deg)'
      // }

      el.style.transform = 'scale(1.1)'
    },
    enter: function (el, done) {
      Velocity(
        el,
        { transform: ['scale(1)', 'scale(1.1)'] },
        { duration: 3000, complete: done }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  &__background {
    &__content {
      width: 60vw;
      height: 100vh;
      &__item {
        &--inverted {
          transform: rotate(180deg);
        }
        &--image {
          object-position: 0;
        }
        &--video {
          object-position: 10%;
        }
        width: 60vw;
        height: 100vh;
        object-fit: cover;
      }
    }
  }
}
</style>


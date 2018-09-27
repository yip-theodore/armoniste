<template>
  <div class="main__content__title" :class="{ 'main__content__title--overlay': isOverlay }">
    <div
      v-for="(_, i) in [...Array(4)]"
      class="main__content__title__box"
      :key="i"
    >
      <transition
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:leave="leave"
        v-bind:css="false"
        mode="out-in"
      >
        <h2
          class="main__content__title__box__item"
          :key="title.join()"
          :data-index="i"
        >
          {{ title[i] }}
        </h2>
      </transition>
    </div>
  </div>
</template>

<script>
import { data } from '../data.js'
import { store } from '../store.js'

import Velocity from 'velocity-animate'

export default {
  name: 'MainContentTitle',
  data: function () {
    return {
      sharedState: store.state
    }
  },
  computed: {
    title: function () {
      return data[this.sharedState.currentPage].title
    },
    isOverlay: function () {
      return data[this.sharedState.currentPage].category === 'About'
    }
  },
  // props: {
  //   title: Array
  // },
  methods: {
    beforeEnter: function (el) {
      el.style.transform = 'translateY(150%)'
    },
    enter: function (el, done) {
      var delay = el.dataset.index * 150
      setTimeout(function () {
        Velocity(
          el,
          { transform: ['translateY(0)', 'translateY(150%)'] },
          { delay: 500, complete: done }
        )
      }, delay)
    },
    leave: function (el, done) {
      Velocity(
        el,
        { transform: 'translateY(150%)' },
        { complete: done }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  &__content {
    &__title {
      pointer-events: none;
      margin-top: 40px;
      grid-column: 1 / 2;
      grid-row: 1 / 2;
      letter-spacing: -2px;
      font-size: 80px;
      line-height: 0.9;
      text-transform: uppercase;
      font-family: 'Sree Krushnadevaraya';
      &--overlay {
        mix-blend-mode: overlay;
      }
      &__box {
        overflow: hidden;
        &__item {
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>

<template>
  <transition appear
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-bind:css="false"
    mode="in-out"
  >
    <div v-if="background" :key="background" class="main__background" :data-current-page="sharedState.currentPage">
      <MainBackgroundContent
        :background="background"
      />
    </div>
  </transition>
</template>

<script>
import { data } from '../data.js'
import { store } from '../store.js'

import Velocity from 'velocity-animate'
import MainBackgroundContent from '@/components/MainBackgroundContent'

export default {
  name: 'MainBackground',
  components: {
    MainBackgroundContent
  },
  data: function () {
    return {
      sharedState: store.state
    }
  },
  computed: {
    background: function () {
      return data[this.sharedState.currentPage].background
    }
  },
  // props: {
  //   background: String
  // },
  methods: {
    beforeEnter: function (el) {
      const { currentPage, previousPage } = this.sharedState
      const direction = previousPage - currentPage
      // console.log('E', direction)

      // if (direction === -1) return

      if (direction === -1) {
        el.style.transform = 'rotate(180deg)'
        el.style.alignSelf = 'flex-end'
      }

      // console.log('ENTER', el.dataset.currentPage)
      // if (el.dataset.currentPage !== currentPage) return
      // const alignSelf = {
      //   '-1': 'flex-end',
      //   '1': 'flex-start',
      // }
      // el.style.alignSelf = 'alignSelf[direction]'
      // el.style.alignSelf = 'flex-end'
      el.style.height = 0
      // el.style.position = ''
    },
    enter: function (el, done) {
      // console.log('> enter')
      // const { currentPage, previousPage } = this.sharedState
      // const direction = previousPage - currentPage
      // if (direction === -1) return
      // console.log(el, done)
      Velocity(
        el,
        { height: '100vh' },
        { duration: 600, complete: done }
      )
    },
    beforeLeave: function (el) {
      // const { currentPage, previousPage } = this.sharedState
      // const direction = previousPage - currentPage
      // console.log('L', direction)
      // if (direction === 1) return
      // console.log('LEAVE', el.dataset.currentPage)
      

      // const { previousPage } = this.sharedState
      // const direction = previousPage - currentPage

      // if (el.dataset.currentPage !== previousPage) return
      // const alignSelf = {
      //   '-1': 'flex-end',
      //   '1': 'flex-start',
      // }
      // el.style.alignSelf = 'flex-end'
      el.style.height = '100vh'
      // el.style.position = 'relative'
      // el.style.zIndex = 1
    },
    leave: function (el, done) {
      // console.log('< leave \n--')

      // const { currentPage, previousPage } = this.sharedState
      // const direction = previousPage - currentPage
      // console.log(direction)
      // if (direction === 1) return
      Velocity(
        el,
        { height: [0, '100vh'] },
        { duration: 600, complete: done }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  &__background {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    overflow: hidden;
    width: 60vw;
    height: 100vh;
    // justify-items: center;
    // align-items: center;
    // position: relative;
    // transform: rotate(180deg);
    // align-self: flex-end;
  }
}
</style>

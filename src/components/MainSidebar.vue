<template>
  <div
    class="main__sidebar"
    :class="{ 'main__sidebar--overlay': category==='About' }"
  >
      <div class="main__sidebar__page">
        <TransitionWrapper vertical :enter-delay="200" :leave-delay="0">
          <div :key="page">0</div>
        </TransitionWrapper>
        <TransitionWrapper vertical :enter-delay="300" :leave-delay="0">
          <div :key="page">{{ page }}</div>
        </TransitionWrapper>
      </div>
    <TransitionWrapper vertical :style="{ margin: '5px 0 10px' }" :enter-delay="400">
      <div class="main__sidebar__separator" :key="page"></div>
    </TransitionWrapper>
    <TransitionWrapper :enter-delay="500">
      <h2 class="main__sidebar__category" :key="category">
        {{ category }}
      </h2>
    </TransitionWrapper>
  </div>
</template>

<script>
import { data } from '../data.js'
import { store } from '../store.js'

import TransitionWrapper from './TransitionWrapper'

export default {
  name: 'MainSidebar',
  data: function () {
    return {
      sharedState: store.state
    }
  },
  components: {
    TransitionWrapper
  },
  computed: {
    page: function () {
      return data[this.sharedState.currentPage].page
    },
    category: function () {
      return data[this.sharedState.currentPage].category
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  &__sidebar {
    position: relative;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    // mix-blend-mode: overlay;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50px;
    border-right: 1px solid rgba(white, 0.5);
    padding-top: 20px;
    &--overlay {
      mix-blend-mode: overlay;
    }
    &__page {
      font-family: 'Sree Krushnadevaraya';
      font-size: 20px;
      display: flex;
    }
    &__separator {
      width: 0px;
      height: 30px;
      border-right: 1px solid rgba(white, 0.5);
      // margin: 5px 0 10px;
    }
    &__category {
      font-size: 10px;
      text-transform: uppercase;
      font-weight: bold;
      letter-spacing: 3px;
      white-space: nowrap;
      writing-mode: vertical-lr;
      text-orientation: sideways;
    }
  }
}
</style>

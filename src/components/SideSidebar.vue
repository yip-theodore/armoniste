<template>
  <div class="side__sidebar" @mouseover="mouseOver" @mouseout="mouseOut">
    <img src="../assets/menu.svg" alt="" class="side__sidebar__icon">
    <Separator :v-if="hovering" :style="{ margin: '10px 0' }"/>
    <TransitionWrapper>
      <h2 class="side__sidebar__action" v-if="hovering" :key="hovering">Menu</h2>
    </TransitionWrapper>
  </div>
</template>

<script>
import TransitionWrapper from './TransitionWrapper'
import Separator from './Separator'

export default {
  name: 'SideSidebar',
  data: function () {
    return {
      hovering: false
    }
  },
  components: {
    TransitionWrapper,
    Separator
  },
  methods: {
    mouseOver: function () {
      this.hovering = true
    },
    mouseOut: function () {
      this.hovering = false
    }
  }
}
</script>

<style lang="scss" scoped>
.side {
  &__sidebar {
    color: #9B9B9B;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50px;
    flex-shrink: 0;
    border-left: 1px solid rgba(#DBDBDB, 0.5);
    padding-top: 30px;
    cursor: pointer;
    &:hover {
      background-color: white;
      & .side__sidebar__separator {
        display: block;
      }
      & .side__sidebar__action {
        display: block;
      }
    }
    &__icon {
    }
    &__separator {
      // display: none;
      width: 0px;
      border-left: 1px solid rgba(#DBDBDB, 0.5);
      height: 30px;
      margin: 10px 0;
    }
    &__action {
      // display: none;
      font-size: 10px;
      text-transform: uppercase;
      font-weight: bold;
      letter-spacing: 3px;
      writing-mode: vertical-lr;
      text-orientation: sideways;
    }
  }
}
</style>

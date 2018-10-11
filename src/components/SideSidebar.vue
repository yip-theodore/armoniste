<template>
  <div class="side__sidebar">
    <div class="side__sidebar__menu" @click="toggleMenu">
      <img :src="menuOpen ? require('../assets/close.svg') : require('../assets/menu.svg')" alt="" class="side__sidebar__menu__icon">
      <!-- <Separator :v-if="hovering" :style="{ margin: '10px 0' }"/> -->

      <div :style="{ overflow: 'hidden', margin: '10px 0' }">
        <div class="side__sidebar__menu__separator"></div>
      </div>

      <div :style="{ overflow: 'hidden' }">
        <!-- <transition name="menu"> -->
          <h2 class="side__sidebar__menu__action">
            {{ menuOpen ? 'Close' : 'Menu' }}
          </h2>
        <!-- </transition> -->
      </div>
    </div>
    <button
      @click="previous"
      :disabled="sharedState.currentPage === 0"
      class="side__sidebar__previous"
    >
      <img src="../assets/arrow.svg" alt="" class="side__sidebar__previous__icon">
    </button>
    <button
      @click="next"
      :disabled="sharedState.currentPage === pageMax"
      class="side__sidebar__next"
    >
      <img src="../assets/arrow.svg" alt="" class="side__sidebar__next__icon">
    </button>
  </div>
</template>

<script>
import throttle from 'lodash.throttle'

import { data } from '@/data.js'
import { store } from '../store.js'

import TransitionWrapper from './TransitionWrapper'
import Separator from './Separator'

export default {
  name: 'SideSidebar',
  data: function () {
    return {
      sharedState: store.state,
      hovering: false
    }
  },
  components: {
    TransitionWrapper,
    Separator
  },
  methods: {
    previous: throttle(function () {
        store.setPage(this.sharedState.currentPage - 1)
      }, 1500, { trailing: false }),
    next: throttle(function () {
        store.setPage(this.sharedState.currentPage + 1)
      }, 1500, { trailing: false }),
    toggleMenu: function () {
      store.toggleMenu()
    }
  },
  computed: {
    pageMax: function () {
      return data.length - 1
    },
    menuOpen: function () {
      return this.sharedState.menuOpen
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-enter-active, .menu-leave-active {
  transition: transform .5s;
}
.menu-enter, .menu-leave-to {
  transform: translateX(-100%);
}

.side {
  &__sidebar {
    color: #9B9B9B;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50px;
    flex-shrink: 0;
    border-left: 1px solid rgba(#DBDBDB, 0.5);
    cursor: pointer;
    &__menu {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 30px;
      height: 100%;
      &:hover {
        background-color: white;
        & .side__sidebar__menu__separator {
          // display: block;
          transform: translateY(0);

        }
        & .side__sidebar__menu__action {
          // display: block;
          transform: translateX(0);
        }
      }
      &__icon {
      }
      &__separator {
        // display: none;
        width: 0px;
        border-left: 1px solid rgba(#DBDBDB, 0.5);
        height: 30px;
        
        transform: translateY(-100%);
        transition: transform .5s ease-out;
      }
      &__action {
        // display: none;
        font-size: 10px;
        text-transform: uppercase;
        font-weight: bold;
        letter-spacing: 3px;
        writing-mode: vertical-lr;
        text-orientation: sideways;
        transform: translateX(-100%);
        transition: transform .5s ease-out;
      }
    }
    &__previous,
    &__next {
      outline: none;
      flex-shrink: 0;
      align-self: flex-end;
      border: none;
      border-top: 1px solid rgba(#DBDBDB, 0.5);
      display: flex;
      width: 100%;
      height: 50px;
      align-items: center;
      justify-content: center;
      background: none;
      cursor: pointer;
      &:hover:not(:disabled) {
        background-color: white;
      }
      &:disabled {
        cursor: not-allowed;
        img {
          filter: brightness(1.4);
        }
      }
    }
    &__previous {
      &__icon {
        transform: rotate(180deg);
      }
      &:disabled {
        &__icon {
          filter: brightness(3);
        }
      }
    }
  }
}
</style>

<template>
  <Transtion2Wrapper>
    <div class="side__content__links" v-if="menuOpen" :key="1">
      <span class="side__content__links__link" @click="setPage(0)">About</span>
      <span class="side__content__links__page">01</span>
      <span class="side__content__links__link" @click="setPage(1)">Traditional Wines</span>
      <span class="side__content__links__page">02</span>
      <span class="side__content__links__link" @click="setPage(3)">Herbal Wines</span>
      <span class="side__content__links__page">04</span>
      <span class="side__content__links__link" @click="setPage(7)">Contact</span>
      <span class="side__content__links__page">08</span>
    </div>
  </Transtion2Wrapper>  
</template>

<script>
import { store } from '../store.js'

import Transtion2Wrapper from './Transition2Wrapper'

export default {
  name: 'SideContentMenu',
  data: function () {
    return {
      sharedState: store.state,
    }
  },
  components: {
    Transtion2Wrapper
  },
  methods: {
    setPage: function (page) {
      store.setPage(page)
      store.toggleMenu()
    }
  },
  computed: {
    menuOpen: function () {
      return this.sharedState.menuOpen
    }
  }
}
</script>

<style lang="scss" scoped>
.side {
  &__content {
    &__links {
      margin-top: 180px;
      font-family: 'Sree Krushnadevaraya';
      text-rendering: geometricPrecision;
      display: grid;
      grid-template-columns: 1fr auto;
      grid-gap: 25px;
      align-items: baseline;
      &__link {
        color: #9B9B9B;
        font-size: 30px;
        cursor: pointer;
        &:hover {
          color: #4A4A4A;
        }
      }
      &__page {
        color: #DBDBDB;
        font-size: 20px;
      }
    }
  }
}
</style>



<template>
  <TransitionFade :with-enter="false">
    <div class="Home__loading" v-if="loading && loading !== -1">
      <Logo grey large :padding-bottom="false"/>
      <div class="Home__loading__value">
        {{ loading }}%
      </div>
    </div>
  </TransitionFade>
</template>

<script>
import TransitionFade from './TransitionFade'
import Logo from './Logo'

export default {
  name: 'Loading',
  props: {
    loading: [Number, Boolean]
  },
  components: {
    Logo,
    TransitionFade
  }
}
</script>

<style lang="scss" scoped>
.Home {
  &__loading {
    position: fixed;
    height: 100vh;
    background-color:#FBFBFB;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &__value {
      margin: 10px 0;
      font-family: 'Sree Krushnadevaraya';
      font-size: 20px;
      color: #DBDBDB;
    }
  }
}
</style>


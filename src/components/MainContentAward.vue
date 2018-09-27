<template>
  <p class="main__content__award">
    <TransitionWrapper :style="{ marginRight: '10px' }" :enter-delay="1400" mirror>
      <div v-if="award" class="main__content__award__separator" />
    </TransitionWrapper>
    <TransitionWrapper vertical :enter-delay="1400">
      <div v-if="award">
        {{ award.type }} Winner
      </div>
    </TransitionWrapper>
  </p>
</template>

<script>
import TransitionWrapper from './TransitionWrapper'

export default {
  name: 'MainContentAward',
  props: {
    award: Object
  },
  components: {
    TransitionWrapper
  }
}
</script>

<style lang="scss" scoped>
.main {
  &__content {
    &__award {
      height: 14px;
      margin-top: 40px;
      display: flex;
      grid-column: 1 / 2;
      grid-row: 1 / 2;
      font-size: 10px;
      text-transform: uppercase;
      font-weight: bold;
      letter-spacing: 3px;
      margin-bottom: 5px;
      &__separator {
        width: 30px;
        height: 0px;
        border-bottom: 1px solid rgba(white, 0.5);
        margin-top: 6px;
      }
    }
  }
}
</style>

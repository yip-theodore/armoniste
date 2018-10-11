<template>
  <img src="../assets/logo.svg" alt="" class="side__content__logo"
    :class="{
      'side__content__logo--grey': grey,
      'side__content__logo--dark': dark,
      'side__content__logo--large': large,
      'side__content__logo--paddingBottom': paddingBottom,
    }" :data-index="0"
  >  
</template>

<script>
export default {
  name: 'Logo',
  props: {
    grey: Boolean,
    dark: Boolean,
    large: Boolean,
    paddingBottom: {
      default: true
    }
  }
}
</script>

<style lang="scss">
.side {
  &__content {
    &__logo {
      display: block;
      margin: 0 auto;
      &--grey {
        filter: brightness(3);
      }
      &--dark {
        filter: brightness(0.6);
      }
      &--large {
        width: 200px;
      }
      &--paddingBottom {
        margin-bottom: 140px;
      }
    }
  }
}
</style>


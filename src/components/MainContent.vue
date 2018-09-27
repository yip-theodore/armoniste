<template>
  <div class="main__content">
    <MainContentBottle
      :image="image"
    />
    <MainContentAward
      :award="award"
    />
    <MainContentTitle
      v-if="title"
      :title="title"
    />
  </div>
</template>

<script>
import MainContentBottle from '@/components/MainContentBottle'
import MainContentAward from '@/components/MainContentAward'
import MainContentTitle from '@/components/MainContentTitle'

export default {
  name: 'MainContent',
  components: {
    MainContentBottle,
    MainContentAward,
    MainContentTitle
  },
  props: {
    title: Array,
    image: String,
    award: Object,
    isOverlay: Boolean
  }
}
</script>

<style lang="scss" scoped>
.main {
  &__content {
    position: relative;
    padding: 150px 50px 0 100px;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    // mix-blend-mode: overlay;
    display: grid;
    grid-template: auto / auto;
    
  }
}
</style>

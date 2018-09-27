<template>
  <main class="main">
    <MainBackground
      :background="pageData.background"
    />
    <MainSidebar
      :page="pageData.page"
      :category="pageData.category"
      :is-overlay="pageData.category === 'About'"
    />
    <MainContent
      :title="pageData.title"
      :image="pageData.image"
      :award="pageData.award"
      :is-overlay="pageData.category === 'About'"
    />
  </main>
</template>

<script>
import MainBackground from '@/components/MainBackground'
import MainSidebar from '@/components/MainSidebar'
import MainContent from '@/components/MainContent'

export default {
  name: 'Main',
  components: {
    MainBackground,
    MainSidebar,
    MainContent
  },
  props: {
    pageData: Object
  }
}
</script>

<style lang="scss" scoped>
.main {
  color: white;
  width: 60vw;
  background-size: cover;
  display: flex;
  flex-shrink: 0;
  display: grid;
  overflow: hidden;
  grid-template: auto / auto;
}
</style>

<template>
  <article class="side">
    <SideContent
      :name="pageData.name"
      :description="pageData.description"
      :award="pageData.award"
      :color="pageData.color"
      :info="pageData.info"
      :is-landing-page="pageData.page === 1"
    />
    
    <SideSidebar
    />
  </article>
</template>

<script>
import SideContent from '@/components/SideContent'
import SideSidebar from '@/components/SideSidebar'

export default {
  name: 'Side',
  components: {
    SideContent,
    SideSidebar
  },
  props: {
    pageData: Object
  }
}
</script>

<style lang="scss" scoped>
.side {
  width: 100%;
  display: flex;
}
</style>

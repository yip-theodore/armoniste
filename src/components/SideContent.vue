<template>
  <div class="side__content">
    <Transtion2Wrapper>
      <Logo v-if="!menuOpen" :key="true" :data-index="0"/>
    </Transtion2Wrapper>
    <Transtion2Wrapper v-if="!menuOpen" :enter-delay="category === 'About' && 400">
      <SideContentText
        v-if="description"
        :name="name"
        :description="description"
        :color="color"
        :award="award"
        :key="page"
        
      />
      <SideContentInfo
        v-if="info"
        :info="info"
        :key="page+'info'"        
        
      />
      <SideContentContact
        v-if="category === 'Contact'"
        :key="page+'contact'"
      />
    </Transtion2Wrapper>
    <SideContentInstruction/>
    <SideContentMenu />
  </div>
</template>

<script>
import { data } from '../data.js'
import { store } from '../store.js'

import Logo from '@/components/Logo'
import SideContentText from '@/components/SideContentText'
import SideContentInfo from '@/components/SideContentInfo'
import SideContentInstruction from '@/components/SideContentInstruction'
import SideContentContact from './SideContentContact'
import SideContentMenu from './SideContentMenu'
import Transtion2Wrapper from './Transition2Wrapper'

export default {
  name: 'SideContent',
  components: {
    Logo,
    SideContentText,
    SideContentInfo,
    SideContentInstruction,
    SideContentContact,
    SideContentMenu,
    Transtion2Wrapper
  },
  data: function () {
    return {
      sharedState: store.state
    }
  },
  computed: {
    category: function () {
      return data[this.sharedState.currentPage].category
    },
    name: function () {
      return data[this.sharedState.currentPage].name
    },
    description: function () {
      return data[this.sharedState.currentPage].description
    },
    color: function () {
      return data[this.sharedState.currentPage].color
    },
    award: function () {
      return data[this.sharedState.currentPage].award
    },
    info: function () {
      return data[this.sharedState.currentPage].info
    },
    page: function () {
      return data[this.sharedState.currentPage].page
    },
    menuOpen: function () {
      return this.sharedState.menuOpen
    }
  },
  // props: {
  //   name: String,
  //   description: [String, Array],
  //   color: String,
  //   award: Object,
  //   info: Object,
  //   isLandingPage: Boolean
  // }
}
</script>

<style lang="scss" scoped>
.side {
  &__content {
    width: 100%;
    padding: 50px 50px 0 75px;
    display: flex;
    flex-direction: column;
  }
}
</style>

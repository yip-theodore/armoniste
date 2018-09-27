<template>
  <Transtion2Wrapper>
    <div
      v-for="(section, i) in contact"
      :key="section.title"
      class="side__content__contact"
      :data-index="i"
    >
      <h4 class="side__content__contact__title">
        {{ section.title }}
      </h4>
      <p
        v-for="line in section.content"
        :key="line"
        class="side__content__contact__text"
      >
        {{ line }}
      </p>
    </div>
  </Transtion2Wrapper>
</template>

<script>
import { data } from '../data.js'
import { store } from '../store.js'

import Transtion2Wrapper from './Transition2Wrapper'

export default {
  name: 'SideContentContact',
  data: function () {
    return {
      sharedState: store.state
    }
  },
  computed: {
    contact: function () {
      return data[this.sharedState.currentPage].contact
    }
  },
  components: {
    Transtion2Wrapper
  }
}
</script>

<style lang="scss" scoped>
.side {
  &__content {
    &__contact {
      margin-bottom: 50px;
      &__title {
        color: #9B9B9B;
        font-size: 10px;
        text-transform: uppercase;
        font-weight: bold;
        letter-spacing: 3px;
        margin-bottom: 5px;
      }
      &__text {
        font-size: 12px;
        font-weight: 200;
      }
    }
  }
}
</style>

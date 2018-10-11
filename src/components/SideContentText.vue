<template>
  <!-- <transition name="text" mode="out-in"> -->
    <div :key="name" class="side__content__text" :data-index="0">
      <h3
        v-if="name"
        class="side__content__text__name"
        :style="{ color: color }"
      >
        {{ name }}
      </h3>
      <Transtion2Wrapper :enter-delay="category === 'About' && 400">
        <p
          v-if="description"
          v-for="(paragraph, i) in description"
          class="side__content__text__description"
          :key="paragraph"
          :data-index="i"
        >
          {{ paragraph }}
          <span v-if="i !== description.length - 1">
            <br><br>
          </span>  
        </p>
        <p
          v-if="award"
          class="side__content__text__award"
          :key="award.name"
          :data-index="description.length-1"
        >
          {{ award.type }} - {{ award.name }}
        </p>
      </Transtion2Wrapper>
    </div>
  <!-- </transition> -->
</template>

<script>
import { data } from '../data.js'
import { store } from '../store.js'

import Transtion2Wrapper from './Transition2Wrapper'

export default {
  name: 'SideContentText',
  data: function () {
    return {
      sharedState: store.state
    }
  },
  // props: {
  //   name: String,
  //   description: [String, Array],
  //   color: String,
  //   award: Object
  // },
  components: {
    Transtion2Wrapper
  },
  computed: {
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
    category: function () {
      return data[this.sharedState.currentPage].category
    }
  },
}
</script>

<style lang="scss" scoped>
.text-enter-active {
  transition: all .5s ease-out 1.2s;
}
.text-leave-active {
  transition: all .3s ease-out;
}
.text-enter, .text-leave-to {
  transform: translateY(10px);
  opacity: 0;
}

.side {
  &__content {
    &__text {
      margin-bottom: 50px;
      &__name {
        // color: #99CC33;
        font-size: 10px;
        text-transform: uppercase;
        font-weight: bold;
        letter-spacing: 3px;
        margin-bottom: 5px;
      }
      &__description {
        font-family: 'Sree Krushnadevaraya';
        font-size: 18px;
        line-height: 22px;
      }
      &__award {
        margin-top: 5px;
        color: #9B9B9B;
        font-family: 'Sree Krushnadevaraya';
        line-height: 22px;
      }
    }
  }
}
</style>

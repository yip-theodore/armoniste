<template>
  <div class="Home">
    <Main
      :page-data="pageData"
    />
    <Side
      :page-data="pageData"
    />
  </div>
</template>

<script>
import Main from '@/components/Main'
import Side from '@/components/Side'

import { data } from '@/data.js'
import { store } from '../store.js'

import throttle from 'lodash.throttle'

export default {
  name: 'home',
  components: {
    Main,
    Side
  },
  data: function () {
    return {
      sharedState: store.state
    }
  },
  created: function () {
    
    const video = document.createElement('video')
    const videoLoadedInterval = window.setInterval(() => {
      if (video.readyState === 4) {
        loadedCount += 1
        console.log(loadedCount, video.src)
        window.clearInterval(videoLoadedInterval)
      }
    }, 200)
    video.src = require('../assets/' + 'background_about.mp4').replace('https://yip-theodore.github.io/', 'https://yip-theodore.github.io/armoniste/')

    const images = [
      'bottle_cotes_du_rhone_red_wine.png',
      'bottle_cotes_du_rhone_white_wine.png',
      'bottle_flaveur_sauge_sclaree.png',
      'bottle_flaveur_basilic_grand_vert.png',
      'bottle_flaveur_basilic_sacre.png',
      'bottle_flaveur_lavande.png',
      'background_cotes_du_rhone_red_wine.jpg',
      'background_cotes_du_rhone_white_wine.jpg',
      'background_flaveur_sauge_sclaree.jpg',
      'background_flaveur_basilic_grand_vert.jpg',
      'background_flaveur_basilic_sacre.jpg',
      'background_flaveur_lavande.jpg',
      'contacte.jpg',
      'label_vigneron_independant.svg',
      'label_qualite_france.svg',
      'labele_ab.svg',
      'label_aoc.svg',
      'label_ecocert.svg'
    ]
    let loadedCount = 0

    images.forEach(image => {
      const img = document.createElement('img')
      img.onload = function () {
        loadedCount += 1
        console.log(loadedCount, image)
      }
      img.onerror = function () {
        console.log('error', image)
      }
      img.src = require('../assets/' + image).replace('https://yip-theodore.github.io/', 'https://yip-theodore.github.io/armoniste/')
    })

    window.addEventListener('keydown', throttle(this.changePageOnKeydown, 1500, { trailing: false }))
    window.addEventListener('wheel', throttle(this.changePageOnScroll, 1500, { trailing: false }))
  },
  methods: {
    changePageOnScroll: function(e) {
      if (e.deltaY > 0) {
        if (this.page +1 === data.length) return
        this.page += 1
        store.setPage(this.sharedState.currentPage+1)
      } else {
        if (this.page - 1 === -1) return
        this.page -= 1
        store.setPage(this.sharedState.currentPage-1)
      }
    },
    changePageOnKeydown: function(e) {
      switch (e.which) {
        case 40: // down
          if (this.page +1 === data.length) return
          this.page += 1
          store.setPage(this.sharedState.currentPage+1)
          break;
        case 38: // up
          if (this.page - 1 === -1) return
          this.page -= 1
          store.setPage(this.sharedState.currentPage-1)

      }
    }
  },
  computed: {
    pageData: function () {
      return data[this.sharedState.currentPage]
    }
  }
}
</script>

<style lang="scss">
.Home {
  display: flex;
  overflow: hidden;
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  // .main__content__img {
    transition: opacity .5s;
  // }
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  // .main__content__img {
    opacity: 0;
  // }
}
</style>

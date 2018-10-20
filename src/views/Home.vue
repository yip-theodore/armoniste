<template>
  <div class="Home">
    <Main
      v-if="!loading && loading !== 0"
      :page-data="pageData"
    />
    <Side
      v-if="!loading && loading !== 0"
      :page-data="pageData"
    />
    <Loading :loading="loading" />
  </div>
</template>

<script>
import Main from '@/components/Main'
import Side from '@/components/Side'
import Loading from '../components/Loading'

import { data } from '@/data.js'
import { store } from '../store.js'

import throttle from 'lodash.throttle'

export default {
  name: 'home',
  components: {
    Main,
    Side,
    Loading
  },
  data: function () {
    return {
      sharedState: store.state,
      loading: 0
    }
  },
  created: function () {
    
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
      'contact.jpg',
      'label_Vignerons Indépendants.svg',
      'label_Qualité France.svg',
      'label_Agriculture biologique.svg',
      'label_Appellation d\'origine contrôlée.svg',
      'label_Ecocert.svg'
    ]
    let loadedCount = 0

    images.forEach(image => {
      const img = document.createElement('img')
      img.onload = () => {
        loadedCount += 1
        this.loading = Math.round(loadedCount / (images.length + 1) * 100)
        // console.log(loadedCount, this.loading, image)
        this.loading === 100 && this.endLoadingState()
      }
      img.onerror = () => {
        console.log('error', image)
      }
      img.src = require('../assets/' + image)
    })


    const video = document.createElement('video')
    const videoLoadedInterval = window.setInterval(() => {
      if (video.readyState === 4) {
        loadedCount += 1
        this.loading = Math.round(loadedCount / (images.length + 1) * 100)
        // console.log(loadedCount, this.loading, video.src)
        this.loading === 100 && this.endLoadingState()
        window.clearInterval(videoLoadedInterval)
      }
    }, 200)
    video.src = require('../assets/' + 'background_about.mp4')

    window.addEventListener('keydown', throttle(this.changePageOnKeydown, 1500, { trailing: false }))
    window.addEventListener('wheel', throttle(this.changePageOnScroll, 1500, { trailing: false }))
  },
  methods: {
    changePageOnScroll: function(e) {
      if (e.deltaY > 0) {
        if (this.sharedState.currentPage === data.length-1) return
        this.page += 1
        store.setPage(this.sharedState.currentPage+1)
      } else {
        if (this.sharedState.currentPage === 0) return
        this.page -= 1
        store.setPage(this.sharedState.currentPage-1)
      }
    },
    changePageOnKeydown: function(e) {
      switch (e.which) {
        case 39: // right
        case 40: // down
          if (this.sharedState.currentPage === data.length-1) return
          this.page += 1
          store.setPage(this.sharedState.currentPage+1)
          break;
        case 37: // left
        case 38: // up
          if (this.sharedState.currentPage === 0) return
          this.page -= 1
          store.setPage(this.sharedState.currentPage-1)

      }
    },
    endLoadingState: function () {
      window.setTimeout(() => {
        this.loading = -1
        window.setTimeout(() => {
          this.loading = false
        }, 1000)
      }, 200)
    }
  },
  computed: {
    pageData: function () {
      return data[this.sharedState.currentPage]
    },
    menuOpen: function () {
      return this.sharedState.menuOpen
    }
  }
}
</script>

<style lang="scss">
body {
  background-color: #FBFBFB;
}

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

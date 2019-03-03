<template>
    <div class="flux7" >
        <vue-flux
        :options="fluxOptions"
        :images="imgs"
        :transitions="fluxTransitions"
        :style="{height: fluxHeight + 'px'}"
        ref="slider">
            <flux-pagination slot="pagination"></flux-pagination>
        </vue-flux>
        <!-- <button @click="next">NEXT</button>
        <button @click="prev">PREV</button> -->
    </div>
</template>

<script>
import { VueFlux, FluxPagination, Transitions } from 'vue-flux'
import windowResize from '@/utils/domEvent.js'

export default {
  components: {
    VueFlux,
    FluxPagination
  },
  props: {
    imgs: {
      type: Array,
      default: () => []
    },
    height: {
      type: [String, Number],
      default: () => '300'
    }
  },
  computed: {
    size () {
      let w = this.width
      let h = w / 1.468
      return {width: w + 'px', height: h + 'px'}
    }
  },
  mounted () {
    windowResize(this.resetSize)
  },
  data: () => ({
    fluxHeight: (document.body.clientWidth || document.documentElement.clientWidth) * 700 / 1920,
    fluxOptions: {
      autoplay: true,
      bindKeys: true
    },
    width: document.body.clientWidth || document.documentElement.clientWidth,
    transitionType: [
      'transitionBlinds2d',
      'transitionBlinds3d',
      'transitionBlocks1',
      'transitionBlocks2',
      'transitionBook',
      'transitionCamera',
      'transitionConcentric',
      'transitionCube',
      'transitionExplode',
      'transitionFade',
      'transitionFall',
      'transitionKenburn',
      'transitionRound1',
      'transitionRound2',
      'transitionSlide',
      'transitionSwipe',
      'transitionWarp',
      'transitionWaterfall',
      'transitionWave',
      'transitionZip'
    ],
    fluxImages: [ 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550388367942&di=3a340987df3fad0111a84d93ffa278fc&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201603%2F03%2F20160303203625_Kjtvc.jpeg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550388367942&di=3a340987df3fad0111a84d93ffa278fc&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201603%2F03%2F20160303203625_Kjtvc.jpeg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550388367942&di=3a340987df3fad0111a84d93ffa278fc&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201603%2F03%2F20160303203625_Kjtvc.jpeg' ],
    fluxTransitions: {
      'transitionBlinds2d': Transitions.transitionBlinds2d,
      'transitionBlinds3d': Transitions.transitionBlinds3d,
      'transitionBlocks1': Transitions.transitionBlocks1,
      'transitionBlocks2': Transitions.transitionBlocks2,
      'transitionBook': Transitions.transitionBook,
      'transitionCamera': Transitions.transitionCamera,
      'transitionConcentric': Transitions.transitionConcentric,
      'transitionCube': Transitions.transitionCube,
      'transitionExplode': Transitions.transitionExplode,
      'transitionFade': Transitions.transitionFade,
      'transitionFall': Transitions.transitionFall,
      'transitionKenburn': Transitions.transitionKenburn,
      'transitionRound1': Transitions.transitionRound1,
      'transitionRound2': Transitions.transitionRound2,
      'transitionSlide': Transitions.transitionSlide,
      'transitionSwipe': Transitions.transitionSwipe,
      'transitionWarp': Transitions.transitionWarp,
      'transitionWaterfall': Transitions.transitionWaterfall,
      'transitionWave': Transitions.transitionWave,
      'transitionZip': Transitions.transitionZip
    }
  }),
  methods: {
    resetSize () {
      this.width = document.body.clientWidth || document.documentElement.clientWidth
      this.fluxHeight = this.width * 700 / 1920
    },
    next () {
      this.$refs.slider.showImage('next')
    },
    prev () {
      this.$refs.slider.showImage('prev')
    }
  }
}
</script>

<style>
  .flux7 .vue-flux .flux-pagination li span.pagination-item {
      display: inline-block;
      width: 8px !important;
      height: 8px !important;
      border: 1px solid #fff;
      border-radius: 50%;
      background-color: rgba(0,0,0,.7);
      -webkit-transition: background-color .2s ease-in,border .2s ease-in;
      transition: background-color .2s ease-in,border .2s ease-in;
  }
</style>

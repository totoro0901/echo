<template>
  <div class="banner">
    <swiper class='swiper' :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for='(item,index) in json' :key='index'>
        <router-link :to="`/detail/${item.sound.id}`">
          <img :src="item.sound.pic_640">
        </router-link>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  props: {
    json: Array
  },
  data () {
    return {
      swiperOption: {
        notNextTick: true,
        pagination: {
          el: '.swiper-pagination'
        },
        paginationClickable: true,
        autoplay: 3000,
        autoplayDisableOnInteraction: false
      }
    }
  }
}
</script>

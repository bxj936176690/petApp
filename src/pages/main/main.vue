<template>
    <div class="main">
      <div class="imgWrap">
        <mt-swipe class="turnImg" :auto="4000" v-if="main.datas">
          <mt-swipe-item  v-for="(item, index) in main.datas[0].value" :key="index">
            <img :src="item.image" alt="..." width="100%">
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <ul>
        <li v-for=""><img src="" alt=""></li>
      </ul>
    </div>
</template> <!--html-->

<script>
    import {mapState} from 'vuex'
    export default{
        computed: {
          ...mapState(['main'])
        },
        mounted(){
           this.$store.dispatch('requestMain')
        }
    }
</script><!--js-->

<style lang="stylus" rel="stylesheet/stylus">
  .imgWrap
    width 100%
    height: 160px
</style><!--css-->

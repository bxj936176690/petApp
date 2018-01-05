<template>
    <div>
      <div class="title">
        <a href="http://wap.epet.com/download.html?appname=epetmall">
          <img src="./components/header/title.jpg" alt="">
        </a>
      </div>
      <petHeader />
      <div class="tab">
        <div class="list">
          <router-link to="/main">首页</router-link>
          <router-link to="/clothMall">服装城</router-link>
          <router-link to="/dogFood">狗狗主食</router-link>
          <router-link to="/heath">医疗保健</router-link>
          <router-link to="/snackToy">玩具零食</router-link>
          <router-link to="/dailyThings">日用外出</router-link>
          <router-link to="/beauty">美容香波</router-link>
        </div>

      </div>
      <div class="mainContent">
        <router-view></router-view>
      </div>
      <div class="foot">
        <footMenu />
      </div>
    </div>
</template> <!--html-->

<script>
    import footMenu from './components/footmenu/footMenu.vue'
    import header from './components/header/header.vue'
    export default{
        data(){
            return {

            }
        },
      components: {
        footMenu,
        'petHeader': header
      }
    }
</script><!--js-->

<style lang="stylus" rel="stylesheet/stylus">
  .title
    width 100%
    height 55px
    img
      width 100%
      height 100%
  .tab
    width 100%
    height 36px
    overflow-x auto
    overflow-y hidden
    white-space nowrap
    &::-webkit-scrollbar
      display none
    .list
      display flex
      width 140%
      a
        line-height 36px
        text-align center
        font-size 14px
        width 20%
        height 36px
  .foot
    position absolute
    bottom 0
    left 0
    height 50px
    width 100%
    border-top 1px solid #e7e7e7
</style><!--css-->

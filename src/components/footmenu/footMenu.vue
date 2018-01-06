<template>
    <div class="foot-menu">
      <div class="menu-item">
        <router-link to="/main">
          <svgImg className="icon" type="#icon-main-1"></svgImg>
          <span>首页</span>
        </router-link>
      </div>
      <div class="menu-item">
        <router-link to="/select">
          <svgImg className="icon" type="#icon-select-1"></svgImg>
          <span>分类</span>
        </router-link>
      </div>
      <div class="menu-item">
        <router-link to="/shopCart">
          <svgImg className="icon" type="#icon-cart-1"></svgImg>
          <span>购物车</span>
        </router-link>
      </div>
      <div class="menu-item">
        <router-link to="/userCenter">
          <svgImg className="icon" type="#icon-center-1"></svgImg>
          <span>我的e宠</span>
        </router-link>
      </div>
    </div>
</template> <!--html-->

<script>
    export default{
        data(){
            return {}
        }
    }
</script><!--js-->

<style lang="stylus" rel="stylesheet/stylus">
  .foot-menu
    border-top 1px solid #e7e7e7
    display flex
    position fixed
    bottom 0
    z-index 10
    height 50px
    background: white
    .menu-item
      text-align center
      width 25%
      .icon
        width 25%
        height 30px
      span
        display block
        font-size 12px

</style><!--css-->

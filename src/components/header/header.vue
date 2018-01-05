<template>
  <div class="header">
    <div class="petSelect">
      <span>狗狗站</span>
      <span>|</span>
      <span>陕西</span>
      <i></i>
    </div>
    <input type="search" placeholder="搜索商品和品牌">
    <svgImg className="icon" type="#icon-msg" />
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
  .header
    position relative
    width 100%
    height 52px
    line-height 52px
    font-size 14px
    .petSelect
      float left
      margin-left 10px
      i
        border-style: solid solid dotted;
        border-color: #898989 transparent transparent;
        border-width 4px
        margin-right 10px
        position absolute
        top 26px
        left 95px
    .icon
      width 30px
      height 30px
      display inline-block
      vertical-align middle
    input
      background-color lightgrey
      margin-left 24px
      height 25px
      width 220px
      font-size 12px
      text-indent 10px
      border-radius 2px

</style><!--css-->

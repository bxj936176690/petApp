<template>
    <div class="main" ref="mainWrap" v-if="main.datas">
      <div class="content">
        <div class="imgWrap">
          <mt-swipe class="turnImg" :auto="4000">
            <mt-swipe-item  v-for="(item, index) in main.datas[0].value" :key="index">
              <img :src="item.image" alt="..." width="100%">
            </mt-swipe-item>
          </mt-swipe>
        </div>
        <ul class="list">
          <li v-for="(item, index) in main.datas[2].menus" :key="index">
            <img :src="item.image" alt="">
          </li>
        </ul>
        <split />

        <div class="custom" v-if="mainOther.data">
          <img :src="mainOther.data['2438'].value[0].image" alt="...">
        </div>

        <div class="surpriseSeller" v-if="mainOther.data">
          <div class="surprise_icon">
            <img :src="mainOther.data['3'].surprise_icon.image" alt="...">
            <div class="lastTime">
              <span>距本场结束  00:00:00</span>
            </div>
            <a href="##">
              <img :src="mainOther.data['3'].right_image.image" alt="...">
            </a>
          </div>
          <div class="picWrap" ref="goodList">
            <ul class="goods-list" v-if="mainOther.data" ref="ul">
              <li v-for="(good, index) in mainOther.data['3'].goods" :key="index">
                <img :src="good.image.image" alt="">
                <span style="color: red">￥{{good.sale_price}}</span>
                <span>{{good.little_price}}</span>
              </li>
            </ul>
          </div>
        </div>
        <split />

        <div class="fastSeller">
          <a :href="main.datas[7].content_images[0][0].target.param" v-if="main.datas">
            <img :src="main.datas[7].content_images[0][0].image" alt="">
          </a>
        </div>
        <split />

        <div class="useThing">
          <div class="t0 left">
            <a :href="main.datas[9].content_images[0][0].target.param">
              <img :src="main.datas[9].content_images[0][0].image" alt="">
            </a>
          </div>
          <div class="t0 right">
            <a :href="main.datas[9].content_images[1][0].target.param">
              <img :src="main.datas[9].content_images[1][0].image" alt="...">
            </a>
            <a :href="main.datas[9].content_images[1][1].target.param">
              <img :src="main.datas[9].content_images[1][1].image" alt="...">
            </a>
          </div>
        </div>
        <split />

        <div class="videoWrap">
          <div class="top">
            <img :src="main.datas[11].value.left.img.image" alt="">
            <a href="##">
              <img :src="main.datas[11].value.right.img.image" alt="">
            </a>
          </div>
          <div class="middle">
            <a :href="main.datas[12].value[0].link">
              <img :src="main.datas[12].value[0].cover.image" alt="...">
            </a>
          </div>
          <div class="bottom">
            <div class="text1">{{main.datas[12].value[0].title}}</div>
            <div class="text1 text2">
              <span>
                <img :src="main.datas[12].value[0].visit_img.image" alt="">
                {{main.datas[12].value[0].visit}}
              </span>
              <span>|</span>
              <span>{{main.datas[12].value[0].time}}</span>
            </div>
          </div>
        </div>
        <split />

        <div class="footTitle">
          <img :src="main.datas[46].content_images[0][0].image" alt="">
        </div>

        <div class="aboutOur">
          <div class="about">
            <a class="active" href="##">触屏版</a>
            <a href="https://wap.epet.com/app.html">手机客户端</a>
            <a href="https://wap.epet.com/AboutEpet.html">关于我们</a>
            <a href="https://wap.epet.com/faq.html">联系我们</a>
          </div>
          <div class="aboutMsg">&copy; wap.epet.com 版权：重庆易宠科技有限公司</div>
        </div>
      </div>
    </div>

</template> <!--html-->

<script>
    import {mapState} from 'vuex'
    import BScroll from 'better-scroll'

    export default{
        computed: {
          ...mapState(['main', 'mainOther'])

        },
        mounted(){
           this.$store.dispatch('requestMain', ()=>{
             this.$nextTick(()=>{
               new BScroll(this.$refs.mainWrap, {click: true})
               new BScroll('.picWrap', {click: true, scrollX: true})
             })
           })
           this.$store.dispatch('requestMainOther')

        }
    }
</script><!--js-->

<style lang="stylus" rel="stylesheet/stylus">
  .main
    width 100%
    position: absolute
    top: 143px
    bottom: 50px
    left: 0
    overflow hidden
    .content
      .imgWrap
        width 100%
        height: 160px
      .list
        width 100%
        overflow hidden
        li
          float left
          width 20%
          img
            width 100%
      .custom
        img
          width 100%
      .surpriseSeller
        .surprise_icon
          overflow hidden
          width 100%
          &>img
            width 100px
            height 25px
            float left
          .lastTime
            float left
            margin 7px 0 0 20px
            font-size 13px
          a
            img
              height 55px
              float right
        .picWrap
          .goods-list
            display flex
            overflow hidden
            width 220%
            li
              text-align center
              margin 0 10px 15px 10px
              img
                width 80px
              span
                margin-top 5px
                display block
                color #999
                font-size 12px

      .fastSeller
        img
          width 100%
      .useThing
        width 100%
        display flex
        .t0
          width 50%
          img
            width 100%
      .videoWrap
        width 100%
        .top
          overflow hidden
          &>img
            float left
            width 180px
            margin 0 0 0 15px
          a
            float right
            img
              width 70px
        .middle
          a
            img
              width 100%
        .bottom
          margin 10px 0
          .text1
            font-size 12px
            width 100%
            text-align center
            color #333
            margin 6px 0
          .text2
            color #999
            img
              width 10px

      .footTitle
        img
          width 100%
      .aboutOur
        .about
          text-align center
          a
            text-align center
            display inline-block
            width 70px
            color #333
            font-size 14px
          .active
            color red
        .aboutMsg
          font-size 12px
          padding 10px 0 20px 0
          text-align center

</style><!--css-->

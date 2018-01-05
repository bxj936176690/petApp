<template>
    <svg :class="className">
      <use :xlink:href="type"></use>
    </svg>
</template> <!--html-->

<script>
    export default{
        props: ['className', 'type']
    }
</script><!--js-->

<style lang="stylus" rel="stylesheet/stylus">

</style><!--css-->

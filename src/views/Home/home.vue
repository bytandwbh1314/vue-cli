<template>
    <div id="home">
        <router-view/>
    </div>
</template>
<script>
export default {
    name: 'Home',
    data () {
        return {
            msg: 'qwe'
        }
    },
    mounted () {
      window.sessionStorage.setItem('token', JSON.stringify('673471594f7043dd63ec94653968420f'))
      this.$store.dispatch('A:getSwipper/getSwipperList', {
        url: 'api/Goods/advertising',
        data: {
          positions: 1
        }
      }).then(
        res => {
          console.log(res)
        },
        rej => {
          console.log(rej)
        }
      )
    }
}
</script>
<style lang="scss" scoped>
#home {
    height: 100%;
    width: 100%;
    background: #ec4b3f;
}
</style>


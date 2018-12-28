<template>
    <div id="home">
        <Hello/>
        <router-view/>
    </div>
</template>
<script>
import { DOMAIN } from '@/utils/config'
export default {
    name: 'Home',
    data () {
        return {
            msg: 'qwe'
        }
    },
    mounted () {
        this.$axios.post(DOMAIN.origin + 'api/Goods/advertising', {
            token: '673471594f7043dd63ec94653968420f',
			positions: 1
        }).then(res => {
            console.log(res, 'res')
        }).catch(err => {

        })
        console.log(DOMAIN.origin)
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


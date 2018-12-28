<template>
    <div id="home">
        <Hello/>
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


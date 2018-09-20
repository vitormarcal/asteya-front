<template>
    <div id="app">
        <InclusaoMovimentacao/>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    import InclusaoMovimentacao from "./components/InclusaoMovimento";

    export default {
        name: 'app',
        components: {
            InclusaoMovimentacao,
            HelloWorld
        }
    }
</script>

<style lang="scss">
    @import "~@/stylesheets/var";

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>

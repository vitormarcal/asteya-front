<template>
    <div id="valoracaoMovimento">
        valoracao
        <a class="button" @click="decrease">VOLTAR</a>
        <a class="button" @click="increase">PRÓXIMO</a>
    </div>

</template>
<script>
    export default {
        name: 'ValoracaoMovimento',
        methods: {
            increase() {
                this.$emit('interface', 3)
            },
            decrease() {
                this.$emit('interface', 1)
            },
        }
    }

</script>

<style scoped>

</style>
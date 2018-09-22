<template>
    <div id="detalhamentoMovimento">
        detalhamento
        <a class="button" @click="decrease">VOLTAR</a>
        <a class="button" @click="save">PRÓXIMO</a>
    </div>

</template>
<script>
    export default {
        name: 'DetalhamentoMovimento',
        methods: {
            save() {
                this.$emit('interface', 4)
            },
            decrease() {
                this.$emit('interface', 2)
            },
        }
    }

</script>

<style scoped>

</style>
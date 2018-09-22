<template>
    <div id="valoracaoMovimento">
            <div>
                <p>O valor deste movimento é ...</p>
                <input id="descricao" type="text" placeholder="valor"/>
                <p>Então, este movimento irá se repetir outras vezes?</p>
                <input type="radio" id="sim" value="S"/>
                <label for="sim">SIM</label>
                <input type="radio" id="nao" value="N"/>
                <label for="nao">NÂO</label>
                <p>Quantas?</p>
                <input type="number" placeholder="quantidade de repetições/parcelas"/>
            </div>
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
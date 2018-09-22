<template>
    <div id="valoracaoMovimento">
            <div>
                <p>O valor deste movimento é ...</p>
                <input id="descricao" type="text" placeholder="valor" v-model="valoracao.valor"/>
                <p>Então, este movimento irá se repetir outras vezes?</p>
                <input type="radio" id="sim" value="S" v-model="repetivel"/>
                <label for="sim">SIM</label>
                <input type="radio" id="nao" value="N" v-model="repetivel"/>
                <label for="nao">NÂO</label>
                <div v-if="repetivel === 'S'">
                    <p>Quantas?</p>
                    <input type="number" v-model="valoracao.recorrencia" placeholder="quantidade de repetições/parcelas"/>
                </div>

            </div>
        <a class="button" @click="decrease">VOLTAR</a>
        <a class="button" @click="increase">PRÓXIMO</a>
    </div>

</template>
<script>
    export default {
        name: 'ValoracaoMovimento',
        data: () => ({
            repetivel: 'N',
            valoracao: {valor: 0, recorrencia: 1}
        }),
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
<template>
    <div id="informacaoMovimento">
        <div>
            <p>Opa, deverá entrar ou sair dinheiro de sua carteira?</p>
            <input type="radio" id="entrada" value="ATIVO" v-model="informacao.tipoMovimento"/>
            <label for="entrada">Entrar</label>
            <input type="radio" id="saida"  value="PASSIVO" v-model="informacao.tipoMovimento"/>
            <label for="saida">Sair</label>
        </div>

        <div>
            <div>
                <p>Uma forma fácil de me lembrar do que se trata este movinento é ...</p>
                <input id="descricao" type="text" v-model="informacao.descricao"/>
            </div>
        </div>
        <a class="button" @click="increase">AVANTE</a>
    </div>

</template>
<script>
    export default {
        name: 'InformacaoMovimento',
        data: () => ({
            informacao: {descricao : '', tipoMovimento: 'PASSIVO'}
        }),
        methods: {
            increase() {
                this.$emit('interface', 2);
                this.$emit('informacao', this.informacao);
            }
        }
    }

</script>

<style scoped>

</style>
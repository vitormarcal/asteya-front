<template>
    <div id="informacaoMovimento">
        <div>
            <p>Opa, deverá entrar ou sair dinheiro de sua carteira?</p>
            <input type="radio" id="entrada" value="Entrada"/>
            <label for="entrada">Entrar</label>
            <input type="radio" id="saida" value="Saída"/>
            <label for="saida">Sair</label>
        </div>

        <div>
            <div>
                <p>Uma forma fácil de me lembrar do que se trata este movinento é ...</p>
                <input id="descricao" type="text"/>
            </div>
        </div>
        <a class="button" @click="increase">AVANTE</a>
    </div>

</template>
<script>
    export default {
        name: 'InformacaoMovimento',
        methods: {
            increase() {
                this.$emit('interface', 2)
            }
        }
    }

</script>

<style scoped>

</style>
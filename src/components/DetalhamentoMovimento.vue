<template>
    <div id="detalhamentoMovimento">
        <div>
            <p>Opa, deverá entrar ou sair dinheiro de sua carteira?</p>
            <input type="radio" id="entrada" value="Entrada"/>
            <label for="entrada">Entrar</label>
            <input type="radio" id="saida" value="Saída"/>
            <label for="saida">Sair</label>
        </div>

        <div>
            <p>Humm, entendi! Está entrando dinheiro na carteira! :)</p>
            <p>Humm, entendi! Está saindo dinheiro na carteira! :(</p>
            <br/>
            <div>
                <p>Uma forma fácil de me lembrar do que se trata este movinento é ...</p>
                <input id="descricao" type="text"/>
            </div>
            <div>
                <p>O valor deste movimento é...</p>
                <input type="text" id="valor"/>
            </div>
            <div>
                <p>Esse movimento irá se repetir esta quantidade de vezes </p>
                <input id="recorrencia" value="1"/>
            </div>
            <div>
                <p>Um item diretamente associado a esta movimentação é </p>
                <input type="text"/>
            </div>
            <div>
                <p>O meio de pagamento preferido para esta movimentação é </p>
                <input type="text"/>
            </div>
        </div>
        <button type="button" >VOLTAR</button>
        <button type="button" >PRONTO!</button>
    </div>

</template>
<script>
    export default {
        name: 'DetalhamentoMovimento',
    }

</script>

<style scoped>

</style>
<template>
    <div id="detalhamentoMovimento">
        <p>O melhor meio de pagamento é ...</p>
        <input id="meio-pagamento" type="text" placeholder="valor" v-model="detalhameto.meioPagamento.descricao"/>
        <p>Essa é sua chance de detalhar algo relacionado ao movimento!</p>
        <input id="item" type="text" placeholder="item" v-model="detalhameto.item.descricao"/>
        <p>Você também pode adicionar algumas tags</p>
        <input id="tag" type="text" placeholder="tag" v-model="tag" @keyup.enter="addTag"/>

        <ul>
            <li v-for="(tag) in detalhameto.tags" :key="tag"> {{tag}}</li>
        </ul>

        <a class="button" @click="decrease">VOLTAR</a>
        <a class="button" @click="save">PRONTO</a>
    </div>

</template>
<script>
    export default {
        name: 'DetalhamentoMovimento',
        data: () => ({
            tag: '',
            detalhameto: {meioPagamento: {id: undefined, descricao: ''}, item: {id: undefined, descricao: ''}, tags: []}
        }),
        methods: {
            addTag() {
                if (this.tag && this.tag !== '') {
                    this.detalhameto.tags.push(this.tag);
                    this.tag = ''
                }
            },
            emit() {
                this.$emit('detalhameto', this.detalhameto);
            },
            save() {
                this.$emit('interface', 4);
                this.emit();
            },
            decrease() {
                this.$emit('interface', 2);
                this.emit();
            },
        }
    }

</script>

<style scoped>

</style>
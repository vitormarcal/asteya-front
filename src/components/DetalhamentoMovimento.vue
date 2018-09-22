<template>
    <div id="detalhamentoMovimento">
        <p>O melhor meio de pagamento é ...</p>
        <input id="meio-pagamento" type="text" placeholder="valor"/>
        <p>Essa é sua chance de detalhar algo relacionado ao movimento!</p>
        <input id="item" type="text" placeholder="item"/>
        <p>Você também pode adicionar algumas tags</p>
        <input id="tag" type="text" placeholder="tag" v-model="tag" @keyup.enter="addTag"/>

        <ul>
            <li v-for="(tag) in tags" :key="tag"> {{tag}}</li>
        </ul>

        <a class="button" @click="decrease">VOLTAR</a>
        <a class="button" @click="save">PRÓXIMO</a>
    </div>

</template>
<script>
    export default {
        name: 'DetalhamentoMovimento',
        data: () => ({
            tags: [],
            tag: '',
        }),
        methods: {
            addTag() {
                if (this.tag && this.tag !== '') {
                    this.tags.push(this.tag);
                    this.tag = ''
                }
            },
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